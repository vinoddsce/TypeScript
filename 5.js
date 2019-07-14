//Alternatively we can define constants in TS as follows.
var Color;
(function (Color) {
    Color[Color["RED"] = 2] = "RED";
    Color[Color["GREEN"] = 100] = "GREEN";
    Color[Color["BLUE"] = 101] = "BLUE";
})(Color || (Color = {}));
;
// enum Color { RED, GREEN, BLUE };
console.log(Color.RED);
console.log(Color.GREEN);
console.log(Color.BLUE);
