---
title: Game Control Code
comments: True
layout: post
description: How java scrit objects are collected
author: John Mortensen
type: ccc
courses: {'csse': {'week': 3}}
---

## Java script to Game setup

We started by creating a .js file called chocofrog that extends character

Then we defined it in game setter quitich under assets and enimies

```
  chocoFrog: {
      src: "/images/platformer/platforms/Chocolatefrog.jpg",
      width: 200,
      height: 200,
      hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 }
```

we then defined it in the code by adding it to the game objects

```
{ name: 'chocoFrog', id: 'chocoFrog', class: ChocoFrog, data: assets.enemies.chocoFrog, xPercentage: 0.30, yPercentage: 0.45},
```
The Quidditch chocolate frog which is basically just a mushroom. We added this in order to triger the spawn platform because our levle origonaly did not have a mushroom. When the java script objects are added into game set up they are described and then put into order based on there z-level.
## Game Control

# Trasitioning between levels

```
 @param {Object} newLevel - The new level to transition to.
     */
    async transitionToLevel(newLevel) {
        this.inTransition = true;
```
- This code stes up the "new level" as an object and creates a method named transition to new level which will manage the transitions between game levels.

```
GameEnv.destroy();

        // Load GameLevel objects
        if (GameEnv.currentLevel !== newLevel) {
            GameEnv.claimedCoinIds = [];
        }
        await newLevel.load();
        GameEnv.currentLevel = newLevel;

        // Update invert property
        GameEnv.setInvert();
        
        // Trigger a resize to redraw canvas elements
        window.dispatchEvent(new Event('resize'));

        this.inTransition = false;
```
- This code, using conditionaal statements, shows how it destroys the current game level, checks if the game levels are different and if they are it resets the coins, and then loads the next ones objects then it updates the games visual properties like colors and blocks, then resizes the game to fit the window and then indicates the transition proces is complete.

- Game level is used to represent the properties and objects of the new game level in the code. This means things like game objects, sizing, and coloring.
```
 if (currentLevel.isComplete && currentLevel.isComplete()) {
                const currentIndex = GameEnv.levels.indexOf(currentLevel);
```
- using a game loop gaamecontrol checks wether the level is complete by using the if (currentLevel.isComplete && currentLevel.isComplete()) and if it comes back true then it signals the level is done and trigers the next line of code to determine the next level.

## Inspect
- By using Inspect/Elements you can see an objects changes in properties by finding there canvas ID and clicing on it. This will show you live changes in there position, form, display, and sizing.

## Game level to an Array of game levels
- This is done by taking code that may have only been used to describe one game level and maaking it describe all or multiple game levels.
```
 @property {Array} levels
```
this code found in Game.Env allows you to make code meant for one game level and apply it to multiple by making a property that allows there to be multiple game levels