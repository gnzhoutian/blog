---
layout: post
title: Liquid简明用法
categories: 博客搭建
tags: Jekyll Liquid 简明用法
version: 1.0.0
comments: true
mathjax: false
mtime: 
published: true
---

* content
{:toc}

本文主要介绍典型的`Jekyll`变量和`Liquid`语法，便于博客调整时快速查阅。



## 一、背景

由于`Jekyll`博客平台构建时需要通过`Liquid`将模块转化为HTML页面。因此，为了方便后续查阅使用，本文整理了有关`Jekyll`的常用变量和`Liquid`的基本语法。

## 二、Liquid语法

### 1. 符号

- **输出变量**：{% raw %}`{{ variable }}`{% endraw %}
- **表达式**：{% raw %}`{% if statement %}`{% endraw %}
- **左侧空白字符去除**：{% raw %}`{{-`, `{%-`{% endraw %}
- **右侧空白字符去除**：{% raw %}`-}}`, `-%}`{% endraw %}

### 2. 标签

- **`if`**：条件判断
- **`for`**：循环
- **`include`**：包含另一个模版文件，默认查找`_include`文件夹
- **`assign`**：文本赋值给变量
- **`capture`**：标记文本赋值给变量
- **`unless`**：条件判断-除非
- **`case`**：选择语句，`case...when`语法
- **`raw`**：临时停用标签处理

### 3. 表达式

| 描述  | 语法 |
| :---: | :--- |
| **变量打印** | {% raw %}`{{ page.my_var }}`{% endraw %} |
| 变量声明 | {% raw %}`{% assign t_var = page.my_var %}`{% endraw %} |
| **管道符** | {% raw %}`{{ post.url | relative_url }}`{% endraw %} |
| 包含模版 | {% raw %}`{% include footer.html %}`{% endraw %} |
| **自定义变量文本** | {% raw %}`{% capture readtime %}`{% endraw %} |
| 条件 | {% raw %}`{% if user %}`<br>&emsp;Hello<br>`{% else %}`<br>&emsp;Nobody<br>`{% endif %}`{% endraw %} |
| **循环** | {% raw %}`{% for item in array %}`<br>&emsp;`{{ item }}`<br>`{% endfor %}`{% endraw %}
| 运算符 | `==`、`!=`、`>`、`<`、`>=`、`<=`、`and`、`or` |
| **条件与** | {% raw %}`{% if remain==0 and remain!=1 %}`{% endraw %} |
| 条件或 | {% raw %}`{% if remain==0 or remain==1 %}`{% endraw %} |
| **循环条件-从第2个，获取2个** | {% raw %}`{% for item in array limit:2 offset:2 %}`{% endraw %} |
| 循环条件-除非最后一个 | {% raw %}`{% unless forloop.last %},{% endunless %}`{% endraw %} |
| 循环条件-其它可用变量 | 循环长度`forloop.length`、迭代索引`forloop.index`、<br>剩余迭代次数`forloop.rindex`、是否首次迭代`forloop.first` |

### 4. Liquid过滤器

