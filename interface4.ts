
interface Shape {
    draw(): void;
    getArea(): number;
}


class Circle implements Shape {
    constructor(private radius: number) {}

    draw(): void {
        console.log("Drawing a circle...");
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}


class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    draw(): void {
        console.log("Drawing a rectangle...");
    }

    getArea(): number {
        return this.width * this.height;
    }
}



let rectangle = new Rectangle(4, 6);
rectangle.draw(); 
console.log("Area of the rectangle:", rectangle.getArea()); 
