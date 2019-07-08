"use strict";
exports.__esModule = true;
var circle = require("./Circle");
// import triangle = require("./Triangle");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
    console.log(window);
}
var cirObj = new circle.Circle();
drawAllShapes(cirObj);
// drawAllShapes(new triangle.Triangle());
// tsc --module es2015 TestShape.ts
