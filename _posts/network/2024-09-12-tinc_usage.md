---
layout: post
title: tincVPN简明用法
categories: Network
tags: 网络 简明用法
version: 1.0.0
comments: true
mathjax: false
mtime: 
published: true
---

* content
{:toc}

本文主要介绍`tincVPN`简明用法，以便快速创建虚拟专用网络(`VPN`)。



## 一、背景

> 出门在外，随身携带的**笔记本电脑如何访问家里的台式电脑**，以获取其中一份重要的文件？

将**互联网**上不同地点、不同网络环境中的设备，通过隧道和加密技术创建**点对点专用网络**，这就是**`VPN`**做的事。

`tincVPN`是`P2P VPN`的一种实现方式，它具有开源(GNU)、加密压缩传输、低延迟、高带宽、可扩展等特点。

本文旨在帮助大家快速构建VPN网络，因而选中它的主要原因是：小众、小巧、安装简单、全平台适配。


## 二、网络拓扑

- 图中所有设备都已经**接入互联网**，其中云服务器提供的`公网IP`可以被`笔记本电脑`和`台式电脑`访问
- 云服务器建议选择`阿里云`、`腾讯云`等大型云服务提供商，**购买最小配置的服务器**即可
- **公网域名为可选配置**，如果没有申请和购买域名，填写IP地址即可
- `HahaVPN`为专用网络名称，网络中设备掩码地址为`255.255.255.0`
- 图中的公网IP和域名都非真实地址，实际组网中替换为真实地址即可

![tincVPN网络拓扑]({{ "/_assets/network/tinc_topology.png" | relative_url }})

## 三、安装
### 1. Windows

- 官网下载windows客户端后安装
- 打开`命令提示符(管理员)`，执行下述指令

```batch
cd /d "install_dir"     :: 进入安装目录
.\tap-win64\addtap.bat  :: 安装TAP-Win32网卡
```
### 2. Linux

```shell
yum install tinc # for redhat系
apt install tinc # for debian系
```

### 3. Mac

```shell
# 由于没有环境，未测试
brew install tinc --devel
brew cask install tuntap
```

## 四、配置

### 1. 目录结构

```shell
/etc/tinc/      # 此处为linux目录，windows为安装目录
└── HahaVPN/         # VPN网络名称, 网络内所有节点VPN名称需要一致
    ├── rsa_key.priv     # 节点私钥
    ├── tinc.conf        # 节点配置
    ├── tinc-up          # 节点启动脚本，Window平台不需要提供，配置TAP-Win32网卡即可
    ├── tinc-down        # 节点停止脚本，Window平台不需要提供，配置TAP-Win32网卡即可
    │
    └── hosts/           # 网络内节点配置
         ├── master_100     # 主节点，从master_100节点拷贝
         ├── slave_110      # 从节点1，从slave_110节点拷贝
         └── slave_120      # 从节点2，从slave_120节点拷贝
```

### 2. 启动脚本tinc-up

```shell
# IP地址不同节点按实际填写
CMD> cat tinc-up
#!/bin/bash
ifconfig $INTERFACE 192.168.10.xxx netmask 255.255.255.0

CMD> chmod 755 tinc-up
```


### 3. 停止脚本tinc-down

```shell
CMD> cat tinc-down
#!/bin/bash
ifconfig $INTERFACE down

CMD> chmod 755 tinc-down
```

### 4. 虚拟网卡TAP-Win32

- Window平台不需要提供`tinc-up`和`tinc-down`启停脚本，而要配置虚拟网卡`TAP-Win32`
- `控制面板`中打开`更改适配器设置`界面，设置网卡名称为`HahaVPN`
- 如果网卡名称与虚拟网络名称不一致，需要额外在`tinc.conf`中指定`Interface = xxxxx`配置
- 按需配置网卡地址: 192.168.10.xxx 掩码: 255.255.255.0

### 5. 主节点配置

```shell
# 指定节点名称
CMD> cat tinc.conf
Name = master_100

# 指定主节点公网地址和当前节点地址
CMD> cat hosts/master_100
Address=vpn.haha.com  # 或: 68.178.204.6  # 主节点独有
Subnet=192.168.10.100/32

# 生成密钥，会生成私钥文件，并在tinc.conf中指定私钥文件、在host/master_100中更新公钥
CMD> tincd -n HahaVPN -K4096

# 重要：需要将 主节点中 hosts/master_100 拷贝至 所有从节点 hosts 目录
```

### 6. 从节点配置

```shell
# 指定节点名称
CMD> cat tinc.conf
Name = slave_110
ConnectTo = master_100

# 指定主节点地址和当前节点地址
CMD> cat hosts/slave_110
Subnet=192.168.10.120/32

# 生成密钥，会生成私钥文件，并在tinc.conf中指定私钥文件、在host/slave_110中更新公钥
CMD> tincd -n HahaVPN -K4096   # for linux
CMD> .\tincd.exe -n HahaVPN -K4096  # for windows, 打开管理员cmd, 进入安装目录后(cd /d dir), 执行

# 重要：需要将 从节点中 hosts/slave_110 拷贝至 主节点 hosts 目录
```

## 五、启停管理

- **一般先启动主节点，再启动从节点**
- **由于tinc可以管理多个虚拟网络，因而`主服务启动`和`虚拟网络启动`是分开执行的**

### 1. Linux

```shell

## 启动
systemctl start tinc          # 启动主服务
systemctl start tinc@HahaVPN  # 启动指定虚拟网络
## 停止
systemctl stop tinc
systemctl stop tinc@HahaVPN
## 开机自启
systemctl enable tinc
systemctl enable tinc@HahaVPN
```

### 2. Windows

```batch
:: 打开管理员cmd, 使用绝对路径执行
:: 启动 (自动部署为服务)
CMD> "%install dir%\tincd.exe" -n HahaVPN

:: 停止
CMD> "%install dir%\tincd.exe" -n HahaVPN -k

:: 开机自启
1. 打开windows中服务管理, 找到 "tinc.HahaVPN"
2. 调整"常规 -> 启动类型 -> 自动" 
3. 调整"恢复 -> 第x次失败 -> 重新启动服务", "恢复 -> 在此时间后重新启动服务 -> 5分钟"
4. 应用
```

### 3. 连通测试

```shell
# 三台设备互ping，ping通即可
ping 192.168.10.100
ping 192.168.10.110
ping 192.168.10.120
```

## 参考链接

- [官网 - tincVPN](https://www.tinc-vpn.org/)
- [官网 - Example: installing tinc on Windows 2000/XP/7/8](https://www.tinc-vpn.org/examples/windows-install/)
- [博客 - tincVPN实操指南](https://chanix.github.io/TincCookbook/)
- [博客 - CentOS部署tinc组建大内网](https://www.gyuryong.com/index.php/archives/20/)
