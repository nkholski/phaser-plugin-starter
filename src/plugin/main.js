export default class CustomPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        this.counter = 0;
        this.countDelay = 300;
        this.nextCount = 0;
        this.textObject = null;
    }

    boot() {
        var eventEmitter = this.systems.events;
        eventEmitter.on('update', this.update, this);
    }

    init(textObject) {
        this.text = textObject;
        console.log("text!");
    }

    update(time, delta) {
        if (!this.text) {
            return;
        }
        if ((this.nextCount -= delta) < 0) {
            this.text.setText(this.counter++);
            this.nextCount = this.countDelay;
        }
    }
    setDelay(delay){
        this.countDelay = delay;
    }
    reset() {
        this.counter = 0;
        this.text.setText(0);
    }
}