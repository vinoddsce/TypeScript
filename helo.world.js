var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.hello = function () {
        alert("Hello");
    };
    HelloWorld.prototype.helloWithName = function (name) {
        alert("Hello" + name);
    };
    return HelloWorld;
}());
export { HelloWorld };
