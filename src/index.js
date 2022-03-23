import Phaser from 'phaser';
import GameScene from './game/scenes/scene';


export default new Phaser.Game({
    type : Phaser.AUTO,
    width : 600,
    height : 800,    
    parent: 'game',
    scene : GameScene,
    physics : {
      default: 'arcade',
      arcade : {
        debug : 'true'
      }
    }
  })
