var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = 100;
        this.y = 200;
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log('X: ' + this.x);
        console.log('Y: ' + this.y);
    };
    ;
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// let n: number;
// let point: Point;
// point.drawPoint();
// But we get error of drawPoint() is undefined. 
// ? Because we have declared the variable but 
// not allocated the memory for the custom types. 
// let n:number = 100;
// let point: Point = new Point(1, 2000);
// OR
// let n = 100;
var point = new Point(1, 2000);
point.drawPoint();
// tsc 9.ts && node 9.js
