---
layout: page
title: Collections
permalink: /collection/
comments: true
---

* content
{:toc}


{% assign types = '' %}
{% for item in site.data.links %}
  {% assign types = types | append: ',' | append: item.type %}
{% endfor %}
{% assign types = types | remove_first: ',' | split: ',' | uniq %}

{% for type in types %}
## {{ type }}
<table border="1" width="97%"><tbody>
  <tr>
    <td width="8%" style="text-align:center"><b>序号</b></td>
    <!-- <td width="12%" style="text-align:center"><b>类别</b></td> -->
    <td width="40%"><b>站点</b></td>
    <td width="40%"><b>描述</b></td>
  </tr>
  {% assign t_num = 0 %}
  {% for item in site.data.links %}
    {% if item.type == type  %}
  <tr>
    <td width="8%" style="text-align:center">{% assign t_num = t_num | plus: 1 %}{{ t_num }}</td>
    <!-- <td width="12%" style="text-align:center">{{ item.type }}</td> -->
    <td width="40%"><a href="{{ item.link }}">{{ item.name }}</a></td>
    <td width="40%">{{ item.desc }}</td>
  </tr>
    {% endif %}
  {% endfor %}
</tbody></table>
{% endfor %}
