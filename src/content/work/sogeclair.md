---
title: Oktal Sydac a.k.a Sogeclair - Fullstack Engineer
begin: 2023-09
end: 2025-09
location: Adelaide, Australia
img: /assets/experience/oktalSydac.webp
img_alt: Oktal Sydac Logo
description: |
  I am currently working as fullstack software engineer, using Angular and C++.
tags:
  - Angular
  - C++
  - C#
  - Python
  - SVN
  - Unit Test
  - Networking
  - WebSockets
  - Unigine
imgs:
  - {
      link: /assets/experience/Sogeclair-Train.webp,
      caption: A train stopped at a platform for boarding,
      alt: A train stopped at a platform for boarding,
    }
  - {
      link: /assets/experience/Simulator-Outside.webp,
      caption: A person using one of our simulator for training purpose,
      alt: A person using one of our simulator for training purpose,
    }
---

I mostly do Angular and C++ development for train simulators, involving many different teams (physical modeling, 3D, system architect, networks, GIS data, hardware and backend).

The Angular parts is a 100k+ lines of Code project, separated into a library architecture where different projects can replace part or all of the app. It is used by instructor to manage session and prepare scenario, create rules, add signaling and such.

The C++ part manages a simulation once it is running. It calculates train position, take care of changing feature state (a feature being something that will interact in the session, such as a light changing, point for direction, etc). The architecture is quite remarkable with a distributed store being accessed by different units that can all change parts of the application. If the sound engine crashed for example, you just have to reload it. The simulation won't stop, only the sound will be stopped while it is down.

I have used Python for automating part of the job, converting JSON to XML, writing tools to define splines and such.

We use Unigine as the rendering engine and have written a unit to communicate between our store and the Unigine engine. Unigine simply display our worlds and update based on the simulation state.

I have also worked with C# for our own traffic simulation, including cars, pedestrians and events such as a person fainting, the ambulance coming with sirens on and lights, getting the pedestrian and going out of the way.
