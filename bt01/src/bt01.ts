class Vehicle {
    constructor(
        public name: string,
        public year: number,
        public company: string
    ) {}
}

const car = new Vehicle("Toyota", 2020, "Toyota");
const car2 = new Vehicle("VinFast", 2025, "Vf3");
console.log(car);
console.log(car2);
