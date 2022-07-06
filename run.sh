#!/bin/bash

# 有参数时做搜索用
if [ "$1"x != ""x ]; then 
  grep -rn --color \
    --exclude-dir=_site \
    --exclude-dir=.jekyll-cache \
    --exclude-dir=assets \
    "$1" $2
  exit 0
fi

rm -rf Gemfile.lock _site

bundle exec jekyll s -VH 10.20.88.120

