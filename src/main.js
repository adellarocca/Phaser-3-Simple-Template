import Phaser from './lib/phaser';
import Game from './scenes/game';

export default new Phaser.Game({
    type : Phaser.AUTO,
    width : 600,
    height : 800,
    scene : Game,
    physics : {
      default: 'arcade',
      arcade : {
        debug : 'true'
      }
    }
  })
