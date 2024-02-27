import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PlatformerGame = () => {
  class Example extends Phaser.Scene{
    constructor(){

    }
    preload(){

    }
    create(){

    }
    update(){
      
    }
  }

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    parent: "game-container",
    physics: {
      default: 'arcade',
      arcade: {debug: true}
    },
    scene: Example
  }
  useEffect(() => {
    new Phaser.Game(config);
  })
  return <div id="game-container" />;
};

export default PlatformerGame;
