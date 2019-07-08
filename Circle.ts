// Circle.ts 
import shape = require("./IShape");

export class Circle extends shape.Shape {
    public draw(): void {
        console.log("Cirlce is drawn (external module)", this.name);
    }
}

// import Shape from './IShape';

// export class Circle extends Shape {
//     public draw(): void {
//         console.log("Cirlce is drawn (external module)", this.name);
//     }
// } 