---
title: Oktal Sydac a.k.a Sogeclair - Fullstack Engineer
begin: 2023-09
end: 2025-09
location: Adelaide, Australia
img: ../../assets/experience/oktalSydac.webp
img_alt: Oktal Sydac Logo
description: |
  Fullstack software engineer on railway training simulators, using Angular, C++ and C#.
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
      link: ../../assets/experience/Sogeclair-Train.webp,
      caption: A train stopped at a platform for boarding,
      alt: A train stopped at a platform for boarding,
    }
  - {
      link: ../../assets/experience/Simulator-Outside.webp,
      caption: A person using one of our simulators for training,
      alt: A person using one of our simulators for training,
    }
---

Some highlights:

- Built a Mixed Reality proof-of-concept training simulation with a Varjo XR4 and Unigine, from design to testing. It was praised as a standout demo at the Asia Pacific Rail conference.
- Optimized a distributed C++ and Angular system, with a 200% speed-up on database loading times, plus a new logging module and tracking metrics to cut time to resolution.
- Developed a large-scale tram simulation in C# for a major Melbourne project, with hundreds of AI-driven pedestrians, vehicles and automated trams.
- Migrated a 10-year-old on-premise Jira instance to the cloud for 180+ people.
- Demonstrated a local AI stack (Ollama, RAG, vector embeddings) on our codebase and knowledge base to senior management, cutting bid management time.
- Led a 6-person, multi-location team through agile sprints.

I mostly did Angular and C++ development for train simulators, involving many different teams (physical modeling, 3D, system architecture, networks, GIS data, hardware and backend).

The Angular part is a 100k+ lines of code project, separated into a library architecture where different projects can replace part or all of the app. Instructors use it to manage sessions, prepare scenarios, create rules, add signaling and such.

The C++ part manages a simulation once it is running. It calculates train positions and takes care of changing feature states (a feature being something that will interact in the session, such as a light changing, points for direction, etc.). The architecture is quite remarkable with a distributed store being accessed by different units that can all change parts of the application. If the sound engine crashed for example, you just have to reload it. The simulation won't stop, only the sound will be stopped while it is down.

I used Python to automate parts of the job, converting JSON to XML, writing tools to define splines and such.

We use Unigine as the rendering engine and have written a unit to communicate between our store and the Unigine engine. Unigine simply displays our worlds and updates them based on the simulation state.

I have also worked with C# for our own traffic simulation, including cars, pedestrians and events such as a person fainting, the ambulance arriving with sirens and lights on, picking up the pedestrian and driving away.
