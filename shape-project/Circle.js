// Circle.ts 
// import shape = require("./IShape");
// export class Circle extends shape.Shape {
//     public draw(): void {
//         console.log("Cirlce is drawn (external module)", this.name);
//     }
// }
import { displayName } from './IShape';
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Cirlce is drawn (external module)", displayName);
    };
    return Circle;
}());
export default Circle;
