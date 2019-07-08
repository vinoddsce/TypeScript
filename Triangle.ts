// Triangle.ts 
import shape = require("./IShape");
export class Triangle implements shape.IShape {
   public draw(): void {
      console.log("Triangle is drawn (external module)");
   }
}