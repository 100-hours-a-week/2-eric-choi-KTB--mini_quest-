class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);  
    }


    isSquare() {
        return this.width === this.height;
    }
}