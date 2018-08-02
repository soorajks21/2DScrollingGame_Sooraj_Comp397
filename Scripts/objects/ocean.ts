// SOORAJ SURESH 
// 300981570
// INFINITY WAR
module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;

    // public properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset():void {
      this.x = 0;
    }

    // move the object to some new location
    private _move():void {
      this.x -= this._dy;
    }

    // check to see if some boundary has been passed
    private _checkBounds():void {
      if(this.x <= -640) {
        this._reset();
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this._reset();
    }

    // updates the game object every frame
    public Update():void {
      this._move();
      this._checkBounds();
    }
  }
}
