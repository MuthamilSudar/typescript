var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a circle...");
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.draw = function () {
        console.log("Drawing a rectangle...");
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
circle.draw();
console.log("Area of the circle:", circle.getArea());
var rectangle = new Rectangle(4, 6);
rectangle.draw();
console.log("Area of the rectangle:", rectangle.getArea());
