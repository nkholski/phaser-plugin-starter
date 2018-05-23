(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CustomPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["CustomPlugin"] = factory();
	else
		root["CustomPlugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomPlugin = function (_Phaser$Plugins$Scene) {
    _inherits(CustomPlugin, _Phaser$Plugins$Scene);

    function CustomPlugin(scene, pluginManager) {
        _classCallCheck(this, CustomPlugin);

        var _this = _possibleConstructorReturn(this, (CustomPlugin.__proto__ || Object.getPrototypeOf(CustomPlugin)).call(this, scene, pluginManager));

        _this.scene = scene;
        _this.counter = 0;
        _this.countDelay = 300;
        _this.nextCount = 0;
        _this.textObject = null;
        _this.active = true;
        return _this;
    }

    //  Called when the Plugin is booted by the PluginManager.
    //  If you need to reference other systems in the Scene (like the Loader or DisplayList) then set-up those references now, not in the constructor.


    _createClass(CustomPlugin, [{
        key: 'boot',
        value: function boot() {
            var eventEmitter = this.systems.events;
            eventEmitter.on('update', this.update, this);
            this.text = this.scene.add.text(100, 200, 'Phaser', {
                fontFamily: 'Arial',
                fontSize: 64,
                color: '#00ff00'
            });

            /* 
                List of unused eventEmitters to activate matching methods of this plugin
            */

            //eventEmitter.on('start', this.start, this);

            //eventEmitter.on('preupdate', this.preUpdate, this);
            //eventEmitter.on('postupdate', this.postUpdate, this);

            //eventEmitter.on('pause', this.pause, this);
            //eventEmitter.on('resume', this.resume, this);

            //eventEmitter.on('sleep', this.sleep, this);
            //eventEmitter.on('wake', this.wake, this);

            //eventEmitter.on('shutdown', this.shutdown, this);
            //eventEmitter.on('destroy', this.destroy, this);*/
        }

        //  Called when a Scene is started by the SceneManager. The Scene is now active, visible and running.

    }, {
        key: 'start',
        value: function start() {}

        //  Called every Scene step - phase 1

    }, {
        key: 'preUpdate',
        value: function preUpdate(time, delta) {}

        //  Called every Scene step - phase 2

    }, {
        key: 'update',
        value: function update(time, delta) {
            if (!this.active) {
                return;
            }
            if ((this.nextCount -= delta) < 0) {
                if (++this.counter > 99) {
                    this.counter = 0;
                }
                this.text.setText(this.counter);
                this.nextCount = this.countDelay;
            }
        }

        //  Called every Scene step - phase 3

    }, {
        key: 'postUpdate',
        value: function postUpdate(time, delta) {}

        //  Called when a Scene is paused. A paused scene doesn't have its Step run, but still renders.

    }, {
        key: 'pause',
        value: function pause() {}

        //  Called when a Scene is resumed from a paused state.

    }, {
        key: 'resume',
        value: function resume() {}

        //  Called when a Scene is put to sleep. A sleeping scene doesn't update or render, but isn't destroyed or shutdown. preUpdate events still fire.

    }, {
        key: 'sleep',
        value: function sleep() {}

        //  Called when a Scene is woken from a sleeping state.

    }, {
        key: 'wake',
        value: function wake() {}

        //  Called when a Scene shuts down, it may then come back again later (which will invoke the 'start' event) but should be considered dormant.

    }, {
        key: 'shutdown',
        value: function shutdown() {}

        //  Called when a Scene is destroyed by the Scene Manager. There is no coming back from a destroyed Scene, so clear up all resources here.

    }, {
        key: 'destroy',
        value: function destroy() {
            this.shutdown();
            this.scene = undefined;
        }

        //  Custom method for this plugin

    }, {
        key: 'setDelay',
        value: function setDelay(delay) {
            this.countDelay = delay;
        }

        //  Custom method for this plugin

    }, {
        key: 'reset',
        value: function reset() {
            this.counter = 0;
            this.text.setText(0);
        }
    }]);

    return CustomPlugin;
}(Phaser.Plugins.ScenePlugin);

exports.default = CustomPlugin;

/***/ })
/******/ ]);
});
//# sourceMappingURL=CustomPlugin.min.map