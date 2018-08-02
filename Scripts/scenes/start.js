var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// SOORAJ SURESH 
// 300981570
// INFINITY WAR
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Public Properties
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        StartScene.prototype._startButtonClick = function () {
            objects.Game.currentScene = config.Scene.LEVELS;
        };
        StartScene.prototype._instructionButtonClick = function () {
            console.log("INSTRUCTION Started...");
            objects.Game.currentScene = config.Scene.INSTRUCTION;
        };
        StartScene.prototype._exitButtonClick = function () {
            window.close();
        };
        // Public Methods
        StartScene.prototype.stopMusic = function () {
            this._gameTheme.stop();
        };
        // Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            this._ocean = new objects.Ocean(this.assetManager);
            this._welcomeLabel = new objects.Label("Infinity War", "60px", "Consolas", "#7f0000", 320, 120, true);
            this._startButton = new objects.Button(this.assetManager, "startButton", 320, 220);
            this._instructionButton = new objects.Button(this.assetManager, "instructionButton", 320, 290);
            this._exitButton = new objects.Button(this.assetManager, "exitButton", 320, 360);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        StartScene.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._welcomeLabel);
            // add the startButton to the scene
            this.addChild(this._startButton);
            // add the instructionButton to the scene
            this.addChild(this._instructionButton);
            // add the exit Button to the scene
            this.addChild(this._exitButton);
            this._startButton.on("click", this._startButtonClick);
            this._instructionButton.on("click", this._instructionButtonClick);
            this._exitButton.on("click", this._exitButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map