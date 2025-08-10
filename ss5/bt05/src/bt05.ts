class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}


const rect = new Rectangle(5, 3);


console.log(`Width: ${rect.getWidth()}`);
console.log(`Height: ${rect.getHeight()}`);
console.log(`Area: ${rect.getArea()}`);
console.log(`Perimeter: ${rect.getPerimeter()}`);

// Cập nhật kích cỡ
rect.setWidth(10);
rect.setHeight(4);


console.log(`Updated Width: ${rect.getWidth()}`);
console.log(`Updated Height: ${rect.getHeight()}`);
console.log(`Updated Area: ${rect.getArea()}`);
console.log(`Updated Perimeter: ${rect.getPerimeter()}`);