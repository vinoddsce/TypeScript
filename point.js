var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drawPoint = function () {
        console.log('X: ' + this._x);
        console.log('Y: ' + this._y);
    };
    ;
    Point.prototype.getX = function () {
        return this._x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('Value cannot be negative');
        }
        this._x = value;
    };
    return Point;
}());
export { Point };
