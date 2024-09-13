---
layout: post
title: git-rebase简明用法
categories: Tips
tags: Git 简明用法
version: 1.0.0
comments: true
mathjax: false
mtime: 
published: true
---

* content
{:toc}

本文主要介绍`git-rebase`简明用法，以便快速合并无价值的提交日志。



## 一、背景

日常工作中经常使用`Git`，但一直没有用过`git-rebase`。现在需要向`Github`中的开源项目提交代码，而自己的开发分支中，充斥着大量无意义的提交日志。这样着实不美观，也不利于`Code Review`和`Rollback`。

因而，不得不研究一下`git-rebase`用法，以便快速合并无价值日志。本文仅提供一种简明日志合并方式。

## 二、前提

1. 远程分支没有新的提交

2. **本地分支需要`git pull`至最新**

3. 不要用`git-rebase`处理已经被第三方引用的提交

## 三、基本指令

1. **`-i`**：交互式修改，即弹出编辑界面

2. **`--ignore-date`**：更新提交时间为当前时间，与`-i`不兼容，需要分开执行

3. **指定`commitID`**：修改**这个提交之前的所有提交（不包含该提交）**

4. **指定`HEAD~n`**：修改最新的n个有代码提交

5. 编辑界面只允许调整`有代码提交`日志，自动跳过并删除无代码提交日志，如`Merge Branch`、`Merge pull request`生成的提交

6. **建议配置快捷指令**，同时更新提交日期并编辑日志

```shell
# 基本用法
CMD> git rebase --ignore-date 4fbc059  # 建议: 更新提交日期(不包含该提交)
CMD> git rebase -i 2bc8cd7             # 建议: 更新提交日志(不包含该提交)
CMD> git rebase -i HEAD~5              # 更新前5个有代码提交

CMD> git rebase --abort                # 建议: 变基失败后回退

# 快捷指令 - 建议
CMD> cat ~/.gitconfig
[alias]
    rb = "!cd \"${GIT_PREFIX:-.}\" && git rebase --ignore-date \"$1\" && git rebase -i \"$1\" #"
    rc = rebase --abort

CMD> git rb 4fbc059  # 更新提交日期和并编辑日志
CMD> git rc          # 失败后回退
```

## 四、交互编辑

- **常用方案**
    - **首行`reword`, 其它行`fixup`，保存后弹出界面重新编写日志**
    - **首行`pick`, 其它行`squash`, 保存后弹出界面保留全部日志，按需编辑**
- 常用指令
    - `p`, `pick`: 使用提交
    - `r`, `reword`: 使用提交，编辑日志，保存后会弹出日志编辑界面
    - `s`, `squash`: 使用提交，保留日志，给`pick`或`reword`使用。保存后会弹出日志编辑界面
    - `f`, `fixup`: 使用提交，丢弃日志
- 基本不用
    - `e`, `edit`: 使用提交，编辑日志，编辑内容
    - `丢弃提交`: 注释或者删除行即可
    - `日志顺序重排`: 调整行顺序即可
    
## 五、Vim快速编辑

> Linux平台弹出的编辑界面一般为`Vim`编辑器，如果提交很多，建议使用`块编辑`技巧快速调整。

- **基本步骤**
    1. **先删除：`ctrl+v` -> `10gg` -> `fk` -> `d`**
    2. **再插入：`ctrl+v` -> `10gg` -> `shift+i` -> `插入` -> `ESC ESC`**
    
- 指令解释
    - `ctrl+v`: 开启块编辑模式
    - `10gg`: 光标移动至第10行，也可以使用`方向键`选择范围
    - `fk`: 光标向右移动至第一个k字符
    - `d`: 删除选择内容
    - `shift+i`: 块编辑模式下插入内容，插入时不要键入`BackSpace`或`Delete`，会导致`块编辑`中断
    - `ESC ESC`: 块编辑模式插入完成标识
    

## 六、失败后继续

```shell
# 不建议，很繁琐
vim .git/rebase-merge/git-rebase-todo  # 再次编辑配置
git commit --amend                     # 编辑最新提交
git rebase --continue                  # 解决问题后继续变基
```

## 参考链接

- [官网 - git-rebase - Reapply commits on top of another base tip](https://git-scm.com/docs/git-rebase)
- [官网 - 3.6 Git分支-变基](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)
- [博客 - 彻底搞懂 Git-Rebase](http://jartto.wang/2018/12/11/git-rebase/)
- [视频 - 【B站最全Git进阶课程】git rebase: 人生无法重来，但代码可以！](https://www.bilibili.com/video/BV1Xb4y1773F/)
