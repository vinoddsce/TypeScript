// TestShape.ts 
import shape = require("./IShape");
import circle = require("./Circle");


// import triangle = require("./Triangle");

function drawAllShapes(shapeToDraw: shape.Shape) {
    shapeToDraw.draw();
    console.log();
}

let cirObj = new circle.Circle();
drawAllShapes(cirObj);
// drawAllShapes(new triangle.Triangle());


// tsc --module es2015 TestShape.ts