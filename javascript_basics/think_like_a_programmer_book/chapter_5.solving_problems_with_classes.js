//[[think_like_a_programmer.chapter_5_solving_problems_with_classes.md]];

class ClassName {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
}

const person = new ClassName("John", "Doe");

//getFullName
console.log(person.getFullName());

//getInitials
console.log(person.getInitials());

//getFirstName
console.log(person.getFirstName());

//getLastName
console.log(person.getLastName());
