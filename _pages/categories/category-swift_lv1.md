---
title: "Algorithm Lv1.(Swift)"
layout: archive
permalink: categories/swift_lv1
author_profile: true
sidebar_main: true
---

<!--assign posts에만 변수 변경 -->

{% assign posts = site.categories.swift_lv1 %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
