module managers {
  export class Collision {

    public static Check(object1: objects.GameObject, object2: objects.GameObject) {
      // create two vec2 objects
      let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
      let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

      if(math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
        if(!object2.isColliding) {
          object2.isColliding = true;
          switch(object2.name) {
            case "island":
            object2.x=-20;
              createjs.Sound.play("yay");
               objects.Game.scoreBoard.Score += 100;
              if(objects.Game.HighScore <= objects.Game.scoreBoard.Score) {
                objects.Game.scoreBoard.HighScore = objects.Game.scoreBoard.Score;
                objects.Game.HighScore = objects.Game.scoreBoard.HighScore;
              }
            break;
            case "cloud":
              createjs.Sound.play("thunder");
              objects.Game.scoreBoard.Lives -= 1;
            break;
          }
        }
      }
      else {
        object2.isColliding = false;
      }
    }
  }
}
