---
title: Friends Lamp
begin: 2023-05
end: 2023-08
img: /assets/project/friendsLamp.png
img_alt: Two old lamps turned on against a uniform background.
description: |
 Two connected lamps that turn each other on, with a small message as well. Very technical project. Probably my favorite so far!
tags:
  - VPS
  - Domain Name
  - MQTT
  - Arduino
  - Svelte
  - PocketBase
  - Reverse Proxy
  - Caddy
favorite: true
---
For my brother's birthday, before going to Australia, I wanted to gift him something personal.

I ended up thinking about doing synchronous lamp. Basically, when you touch on your lamp, it turns on your lamp for a few minutes and it turns the other person lamp as well. You can selected the color lamp, and a small text to display on a micro LCD screen. But how to do all this?

We need a way:

- To change the text and the color. Considering we might be anywhere in the world, a website looks like a great idea. So Svelte it is.

- To save the current color and text message depending on the user. So we need authentication as well. So PocketBase it is.It it is small, fast and very practical for such a hobby project. Moreover, it will allow me to potentially add groups and such, if I want my parents to join, so on and so forth. Since I'm using svelte, I had to use good ol' REST request but that's fine.

- I need to turn the light on and off and display on a screen. So Arduino it is because it is the obvious embedded system choice. I went for an ESP32 since I'm gonna need a lot of wifi read/write.

- When one light turns on, I need to turn the other one on. How do you do that? Well, it appears the question had been solved a long time ago so I dived deep into IoT messaging and decided to host my own Mosquito server, that implements MQTT protocol.

- After that, all that was left was: make the website read/write to pocketbase. Make the ESP listen to MQTT subject and publish on other subject. Make the arduino read/write from pocketbase to get the supposed color/text for the lamp.

So I bought a Virtual Private Server at Digital Ocean (which currently hosts this website!), a domain name, a mini LCD screen, an ESP32, a touch sensor, some leds and started cooking.

I had quite a lot of trouble in understanding reverse proxy at first but considering the size of the project, I decided against NGinx and went for a caddy proxy with a custom layer 4 for the MQTT protocol security. One great benefit of caddy is the automatic certificate renewal.

Once all of the previous part, all that was left was to enjoy and nicely gift it. Unfortunately... I did not have time to make proper soldering so the project works great but does look very bad and I still need to work on the wood enclosing part...

The UI github can be found here: <https://github.com/Axelgoris99/Friends-lamp-UI>

Maybe I'll publish the rest another day. Maybe not.
