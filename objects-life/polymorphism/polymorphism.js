/**
 * Polymorphism allows different classes or objects to share the same method names but have different behaviors when called.
 * We define a base class Person with a constructor for name and methods that can be overridden.
 * We create two subclasses (Student and Employee) that extend Person and override its methods.
 */

// Base class
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Hi, my name is ${this.name}.`;
    }
}

// Subclass: Student
class Student extends Person {
    constructor(name, age, gender) {
        super(name); // Calls the constructor of the base class
        this.age = age;
        this.gender = gender;
    }

    // Polymorphic method (overriding)
    introduce() {
        return `Hi, my name is ${this.name}, I am ${this.age} years old, and I am a ${this.gender} student.`;
    }
}

// Subclass: Employee
class Employee extends Person {
    constructor(name, age, gender, jobTitle) {
        super(name);
        this.age = age;
        this.gender = gender;
        this.jobTitle = jobTitle;
    }

    // Polymorphic method (overriding)
    introduce() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`;
    }
}

// Example usage
const person = new Person("Alex");
const student = new Student("Emma", 20, "female");
const employee = new Employee("John", 30, "male", "Software Engineer");

console.log(person.introduce());   // Output: "Hi, my name is Alex."
console.log(student.introduce());  // Output: "Hi, my name is Emma, I am 20 years old, and I am a female student."
console.log(employee.introduce()); // Output: "Hello, my name is John, I am 30 years old, and I work as a Software Engineer."