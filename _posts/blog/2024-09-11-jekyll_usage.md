---
layout: post
title: Jekyll简明用法
categories: 博客搭建
tags: Jekyll 简明用法
version: 1.0.0
comments: true
mathjax: false
mtime: 
published: true
---

* content
{:toc}

本文主要介绍典型的`Jekyll`搭建方法，方便快速构建本地`GitHub Pages`环境。



## 一、背景

本着稳定、可靠、简便的原则，选用`GitHub Pages` + `Jekyll`搭建自己的博客，这套系统的代码、文章、环境全部由`GitHub`管理，不需要自己的服务器、甚至不需要域名。

不足之处有两点：
1. 博客完全开源，但是一般的博客又能有多少访问量呢:joy:。
2. 博客搭建比较复杂，主题选用、样式调整、框架配置都比较繁琐，所幸这是一次性的工作。

由于`Jekyll`需要`Ruby3.0+`版本，而`CentOS 7`默认为`Ruby2.0.0`版本，环境搭建相对复杂，本文主要介绍如何快速构建本地`GitHub Pages`调试环境。至于博客的具体配置，建议直接查看[本博客源码](https://github.com/gnzhoutian/gnzhoutian.github.io)。

## 二、安装Ruby3


### 1. 配置Yum仓库

- 在Yum仓库文件`/etc/yum.repos.d/CentOS-Base.repo`中新增`rh`和`solo`仓库。
- 一般还建议配置`base`、`epel`、`extra`仓库，写法相同，仅附上仓库镜像地址。

```shell
# base: https://mirrors.aliyun.com/centos/7/os/x86_64/
# epel: https://mirrors.aliyun.com/epel/7/x86_64/
# extra: https://mirrors.aliyun.com/centos/7/extras/x86_64/

[rh]
name=rh
baseurl=https://mirrors.aliyun.com/centos/7/sclo/x86_64/rh/
enabled=1

[sclo]
name=sclo
baseurl=https://mirrors.aliyun.com/centos/7/sclo/x86_64/sclo/
enabled=1
```

### 2. 安装

```shell
# For CentOS7
yum install rh-ruby30 rh-ruby30-ruby-devel gcc gcc-c++ make 
# For Ubuntu 20.04.4 LTS，此处指令仅供参考，本文以CentOS7为准
apt update; apt-get install ruby-full build-essential zlib1g-dev
```

### 3. 使全局生效

系统环境配置文件`/etc/profile.d/private.sh`中新增`rh-ruby30`启动指令

```shell
source scl_source enable rh-ruby30
source /opt/rh/rh-ruby30/enable
```

## 三、Ruby3配置

### 1. 配置镜像源

- `Ruby3`默认使用`gem`管理插件包，除此之外，还默认安装`bundle`包管理器，推荐使用`bundle`管理插件。
- 国内镜像源建议使用**腾讯镜像源**，原因详见: [Ruby 镜像站速度哪家强？](https://ruby-china.org/topics/43331)

```shell
# gem镜像源查看
gem sources -l
# gem镜像源配置
gem sources --add http://mirrors.tencent.com/rubygems/ --remove https://rubygems.org/

# bundle镜像源查看
bundle config list
# bundle镜像源配置
bundle config set --global mirror.https://rubygems.org http://mirrors.tencent.com/rubygems/
```

### 2. 安装依赖包

- 根据GitHub官方提供的[pages-gem](https://github.com/github/pages-gem)管理依赖

```shell
# 新增Gemfile，文件内容如下:
gem 'github-pages', group: :jekyll_plugins

# 安装依赖包
bundle install -V
```

### 3. bundle指令说明

```shell
bundle add xxx      # 安装，并添加xxx至Gemfile
bundle install xxx  # 安装
bundle remove xxx   # 卸载

gem list --remote   # 列出远程插件包
bundle list         # 列出本地插件包，同: gem list
bundle info  xxx    # 查看xxx包信息

bundle help         # 帮助信息
bundle config xxx   # 工具配置

bundle exec xxx     # 执行插件
```

## 四、Jekyll配置

### 1. 创建工程

- 此处仅为示例，一般会按需选用第三方主题

```shell
jekyll new myblog  # 创建Blog
bundle install -V  # 安装依赖

# 启动服务，IP/PORT自定义, 访问: http://localhost:4001
bundle exec jekyll serve -VH 0.0.0.0 -P 4001
```

### 2. 框架说明

1. 所有可配置项按需在 `_config.yml` 中调整
2. 在 `_posts` 路径中新增文章，建议基于模版  `_posts/1999-01-01-template.md` 仿写
3. `_posts` 路径可以按需创建文件夹，但文件命名需要遵循 `YYYY-MM-DD-title.EXT` 格式
4. `_posts` 详细使用说明详见 [Jekyll官方文档](https://jekyllrb.com/docs/posts/)

### 3. 主题调整

- `kramdown`渲染引擎使用`rouge`实现代码块**语法高亮**，支持导出样式
- 导出的样式一般仅用作参考，需要自己按需调整，部分指令如下

```shell
# 查看现有样式
rougify help style
# 导出指定样式，如: github/base16.monokai/monokai.sublime
rougify style github >_github.scss
```

### 4. 目录说明

- 以本博客目录结构说明

```shell
.
├── .git
├── .vscode
├── .gitignore
├── LICENSE
│
├── assets                       # 框架 - 资源
│   ├── [css/img/js]             # 框架 - 私有资源
│   └── vendor                   # 框架 - 第三方资源
├── _sass                        # 框架 - 样式
├── _includes                    # 框架 - 公共模版
├── _layouts                     # 框架 - 页面模版
├── page                         # 框架 - 页面
├── index.html                   # 框架 - 首页
├── Gemfile                      # 框架 - 依赖
├── CNAME                        # 框架 - 域名 Github自定义域名用
├── _config.yml                  # 框架 - 框架配置
│
├── _data                        # 数据 - 格式化数据，通过site.data访问，仅支持YAML/JSON/CSV/TSV
│   ├── friends.yml              # 数据 - 友链
│   └── links.yml                # 数据 - 收藏链接
├── _assets                      # 数据 - 文章附件，引用方式: {{ /_assets/xxx | relative_url }}
├── _drafts                      # 数据 - 草稿，不发布
├── _posts                       # 数据 - 文章
│   └── 1999-01-01-template.md   # 数据 - 文章模版
│
├── README.md                    # 说明
└── run.sh                       # 运行 - 本地调试
```

## 参考链接

- [官网 - Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)
- [官网 - Jekyll帮助文档](https://jekyllrb.com/docs/)
- [官网 - Bundler帮助文档](https://bundler.io/v2.2/man/bundle-config.1.html)
- [官网 - GitHub Pages Dependency versions](https://pages.github.com/versions/)
- [官网 - GitHub pages-gem](https://github.com/github/pages-gem)
- [博客 - Ruby 镜像站速度哪家强？](https://ruby-china.org/topics/43331)
- [GitHub - Tian's Blog](https://github.com/gnzhoutian/gnzhoutian.github.io)
