---
title: Phone Kart
begin: 2022-05
end: 2022-08
img: /assets/project/marioKart.png
img_alt: Mario in a low poly kart with a blurred forest behind
description: |
  A test with using phone as controller and websocket.
tags:
  - Unity
  - Blender
  - Web Socket
  - UDP
  - Mario Kart
  - Racing Game
---
I created a mario kart like where you could play and connect using your phone. Basically, the idea was that sometimes you only have your computer and playing on the same keyboard is not practical. So, why not use your phone? As are Jackbox games doing. However, Jackbox connects to a remote server and uses TCP but for real time games, it is better to stay on local network and avoid latency, as in Eon Altar. So I did my research and started this whole project as an excuse to find more about TCP/UDP, racing game and networking in general.

In the end, you can "play" the game but there is not much to do. You can connect up to 8 players but everything gets very laggy...and you can move your kart that was implemented with the Unity tutorial for kart games.

Very weird project, did not get it very far but still got the whole connection on and added network discovery to find and be able to easily join games.

You can find the client code here: <https://github.com/Axelgoris99/ClientPhoneKart>

You can find the server code here: <https://github.com/Axelgoris99/ServerPhoneKart>
