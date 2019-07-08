// class Point {
//     x: number = 100;
//     y: number = 200;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }

//     drawPoint() {
//         console.log('X: ' + this.x);
//         console.log('Y: ' + this.y);
//     };

//     getDistance(another: Point) {
//         // ...
//     }
// }

// let point: Point;
// point.drawPoint();

// But we get error of drawPoint() is undefined. 
// ? Because we have declared the variable but 
// not allocated the memory for the custom types. 

// let point: Point = new Point(1, 2000);
// OR
// let point = new Point();
// point.drawPoint();


// tsc 9.ts && node 9.js
