# 关于我的博客

  [![GitHub stars](https://img.shields.io/github/stars/gnzhoutian/blog.svg)](https://github.com/gnzhoutian/blog/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/gnzhoutian/blog.svg)](https://github.com/gnzhoutian/blog/network)
  [![GitHub issues](https://img.shields.io/github/issues/gnzhoutian/blog.svg)](https://github.com/gnzhoutian/blog/issues)
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/gnzhoutian/blog/main/LICENSE)

## 1. 概述

  博客主题基于[`HyG Blog`](https://github.com/Gaohaoyang/gaohaoyang.github.io)设计修改，本仓库欢迎`clone` `download` 或 `fork`



## 2. 技术栈

  `Jekyll` `Liquid` `Markdown` `Yaml` `html` `js` `css`



## 3. 特性
  `最近提交` `文章摘要` `分类` `标签`

  `搜索` `快捷搜索(双击Ctrl)`

  `代码高亮` `jemoji` `mathjax`

  `移动端适配` `离线运行` `订阅支持`

  `Disqus评论` `百度统计` `Google分析` `阅读量统计`



## 4. 依赖

  - [`github-pages v226`](https://github.com/github/pages-gem/releases/tag/v226)
  - [`jekyll v3.9.2`](https://jekyllrb.com/docs/)



## 5. 代办

  - N/A



## 6. 使用说明

### 1. 环境初始化
```shell
# 1. 安装 ruby for ubuntu
    apt update
    apt-get install ruby-full build-essential zlib1g-dev

# 2. RubyGems 切换国内镜像
    ## 详见 https://gems.ruby-china.com/
    gem sources -l
    gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
    gem sources --add https://rubygems.org/ --remove https://gems.ruby-china.com/

# 3. 安装 bundler
    gem install bundler

# 4. bundler 切换国内镜像
    bundle config mirror.https://rubygems.org https://gems.ruby-china.com
    bundle config --global jobs 7

# 5. 初始化工程依赖
    bundle add webrick
    bundle install -V

# 6. 启动站点
    # IP/PORT 自定义, 访问： http://10.20.88.120:4000
    bundle exec jekyll s -VH 10.20.88.120 -P 4000

```

### 2. 框架配置
```shell
# 所有的可配置项在 `_config.yml` 中调整
```

### 3. 新增文章
```shell
# `_posts` 路径中新增文章, 文章模版为 `_posts/1999-01-01-moudle.md`
```

### 4. 主要文件说明
```shell
# 仓库主要文件用途说明如下:
.
├── .git
├── .vscode
├── .gitignore
├── LICENSE
│
├── assets                    # 框架-资源
│   ├── [css/img/js]          # 框架-私有资源
│   └── vendor                # 框架-第三方资源
├── _sass                     # 框架-样式
├── _includes                 # 框架-公共模版
├── _layouts                  # 框架-页面模版
├── page                      # 框架-页面
├── index.html                # 框架-首页
├── Gemfile                   # 框架-依赖
├── CNAME                     # 框架-域名 Github用
├── _config.yml               # 框架-配置
│
├── _data                     # 数据-通用数据
│   └── links.yml             # 数据-友链
├── _posts                    # 数据-文章
│   └── 1999-01-01-moudle.md  # 数据-文章模版
│
├── README.md                 # 说明
└── run.sh                    # 运行-本地调试
```

### 5. Liquid 常用语法说明

```shell
# Liquid 常用语法说明

## 变量
  {% assign t_variable = page.my_variable %}  # 声明
  {{ page.my_variable }}                      # 调用

## 表达式
  {% include {{ page.my_variable }} %}

## 管道符
  {{ post.url | relative_url }}

## 条件
  {% if remain==0 or remain==1 %}
  {% if remain==0 and remain!=1 %}
  {% for post in site.posts limit: site.recent_posts_limit %}
  {% unless forloop.last %}&nbsp;{% endunless %}

## 判断
  {% if page.my_variable %}
    {% include {{ page.my_variable }} %}
  {% else %}
    {% include {{ page }} %}
  {% endif %}

## 循环
  {% for item in page.my_variable %}
    {% include {{ item }} %}
  {% endfor %}

## 选择器
  # 详见: [Liquid选择器帮助文档](https://jekyllrb.com/docs/liquid/filters/)
  {{content}}
  {{ category | first }}
  {{ category | last | size }}
  {{ page.next.url | relative_url }}
  {{ page.previous.url | relative_url }}
  {{ post.mtime | date_to_string | date: "%F" }}
  {{ post.url | append: paginator.total_pages | relative_url }}
  {{ t_data | strip_html | strip_newlines | remove: " " | size | divided_by: 350 | plus: 1 }}
  {{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}
  {{ post.excerpt | remove: '<p>' | remove: '</p>' | remove_first: '_' | split: ' ' | sort_natural | xml_escape }}

```



## 7. 致谢

| 序号 | 站点                                                        | 描述                 |
| :--- | :----------------------------------------------------------- | :--------------------- |
| 1    | [HyG Blog](https://github.com/Gaohaoyang/gaohaoyang.github.io) | 一个古典的Jekyll主题  |
| 2    | [Hexo Search](https://github.com/androiddevelop/hexo-search) | 一个静态博客搜索插件 |



## 8. 参考链接
| 序号 | 站点                                                         | 描述                   |
| :--- | :----------------------------------------------------------- | :--------------------- |
| 1    | [Font Awesome](https://www.bootcss.com/p/font-awesome/)      | 相对通用的字体         |
| 2    | [Liquid](https://jekyllrb.com/docs/liquid/filters/)          | Liquid选择器帮助文档   |
| 3    | [Jekyll](https://jekyllrb.com/docs/)                         | Jekyll官方帮助文档    |
| 4    | [Code Beautify](https://codebeautify.org/)                   | 前端工具箱            |

