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
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // private instance variables
        // public properties
        // Constructor
        function Plane(assetManager) {
            var _this = _super.call(this, assetManager, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Plane.prototype.Start = function () {
            this.x = 320;
            this.y = 430;
        };
        // updates the game object every frame
        Plane.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Plane.prototype.Reset = function () {
        };
        // move the object to some new location
        Plane.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            if (objects.Game.keyboardManager.moveForward) {
                this.y -= 5;
            }
            if (objects.Game.keyboardManager.moveBackward) {
                this.y += 5;
            }
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 10;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
        };
        // check to see if some boundary has been passed
        Plane.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= 480 - this.halfWidth) {
                this.y = 480 - this.halfWidth;
            }
            // left boundary
            if (this.y <= this.halfWidth) {
                this.y = this.halfWidth;
            }
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map