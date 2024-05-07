function Student(id, name, age, subjects) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.subjects = subjects;
}
    
const joe = new Student(1, "Joe", 25, ['Mathematics']);
const kim = new Student(2, "Kim", 27, ['Mathematics', 'Chemistry']);
Student.prototype.addSubject = function (subject) {
    this.subjects =  [...this.subjects, subject];
}


kim.addSubject("Biology");
console.log(joe, kim); 