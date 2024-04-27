/*Create a new object for a student. (1)
Add the following properties/keys with their relevant values:
firstName (1)
lastName (1)
studentNumber - (can be any random number) (1)
subjects - (should be an array of at least 6 subjects) (6)
Add a function in your object to log an introduction with a list of subjects formatted where each subject will display on a new line. (3)
Add a function to change the studentNumber. (3)
Add a function to delete the new student number. (3)
Add a function to add a new property to the object. (any property that you choose) (3)

Ensure that all functions are called to produce your results as per the brief above. (2)
Zip your repo and submit your project on time (2)

 */

let student = {
    firtsName: 'Nonty',
    lastName: 'Mbowane',
    studentNumber: 7825844,
    subjects: ['Mathematics','English','Afrikaans','Geography','History','Biology']
}

   //This function logs the student information
function logStudent() {
    
    return student;
}

console.log(logStudent());

const result = logStudent();
console.log(`My name is ${result.firtsName} ${result.lastName}, 
My student number is ${result.studentNumber} and
I am doing the following subjects: 
${result.subjects[0]}
${result.subjects[1]}
${result.subjects[2]}
${result.subjects[3]}
${result.subjects[4]}
${result.subjects[5]}`);

//This function change the student number
function changeStudentNumber() {
    let newStudentNumber = student.studentNumber + 1;
    if (student.hasOwnProperty('studentNumber')) {
        student.studentNumber = newStudentNumber;
    }
    return newStudentNumber;
}
// This calls changeStudentNumber()
const changedStudentNumberResult = changeStudentNumber();
console.log(`The student number is changed to ${changedStudentNumberResult}`);


function deleteNewStudentNumber() {
    let delNewStudentNumber = student.studentNumber - 1;
    if (student.hasOwnProperty('studentNumber')) {
        delNewStudentNumber =  delete student.studentNumber;
    }
    return delNewStudentNumber;
}

function addNewProperty(propName, propValue) {
    //check if student object has the property 
    if (!student.hasOwnProperty(propName)) {
        //add new property to student
        student[propName] = propValue;
    }

    return student;
}

const addNewPropertyResult = addNewProperty('email', 'nonty@gamil.com');
console.log(addNewPropertyResult);