class Vehicle {
    constructor(
        public name: string,
        protected year: number,
        private company: string,
        public readonly id: number
    ) {}

    printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}

const vehicle = new Vehicle("Toyota Camry", 2022, "Toyota", 12345);

vehicle.printInfo();