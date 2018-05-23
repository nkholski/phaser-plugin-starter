import dat from 'dat.gui';
export default class datGuiSetup extends dat.GUI {
    constructor(plugin) {
        super()
        this.plugin = plugin;
        console.log(plugin);
        this.settings = {
            delay: this.plugin.countDelay
        };
        this.makeFolders();
    }

    makeFolders() {
        /// GLOBAL
        let folder = this.addFolder('Global');
        let f = folder.add(this.settings, 'delay', 0, 2000)
            .onChange((value) => {
                this.plugin.setDelay(value);
            });
        /// STATS
        folder = this.addFolder('Stats');
        folder.add(this.plugin, 'counter', 0, 100).step(1).listen();
        /// A BUTTON
        this.add(this.plugin, 'reset');
    }
}