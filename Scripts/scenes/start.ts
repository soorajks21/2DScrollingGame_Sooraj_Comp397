// SOORAJ SURESH 
// 300981570
// INFINITY WAR
module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
    private _instructionButton : objects.Button;
    private _exitButton : objects.Button;
    private _ocean: objects.Ocean;


    private _gameTheme: createjs.AbstractSoundInstance;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {

      objects.Game.currentScene = config.Scene.LEVELS;
      
    }
    private _instructionButtonClick():void {

      console.log("INSTRUCTION Started...");
      
      objects.Game.currentScene = config.Scene.INSTRUCTION;
      
    }
    private _exitButtonClick():void {
      window.close();
    }


    // Public Methods
    public stopMusic():void{
      this._gameTheme.stop();
    }

    // Initialize Game Variables and objects
    public Start(): void {
      this._ocean = new objects.Ocean(this.assetManager);

      this._welcomeLabel = new objects.Label("Infinity War", "60px", "Consolas", "#7f0000", 320, 120, true);
      this._startButton = new objects.Button(this.assetManager, "startButton", 320, 220);
      this._instructionButton = new objects.Button(this.assetManager, "instructionButton", 320, 290);
      this._exitButton = new objects.Button(this.assetManager, "exitButton", 320, 360);
    
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

    }
  }
}
