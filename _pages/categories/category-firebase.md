---
title: "graphql"
layout: archive
permalink: categories/graphql
author_profile: true
sidebar_main: true
---

<!--assign posts에만 변수 변경 -->

{% assign posts = site.categories.graphql %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
