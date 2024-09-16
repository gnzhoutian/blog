---
layout: post
title: 利用LaTex生成技术简历
categories: Tips
tags: LaTex 简明用法
version: 1.0.0
comments: true
mathjax: false
mtime: 
published: true
---

* content
{:toc}

本文主要介绍`LaTex`的安装使用和基本语法，并提供典型的技术简历模版。



## 一、背景

简历当然可以使用`Microsoft Word`直接编辑，只要选好模版，还是很省事的，除了格式微调时有些闹心。

但是对于技术人员，如果通过**纯文本**生成一份格式高度定制化的简历，还是一件很**Cool**的事。

这项任务还是有一定的上手难度的。本文主要提供一种快速制作简明技术简历的方法。

## 二、技术简历

### 1. 编写技巧

关于如何编写技术简历编写，本人主要学习和参考**无隅老师**的[什么样的简历能进大厂？](https://www.bilibili.com/video/BV1sv4y1e7iy/)，下述记录部分关键点，详情请查看原视频。

技术简历与一般简历略有不通，它不需要花哨的样式，**简洁即可**。内容一般包括下述**七个部分**：基础信息（姓名、电话、邮箱等）、教育背景、工作经历、专业技能、项目经历、荣誉奖项(可选)、自我评价(可选)。

技术简历编写时需要**突出技术能力的技术细节，突出个人贡献**：你干了什么事，用了什么技术，得到什么结果，证明你什么能力。一般需要遵循**STAR原则**：

- **背景 Situation**: 要做什么事，解决什么问题，有哪些资源
- **任务 Task**: 做这些事有哪些任务（数据规模/量化）
- **行动 Action**: 采取了什么行动，将迁移分为双写、xx五个阶段
- **结果 Result**: 达成了什么结果，完成100万条在线迁移，成功率5个9

其中数据量化举例如下：

- **技术指标**: 吞吐量，延迟，代码体积变小，下载时间
- **业务指标**： 减少20个工单，缩短时间（1w到1天），支持10000订单

### 2. 简历预览

![简历预览]({{ "/_assets/tips/resume.png" | relative_url }})

### 3. 简历元素

通过上述说明，简历中一般包括下述要素，只要将这些**要素封装为方法**，支持在编写文档时快速调用即可：

1. **标题**: 姓名
2. **副标题**: 电话、邮箱等
3. **一级标题**: 教育背景、工作经历、专业技能、项目经历等
4. **表格**: 按年表罗列教育、工作经历、项目经历
5. **无序列表**: 编写专业技能、荣誉奖项、自我评价时需要
6. **有序列表**: 描述项目的任务、行动时需要
7. **强调文本**: 支持格式：**关键字：** 描述
8. **参考文本**: 支持格式：**关键字：** *描述*
9. **普通正文**: 标准字体、字号、演示的文本



## 三、安装LaTex

> 如果发行版仓库中自带的`TeXLive`版本已经满足要求，如：`Ubuntu`、`MacOS`，那么恭喜你，直接安装用就行。

安装`LaTex`，我差点直接倒在了这一步。一个小工具官方推荐安装方式竟然要下载`5.6G`的安装包，下载后安装还要`30min`以上。网上有一些简化版本，如[TinyTeX](https://yihui.org/tinytex/)，但是后续依赖管理更为麻烦，不适合新手用户，不如直接全量安装最新版本，反而省时省心。

- Windows相对简单，挂载镜像后直接执行`install-tl-windows.bat`，按提示操作，全量安装即可。

- Linux相对复杂，镜像下载后具体步骤如下：

```shell
# 安装依赖 for CentOS 7
yum install perl-Digest-MD5

# 挂载镜像
mkdir -p /mnt/iso
mount -t iso9660 -o ro,loop,noauto texlive.iso /mnt/iso

# 进入挂载目录，执行命令后，输入"I"开始安装，预计耗时30min
perl ./install-tl --texdir=/opt/x64/texlive/2024 --texuserdir=/opt/x64/texlive/data

# 保存配置至环境变量，如: /etc/profile.d/private.sh
export MANPATH=/opt/x64/texlive/2024/texmf-dist/doc/man:$MANPATH
export INFOPATH=/opt/x64/texlive/2024/texmf-dist/doc/info:$INFOPATH
export PATH=/opt/x64/texlive/2024/bin/x86_64-linux:$PATH

# 卸载镜像
umount /mnt/iso

# 扩展指令
tlmgr info --list --only-installed --data name,size # 查看所有安装的包
```

{% raw %}

## 四、制作简历

- `LaTex`模版示例详见[**附录-resume.cls**](#1-resumecls)，实际格式按需调整
- 个性化简历示例详见[**附录-demo.tex**](#2-demotex)，实际格式按需调整

### 1. 基本语法

1. 使用`%`注释

2. 文件头声明使用`xelatex`编译，采用`UTF-8`编码。中文场景建议使用该配置

    ```latex
    % !TEX program = xelatex
    % !TEX encoding = UTF-8 Unicode
    ```
3. 使用 `\xxx[可选参数]{必填参数1}{必填参数2}` 格式调用xxx指令，如果指令不存在参数，则`\xxx`即可调用指令。指令包括三类：原生指令、第三方库指令、自定义指令

4. 使用`\newcommand{\xxx}[参数个数][可选参数]{指令内容 #1 #2}`创建自定义xxx指令，参数个数最高支持`9`个，通过`#n`在指令内容中引用
    ```latex
    \newcommand{\xxx}{指令内容}        % 自定义无参数xxx指令
    \newcommand{\xxx}[1]{指令内容 #1}  % 自定义存在一个必填参数的xxx指令
    
    % 自定义存在两个参数的xxx指令，其中#1代表可选参数，并且其默认值为"可选参数"
    \newcommand{\xxx}[2][可选参数]{指令内容 #1 #2}
    ```

5. 使用 `\begin{xxx}指令内容\end{xxx}`区分作用范围，如`\begin{document} 文章内容 \end{document}`标识文章内容，也常使用`{}`区分作用范围

### 2. 常用指令说明

```latex
% 文档类设置和包引用
\documentclass     % 文章引用的文档类，入口tex文件中必填
\NeedsTeXFormat    % 指定Tex类编译格式，中文场景建议使用LaTeX2e
\ProvidesClass     % 自定义类名称，与类文件名保持一致

\LoadClass         % 需要加载的文档类，类文件中必填
\RequirePackage    % 类文件中引用第三方包

% 页面设置
\setCJKmainfont    % 设置中文字体，由于中文字体一般没有倾斜，建议配置AutoFakeSlant
\setmainfont       % 设置西文字体

\linespread{1.5}   % 设置行间距
\pagestyle{empty}  % 页眉页脚为空
\setlist{nosep}    % 去除列表间距
\raggedbottom      % 顶部对齐
\raggedright       % 左对齐

% 字号/粗细设置
\small            % 缩小字号
\normalsize       % 标准字号，依次为: small < normalsize < large < Large < LARGE < huge < Huge
\LARGE            % 加大号字

\bfseries         % 设置粗体
\textbf           % 设置粗体，同bfseries，用法为 \textbf{...}
\textit           % 设置斜体，用法为 \textit{...}

% 对齐/缩进设置
\centering        % 设置文本行居中
\hangafter 0      % 段落悬挂缩进，第0行之后的行
\hangindent       % 悬挂缩进大小
\noindent         % 取消缩进


% 表格设置
\arraybackslash   % 单元格环境中换行恢复，一般表格中必加
\newcolumntype    % 自定义表格列宽类型
\hsize            % 表格列宽


% 空白字符
\hspace           % 生成空白字符
\vspace           % 设置垂直间距
\par              % 段落分割符

% 其它
\item             % 列表元素
\linewidth        % 行最大长度
\parbox           % 可换行的文本框，此处用于设置底纹
\colorbox         % 设置底纹颜色
```

### 3. 生成简历

- 调用`xelatex demo`即可编译完成，建议将下述代码保存为`build.sh`，方便快速编译。

```shell
#!/bin/bash
set -x -e

[ "$1"x == ""x ] && xelatex demo || xelatex $1
rm -f *.aux *.fls *.log *.out *.fdb_latexmk *busy*
```

### 4. 字体相关说明

- `Linux`环境中一般仅有少数字体，建议从`Windows`平台的`C:\Windows\Fonts`中按需拷贝至`/usr/share/fonts/xxx`下。相关操作如下：

```shell
# 安装依赖 for CentOS 7
yum install fontconfig mkfontscale

fc-list      # 查看已安装字体
mkfontscale  # 生成字体索引
```

## 附录

### 1. resume.cls

```latex
% !TEX program = xelatex
% !TEX encoding = UTF-8 Unicode

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2024/09/01 An elegant technical resume class]

\LoadClass[a4paper, onecolumn, 10pt, fontset=none]{ctexart}  % 文档类: 中文模版样式
\RequirePackage[hmargin=1.4cm, vmargin=1.6cm]{geometry}      % 页面宏: 左右/上下页边距
\RequirePackage{color, tabularx, enumitem}                   % 颜色宏/表格宏/列表宏

\setCJKmainfont[AutoFakeSlant]{DengXian}  % 中文字体
\setmainfont{Arial}                       % 西文字体
\linespread{1.5}                          % 行间距
\pagestyle{empty}                         % 页眉页脚为空
\setlist{nosep}                           % 去除列表间距
\raggedbottom                             % 顶部对齐
\raggedright                              % 左对齐

% 内置快捷方式
\newcommand{\cvBold}[1]{{\bfseries #1}}                  % 粗体
\newcommand{\cvFontHuge}[1]{{\LARGE\bfseries #1}}        % 标题粗体
\newcommand{\cvFontLarge}[1]{{\normalsize\bfseries #1}}  % 副标题粗体
\newcommand{\cvFontNormal}[1]{{\small #1}}               % 正文字体

\newcommand{\cvMaxLength}{.98\linewidth}                                       % 行最大长度
\newcolumntype{Z}[1]{>{\hsize=#1\hsize}X}                                      % 表格列宽
\newcommand{\cvTableItem}[1]{\arraybackslash\cvFontNormal{#1}}                 % 表格元素
\newcommand{\cvLineHang}{\raggedright\noindent\hangafter 0 \hangindent 1.1em}  % 悬挂缩进

% 可调用元素
\newcommand{\cvName}[1]{  % 姓名
    \centering\cvFontHuge{#1}\vspace{1.2ex}\par}
\newcommand{\cvDesc}[3]{  % 简述
    \centering\cvFontLarge{#1 \hspace{2em} #2 \hspace{2em} #3}\vspace{1.2ex}\par}
\newcommand{\cvSection}[1]{  % 章节 - 底纹
    \colorbox[gray]{.95}{\parbox{\cvMaxLength}{\cvFontLarge{#1}}}\par}

\newcommand{\cvPeriod}[5][]{  % 时间履历 - 四列表格
    \begin{tabularx}{\cvMaxLength}{Z{.4} Z{.25} Z{.17} Z{.18}}
        \cvTableItem{#2} & \cvTableItem{#3} & \cvTableItem{#1} & \cvTableItem{#4 \~{} #5}
    \end{tabularx}\par}

\newcommand{\cvProject}[3]{  % 项目名称 - 两列表格
    \vspace{1ex}\begin{tabularx}{\cvMaxLength\bfseries}{Z{.88} Z{.12}}
        \cvTableItem{#1 ：#2} & \cvTableItem{#3}
    \end{tabularx}\par}

% 关键字
\newcommand{\cvKeyword}[2][关键字：]{{\cvLineHang\cvFontNormal{\textbf{#1} \textit{#2}} \par}}
% 正文
\newcommand{\cvLine}[2][]{{\cvLineHang\cvFontNormal{\textbf{#1} #2} \par}}
% 列表条目
\newcommand{\cvItem}[2][]{{\item\cvFontNormal{\textbf{#1} #2} \par}}

\newcommand{\cvListStart}{\begin{itemize}[leftmargin=2em]}            % 无序列表开始
\newcommand{\cvListEnd}{\end{itemize}}                                % 无序列表结束
\newcommand{\cvOrderListStart}{\begin{enumerate}[leftmargin=4em]}     % 有序列表开始
\newcommand{\cvOrderListEnd}{\end{enumerate}}                         % 有序列表结束
```

### 2. demo.tex

```latex
% !TEX program = xelatex
% !TEX encoding = UTF-8 Unicode

\documentclass{resume}
\begin{document}

\cvName{姓名}
\cvDesc{(+86) 012-3456-7890}{yourname@gmail.com}{1988.01}

\cvSection{教育背景}
    \cvPeriod[硕士]{哈哈大学}{信息与通信工程}{2013.09}{2016.07}
    \cvPeriod[本科]{巴拉巴拉大学}{通信工程}{2009.09}{2013.07}

\cvSection{工作经历}
    \cvPeriod{哈哈科技有限公司}{研发经理}{2019.09}{至今}
    \cvPeriod{巴拉巴拉有限公司}{Java工程师}{2016.09}{2019.09}

\cvSection{专业技能}
    \cvListStart
        \cvItem{技能aaa巴拉巴拉}
        \cvItem{技能bbb巴拉巴拉}
        \cvItem{技能ccc巴拉巴拉}
    \cvListEnd

\cvSection{荣誉奖项}
    \cvListStart
        \cvItem{奖项aaa巴拉巴拉}
    \cvListEnd

\cvSection{项目经历}

    \cvProject{项目一}{xxxxx平台开发}{哈哈科技}
        \cvKeyword{Java、Redis、Hystrix}
        \cvLine[背景：]{要做什么事，解决什么问题，有哪些资源}
            \cvOrderListStart
                \cvItem[aaa问题：]{问题简述巴拉巴拉；}
            \cvOrderListEnd

        \cvLine[任务：]{做这些事有哪些任务（数据规模/量化）}

        \cvLine[行动：]{}
            \cvOrderListStart
                \cvItem[aaa行动：]{行动简述巴拉巴拉；}
                \cvItem[bbb行动：]{行动简述巴拉巴拉；}
            \cvOrderListEnd

        \cvLine[结果：]{达成了什么结果，量化巴拉巴拉}

\cvSection{自我评价}
    \cvListStart
        \cvItem[特质aaa：]{特质描述巴拉巴拉}
    \cvListEnd

\end{document}
```

{% endraw %}

## 参考链接

- [视频 - 什么样的简历能进大厂？面过100人+的技术面试官看一眼就知道](https://www.bilibili.com/video/BV1sv4y1e7iy/)
- [官网 - TexLive下载和安装](https://tug.org/texlive/acquire-iso.html)
- [官网 - lshort帮助文档中文版](https://www.ctan.org/pkg/lshort-zh-cn)
- [官网 - TinyTeX](https://yihui.org/tinytex/)
- [GitHub - 一个简洁优雅的 XeLaTeX 简历模板](https://github.com/billryan/resume/tree/zh_CN)
