class Student {
    constructor(
        public id: number,
        public age: number,
        public email: string
    ) {}
}

const students: Student[] = [
    new Student(1, 20, "student1@example.com"),
    new Student(2, 21, "student2@example.com")
];

students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});