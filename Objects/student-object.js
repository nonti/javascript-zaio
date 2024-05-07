//create a class it must always contain a constructor function
class Student {
    constructor(id, name, age, subjects) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
        console.log(this.subjects);
    }
}


const joe = new Student(1, "Joe", 25, ['Mathematics']);
const kim = new Student(2, "Kim", 27, ['Mathematics', 'Chemistry']);
joe.addSubject("Electronics");
console.log([joe,kim]);