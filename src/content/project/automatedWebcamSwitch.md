---
title: Automated Webcam Switcher
begin: 2022-01
end: 2022-04
img: /assets/project/webcam.png
img_alt: A webcam icon
description: |
  A webcam switcher software for an innovative entreneurship class.
tags:
  - Business
  - Entrepreneurship
  - Python
---
In group of 5, we had to come up with a business plan for a startup and we decided to go for an automated webcam switcher.

Once more, that was more of an excuse for myself to play around with a cool tech: I was both the manager and the main dev.

Basically, I used a face detection algorithm that would switch the camera depending on where you looked to give the impression that the person was always talking to you in a conf call. This had limitations since I was using python for the processing so not enough fps and I used OBS with web sockets to easily switch between cameras. That needed quite some setup, multiple cameras and a working OBS.
