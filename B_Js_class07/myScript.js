// Student Exercise 1
// let person = {
//     name: "Rade Hrgovikj",
//     age: 23,
//     isStudent: true,
//     academy: "SEDC"
// }

// // Student Exercise 2
// delete person.name;
// delete person.age;
// delete person.isStudent;
// delete person.academy;

// person.name = 'Ivan Stojanov';
// person.age = 24;
// person.isStudent = false;
// person.academy = "Finki";

// console.log(person);

// Student Exercise 3
let presenter = { 
	name :  "Dragan",
	lastName: "Gelevski",
	academy: "SEDC",
	lecture: "Objects"
}

let updatePerson = (person) => {
    delete person.lecture;
    person.age = 24;
    person.getFullName = () => {
        return person.name + ' ' + person.lastName;
    }
    return person;
}

// console.log(updatePerson(presenter));
// console.log(presenter.getFullName());

// Student Exercise 4
let car = {
    model: "Ford Fusion",
    color: "Gray",
    year: "2005",
    fuel: 40,
    fuelConsumption: 4.4,
    fuelNeedToPassDistance : function(distance) {
        return distance * (this.fuelConsumption/100); 
    }
}

// console.log(car);

// Student Exercise 5
let body = document.querySelector('body');
let crtUl = document.createElement('ul');
let btn = document.getElementById('addStudent');

// functions
let arrayOfStudents = [];

function Student(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

function showStudents(array, elem){
    elem.innerHTML = "";
    for (let student of array) {
        elem.innerHTML += `<li><b>Name:</b> ${student.firstName} ${student.lastName}, 
        <b>Age:</b> ${student.age}</li>`;
    }
    body.appendChild(crtUl);
}

function addStudents() {
    btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        let first = document.getElementById('firstName').value;
        let last = document.getElementById('lastName').value;
        let age = document.getElementById('age').value;
        let newStudent = new Student(first, last, age);
        arrayOfStudents.push(newStudent);
        showStudents(arrayOfStudents, crtUl);
        document.querySelector('form').reset();
    })
}
addStudents();