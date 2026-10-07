---
title: Friends Lamp
begin: 2023-05
end: 2023-08
img: ../../assets/project/friendsLamp.webp
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

I ended up making synchronized lamps. Basically, when you touch your lamp, it turns on for a few minutes and turns the other person's lamp on as well. You can select the lamp color and a small text to display on a micro LCD screen. But how to do all this?

We need a way:

- To change the text and the color. Considering we might be anywhere in the world, a website looks like a great idea. So Svelte it is.

- To save the current color and text message depending on the user. So we need authentication as well. So PocketBase it is. It is small, fast and very practical for such a hobby project. Moreover, it will allow me to potentially add groups and such, if I want my parents to join, so on and so forth. Since I'm using Svelte, I had to use good ol' REST requests but that's fine.

- I need to turn the light on and off and display on a screen. So Arduino it is, because it is the obvious embedded system choice. I went for an ESP32 since I'm gonna need a lot of wifi read/write.

- When one light turns on, I need to turn the other one on. How do you do that? Well, it appears the question had been solved a long time ago so I dived deep into IoT messaging and decided to host my own Mosquitto server, which implements the MQTT protocol.

- After that, all that was left was: make the website read/write to PocketBase. Make the ESP listen to MQTT topics and publish on other topics. Make the Arduino read/write from PocketBase to get the supposed color/text for the lamp.

So I bought a Virtual Private Server at DigitalOcean (which hosted this website at the time, before I moved it to OVH), a domain name, a mini LCD screen, an ESP32, a touch sensor, some LEDs and started cooking.

I had quite a lot of trouble understanding reverse proxies at first but considering the size of the project, I decided against Nginx and went for a Caddy proxy with a custom layer 4 for the MQTT protocol security. One great benefit of Caddy is the automatic certificate renewal.

Once all of that was done, all that was left was to enjoy it and gift it. Unfortunately... I did not have time to solder properly so the project works great but does look very bad and I still need to work on the wooden enclosure...

The UI repo can be found here: <https://github.com/Axelgoris99/Friends-lamp-UI>

Maybe I'll publish the rest another day. Maybe not.

The project is now archived and the lamps no longer work.
