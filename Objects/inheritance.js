// Overriding name of the function is the same, parameters are the same and the body is different
// Overloading name being the same and parameters are differnt,  body different
//Encapsulation- getters and setters
class Person {
    constructor(id, name, age, email) {
        this._id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }   
    get id() {
        return this._id;
    }
    set id(id) {
        return this._id;
    }

    showDetails() {
        return `
            ID: ${this.id}
            Name: ${this.name}
            Age: ${this.age}
            Email: ${this.email}
            `;
    }

    //overloading 
    // showDetails(test1, test2) {
    // }
}

class Student extends Person {
    constructor(id, name, age, email, subjects) {
        super(id, name, age, email);
        this.subjects = subjects;
    }

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
        console.log(this.subjects);
    }

    showDetails() {
        console.log(`

        ${this.name} is a student 
        Person Details:
        ${super.showDetails()}
        Subjects: ${this.subjects}
        `);
    }
}

class Teacher extends Person{
    constructor(id, name, age, email, subjects) {
        super(id, name, age, email);
        this.subjects = subjects;
    }

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
        console.log(this.subjects);
    }

    showDetails() {
        console.log(`
        ${this.name} is a teacher
        Teacher Details: 
        ${super.showDetails()}
        He teaches:
        Subjects : ${this.subjects}
        `)
    }
}

class Parent extends Person {
    constructor(id, name, age, email) {
        super(id, name, age, email);
    }
    //application of polymorphism overriding 
    showDetails() {
        console.log(`
        ${this.name} is Joe's parent
        Parent Details: 
        ${super.showDetails()}
        `)
    }
}

const joe = new Student(1, "Joe", 25, "joe@example.com", ["Mathematics"]);
const parent = new Parent(1, "Mrs Flames", 52, "parent@gmail.com");
const teacher = new Teacher(1, "Mr Smith", 58, "teacher@example.com", ["Chemistry"]);
// joe.showDetails();
// parent.showDetails();
// teacher.showDetails();
console.log(joe.id);
joe.id = 2;
joe.showDetails();