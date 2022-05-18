---
layout: post
title:  "hello jekyll!"
author: Tian
version: 1.0.0
mtime:   2019-07-20 15:14:54 -0800
categories: jekyll
comments: true
tags: jekyll 阿斯蒂芬 阿斯蒂芬 jekyll 阿斯蒂芬 阿斯蒂芬 jekyll 阿斯蒂芬 阿斯蒂芬
excerpt: 当年创建 jekyll 时默认的一篇文章，没什么意义，我也一直没删除，留个纪念吧。
mathjax: true
published: true
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:
测试新增1
:smile:
:cry:
:angry:

```markdown
:cry:
```

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```


```sh
#!/bin/bash

rm -rf gun
echo haha
```

```python
"""
Timer used to run all jobs that need to be frequently run on the system
"""

import logging
from datetime import datetime, timedelta, timezone
from typing import Callable

from uaclient.cli import setup_logging
from uaclient.config import UAConfig
from uaclient.jobs.metering import metering_enabled_resources
from uaclient.jobs.update_messaging import update_apt_and_motd_messages
from uaclient.jobs.update_state import update_status

LOG = logging.getLogger(__name__)
UPDATE_MESSAGING_INTERVAL = 21600  # 6 hours
UPDATE_STATUS_INTERVAL = 43200  # 12 hours
METERING_INTERVAL = 14400  # 4 hours


class TimedJob:
    def __init__(
        self,
        name: str,
        job_func: Callable[..., bool],
        default_interval_seconds: int,
    ):
        self.name = name
        self._job_func = job_func
        self._default_interval_seconds = default_interval_seconds
```

```js
import stats from '../../common/stats'
import Ball from '../../common/Ball'

const canvas: HTMLCanvasElement | null = document.querySelector('#mainCanvas')

const vx = 10 // x 方向速度， 10 像素/s
const vy = 20 // y 方向速度， 20 像素/s
const x0 = 20 // 初始位置
const y0 = 20

if (canvas) {
  canvas.width = window.screen.width
  canvas.height = window.screen.height
  const context = canvas.getContext('2d')

  const ball = new Ball(10, '#1E88E5')
  if (context) {
    const drawFrame = (time: number) => {
      stats.begin()
      const timeInSeconds = time / 1000 // 将毫秒转为秒单位

      context.clearRect(0, 0, canvas.width, canvas.height)
      ball.x = vx * timeInSeconds + x0
      ball.y = vy * timeInSeconds + y0
      ball.draw(context)

      stats.end()
      window.requestAnimationFrame(drawFrame)
    }
    drawFrame(0)
  }
}
```


Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

Block Mathjax 

$$
f(x) = ax + b
$$

Inline Mathjax $a \neq b$

