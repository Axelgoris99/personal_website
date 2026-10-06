---
title: Homelab - Proxmox & VPS
begin: 2024-01
end: 2099-12
img: /assets/project/homelab.webp
img_alt: A diagram of my homelab.
description: |
  Two Proxmox servers and a VPS running 30+ self-hosted services, from Home Assistant to game servers.
tags:
  - Proxmox
  - Docker
  - LXC
  - Caddy
  - Linux
  - Networking
favorite: true
---

Self-hosting is my playground for everything DevOps. Three machines, each with its own job.

## Proxmox #1: the sensible one

An old MSI laptop (i5-6300HQ, 16 GB) sitting at my parents' place, running every service I actually rely on, each in its own LXC container:

- **Home & life:** Home Assistant, Immich (photos), Homebox (inventory), Memos (notes), Excalidraw, Stirling PDF
- **Media:** Plex, Jellyfin, Overseerr, Sonarr, Radarr, Bazarr, SABnzbd
- **Network:** Pi-hole, WireGuard, Caddy as reverse proxy, a DDNS updater
- **Ops:** Homepage as a dashboard, Pulse for monitoring

## Proxmox #2: the fun one

An HP mini PC (i5-8500, 32 GB) at my place, dedicated to game servers. A Docker LXC managed through Portainer runs Enshrouded, Terraria (tModLoader) and Project Zomboid for friends.

## The VPS: the public one

A Debian VPS on OVH, behind Caddy and fail2ban, for anything that has to face the internet:

- [Umami](https://umami.is/) analytics for this website
- Uptime Kuma to keep an eye on everything
- [Chroma Notes](/project/chromanotes)
- [Goddle](/project/goddle)'s Go signaling server and coturn for WebRTC
- PsiTransfer for sharing files
- More game servers: Necesse and Core Keeper
