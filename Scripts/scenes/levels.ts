// SOORAJ SURESH 
// 300981570
// INFINITY WAR
module scenes {
    export class LevelScene extends objects.Scene {
      // Private Instance Variables
      private _welcomeLabel: objects.Label;
      private _levelOneButton: objects.Button;
      private _levelTwoButton : objects.Button;
      private _freeRunButton : objects.Button;
      private _menuButton: objects.Button;
      private _ocean: objects.Ocean;
  
  
      private _gameTheme: createjs.AbstractSoundInstance;
  
      // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
  
        this.Start();
      }
  
      // Private Mathods

      private _menuButtonClick():void {
        objects.Game.currentScene = config.Scene.START;
      }

      private __levelOneButtonClick():void {
  
        objects.Game.currentScene = config.Scene.PLAY;
        
      }
      private _levelTwoButtonClick():void {
  
            
        objects.Game.currentScene = config.Scene.LEVELTWO;

         
    }
      private _freeRunButtonClick():void {
        objects.Game.currentScene = config.Scene.FREERUN;
      }
  
  
      // Public Methods
      public stopMusic():void{
        this._gameTheme.stop();
      }
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean(this.assetManager);
  
        this._welcomeLabel = new objects.Label("LEVELS", "60px", "Consolas", "#FAEFFF", 320, 50, true);
        this._levelOneButton = new objects.Button(this.assetManager, "levelOneButton", 320, 160);
        this._levelTwoButton = new objects.Button(this.assetManager, "levelTwoButton", 320, 230);
        this._freeRunButton = new objects.Button(this.assetManager, "freeRunButton", 320, 300);
            this._menuButton = new objects.Button(this.assetManager, "menuButton", 320, 370);

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
        this.addChild(this._levelOneButton);
  
        // add the instructionButton to the scene
        this.addChild(this._levelTwoButton);
  
        // add the exit Button to the scene
        this.addChild(this._freeRunButton);

        // add the menu Button to the scene
        this.addChild(this._menuButton);
  
        this._levelOneButton.on("click", this.__levelOneButtonClick);
        this._levelTwoButton.on("click", this._levelTwoButtonClick);
        this._freeRunButton.on("click", this._freeRunButtonClick);
        this._menuButton.on("click", this._menuButtonClick);
  
      }
    }
  }
  