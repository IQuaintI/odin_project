//[[think_like_a_programmer.chapter_5_solving_problems_with_classes.md]];

//Class testing

/*
class Roster {
  constructor() {
    this.data = [];
  }

  addStudent(firstName, lastName, studentID, grade) {
    const student = { firstName, lastName, studentID, grade };
    this.data.push(student);
  }

  removeStudent(studentID) {
    const index = this.data.findIndex(
      (student) => student.studentID === studentID
    );
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  displayStudent(studentID) {
    const student = this.data.find(
      (student) => student.studentID === studentID
    );
    return student ? student : "Student not found";
  }

  displayAllStudents() {
    return this.data;
  }

  displayAverageGrade() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i].grade;
    }
    return sum / this.data.length;
  }

  displayNumberOfStudents() {
    return this.data.length;
  }
}

const roster = new Roster();

roster.addStudent("John", "Doe", 123, 90);
roster.addStudent("Jane", "Doe", 456, 80);
roster.addStudent("John", "Smith", 789, 70);
roster.addStudent("Jane", "Smith", 101, 60);

console.log(roster.displayAverageGrade());

console.log(roster.displayAllStudents());

console.log(roster.displayNumberOfStudents());

*/

//JSON testing

//JSON.parse

const jsonString = '{"name":"John","age":30,"city":"New York"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Output: John
console.log(obj.age); // Output: 30
console.log(obj.city); // Output: New York

//JSON.stringify

const obj2 = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString2 = JSON.stringify(obj2);
console.log(jsonString2); // Output: {"name":"John","age":30,"city":"New York"}

//Object.assign
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 3, c: 4 }

//Object.create
const myPrototype = { a: 1 };
const newObj = Object.create(myPrototype, {
  b: { value: 2, writable: true },
  c: { value: 3, writable: false },
});

console.log(myPrototype); // { a: 1 }
console.log(newObj); // { b: 2, c: 3 }

const objs = {
  myProperty: "Hello!",
};

obj.myProperty = "Goodbye!";
console.log(objs.myProperty); // Output: 'Goodbye!'

//gets

const objGet = {
  get myProperty() {
    console.log("Getter accessed!");
    return "Hello!";
  },
};

console.log(objGet.myProperty); // Output: "Getter accessed!" followed by "Hello!"
//console.log(objGet.myProperty()); // TypeError: obj.myProperty is not a function

//functions are read-only and cannot be assigned to

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

obj.fullName = "Jane Doe";

console.log(person.fullName()); // Output: "John Doe"

const obj3 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

obj3.fullName = "Jane Doe";

console.log(obj3.fullName); // Output:

//Car manufacturer

class Automobile {
  constructor(manufacturerName, modelName, modelYear) {
    this.manufacturerName = manufacturerName;
    this.modelName = modelName;
    this.modelYear = modelYear;
  }
  getManufacturerName() {
    return this.manufacturerName;
  }
  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  setManufacturerName(value) {
    this.manufacturerName = value;
  }
  setModelName(value) {
    this.modelName = value;
  }
  setModelYear(value) {
    this.modelYear = value;
  }
}

const car = new Automobile("Ford", "Mustang", 1969);
car.setModelYear(2019);
console.log(car.getModelYear()); // Output: 2019
