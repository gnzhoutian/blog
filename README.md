# About this Cool Concise Jekyll Blog Theme

[![GitHub stars](https://img.shields.io/github/stars/Gaohaoyang/gaohaoyang.github.io.svg)](https://github.com/Gaohaoyang/gaohaoyang.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Gaohaoyang/gaohaoyang.github.io.svg)](https://github.com/Gaohaoyang/gaohaoyang.github.io/network)
[![GitHub issues](https://img.shields.io/github/issues/Gaohaoyang/gaohaoyang.github.io.svg)](https://github.com/Gaohaoyang/gaohaoyang.github.io/issues)
[![GitHub release](https://img.shields.io/github/release/Gaohaoyang/gaohaoyang.github.io.svg)](https://github.com/Gaohaoyang/gaohaoyang.github.io/releases)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Gaohaoyang/gaohaoyang.github.io/master/LICENSE)



## Content

* [Preview](#preview)
* [Page Details](#page-details)
    * [Home](#home)
    * [Archives](#archives)
    * [Categories](#categories)
    * [Tags](#tags)
    * [Collections](#collections)
    * [Demo](#demo)
    * [About](#about)
    * [Comments](#comments)
    * [Post Contents](#post-contents)
    * [Code Highlight](#code-highlight)
    * [Light Shadow](#light-shadow)
    * [Mobile Adaptation](#mobile-adaptation)
    * [Footer](#footer)
    * [Statistical Analysis](#statistical-analysis)
* [Usage](#usage)
    * [1. Install ruby and jekyll environment](#1-install-ruby-and-jekyll-environment)
    * [2. Copy theme code](#2-copy-theme-code)
    * [3. Change parameter](#3-change-parameter)
        * [Basic info](#basic-info)
        * [Link info](#link-info)
        * [Comments info](#comments-info)
        * [Statistical analysis info](#statistical-analysis-info)
    * [4. Write post](#4-write-post)
    * [5. Local launch](#5-local-launch)
    * [6. Push to GitHub](#6-push-to-github)
* [Donate](#donate)
* [Update Log](#update-log)
* [License](#license)

## Preview

First of all, let's see previews.

Index Page
![index](http://ww3.sinaimg.cn/large/7011d6cfjw1f3bdli86awj211k0oyqen.jpg)

Post Page
![post](http://ww4.sinaimg.cn/large/7011d6cfjw1f3bdmzb9v6j210p0j7gwn.jpg)

```yml
# comments
# two ways to comment, only choose one, and use your own short name
duoshuo_shortname: #xxx
disqus_shortname: xxx
```

### Post Contents

The post contents is fixed at the right side while page is scrolling. There will be a scroll bar on contents while it is outside the window height.

### Code Highlight

While the jekyll is update to 3.x.x, you can use github flavored markdown to write code.

More info to see [syntax-highlighter-changed](https://jekyllrb.com/docs/upgrading/2-to-3/#syntax-highlighter-changed).

### Light Shadow

![light](http://ww3.sinaimg.cn/large/7011d6cfjw1f3be6y4vp3j209i02rweg.jpg)

You can see the white shadow on the current item in the navbar. I call this light shadow.

### Mobile Adaptation

Of course, I have done a very good mobile adaptation.

![mobile](http://ww4.sinaimg.cn/large/7011d6cfjw1f3bebnzxkpj20ah0fzgp4.jpg)

### Footer

**Welcome to use this blog theme, but please keep the theme author info at footer.** Theme designed by [HyG](https://github.com/gaohaoyang).

![footer](http://ww3.sinaimg.cn/large/7011d6cfjw1f3bepd8002j20hl02ct95.jpg)

### Statistical Analysis

This theme supports Google Analytics and Baidu Statistics， you can just config the id in the file `_config.yml`, as follows.

```yml
# statistic analysis 统计代码
# 百度统计 id，将统计代码替换为自己的百度统计id，即
# hm.src = "//hm.baidu.com/hm.js?xxxxxxxxxxxx";
# xxxxx字符串
baidu_tongji_id: xxxxxxxxxxxx
google_analytics_id: UA-xxxxxxxx # google 分析追踪id
```

## Usage

Welcome everyone to use this theme, this part shows introduction to use.

### 1. Install ruby and jekyll environment

This step and Step 5 mainly talk to you how to launch blog at local. If you don't want to launch at local, you can ignore these 2 steps. But I still strongly suggest to do this. Ensure there is nothing wrong before pushing to the github.

The Windows users can directly use [RubyInstaller](http://rubyinstaller.org/) to install ruby environment. Follow the prompts while installing.

Install jekyll commands:

```
gem install jekyll
```

For more details, you can view the jekyll official website. [https://jekyllrb.com/](https://jekyllrb.com/)

There may be something wrong at mac OS X El Capitan, you can see the solution at [https://jekyllrb.com/docs/troubleshooting/#jekyll-amp-mac-os-x-1011]( https://jekyllrb.com/docs/troubleshooting/#jekyll-amp-mac-os-x-1011).

If you are interesting in jekyll, you can see the jekyll source code at [https://github.com/jekyll/jekyll](https://github.com/jekyll/jekyll).

![jekyll logo](http://jekyllcn.com/img/logo-2x.png)

### 2. Copy theme code

You can clone, download or fork this repo.

### 3. Change parameter

Mainly change the parameters at file `_config.yml` and use your own `favicon.ico`.

#### Basic info

Shows at site header part.

```yml
# Site settings
title: HyG
brief-intro: Front-end Dev Engineer
baseurl: "" # the subpath of your site, e.g. /blog
url: "http://gaohaoyang.github.io" # the base hostname & protocol for your site
```

#### Link info

Mainly shows at the footer of the site.

```yml
# other links
twitter_username: gaohaoyang126
facebook_username: gaohaoyang.water
github_username:  Gaohaoyang
email: gaohaoyang126@126.com
weibo_username: 3115521wh
zhihu_username: gaohaoyang
linkedIn_username: gaohaoyang
dribbble_username:

description_footer: 本站记录我前端之旅的沿途风景！
```

#### Comments info

Get your own `short_name`:

Visit https://disqus.com/ or http://duoshuo.com/. And follow the prompts at the site.

```yml
# comments
# two ways to comment, only choose one, and use your own short name
duoshuo_shortname: #hygblog
disqus_shortname: xxxx
```

When you done, you can also see the comments info at disqus or duoshuo admin console.

#### Statistical analysis info

Get Google Analytics id or Baidu Statistics id：

Visit https://www.google.com/analytics/ or http://tongji.baidu.com/. And follow the prompts at the site.

Of course, if you don't want any statistical and analysis info, you can type nothing at id position.

```yml
# statistic analysis 统计代码
# 百度统计 id，将统计代码替换为自己的百度统计id，即
# hm.src = "//hm.baidu.com/hm.js?xxxxxxxxxxxx";
# xxxxx字符串
baidu_tongji_id: cf850xxxxxxxxxxxxxxxx
google_analytics_id: UA-7xxxxxx-4 # google 分析追踪id
```

When you done, you can see UV, PV, location etc. info at your own Google Analytics or Baidu Statistic console.

### 4. Write post

You can write posts at folder `_posts`. At the beginning of the post, you should declare layout、title、date、categories、tags、author(optional) info、mathjax(optional，click [here](https://www.mathjax.org/) for more detail about `Mathjax`).

```
---
layout: post
title:  "对这个 jekyll 博客主题的改版和重构"
date:   2016-03-12 11:40:18 +0800
categories: jekyll
tags: jekyll 端口 markdown Foxit RubyGems HTML CSS
author: Haoyang Gao
mathjax: true
---
```

These follow code is for making contents.
```
* content
{:toc}
```

You can use 4 wraps as a excerpt separator. The words before separator as excerpt show in the index page. When you enter the post page, you can read full article.

The wraps config is in the file `_config.yml`, as follows:

```yml
# excerpt
excerpt_separator: "\n\n\n\n"
```

You should use markdown syntax to write article, just like write readme in github.

You can use 3 \`\`\` to write code block.

### 5. Local launch

use command:

```
jekyll s
```

Terminal shows:

```
Configuration file: E:/GitWorkSpace/blog/_config.yml
            Source: E:/GitWorkSpace/blog
       Destination: E:/GitWorkSpace/blog/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 6.33 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
 Auto-regeneration: enabled for 'E:/GitWorkSpace/blog'
Configuration file: E:/GitWorkSpace/blog/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

Visit localhost:4000 to see your blog!!!

### 6. Push to GitHub

If there is nothing wrong, push code to your github!

## Donate

You can also donate me for a coffee, and I'll do better. Thanks.

|                                                                     PayPal                                                                     |                                 Wechat Pay                                  |                                   Alipay                                    |
|:----------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|
| [![PayPal](https://www.paypalobjects.com/webstatic/paypalme/images/pp_logo_small.png)<br>Donate via PayPal ](https://www.paypal.me/gaohaoyang) | ![wechat](http://ww2.sinaimg.cn/large/7011d6cfjw1f3bkdw3bslj206z06q3z6.jpg) | ![alipay](http://ww2.sinaimg.cn/large/7011d6cfjw1f3bk8ikzoij20740743z5.jpg) |

## Update Log

### 2017.2.28

- `[^]` fix smoothScroll bug in Tencent webview like wechat and qq.  [#22](https://github.com/Gaohaoyang/gaohaoyang.github.io/issues/22), [#48](https://github.com/Gaohaoyang/gaohaoyang.github.io/issues/48)

### 2016.6.20

* `[+]` Add next post and previous post link in post page.
* `[^]` Change the sort of font-family to avoid full-width half-width characters mistake.
* `[^]` Fix bug in tags cloud when division by zero. [#26](https://github.com/Gaohaoyang/gaohaoyang.github.io/issues/26), [#28](https://github.com/Gaohaoyang/gaohaoyang.github.io/issues/28), [#30](https://github.com/Gaohaoyang/gaohaoyang.github.io/issues/30)

### 2016.5.11 v2.0.1

* `[^]` Optimized code, Extracting common code to `comments.html`
* `[+]` Add Google Analysis and Baidu Statistics
* `[+]` Update README, add usage
* `[+]` Add `favicon.ico`
* `[^]` Fix bug at contents
* `[^]` Change the content scroll bar CSS style（Only for `webkit` browser kernel）
* `[^]` Change tag a color at demo page
* `[+]` Add busuanzi counter, show the views count at footer
* `[+]` Add back to top button

### 2016.4.27 v2.0.0

* `[^]` Rewrite all codes based on jekyll 3.1.2
* `[+]` Add excerpt at index page
* `[+]` Add recently post, categories and tags cloud at index page
* `[+]` Add light shadow at navbar
* `[+]` Add archives, categories, tags page
* `[+]` Add collections page
* `[+]` Add comments plugin with disqus or duoshuo
* `[+]` Mobile Adaptation
* `[+]` Fix post contents to the right side while scrolling page
* `[+]` Fix footer at the bottom when page height is smaller than window height
* `[^]` Use github flavored markdown to write code block(Fenced code blocks)
* `[^]` Rewrite the demo page with Masonry
* `[-]` Remove jQuery and BootStrap

About my old blog theme, I won't maintain any more. And I put the code at  [Gaohaoyang/old-blog](https://github.com/Gaohaoyang/old-blog).

## License

[MIT License](https://github.com/Gaohaoyang/gaohaoyang.github.io/blob/master/LICENSE.md)




# Jekyll-Search


#### **jekyll博客搜索插件**

hexo博客搜索插件请前往 [Hexo-Search](https://github.com/androiddevelop/hexo-search)

### 截图

![jekyll-search.jpg](jekyll-search.jpg)

也可以打开[https://www.codeboy.me](https://www.codeboy.me)查看效果

### 操作

1. 点击右下角图标进行搜索
2. 双击ctrl键进行搜索或关闭
3. 搜索页面点击右上角关闭按钮关闭搜索试图

### 加入步骤

1. 将search目录放至于博客根目录下，其中search目录结构如下:

		search
		├── cb-footer-add.html
		├── cb-search.json
		├── css
		│   └── cb-search.css
		├── img
		│   ├── cb-close.png
		│   └── cb-search.png
		└── js
		    ├── bootstrap3-typeahead.min.js
		    └── cb-search.js


2. 在 `_include/footer.html` 中的 `</footer>` 后加入 `cb-footer-add.html` 中的内容即可。 


### 注意事项

1.需要事先引入 **jquery** 与 **bootstrap3(js与css文件)** 框架，如果没有的话，操作如下:

在`_include/head.html` 中引入以下代码:

```
<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css">
```
在`_include/footer.html` 中引入以下代码:

```
<!-- jQuery -->
<script src="//cdn.bootcss.com/jquery/2.2.2/jquery.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
```
**`bootstrap3-typeahead.min.js` 的引入必须在`jquery.min.js`引入之后，即在`footer.html`中的行数更靠后！**

2.默认联想8个，如果需要更多的话，请检索 `bootstrap3-typeahead.min.js` 中的 **items:8** , 将 **8** 替换成自己需要的数值。

3. 文章标题请不要使用回车等符号，回车等符号会造成json解析错误。

### 更新历史

#### v1.0.4

- 关闭chrome自动补全。

#### v1.0.3

- 支持标题中含有双引号。

#### v1.0.2

- 添加错误console输出。

#### v1.0.1

- 增加firefox支持。

#### v1.0.0

 - 支持jekyll中进行文章搜索。


## License

```
Copyright 2016 Yuedong.li

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

> 有任何问题,欢迎发送邮件到app@codeboy.me交流.















































<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
<a href="{{ post.url | absolute_url }}">{{ post.title }}</a>

# TODO:
  - css 样式文件整理
  - 搜索功能样式调整
  - 移动端样式调整
  - README 文章编写
  - 离线功能
  - head置顶
  - 鼠标点击特效

# Website
  - _config.xml
  - index.html
    - 首页文章概要
    - 分页展示
  - 
    


## 域名解析测试
	dig blog.tian.cf +nostats +nocomments +nocmd
	
	dig EXAMPLE.COM +noall +answer -t AAAA


## 工具箱
	https://codebeautify.org/

	https://gems.ruby-china.com/
	
	apt update 
	apt-get install ruby-full build-essential zlib1g-dev
	
	gem install jekyll bundler
	
	bundle  install -V --jobs 8
	
	gem sources -l
	gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
	gem sources --add https://rubygems.org/ --remove https://gems.ruby-china.com/
	gem install bundler jekyll
	
	bundle config mirror.https://rubygems.org https://gems.ruby-china.com
	bundle config mirror.https://gems.ruby-china.com https://rubygems.org 
	bundle config --global jobs 7
	
	bundle install jekyl1 

	gem install jekyl1 

	https://github.com/rouor/rouor.github.io

	bundle add webrick

	bundle  exec jekyll serve  -V 
	
	bundle  install -V --jobs 8
	
	bundle exec jekyll serve -VIP 4001
	
	bundle install && bundle exec jekyll serve -VIP 4000
	
	bundle install && bundle exec jekyll serve -VP 4000
	
## https http 访问网址
	chrome://net-internals/#hsts
	

## markdown 
	note tip warning danger
	
	
	
## blog choose
	# 搜索 
		# 主题搜索
		# 标签搜索
		全文搜索
	# 友链
	
	# 头部
		# 日期，标签，时长
		
	# 目录
		
	# 标签 / 分类 / 归档
	
	书单 
	# 最后编辑
	
	富强民主 文明和谐
	
	# 评论  Gitment和Github Issue  discus
	
	关于
	
	TODO
	
	# 本站总访问量 40884079次
	
	# 主题 夜间 / 白天
	
	# 文章宽度 自适应


discus
gnzhoutian
gnzhoutian@qq.com
5U.ayMi!4nYj^7a


---
layout: default
comments: true
# other options
---
{% if page.comments %}

{% endif %}


https://juejin.cn/post/6844903629934084109
	
  0. Tian Blog                    # https://blog.tian.cf           https://github.com/gnzhoutian/blog
  
  2. 码志                         # https://mazhuang.org/          https://github.com/mzlogin/mzlogin.github.io
  5. HyG    --底标                # https://gaohaoyang.github.io/  https://github.com/Gaohaoyang/gaohaoyang.github.io
  https://xiongyingqi.com/
  https://www.noyix.cn/wsl-drvfs-file-system-permissions-issue.html  -- 搜索框
  6. NexT   -- 全局搜索           # https://simpleyyt.com/         https://github.com/simpleyyt/jekyll-theme-next
  3. 小胖轩 --双击搜索            # https://www.codeboy.me/        https://github.com/androiddevelop/jekyll-search
  4. 潘柏信                       # https://leopardpan.github.io   https://github.com/leopardpan/leopardpan.github.io
  1. 黄玄的博客 | Hux Blog        # https://huangxuan.me/          https://github.com/Huxpro/huxpro.github.io
  
  0. 有哪些简洁明快的Jekyll模板？ # https://www.zhihu.com/question/20223939
  
	https://www.bootcss.com/p/font-awesome/


# jenkyll 用法
	gem install jekyll bundler
	jekyll new myblog
	bundle exec jekyll serve
	gem list jekyll
	jekyll serve -B # 后台运行
		-B # 后台运行
		-l # 变更后浏览器自动刷新
		-H # 指定主机
		-P # 指定端口
		-V # 详细日志
	bundle init
	bundle add jekyll
	bundle install 
	bundle update
	
	
	{% link _collection/name-of-document.md %}
	[Link to a document]({% link _collection/name-of-document.md %})
	{% link {{ page.my_variable }} %}
	{% post_url 2010-07-21-name-of-post %}
	{% post_url /subdir/2010-07-21-name-of-post %}
	[Name of Link]({% post_url 2010-07-21-name-of-post %})
	
	https://jekyllrb.com/docs/liquid/filters/  
	{{ site.members | where:"graduation_year","2014" }}
	
	{{ site.members | where_exp:"item", "item.graduation_year < 2014" }}

	{{ site.members | where_exp:"item", "item.projects contains 'foo'" }}
	
	{{ site.members | find: "graduation_year", "2014" }}
	{{ site.pages | sample: 2 }}
	
	{{ site.movies | where_exp: "item", "item.genre == 'horror' or item.language == 'English'" }}
.

# default.html: 
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>{{ page.title }}</title>
    </head>
    <body>
      {{ content }}
    </body>
  </html>
	
# _data/navigation.yml	
  - name: Home
    link: /
  - name: About
    link: /about.html
    
  <nav>
    {% for item in site.data.navigation %}
      <a href="{{ item.link }}" {% if page.url == item.link %}style="color: red;"{% endif %}>
        {{ item.name }}
      </a>
    {% endfor %}
  </nav>
  
  <nav>
    {% for item in site.data.navigation %}
      <a href="{{ item.link }}" {% if page.url == item.link %}class="current"{% endif %}>{{ item.name }}</a>
    {% endfor %}
  </nav>

# blog.html
---
layout: default
title: Blog
---
<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
			<a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>


## Gemfile
source 'https://rubygems.org'

gem 'jekyll'

group :jekyll_plugins do
  gem 'jekyll-sitemap'
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
end

## _config.yml
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _site
├── _data
|   ├── friends.yml
|   └── haha.yml
├── assets
│   ├── css
│   ├── images
│   └── js
├── _sass
├── .jekyll-metadata
└── index.html


---
layout: page
title: About
permalink: /about/
author: Tian
published: false
category:
categories:
tags:
---

# https://github.com/kramdown/parser-gfm
	gem "gemoji", "~> 3.0"


# https://jekyllrb.com/docs/variables/

{% include footer.html %}
{% include_relative somedir/footer.html %}


{% if page.my_variable %}
  {% include {{ page.my_variable }} %}
{% endif %}

# https://jekyllrb.com/docs/permalinks/

- {{ site.baseurl }}/{% post_url 2018-03-20-hello-world.markdown %}
+ {% post_url 2018-03-20-hello-world.markdown %}



                <!-- <li>
                    {% if page.url == '/' %}
                    <a class="active" href="{{ page.url | relative_url }}">
                        {% else %}
                    <a href="{{site.baseurl}}/">
                    {% endif %}
                        <i class="fa fa-home"></i>Home
                    </a>
                </li>

                {% for my_page in site.pages %}
                    {% if my_page.type == 'page' %}
                    <li>
                        {% if my_page.url == page.url %}
                        <a class="active" href="{{ my_page.url | prepend: site.baseurl }}">
                            {% else %}
                        <a href="{{ my_page.url | prepend: site.baseurl }}">
                        {% endif %}
                            <i class="fa fa-{{my_page.icon}}"></i>{{ my_page.title }}
                        </a>
                    </li>
                    {% endif %}
                {% endfor %}
                 -->


<script async src="https://cse.google.com/cse.js?cx=3cce9224fa3fde8ba"></script>
<div class="gcse-search"></div>

rm -rf .jekyll-cache/ .jekyll-metadata  _site/ && jekyll s -IV

  0. Tian Blog                    # https://blog.tian.cf           https://github.com/gnzhoutian/blog
  
  2. 码志                         # https://mazhuang.org/          https://github.com/mzlogin/mzlogin.github.io
  5. HyG    --底标                # https://gaohaoyang.github.io/  https://github.com/Gaohaoyang/gaohaoyang.github.io
  https://xiongyingqi.com/
  https://www.noyix.cn/wsl-drvfs-file-system-permissions-issue.html  -- 搜索框
  6. NexT   -- 全局搜索           # https://simpleyyt.com/         https://github.com/simpleyyt/jekyll-theme-next
  3. 小胖轩 --双击搜索            # https://www.codeboy.me/        https://github.com/androiddevelop/jekyll-search
  4. 潘柏信                       # https://leopardpan.github.io   https://github.com/leopardpan/leopardpan.github.io
  1. 黄玄的博客 | Hux Blog        # https://huangxuan.me/          https://github.com/Huxpro/huxpro.github.io
  
  0. 有哪些简洁明快的Jekyll模板？ # https://www.zhihu.com/question/20223939

<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
<a href="{{ post.url | absolute_url }}">{{ post.title }}</a>

# TODO:
  - css 样式文件整理
  - 搜索功能样式调整
  - 移动端样式调整
  - README 文章编写
  - 离线功能
  - head置顶
  - 鼠标点击特效

# Website
  - _config.xml
  - index.html
    - 首页文章概要
    - 分页展示
  - 
    
	- 
  
  
```yaml
_includes/
  - head.html                     # ok
    - _layouts/default.html
  
  - header.html                   # ok
    - _layouts/default.html
  
  - footer.html                   # no - search 
    - _layouts/default.html
  
  - left.html
  
  - right.html
  
  - comments.html                 # ok
    - _layouts/page.html
    - _layouts/post.html
    
  - categories.html               # ok
    - index.html
    - _layouts/post.html
    - page/0_archives.html
    - page/1_category.html
    - page/2_tags.html
  
_layouts/
  - default.html                # ok
    - index.html
    - _layouts/page.html
    - _layouts/post.html
    - page/0_archives.html
    - page/1_category.html
    - page/2_tags.html
  
  - page.html                   # ok
    - page/3_collections.md
    - page/4_todo.md
    - page/5_about.md
    
  - post.html                   # ok
    - _post/article.md

page/
  - 0_archives.html             # ok
  - 1_category.html             # ok
  - 2_tags.html                 # ok
  - 3_collections.md            # ok
  - 4_todo.md                   # ok
  - 5_about.md       # ok
  - db_search.html   # ok
  - feed.html        # ok

############################

_data/  # 
  - 
  
_plugins/     # 插件
  - myfilters.rb

_posts/       # 文章
  - 1999-01-01-moudle.md
  - 


_sass/
  - 
assets/       # 依赖
  - css
  - js
  - img
  - vendor/
    - bootstrap
    - busuanzi
    - fontawesome
    - jquery
    
index.html    # 首页
_config.yml   # 配置
favicon.ico   # 网站图标
CNAME         # 域名 Github用
LICENSE       # 证书
README.md     # 说明


# 生成物
_site/        
.jekyll-cache/
.jekyll-metadata

```

  

