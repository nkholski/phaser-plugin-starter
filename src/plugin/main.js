export default class CustomPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        this.scene = scene;
        this.counter = 0;
        this.countDelay = 300;
        this.nextCount = 0;
        this.textObject = null;
        this.active = true;
    }

    boot() {
        var eventEmitter = this.systems.events;
        eventEmitter.on('update', this.update, this);
        this.text = this.scene.add.text(100, 200, 'Phaser', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
    }

    update(time, delta) {
        if (!this.active) {
            return;
        }
        if ((this.nextCount -= delta) < 0) {
            if(++this.counter>99){
                this.counter=0;
            }
            this.text.setText(this.counter);
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