- Liquid官方提供通用的过滤器，详见[Liquid官方文档](https://shopify.github.io/liquid/basics/introduction/)。

| 关键字 | 描述  | 语法和输出 |
| :----: |:---: | :--- |
| plus | 数字相加 | {% raw %}`{{ 183.357 | plus: 12 }}`{% endraw %} |
| minus | 数字相减 | {% raw %}`{{ 183.357 | minus: 12 }}`{% endraw %} |
| times | 数字相乘 | {% raw %}`{{ 183.357 | times: 12 }}`{% endraw %} |
| **divided_by** | **数字相除** | {% raw %}`{{ 5 | divided_by: 3 }}`、`{{ 5 | divided_by: 3.0 }}`{% endraw %} |
| modulo | 数字取余 | {% raw %}`{{ 183.357 | modulo: 12 }}`{% endraw %} |
| downcase | 字符串小写 | {% raw %}`{{ "Parker Moore" | downcase }}`{% endraw %} |
| upcase | 字符串大写 | {% raw %}`{{ "Parker Moore" | upcase }}`{% endraw %} |
| prepend | 字符串前缀 | {% raw %}`{{ 'bar' | prepend:'foo' }}`{% endraw %} |
| **append** | **字符串追加** | {% raw %}`{{ "/my/fancy/url" | append: ".html" }}`{% endraw %} |
| **remove** | **删除关键字** | {% raw %}`{{ "the train through the rain" | remove: "rain" }}`{% endraw %} |
| remove_first | 删除第一个 | {% raw %}`{{ "the train through the rain" | remove_first: "rain" }}`{% endraw %} |
| truncate | 字符串截断至最大长度 | {% raw %}**>** `{{ "Ground control to Major Tom." | truncate: 20 }}`<br>**>** `Ground control to...`{% endraw %} |
| **split** | **字符串拆分** | {% raw %}`{% assign my_array = "ants,bugs,bees,bugs,ants" | split: "," %}`{% endraw %} |
| **join** | **列表拼接** | {% raw %}`{{ my_array | join: ", " }}`{% endraw %} |
| **uniq** | **列表去重** | {% raw %}`{{ my_array | uniq }}`{% endraw %} |
| sort | 列表排序-区分大小写 | {% raw %}`{{ my_array | sort }}`{% endraw %} |
| **sort_natural** | **列表排序-不区分大小写** | {% raw %}`{{ my_array | sort_natural }}`{% endraw %} |
| first | 列表第一个 | {% raw %}`{{ my_array.first }}`{% endraw %} |
| last | 列表最后一个 | {% raw %}`{{ my_array.last }}`{% endraw %} |
| **size** | **计算字符/数组大小** | {% raw %}`{{ "Major Tom." | size }}`、`{{ my_array | size }}`{% endraw %} |
| **date** | **时间格式化** | {% raw %}`{{ "now" | date: "%Y-%m-%d %H:%M" }}`{% endraw %} |
| strip_html | 删除HTML标签 | {% raw %}`{{ "read <strong>Ulysses</strong>?" | strip_html }}`{% endraw %} |
| strip_newlines | 删除换行符 | {% raw %}`{{ string_with_newlines | strip_newlines }}`{% endraw %} |
| newline_to_br | 替换换行符为br | {% raw %}`{{ string_with_newlines | newline_to_br }}`{% endraw %} |
| **escape** | **URL编码** | {% raw %}`{{ "Tetsuro&Takara" | escape }}`{% endraw %} |
| escape_once | URL编码-不重复编码 | {% raw %}`{{ "1 &lt; 2 &amp; 3" | escape_once }}`{% endraw %} |


### 5. Jekyll扩展过滤器

- 除了Liquid默认过滤器，Jekyll还提供一些易于使用的过滤器，详见[Jekyll官方文档-过滤器](https://jekyllrb.com/docs/liquid/filters/)。

| 关键字 | 描述  | 语法和输出 |
| :----: |:---: | :--- |
| **relative_url** | **URL相对路径** | {% raw %}**>** `{{ "/assets/style.css" | relative_url }}`{% endraw %}<br>**>** `/my-baseurl/assets/style.css` |
| **absolute_url** | **URL绝对路径** | {% raw %}**>** `{{ "/assets/style.css" | absolute_url }}`{% endraw %}<br>**>** `http://example.com/my-baseurl/assets/style.css` |
| date_to_rfc822 | 转化为RFC-822格式日期 | {% raw %}**>** `{{ site.time | date_to_rfc822 }}`<br>**>** `Mon, 07 Nov 2008 13:07:54 -0800`{% endraw %} |
| date_to_string | 转化为短格式日期 | {% raw %}**>** `{{ site.time | date_to_string }}`<br>**>** `07 Nov 2008`{% endraw %} |
| **xml_escape** | **转义为XML格式文本** | {% raw %}`{{ page.content | xml_escape }}`{% endraw %} |
| **uri_escape** | **转义为URL格式文本-空格** | {% raw %}**>** `{{ "http://foo.com/?q=foo, \bar?" | uri_escape }}`<br>**>** `http://foo.com/?q=foo,%20%5Cbar?`{% endraw %} |
| sample | 随机选取样本 | {% raw %}`{{ site.pages | sample }}`、`{{ site.pages | sample: 2 }}`{% endraw %} |


## 三、Jekyll变量

- 粗体部分为常用变量，其它变量详见：[Jekyll官方文档-变量](https://jekyllrb.com/docs/variables/)。

| 类别  | 名称 | 说明 |
| :---: | :--- | :--- |
| 全局 | site | 站点信息和`_config.yml`中变量 |
| 全局 | page | 页面特定信息和文件头中变量 |
| 全局 | layout | 布局特定信息和文件头中变量 |
| 全局 | **content** | **布局中被封装的具体页面内容** |
| 全局 | paginator | 分页器插件的相关变量 |
| 站点 | site.time | 当前时间 |
| 站点 | site.pages | 所有页面的列表 |
| 站点 | **site.posts** | **所有帖子的列表-时间倒序** |
| 站点 | **site.data** | **_data文件夹中的数据信息，支持YAML/JSON/CSV/TSV** |
| 站点 | **site.categories** | **帖子的所有类别** |
| 站点 | site.categories.CATEGORY | CATEGORY类别中的所有帖子 |
| 站点 | **site.tags** | **帖子的所有标签** |
| 站点 | site.tags.TAG | 含有TAG标签的所有帖子 |
| 站点 | **site.CONFIG_KEY** | **`_config.yml`中的所有变量** |
| 页面 | **page.CONFIG_KEY** | **页面文件头中的变量** |
| 页面 | page.content | 渲染后的页面内容 |
| 页面 | page.excerpt | 页面未渲染的摘要 |
| 页面 | **page.url** | **页面的URL，以`/`开头，不带域名** |
| 页面 | page.date | 分配给帖子的日期 |
| 页面 | page.id | 帖子的唯一标识符 |
| 页面 | page.name | 页面或帖子的文件名 |
| 页面 | **page.next** | **当前帖子的下一篇，基于`site.posts`顺序** |
| 页面 | page.previous | 当前帖子的上一篇，基于`site.posts`顺序 |
| 分页器 | **paginator.page** | **当前页码** |
| 分页器 | **paginator.posts** | **当前页面的帖子** |
| 分页器 | paginator.per_page | 每页帖子数 |
| 分页器 | paginator.total_pages | 帖子总页数 |
| 分页器 | paginator.total_posts | 帖子总数 |
| 分页器 | **paginator.next_page** | **下一页的页码** |
| 分页器 | **paginator.next_page_path** | **下一页的路径** |
| 分页器 | paginator.previous_page | 上一页的页码 |
| 分页器 | paginator.previous_page_path | 上一页的路径 |


## 参考链接

- [官网 - Jekyll快速入门](https://jekyllrb.com/docs/)
- [官网 - Liquid选择器帮助文档](https://jekyllrb.com/docs/liquid/filters/)
- [官网 - Liquid语法介绍](https://liquid.bootcss.com/basics/introduction/)
- [官网 - GitHub Pages Dependency versions](https://pages.github.com/versions/)
- [博客 - Liquid基础语法](https://www.cnblogs.com/lslvxy/p/3651936.html)
