---
title: "12 Factor App"
layout: archive
permalink: categories/12_Factor_App_Methodology
author_profile: true
sidebar_main: true
---

<!--assign posts에만 변수 변경 -->

{% assign posts = site.categories.12_Factor_App_Methodology %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
