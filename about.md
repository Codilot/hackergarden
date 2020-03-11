---
layout: page
title: About
permalink: /about
---

<ul>
  {% for author in site.authors %}
    <li>
      <h2><a href="{{ author.url | relative_url }}">{{ author.short_name }}</a></h2>
      <h3>{{ author.position }}</h3>
      <p>{{ author.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>
