---
title: Dice Game - Flutter Learning
begin: 2025-01
end: 2025-01
img: /assets/project/Flutter.webp
img_alt: The flutter logo
description: |
  A dice game for a friend.
tags:
  - Flutter
  - Dart
  - Android Studio
favorite: true
---

A friend of mine has a game he used to play when he was younger. The idea is simple: You throw dices. Depending on the combination, you have a rule associated. After a couple party, players can add their own combinations.

So I've set up a simple flutter app, for learning purpose on my side, but with real implications for my friend. We considered him as the "client" and I did all of the design and development.

To understand the whole thing, let's go from setup to playing.

1. Add your players. Single screen, easy to add, remove, edit players. Say, "Foo" & "Bar".
2. Add the possible role. Maybe, there is a "wizard", a "thief" and a "knight".
3. Add rules. That's the main part. In there, you can define a rule as a description, a role to assign or a role to target. Like "Become the wizard: Assign Wizard", "Drink one potion: Target Wizard".
4. Add combinations. You define dices depending on the number of dice used for that specific game and assign a rule to it. Like "6,6: Become the Wizard".
5. Roll the dices! There's a current player that can roll the dice. If an added combination is rolled, the rule triggers and the user might change its own role or make the targeted role do something. Say "Foo" rolls "6,6" he will become the wizard and get the role assigned to himself. If "Bar" rolls the combination for the other rule "Drink one potion", the new Wizard (Foo), will drink.

That's about it!
Pretty easy but I made it in a way that players can add new rules, persistence of data is implemented, export and import as json, create different games with different rules and such.
