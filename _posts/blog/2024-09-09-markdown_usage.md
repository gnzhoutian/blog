---
layout: post
title: Markdown简明用法
categories: 博客搭建
tags: Markdown 简明用法
version: 1.0.0
comments: true
mathjax: true
mtime: 
published: true
---

* content
{:toc}

本文主要介绍典型的`Markdown`用法，力求简明易查。本博客支持本文提及的全部用法:smile:。



## 一、基本语法

### 1. 规则

- 演示中加粗部分为常用用法
- 标题：行首使用`# `开头表示标题，`#`数量代表标题级别，最高六级标题，如：`### 三级标题`
- 段落：多行文本通过**空白行**创建段落
- 换行：行末通过**多个空格**换行，**不要使用空格或制表符缩进段落**
- 无序列表：行首允许使用`-`、`+`、`*`，符号可以混用
- 有序列表：数字不必按数学顺序排列，但应当以**数字`1. `起始**
- 嵌套列表：一般通过**缩进**或**4个空格**创建
- 图片引用：路径建议使用`Liquid`语法表示，如[^Liquid]：{% raw %}`{{ '/_assets/test/chan.png' | relative_url }}`{% endraw %}


### 2. 演示

| 说明 | Markdown语法 | 预览效果 |
| :---: | :--- | :--- |
| 一级标题 | `# 一级标题` | {::nomarkdown}<h1>一级标题</h1>{:/nomarkdown} |
| 二级标题 | `## 二级标题` | {::nomarkdown}<h2>二级标题</h2>{:/nomarkdown} |
| ... | ... | ... |
| 六级标题 | `###### 六级标题` |  {::nomarkdown}<h6>六级标题</h6>{:/nomarkdown} |
| **段落(空行分隔)** | `段落一`<br>` `<br>`段落二` | 段落一<br><br>段落二 |
| **换行(行末多个空格分隔)** | `第一行  `&nbsp;&nbsp;<br>`我换行了` | 第一行  <br>我换行了 |
| 斜体 | `*斜体*` | *斜体* |
| **粗体** | `**粗体**` | **粗体** |
| 斜粗体 | `***斜粗体***` | ***斜粗体*** |
| 删除线 | `~~删除线~~` | ~~删除线~~ |
| **行内代码块** | `` `CODE IN LINE` `` | `CODE IN LINE` |
| 水平线 | `---` 或 `***` | {::nomarkdown}<hr>{:/nomarkdown} |
| **无序列表** | `- 无序项目`<br>`+ 无序项目`<br>`* 无序项目` | {::nomarkdown}<ul><li>无序项目</li><li>无序项目</li><li>无序项目</li></ul>{:/nomarkdown} |
| **有序列表** | `1. 有序项目`<br>`2. 有序项目` | {::nomarkdown}<ol><li>有序项目</li><li>无序项目</li></ol>{:/nomarkdown} |
| 嵌套列表 | `1. 有序项目`<br>&emsp;`- 无序项目`<br>&emsp;`- 无序项目`<br>`3. 有序项目` | {::nomarkdown}<ol><li>有序项目</li><ul><li>无序项目</li><li>无序项目</li></ul><li>有序项目</li></ol>{:/nomarkdown} |
| 任务列表 | `- [ ] 待办任务`<br>`- [x] 已办任务` |  {::nomarkdown} <ul><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"> 待办任务</li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked=""> 已办任务</li></ul>{:/nomarkdown} |
| **引用** | `> 引用信息A`<br>`> 引用信息B` | {::nomarkdown}<blockquote>引用信息A<br>引用信息B</blockquote>{:/nomarkdown} |
| 嵌套引用 | `> 引用信息A`<br>`>> 引用信息B`<br>`>`<br>`> 引用信息C` | {::nomarkdown}<blockquote>引用信息A<br><blockquote>引用信息B</blockquote>引用信息C</blockquote>{:/nomarkdown} |
| **本文链接** | `[跳转至基本语法](#基本语法)` | [跳转至基本语法](#基本语法) |
| 网页链接 | `<https://cn.bing.com>` | <https://cn.bing.com> |
| 邮箱链接 | `<gnzhoutian@qq.com>` | <gnzhoutian@qq.com> |
| **超链接(含名称)** | `[必应](https://cn.bing.com)` | [必应](https://cn.bing.com) |
| 超链接(含标题) | `[必应](https://cn.bing.com "必应搜索")` | [必应](https://cn.bing.com "必应搜索") |
| **引用链接** | `[必应][2]`<br>`[2]: https://cn.bing.com "必应搜索"` | [必应][2] |
| **引用图片** | {% raw %}`![小婵]({{ '/_assets/test/chan.png' | relative_url }})`{% endraw %} | ![小婵]({{ '/_assets/test/chan.png' | relative_url }}) |
| 脚注 | `脚注[^1x]`<br>`[^1x]: 脚注1` | 脚注[^1x] |
| 名词解释 | `HTML 文档`<br>`*[HTML]: Hyper Text Markup Language` | HTML 文档 |
| Emoji - [简码表][3] | `:smile:` `:+1:` | :smile: :+1: |
| MathJax | `$ z = x + y $`<br>`$$ a^2 + b^2 = c^2 $$` | $ z = x + y $<br>$$ a^2 + b^2 = c^2 $$ |



## 二、表格

- 使用三个或以上连字符`---`创建每列标题，并使用管道`|`分隔每列
- 使用 `:---`、`:---:`、`---:`表示单元格对齐方式
- Markdown语法

    ```shell
    | 默认对齐 | 左对齐 | 居中对齐 | 右对齐 |
    | -------- | :----- | :------: | ----: |
    | 数据1111 | 数据22 | 数据3333 | 数据4 |
    ```

- 预览效果

    | 默认对齐 | 左对齐 | 居中对齐 | 右对齐 |
    | -------- | :----- | :------: | ----: |
    | 数据1111 | 数据22 | 数据3333 | 数据4 |

## 三、代码块

### 1. 普通代码块

- Markdown语法

    ~~~
    ```
    {
        "Name": "John",
        "age": 25
    }
    ```
    ~~~

- 预览效果

    ```
    {
        "Name": "John",
        "age": 25
    }
    ```

### 2. 语法高亮代码块

- Markdown语法

    ~~~
    ```json
    {
        "Name": "John",
        "age": 25
    }
    ```
    ~~~

- 预览效果

    ```json
    {
        "Name": "John",
        "age": 25
    }
    ```

## 四、HTML相关语法

| 说明 | HTML语法 | 预览效果 |
| :---: | :--- | :--- |
| **换行** | `文本行一<br>文本行二` | 文本行一<br>文本行二 |
| **空格符** | `空格符&nbsp;空格符` | 空格符&nbsp;空格符 |
| **制表符** | `制表符&emsp;制表符` | 制表符&emsp;制表符 |
| 下划线 | `<u>下划线</u>` | <u>下划线</u> |
| 上标 | `文字<sup>上标</sup>` | 文字<sup>上标</sup> | 
| 下标 | `文字<sub>下标</sub>` | 文字<sub>下标</sub> |
| 文本折叠 | `<details><summary>点击展开</summary>折叠内容</details>` | {::nomarkdown}<details><summary>点击展开</summary>折叠内容</details>{:/nomarkdown} |
| **图片缩放** | `<img src="{{ '/_assets/test/chan.png' | relative_url }}" width="30%" />` | {::nomarkdown}<img src="{{ '/_assets/test/chan.png' | relative_url }}" width="30%" />{:/nomarkdown} |


## 五、kramdown扩展语法

| 说明 | kramdown语法 | 预览效果 |
| :---: | :--- | :--- |
| 注释-页面不显示 | `{::comment}这是注释，你看不见{:/comment}` | {::comment}这是注释，你看不见{:/comment} |
| **原生-停用kramdown渲染** | `{::nomarkdown}这是HTML原生水平线<hr>{:/nomarkdown}` | {::nomarkdown}这是HTML原生水平线<hr>{:/nomarkdown} |


## 六、Markdown编辑器

### 1. VSCode编辑器

- 建议使用`VSCode` + `Markdown Preview Enhanced插件`编辑和实时预览

### 2. Typora编辑器

- `Typora`仍然是目前(2024-09-10)比较好用`Markdown`编辑器, 正式版需要付费，有条件请支持。
- `Beta`版本仍然免费，最新版本为 `v0.11.18`，[官方链接，点击下载](https://typora.io/windows/dev_release.html)
- `Beta`版本提示到期问题解决办法如下：

    ```shell
    1. 打开注册表regedit -> 计算机\HKEY_CURRENT_USER\Software\Typora
    2. 右键Typora -> 选择权限 -> 各个权限组权限改为拒绝
    3. 关闭注册表 -> 重新打开typora即可
    ```

- `Typora`常用快捷键如下：

    ```shell
    ctrl + /             #源码模式
    ctrl + 0             #段落
    ctrl + 1,2,3,4,5,6   #标题级别
    ctrl + -,=           #升降标题级别
    ctrl + [,]           #增减缩进
    ctrl + shift + [,]   #有序无序列表
    ctrl + b,i,u         #加粗斜体下划线
    ```


## 参考链接


- [官网 - Markdown官方教程](https://markdown.com.cn/basic-syntax/line-breaks.html)
- [官网 - GitHub Flavored Markdown帮助文档](https://github.github.com/gfm/)
- [官网 - GitHub Docs Markdown帮助文档](https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [菜鸟 - Markdown在线编辑器](https://c.runoob.com/front-end/712/)
- [官网 - Markdown编辑器移动端预览](https://markdown.com.cn/editor/)
- [官网 - Flowchart图表](http://flowchart.js.org/)
- [官网 - Mermaid图表](https://mermaid-js.github.io/mermaid/#/)
- [博客 - Flowchart用法](https://www.123si.org/javascript/article/markdown-flow-chart-flowchart-js/)
- [博客 - Mermaid用法](http://blog.lisp4fun.com/2017/11/09/mermaid-flow)
- [博客 - MathJax与Markdown的究极融合](https://yihui.org/cn/2017/04/mathjax-markdown/)
- [GitHub - Emoji表情符号备忘单](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
- [GitHub - Emoji表情符号简码表](https://gist.github.com/rxaviers/7360908)

---

[^1x]: 我是脚注
[^Liquid]: 此处使用`Liquid`转义用法raw，详情查看本文Markdown源码

*[HTML]: Hyper Text Markup Language

[1]: /_assets/test/chan.png "小婵"
[2]: https://cn.bing.com "必应搜索"
[3]: https://gist.github.com/rxaviers/7360908 "表情符号简码表"
