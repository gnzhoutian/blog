---
layout: post
title: Docker简明用法
categories: Linux
tags: Linux Docker 简明用法
version: 1.0.0
comments: true
mathjax: false
mtime: 
published: true
---

* content
{:toc}

本文主要介绍`Docker`环境搭建、容器管理和镜像制作的简明方法。



## 一、背景

如果需要快速新建一个标准环境来调试，`Docker`无疑是很好的选择。我的日常工作环境也是`Docker容器`。

但是`CentOS`提供的标准`Docker镜像`在**SSH连接**和**易用性**方面仍有些不足，需要进行一些个性化配置。

本文记录了Docker环境搭建、容器管理和镜像制作的简明方法，以便后来者借鉴。

## 二、Docker安装


### 1. 配置Yum仓库

- 在Yum仓库文件`/etc/yum.repos.d/CentOS-Base.repo`中配置`base`、`extra`和`docker`仓库。

```shell
[base]
name=Base
baseurl=https://mirrors.aliyun.com/centos/7/os/x86_64/
enabled=1

[extra]
name=extra
baseurl=https://mirrors.aliyun.com/centos/7/extras/x86_64/
enabled=1

[docker]
name=docker
baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/stable/
enabled=1
```

### 2. 安装Docker CE

```shell
yum install docker-ce
```

### 3. 配置Docker仓库源

```shell
# 配置docker中国镜像加速
mkdir -p /etc/docker
echo '{"registry-mirrors": ["https://l10nt4hq.mirror.aliyuncs.com"]}' >/etc/docker/daemon.json
```

### 4. 启动Docker

```shell
systemctl enable docker  # 配置docker开机自启服务
systemctl start docker   # 启动docker
systemctl status docker  # 查询docker服务状态
```

### 5. 基本信息查询

```shell
docker version  # 查询docker版本
docker info     # 查询docker配置信息
docker --help   # 使用--help查看帮助
```



## 三、镜像管理

### 1. 镜像查询

- **CMD端不能显示镜像的历史版本，可以通过WEB端查询，下载仍需通过CMD执行**

```shell
https://hub.docker.com/     # WEB - 官方仓库，英文，速度较慢
https://hub.daocloud.io/    # WEB - 国内仓库，中文

docker search centos        # CMD - 搜索含有指定关键字的镜像
docker search centos -s 10  # CMD - 搜索含有指定关键字镜像，且收藏数不低于10
```

### 2. 镜像下载

```shell
docker pull centos           # 下载centos最新的镜像
docker pull centos:7.3.1611  # 下载centos 7.3版本镜像
docker pull -a centos        # 下载centos全部镜像
```

### 3. Dockerfile编写

由于`Dockerfile`中每执行一条指令，都会生成一个新的`Layer`，导致最终镜像较大。因而，`Dockerfile`中除了必要信息指令外，**只执行`COPY`和`RUN`指令**，具体的镜像调整指令，全部封装在**`dockercfg.sh`**脚本中。这个做法和`docker commit`指令相比，好处主要有两点：

1. 执行过程可追溯，可以补充个人相关信息
2. 最后打包的镜像大小可以缩减40%左右

```shell
FROM centos:7.8.2003
MAINTAINER haha "haha@haha.com"

COPY dockercfg.sh /root/dockercfg.sh
RUN ["/bin/bash", "/root/dockercfg.sh"]

LABEL version="1.0"
LABEL location="China" type="Basic Server" role="Basic Server"
```

### 4. dockercfg.sh编写

- `dockercfg.sh`与`Dockerfile`放在同一目录下
- 以制作标准`CentOS 7`开发环境为例，其一般包括[Linux环境初始化-系统初始化]({{ "/2024/09/11/linux_init/#二系统初始化" | relative_url }})一节中内容
- **除基本内容外，仍有下述四点差异**

```shell
# 1. 默认镜像没有配置root密码，建议初始化一个
PASSWORD=rootpasswd
(echo "$PASSWORD"; sleep 1; echo "$PASSWORD") | passwd root &>/dev/null

# 2. 默认镜像没有SSH服务，需要独立安装
yum -y install openssh openssh-server openssh-clients

# 3. 制作过程中的中间产物需要删除，以减小镜像大小
mv -f /root/dockercfg.sh /root/.dockercfg.sh
mv -f /root/anaconda-ks.cfg /root/.anaconda-ks.cfg
mv -f /anaconda-post.log /.anaconda-post.log

yum clean all
rm -rf /opt/yum

echo >/root/.bash_history
rm -f /root/.history/*

# 4. docker环境时区跟随宿主环境，不能修改，因而时区部分调整可以忽略
```

