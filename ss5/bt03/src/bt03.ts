class Employee {
    constructor(
        public name: string,
        protected company: string,
        private phone: string
    ) {}

    printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}

const emp = new Employee("John Doe", "Tech Corp", "123-456-7890");

emp.printInfo();

// Để minh họa access modifier:
// console.log(emp.name);     // OK, vì public
// console.log(emp.company);  // Lỗi: Property 'company' is protected
// console.log(emp.phone);    // Lỗi: Property 'phone' is private