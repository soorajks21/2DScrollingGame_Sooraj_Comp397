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
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Public Properties
        // Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        OverScene.prototype._playAgainButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        OverScene.prototype._menuButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        // Public Methods
        // Initialize Game Variables and objects
        OverScene.prototype.Start = function () {
            this._ocean = new objects.Ocean(this.assetManager);
            this._overLabel = new objects.Label("Game Over", "60px", "Consolas", "#FAEFFF", 320, 60, true);
            this._playAgainButton = new objects.Button(this.assetManager, "playAgainButton", 320, 290);
            this._menuButton = new objects.Button(this.assetManager, "menuButton", 320, 360);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        };
        OverScene.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        OverScene.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._overLabel);
            // add the play again button to the scene
            this.addChild(this._playAgainButton);
            // add the menu button to the scene
            this.addChild(this._menuButton);
            // add scoreboard to the scene
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore = objects.Game.HighScore;
            // event listeners
            this._playAgainButton.on("click", this._playAgainButtonClick);
            this._menuButton.on("click", this._menuButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map