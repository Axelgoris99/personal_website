---
title: Aegir - Fullstack Engineer
begin: 2025-10
end: 2099-11
location: Remote, Europe
img: /assets/experience/aegir.webp
img_alt: Aegir Logo
description: |
  I am currently working as a fullstack software engineer, using Godot, React and Python.
tags:
  - Godot
  - React (Javascript/Typescript)
  - Python
  - Docker
  - Nginx
  - Gitea
---

As my first task, I ported our multi-window Godot app to be working as a local multi-tab web export. That involved a lot of bridging between javascript and godot, and it got me refactoring quite a bunch of logic to fully support our app with the limited resources available in a browser. We're using a lot of BroadcastChannel. It can synchronize dependencies, state, services and such.

I've refactored and implemented a whole lot of stuff ranging from map shader performance to hover effect card system.

I went to the client site to install and deploy docker images + systemd for starting and such. That involved integration with Keycloak, checking TLS certificates, etc.

I also implemented integration / unit test in our CI/CD pipeline so that they run on PR and on direct push to main. We had nothing so I added test running, linting, formatting and such into our CI/CD with Gitea runners. I also had to install local registry, deal with nginx proxy, write Dockerfile and such.

