---
title: Aegir - Fullstack Engineer
begin: 2025-10
end: 2026-09
location: Remote, Europe
img: ../../assets/experience/aegir.webp
img_alt: Aegir Logo
description: |
  Fullstack software engineer in the defence sector, using Godot, React, Python and Rust.
tags:
  - Godot
  - React (Javascript/Typescript)
  - Python
  - Docker
  - Nginx
  - Gitea
  - Rust
  - CI/CD
---

Defence-sector company with a sharp technical team and a compelling product.

As my first task, I ported our multi-window Godot app to a local multi-tab web export. That involved a lot of bridging between JavaScript and Godot, and it got me refactoring quite a bunch of logic to fully support our app with the limited resources available in a browser. We used BroadcastChannel a lot. It can synchronize dependencies, state, services and such.

I've refactored and implemented a whole lot of stuff ranging from map shader performance to a hover-effect card system. I wrote shaders and used multimesh instancing to improve rendering performance, and spent a fair amount of time profiling and debugging performance and stability issues.

I also peer-reviewed code across Rust, React, Python and GDScript, always pushing for modular code following composition principles to reduce iteration time.

I went to the client site to install and deploy Docker images + systemd services. That involved integration with Keycloak, checking TLS certificates, etc.

I also added integration and unit tests to our CI/CD pipeline so that they run on PR and on direct push to main. We had nothing so I added test running, linting, formatting and such into our CI/CD with Gitea runners. I also had to set up a local registry, deal with the Nginx proxy, write Dockerfiles and such.

