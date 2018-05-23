# Plugin Starter Kit for Phaser

A webpack 4 build environment for creating Plugins for Phaser 3.8.0+ with ES6 support, demo app with dat.gui integration and a build script. Check my Grid Physics and Animated Tiles plugins for more complex examples.

## Why making a plugin is a great idea
Games are complex undertakings and being able to decouple and split up code become more crucial when a project grows. By making a plugin you may extract a part of your project into a separate side project. You may see it as a sub-goal to achieve and then tuck it away and keep it separate from the rest of the code base. If your project fail, which is what happens to most of my projects as a hobbyist, you can bring your plugins to other projects and at least get some feeling of satisfaction :-).

Sharing your plugins you're an asset for the community at the same time and if you're lucky someone else might even join in and improve what you have created.

## Install repository
Clone the repository from git and run `npm i` and you're set to go.

## Demo / Dev
The plugin is bundled with a demo which is used for testing during development. Build your demo to match your needs and test your plugin on the fly while developing. Change parameters from dat.gui. Run `npm run demo` or `npm run dev` in your terminal and direct your browser to http://localhost:3000.

## Build plugin
Build the plugin including minified version. Targets the dist folder.
`npm run build`