### 5. 命名规则

- 主要存在三处地方需要命名，`仓库镜像`、`镜像文件`和`容器名称`
- 建议提前约定好命名规则，以免后续管理混乱。下述规则供参考：
- 仓库镜像
    - 官方镜像不用命名
    - 个人镜像以 **"组织名/基础镜像版本/镜像功能:版本号"** 方式命名
    - 版本号首次发布从`v1.0`开始，后续依次迭代
    - 示例：`haha组织基于centos7.6制作的标准开发镜像` -> `haha/centos7.6/basic:v1.0`
- 镜像文件
    - 导出的镜像文件将`仓库镜像`中的**`/`和`:`替换为`_`**，并添加后缀名`.tar.gz`
    - 示例：`haha/centos7.6/basic:v1.0` -> `haha_centos7.6_basic_v1.0.tar.gz`
- 容器名称
    - 自动创建的容器，以随机规则命名，无需处理
    - 手动创建的容器，以 **"用户身份标识_容器用途描述"**方式命名
    - 示例：`用户hehe的编译环境` -> `hehe_compile`

### 6. 镜像制作

- 下述方式可以保证**制作干净的`Docker`镜像**

```shell
image_tag="haha/centos7.6/basic:v1.0"
image_file=$(echo ${image_tag}.tar.gz | sed 's![/:]!_!g')

docker build --no-cache -t=${image_tag} ./   # 制作镜像
docker save ${image_tag} -o ${image_file}    # 保存为镜像文件
docker rmi -f ${image_tag}                   # 删除仓库中镜像
docker load -i ${image_file}                 # 重新导入镜像文件
```

### 7. 镜像查看

```shell
docker ps -a      # 查看容器状态
docker images -a  # 查看镜像状态
docker ps -as     # 查看所有容器所占空间大小
```

### 8. 镜像清理

- 如果镜像制作失败，下述方式可以进行**中间垃圾文件清理**

```shell
docker rm -f "68f4ba741667"             # 删除无效容器
docker rmi "haha/centos7.6/basic:v1.0"  # 删除无效镜像
docker image prune -f                   # 清理未被使用的且TAG为<none>的镜像
```

## 四、容器管理

### 1. 容器创建

```shell
# --privileged: 特权模式 --name: 容器名称 -p: 宿主/容器端口映射 /usr/sbin/init: 容器内启动指令
docker create --privileged --name="hehe_compile" -p 6001:22 -p 7010:80 "haha/centos7.6/basic:v1.0" /usr/sbin/init
```

### 2. 容器启停

```shell
docker start "hehe_compile"        # 启动启动
docker stop -t0 "hehe_compile"     # 立即停止 -t0: 0s内
docker restart -t0 "hehe_compile"  # 立即重启 -t0: 0s内
```

### 3. 进入容器

- **建议通过`SSH`进入容器，此处一般用于故障处理**

```shell
# --privileged: 特权模式 -it: 交互模式运行
docker exec --privileged -it "hehe_compile" /bin/bash
```

### 4. 容器内文件拷贝

```shell
docker cp -aL "./file.txt" "hehe_compile:/root/"  # 拷贝./file.txt文件至容器/root目录
docker cp -aL "hehe_compile:/root/file.txt" "./"  # 拷贝容器中/root/file.txt文件至./目录
```

### 5. 扩展指令

- `Docker`还提供大量指令，详情查阅`--help`，此处仅列出部分供参考。

```shell
docker top "name"              #查看指定容器进程
docker diff "name"             #查看容器和镜像之间文件变化

docker commit "name" "image"   #将容器创建为镜像
docker tag "image" "image"     #给镜像打TAG

docker save "image" -o "tar"   #保存镜像为TAR包
docker load -i "tar"           #加载镜像TAR包

docker export "name" -o "tar"  #导出容器为TAR包
docker import "tar" "image"    #导入容器TAR包为镜像

docker push "image"            #上传镜像
```

## 参考链接

- [博客 - Container is running in privileged mode](https://learn.snyk.io/lesson/container-runs-in-privileged-mode/)
- [博客 - 如何正确使用 docker run -i、 -t、-d 参数](https://jerrymei.cn/docker-run-interactive-tty-detach/)
