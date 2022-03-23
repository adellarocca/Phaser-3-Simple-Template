import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor(){
        super('game');
    }    

    preload(){        
        this.load.baseURL = process.env.APP_ASSETS_BASE_URL;
    };

    create(){
    };

    update(){

    };
}