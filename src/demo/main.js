import Demo from './demo.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        Demo
    ]
};

const game = new Phaser.Game(config);