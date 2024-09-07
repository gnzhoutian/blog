#!/bin/bash
# 用于本地快速调试，执行前请先准备好运行环境

rm -rf Gemfile.lock _site

bundle exec jekyll s -VH 0.0.0.0 -P 4000
