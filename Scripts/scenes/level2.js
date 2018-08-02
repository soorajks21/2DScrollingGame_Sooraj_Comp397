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
    var levelTwoScene = /** @class */ (function (_super) {
        __extends(levelTwoScene, _super);
        // Public Properties
        // Constructor
        function levelTwoScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        // Public Methods
        // Initialize Game Variables and objects
        levelTwoScene.prototype.Start = function () {
            this._ocean = new objects.Ocean(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this._island = new objects.Island(this.assetManager);
            // instantiate the cloud array
            this._clouds = new Array();
            this._cloudNum = 5;
            // loop and add each cloud to the array
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud(this.assetManager);
            }
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1; // play forever
            this._engineSound.volume = 0.8;
            // create the scoreboard UI for the Scene
            this._scoreBoard = new managers.ScoreBoard();
            objects.Game.scoreBoard = this._scoreBoard;
            this.Main();
        };
        // triggered every frame
        levelTwoScene.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._plane.Update();
            this._island.Update();
            // check collision between plane and island
            managers.Collision.Check(this._plane, this._island);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                // check collision between plane and current cloud
                managers.Collision.Check(_this._plane, cloud);
            });
            // if lives fall below zero switch scenes to the game over scene
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                objects.Game.currentScene = config.Scene.OVER;
            }
        };
        // This is where the fun happens
        levelTwoScene.prototype.Main = function () {
            var _this = this;
            // add the ocean to the scene
            this.addChild(this._ocean);
            // add the island to the scene
            this.addChild(this._island);
            // add the plane to the scene
            this.addChild(this._plane);
            // add clouds to the scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add scoreboard labels to the scene
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return levelTwoScene;
    }(objects.Scene));
    scenes.levelTwoScene = levelTwoScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map