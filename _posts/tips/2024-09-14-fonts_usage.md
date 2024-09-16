---
layout: post
title: 字体选型及概念说明
categories: Tips
tags: Font 简明用法
version: 1.0.0
comments: true
mathjax: false
mtime: 
published: true
---

* content
{:toc}

本文主要介绍字体相关概念和选用方法，以便快速挑选字体。



## 一、背景

字体用处广泛，不同场景(印刷、文档、页面、代码)的字体选用是一个比较复杂的事。本文主要介绍字体相关概念，并提供不同场景的典型方案，以便快速选用字体。

## 二. 常用字体

### 1. 英文字体

- **`Arial`**: 无衬线体，微软出品，系统自带，仿`Helvetica`设计，适合**文档正文**
- **`Calibri`**: 无衬线体，微软出品，系统自带，适合**文档正文**
- **`Consolas`**: 无衬线体，等宽字体，微软出品，适合**网页代码**使用，建议从`C:\Windows\Fonts`中拷贝，网页上下载的可能字符不全。
- **`Inconsolata`**: 无衬线体，等宽字体，谷歌出品，适合**代码编辑器或网页代码**使用，提供**可变字体**。
- **`Helvetica Neue`**: 无衬线体，被评为设计师最爱的字体，适合**文档正文或网页正文**使用，读者在阅读的时候专注于文字所表达的内容，而不会关注文字本身所使用的字体。

### 2. 中文字体

- **`宋体`**: 衬线体，系统字体，适合**正文**，适合印刷和长期阅读
- **`楷体`**: 手写体，系统字体，一般用于艺术字，标题等，不适合长期阅读
- **`等线`**: 无衬线体，系统字体，适合**正文和代码编辑器**，
- **`Microsoft YaHei`**: 无衬线体，微软雅黑，一般为**Web页面首选字体**
- **`Noto Sans SC`**: 无衬线体，谷歌思源黑体，与微软雅黑互换使用
- **`Noto Serif SC`**: 衬线体，谷歌思源宋体，与宋体互换使用，适合**代码编辑器和正文**

### 3. 苹果字体

> 个人喜欢苹果的设计美学，因而苹果系统使用默认字体即可，配置如下
> ```css
> font-family: -apple-system,BlinkMacSystemFont, xxxxxx, sans-serif;
> ```



### 4. 名词解释

- **`Serif`**: 衬线体，适合**印刷或文档编辑**，但不适合Web页面
- **`Sans`, `Sans Serif`**: 无衬线体，`sans`希腊语表示`without`，小号字体也可清晰显示。适合**Web页面、小屏幕**
- **`Mono`, `Monospace`**: 等宽字体，即每个字符宽度都一致的字体，适合**代码编辑器**
- **`SC`**: 简体中文，`Simplified Chinese`缩写
- **`Noto`**: 谷歌公司开源字体家族，`No Tofu`缩写，旨在消除所有无法显示的字符，提供**可变字体**
- **`StaticFont`**: 静态字体，需要为每种字体变体(常规，粗体，斜体等)提供不同的字体文件
- **`VariableFont`**: 可变字体，基于`OpenType`技术的一种新格式，可可将所有变体都包含在一个文件中。建议使用
- **`sans-serif`**: 通用字体族，无衬线字体，这是一种备选机制，用于指定的字体不可用时使用系统给出默认字体集


### 5. 字体格式

- **`TTF`, `TrueType`**: 优势在于其对字体显示的精确控制，支持像素级显示，兼容性好。但字体文件体积最大
- **`OTF`, `OpenType`**: 集成了TrueType的特性，基于Unicode编码，支持全球多语言。跨平台兼容性与`TrueType`相当。建议使用
- **`WOFF`, `Web Open Font Format`**: 网页所采用的字体格式标准。使用`zlib`压缩，文件大小一般比`TTF`小40%
- **`woff2`, `Web Open Font Format2`**: 对`WOFF`字体的升级，使用`Brotli`压缩，压缩率更高、同时可以在移动端快速解压。建议使用

## 三、典型场景

> `font-family`设置时，注意英文字体在中文字体前面，字型选择时，遵循顺序匹配，命中即停规则

- 代码编辑器: `Inconsolata` > `Consolas` > `Noto Serif SC` > `宋体`
- 网页正文: `Helvetica Neue` > `Consolas` > `Microsoft YaHei`
- 网页代码: `Consolas` > `Helvetica Neue` > `Microsoft YaHei`
- 文档正文: `Calibri`或`Arial` > `宋体`或`等线`
- 打印字体: `Calibri`或`Arial` > `宋体`或`等线`



## 四、本地字体引用

1. **目录结构示例**

    ```shell
    assets/vendor/webfonts/
    ├── css
    │   └── webfonts.css
    └── fonts
        ├── Consolas.woff2
        └── HelveticaNeue.otf
    ```

2. **`webfonts.css`**

    ```css
    @font-face {
        font-family: "Consolas Web";
        src: url("../fonts/Consolas.woff2") format("woff2");
    }

    @font-face {
        font-family: "Helvetica Neue Web";
        src: url("../fonts/HelveticaNeue.otf") format("opentype");
    }
    ```

3. **`html head`中引用样式**

    ```html
    <link rel="stylesheet" href="/assets/vendor/webfonts/css/webfonts.css">
    ```

4. **`css`中引用字体**

    ```css
    body {
        font-family: -apple-system,BlinkMacSystemFont, "Consolas Web", "Helvetica Neue Web", "Microsoft YaHei", sans-serif;
    }
    ```

## 五、预览文本

```shell
# 英文文本
└├─│CMD> git rebase --no-d4fc09 -i HEA~5

# 中文文本
探索中文网页设计中，特别是文字较多的博客类，用那种字体更为合适呢？
```

## 参考链接

- [官网 - Google Fonts](https://fonts.google.com/)
- [Wiki - Noto](https://zh.wikipedia.org/wiki/Noto)
- [工具 - TTF to WOFF2 Converter](https://cloudconvert.com/ttf-to-woff2)
- [工具 - 字体天下下载和预览字体](https://www.fonts.net.cn/)
- [博客 - 中文网页中的字体选型及开发指南](https://weixiang.github.io/posts/the-font-selection-and-development-guide-in-chinese-web-pages/)
- [博客 - 字集 - 免费中文字体](https://wordshub.github.io/free-font/index.html?hei)
- [下载 - helvetica-neue-55](https://www.cdnfonts.com/helvetica-neue-55.font) 
