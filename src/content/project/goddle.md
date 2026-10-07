---
title: Goddle - Godot
begin: 2025-07
end: 2099-12
img: ../../assets/project/goddle.webp
img_alt: The main scene of goddle.
description: |
  A multiplayer word game for game nights: the grid is on the big screen, everyone plays from their phone. Free demo available!
tags:
  - C#
  - Angular
  - Go
  - WebRTC
  - Networking
  - Godot
favorite: true
---

You get a grid of letters on one TV and then people connect to the game room and can submit words that can be formed (adjacent letters) using a web app on their phone.

The main feature: friends in different countries can play together, each picking their own language and dictionary.

On the picture, you have the main interface on the left and the web interface that people use to connect on the right.

Under the hood, the Godot host (C#) talks to the players' phones (Angular) peer-to-peer over a WebRTC data channel. A small Go server only relays the initial handshake.

I've tested it with 9 people and it worked fine. A free demo is available and the Steam release is incoming! Available at [Steam](https://store.steampowered.com/app/4801680/Goddle/)

Developed under my studio, [GoGoStudio](/work/gogostudio).
