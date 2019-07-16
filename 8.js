// In last session we discssed about the interfaces. 
// But there is problem in that. 
// class PointImpl {
//     x: number;
//     y: number;
//     drawPoint(): void {
//         console.log("X: ", this.x, ", Y: ", this.y);
//     }
//     getDistance(point: PointImpl): number {
//         return 100;
//     }
// }
// // let n: number = 100;
// let p1: PointImpl = new PointImpl();
// p1.x = 100;
// p1.y = 200;
// p1.drawPoint();
// let p2: PointImpl = new PointImpl();
// p2.x = 28;
// p2.y = 50;
// p2.drawPoint();
var PointClass = /** @class */ (function () {
    // constructor() {
    //     this.x = 1;
    //     this.y = 2;
    // }
    // constructor() { }
    function PointClass(xValue, yValue) {
        this.x = xValue;
        this.y = yValue;
    }
    PointClass.prototype.drawPoint = function () {
        console.log("X: ", this.x, ", Y: ", this.y);
    };
    PointClass.prototype.getDistance = function (point) {
        return 100;
    };
    return PointClass;
}());
var point1 = new PointClass(25, 44);
point1.drawPoint();
// Using class
// class Point {
//     x: number;
//     y: number;
// constructor() {}
//     drawPoint(): void {
//         console.log("drawPoint");
//     };
//     getDistance(another: Point): Point {
//         console.log("getDistance");
//         return new Point();
//     }
// }
// class PointClass implements Point {
//     x: number;
//     y: number;
//     drawPoint(): void {
//         console.log("drawPoint");
//     };
//     getDistance(another: Point): Point {
//         console.log("getDistance");
//         return new PointClass();
//     }
// }
// let p = new Point();
// p.x = 100;
// p.y = 200;
// p.drawPoint();
// let p2 = new Point();
// p2.x = 100;
// p2.y = 200;
// p.getDistance(p2);
