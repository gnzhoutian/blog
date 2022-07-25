---
layout: post
title:  "Markdown常用语法"
author: Tian
categories: 文本编辑器
tags: Markdown md 典型用法
version: 1.0.0
comments: true
mathjax: false
permalink: 
excerpt: 
mtime: 
published: true
---

* content
{:toc}


本文主要介绍的典型 `Markdown` 用法, 如: `emoji` `todo` `mathjax` `table`等

本博客支持本文提及的全部用法:smile:




## 常用语法
> 标题 `#` `##` `###` ... `######`

> 文本 `*斜体*` `**粗体**` `***斜粗体***` `~~删除线~~` 

> HTML `<u>下划线</u>` `<sub>下标</sub>` `<sup>上标</sup>`

> 折叠  ```<details><summary>点击展开</summary>折叠内容</details>```

> 水平线 `---` `___` `***`

> 无序列表 `-` `+` `*`

> 有序列表 `1.` `2.`

> 多级列表 `SPACE` `TAB`

> 代办事项 `- [ ]` `- [x]`

> 引用 `>`

> 定义 `:`

> 解释 `*[name]:`

> 脚注 `[^1x]`  `[^1x]:`

> 链接 `[name](link)` `[name][1]` `[1]:`

> 图片 `![name](link)` `![name][1]` `[1]: `

> 表格 `|默认|左对齐|居中|右对齐|` `|---|---:|:---:|---:|`

> 行内代码 ***`***

> 代码块 ***```***

> 代码块语言高亮 ***```shell***

> Emoji `:smile:` :smile:

> MathJax `$ z = x + y $` `$$ a^2 + b^2 = c^2 $$`
>
> `MathJax` 为在线功能, 开启时会该模块会自动改为在线模式


## 文本编辑器

> Typora 是目前比较好用的 `Markdown` 文本编辑器, 目前正式版需要付费
> 
> `Beta` 版本仍然免费, 最新版本为 `v0.11.18` [点击下载](https://typora.io/windows/dev_release.html)

```shell
## Typora 快捷键使用说明  
  ctrl + 0             #段落
  ctrl + 1,2,3,4,5,6   #标题级别
  ctrl + -,=           #升降标题级别
  ctrl + [,]           #增减缩进
  ctrl + shift + [,]   #有序无序列表
  ctrl + b,i,u 			#加粗斜体下划线
```


## 参考链接

- [官网 Emoji表情符号备忘单](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
- [官网 GitHub Flavored Markdown帮助文档](https://github.github.com/gfm/)
- [官网 GitHub Docs Markdown帮助文档](https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [菜鸟 Markdown在线编辑器](https://c.runoob.com/front-end/712/)
- [官网 Flowchart](http://flowchart.js.org/)
- [官网 Mermaid](https://mermaid-js.github.io/mermaid/#/)
- [博客 Flowchart 用法](https://www.123si.org/javascript/article/markdown-flow-chart-flowchart-js/)
- [博客 Mermaid 用法](http://blog.lisp4fun.com/2017/11/09/mermaid-flow)
- [博客 MathJax 与 Markdown 的究极融合](https://yihui.org/cn/2017/04/mathjax-markdown/)

