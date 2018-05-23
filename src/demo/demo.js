import CustomPlugin from "../plugin/main";
import datGuiSetup from './dat.gui.setup.js';

export default class Demo extends Phaser.Scene {

    preload() {
        this.load.scenePlugin('customPlugin', CustomPlugin);
    }
    
    create() {
        new datGuiSetup(this.customPlugin);
    }
    
}