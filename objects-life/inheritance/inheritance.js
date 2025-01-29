/**
 * Like the term inheritance by itself is self explanatory, inheritance in js is nothing but inheriting the
 * properties and behavior of the base class into derived class
 */

// Base Class (Super Class)
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Hi, my name is ${this.name}.`;
    }
}

// Subclass: Student (Extends Person)
class Student extends Person {
    constructor(name, age) {
        super(name); // Call the parent constructor
        this.age = age;
    }

    introduce() {
        return `Hi, I am ${this.name}, a student, and I am ${this.age} years old.`;
    }
}

// Subclass: Employee (Extends Person)
class Employee extends Person {
    constructor(name, age) {
        super(name); // Call the parent constructor
        this.age = age;
    }

    introduce() {
        return `Hello, I am ${this.name}, an employee, and I am ${this.age} years old.`;
    }
}

// Example Usage
const student = new Student("Alice", 20);
const employee = new Employee("Bob", 30);

console.log(student.introduce());  // Output: "Hi, I am Alice, a student, and I am 20 years old."
console.log(employee.introduce()); // Output: "Hello, I am Bob, an employee, and I am 30 years old."

/**
 * instanceof binary operator usually is used to identify if the class is a derived class or base class
 */

instanceof Student; //output: true - derived class
instanceof Person; //output: false - base class