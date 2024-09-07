---
layout: page
title: About Me
permalink: /about/
comments: true
---

* content
{:toc}


欢迎来到我的博客

这里记录着我的上下求索之路

<hr>

## 联系我
<div>
  {% if site.github_username %}
    <a target="_blank" href="//github.com/{{ site.github_username }}">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
      </span>
    </a>
  {% endif %}
  {% if site.email %}
    <a target="_blank" href="mailto:{{ site.email }}">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
      </span>
    </a>
  {% endif %}
  {% if site.rss_feed %}
    <a target="_blank" href="{{ site.rss_feed | relative_url }}">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-rss fa-stack-1x fa-inverse"></i>
      </span>
    </a>
  {% endif %}
</div>


<hr>

## 友链
<div>
  {% if site.data.friends %}
    {% for friend in site.data.friends %}
      <a href="{{friend.link}}">{{friend.name}}</a><b> | </b>
    {% endfor %}
    <b>...</b>
  {% endif %}
</div>
