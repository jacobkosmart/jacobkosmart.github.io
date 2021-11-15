---
title: "IOS"
layout: archive
permalink: categories/ios
author_profile: true
sidebar_main: true
---

<!--assign posts에만 변수 변경 -->

{% assign posts = site.categories.ios %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
