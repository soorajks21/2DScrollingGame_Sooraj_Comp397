// SOORAJ SURESH 
// 300981570
// INFINITY WAR
module scenes {
  export class OverScene extends objects.Scene {
    // Private Instance Variables
    private _overLabel: objects.Label;
    private _playAgainButton: objects.Button;
    private _menuButton: objects.Button;
        private _ocean: objects.Ocean;

    private _scoreboard: managers.ScoreBoard;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods
    private _playAgainButtonClick():void {
      objects.Game.currentScene = config.Scene.PLAY;
    }

    private _menuButtonClick():void {
      objects.Game.currentScene = config.Scene.START;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._ocean = new objects.Ocean(this.assetManager);
      this._overLabel = new objects.Label("Game Over", "60px", "Consolas", "#FAEFFF", 320, 60, true);
      this._playAgainButton = new objects.Button(this.assetManager, "playAgainButton", 320, 290);
      this._menuButton = new objects.Button(this.assetManager, "menuButton", 320, 360);

      this._scoreboard = new managers.ScoreBoard();

      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    // This is where the fun happens
    public Main(): void {
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
    }
  }
}
