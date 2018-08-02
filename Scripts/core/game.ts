/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: objects.Button;
  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];
  let currentScene: objects.Scene;
  let currentState: number;
  let keyboardManager: managers.Keyboard;

  assetManifest = [
    {id: "clickMeButton", src:"Assets/images/clickMeButton.png"},
    {id: "startButton", src:"Assets/images/startButton.png"},
    {id: "instructionButton", src:"Assets/images/instructionButton.png"},
    {id: "instructionKeys", src:"Assets/images/arrowkeys.png"},
    {id: "exitButton", src:"Assets/images/exitButton.png"},
    {id: "nextButton", src:"Assets/images/nextButton.png"},
    {id: "backButton", src:"Assets/images/backButton.png"},
    {id: "levelOneButton", src:"Assets/images/levelOneButton.png"},
    {id: "levelTwoButton", src:"Assets/images/levelTwoButton.png"},
    {id: "freeRunButton", src:"Assets/images/freeRunButton.png"},
        {id: "playAgainButton", src:"Assets/images/playAgainButton.png"},
    {id: "menuButton", src:"Assets/images/menuButton.png"},
    {id: "restartButton", src:"Assets/images/restartButton.png"},
    {id: "ocean", src:"Assets/images/ocean.gif"},
    {id: "plane", src:"Assets/images/plane.png"},
    {id: "island", src:"Assets/images/island.png"},
    {id: "cloud", src:"Assets/images/cloud.png"},
    {id: "engine", src:"Assets/audio/engine.ogg"},
    {id: "theme", src:"Assets/audio/theme.wav"},
    {id: "thunder", src:"Assets/audio/thunder.wav"},
    {id: "yay", src:"Assets/audio/yay.wav"}
  ];

  // preloads assets
  function Init():void {
    console.log("Initialization Started...");
    assetManager = new createjs.LoadQueue(); // creates the assetManager object
    assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
    assetManager.loadManifest(assetManifest);
    assetManager.on("complete", Start, this);
  }

  function Start():void {
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn this on for buttons
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);

    objects.Game.stage = stage;
    objects.Game.currentScene = config.Scene.START;
    currentState = config.Scene.START;

    keyboardManager = new managers.Keyboard();
    objects.Game.keyboardManager = keyboardManager;
    Main();
  }

  function Update():void {
    // if the scene that is playing returns another current scene
    // then call Main again and switch the scene
    if(currentState!= objects.Game.currentScene) {
      Main();
    }

    currentScene.Update();

    stage.update(); // redraws the stage
  }

  function Main():void {
    stage.removeAllChildren();

    switch(objects.Game.currentScene) {
      case config.Scene.START:
        currentScene = new scenes.StartScene(assetManager);
      break;
      case config.Scene.PLAY:
        currentScene = new scenes.PlayScene(assetManager);
      break;
      case config.Scene.OVER:
        currentScene = new scenes.OverScene(assetManager);
      break;
      case config.Scene.INSTRUCTION:
        currentScene = new scenes.InstructionScene(assetManager);
      break;
      case config.Scene.LEVELS:
        currentScene = new scenes.LevelScene(assetManager);
      break;
      case config.Scene.LEVELTWO:
        currentScene = new scenes.levelTwoScene(assetManager);
      break;
      case config.Scene.FREERUN:
        currentScene = new scenes.FreeRun(assetManager);
      break;
    }

    currentState = objects.Game.currentScene;
    stage.addChild(currentScene);
  }

  window.onload = Init;

})();
