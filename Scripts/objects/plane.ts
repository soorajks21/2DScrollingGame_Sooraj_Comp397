// SOORAJ SURESH 
// 300981570
// INFINITY WAR
module objects {
  export class Plane extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "plane");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.x = 320;
      this.y = 430;
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {

    }

    // move the object to some new location
    public Move():void {
     // mouse controls
     // this.x = objects.Game.stage.mouseX;

     // keyboard controls
     if(objects.Game.keyboardManager.moveForward) {
       this.y -= 5;
     }

     if(objects.Game.keyboardManager.moveBackward) {
       this.y += 5;
     }
     if(objects.Game.keyboardManager.moveLeft) {
      this.x -= 10;
    }

    if(objects.Game.keyboardManager.moveRight) {
      this.x += 5;
    }

    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // right boundary
      if(this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // left boundary
      if(this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
      if(this.y >= 480 - this.halfWidth) {
        this.y = 480 - this.halfWidth;
      }

      // left boundary
      if(this.y <= this.halfWidth) {
        this.y = this.halfWidth;
      }
    }
  }
}
