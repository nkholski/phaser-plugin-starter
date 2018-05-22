import CustomPlugin from "../plugin/main";

//import datGuiSetup from './dat.gui.setup.js';

export default class Demo extends Phaser.Scene {

    preload() {
        this.load.scenePlugin('customPlugin', CustomPlugin);
    }
    
    create() {
        const text = this.add.text(100, 200, 'Phaser', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
        this.customPlugin.init(text);
    }
}