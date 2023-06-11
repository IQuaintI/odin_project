# Chapter 5 - Solving Problems with Classes

## What is a class?

A **class** is a blueprint for an object. It defines the data and behavior of an object. 

An **object** is a any variable created from a **class** blueprint.

A **client** is code that uses an object.

A **class declaration** is the code that names the classes and lists all the members (items) that belong to the class. 

In practice it a class declaration looks as such: 

```javascript
class ClassName {
    // class members
}
```

Every item within the class is either a **data member** or a **method**.

A **data member** is a variable that stores data. 

Example:

```javascript
class ClassName {
    let name = "John Doe"
    //name is a data member
}
```

A **method** (or **member function**)is a function that performs an action.

```javascript
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
```

We declare a new class by using a `const` or `let` and then assigning it to a new `ClassName` object. 

The method is called via the object. 

```javascript
const person = new ClassName("John", "Doe");

//getFullName
console.log(person.getFullName()); //John Doe

//getInitials
console.log(person.getInitials()); //JD

//getFirstName
console.log(person.getFirstName()); //John

//getLastName
console.log(person.getLastName()); //Doe
```

---

## What is a constructor?

The constructor is a special method that is called when an object is created.

The constructor is used to initialize the object.

***Warning: If a class does not have a constructor, the class would not be able to initialize the object.***

A new object is created by using the `new` keyword.

```javascript
const person = new ClassName("John", "Doe");
```
---

## What is this?

`this` is a special keyword that refers to the current object.

It is one of the most confusing things that you will encounter in JavaScript.

`this` changes depending on the context.

In this case, when `this` is called on a method, it refers to the object that the method belongs to.

`this` can also be called on it's own and it refers to the global object.

The global `this` is the `window` object in the browser and the `global` object in Node.js.

Basically, the global `this` refers to the whole program.

It would looks like this:

```javascript
console.log(this); //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
```

This is not particularly useful, but it is important to know.

---
## More fundamentals

**Access specifier** is a keyword that determines what other functions can access the member. 

There are three access specifiers in JavaScript: `public`, `private`, and `protected`.

A **public** member can be accessed by any function (a code within the class, a client of the class, or code in a subclass).

***Note: A subclass is a class that inherits from another class.***

A **private** member can only be accessed by code within the class.

A **protected** member is similar to private members but with the exception that it can be accessed by code in a subclass.

C++ is different from JavaScript in that it does not have to create classes while JavaScript does. 

C++ is both procedural and object-oriented while JavaScript is just object-oriented.

---

## Why use classes?

Classes are useful because they allow us to create objects that have the same data and behavior.

***Classes are optional.*** 

If a program is built off an array then it **cannot** be used without the array.

If a program is built off a linked list then it **cannot** be used without the linked list.

If a program is built off a class, it **can** be used with or without the class.

A class can be re-written and while the program will look different, the program will still work.

---

## Encapsulation

**Encapsulation** is a fancy way of saying that the packaging of data and functions into a single component.

Example:
  
  ```javascript
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
  ```

The data and functions are packaged into a single component.

Without encapsulation it would look like this:

```javascript
const firstName = "";
const lastName = "";

function getFullName() {
  return firstName + " " + lastName;
}

function getInitials() {
  return firstName[0] + lastName[0];
}

function getFirstName() {
  return firstName;
}

function getLastName() {
  return lastName;
}
```

The data and functions are not packaged into a single component.

If you haven't noticed by now, the class itself is an example of encapsulation.

One of the best reasons to encapsulate data is to allow for code reuse. 

**However, the code must be designed to be reusable.** 

If a program references a specific data set or a specific function, then the code cannot be reused unless that data set is also transferred.

Also, if the code references a global variable, then the code cannot be reused unless the global variable is also transferred.

Problems are also easier to solve due to encapsulation since the programs are broken down into separate components.

---

## Information Hiding

People often use the terms **information hiding** and **encapsulation** interchangeably.

However, they are not the same thing.

**Information hiding** is the process of separating the interface of a data structure from its implementation. 

If a program has been penned with information hiding in mind, then the interface of the program can be changed without affecting the implementation of the program.

**Interface** is the part of the program that is visible to the client.

**Implementation** is the part of the program that is hidden from the client.

***In simple terms, the interface is what the program shows the user and implementation is how the program works.***

Note: It is possible to have encapsulation without information hiding, but it is not possible to have information hiding without encapsulation!

For example, if a programs data members are declared public then the data members are not hidden from the client, but the data can still be encapsulated.

However, just because a data set is set to private does not mean that the data is hidden from the client. 

This is because information-hiding problems can still occur even if the data is private as they tend to arise from the implementation of the program and not the interface.

**Warning: It is important to consider special cases when designing a program.**

One of the common issues that arise is when an underlying API or library changes, and lets say that the program was meant to return a -1 error code if the API or library failed to work, but since the API updated it no longer returns a -1 error code.

A way around this is to state special case results in the documentation, so that way when another variable is returned the client knows that the API or library has changed.

These issues arise due to the principles regarding information hiding which tell programmers to put aside implementation issues abroad and only focus on the specific implementation of the class being worked on. 

Lastly, the most hidden information is called **abstract data type** which are defined entirely by their operation. 

In an abstract data type, a stack is any data type where you can add and remove items and the the items are removed in the opposite order that they were added.

This is known as **last in first out** or **LIFO**.

Nothing ***requires*** that a stack be a continuous block of memory or a linked list, but it is ***assumed*** that a stack is a continuous block of memory or a linked list.

---

## Readability 

**Readability** is the ease with which a human reader can comprehend the purpose, control flow, and operation of source code.

Good class implementation can make a program easier to read.

Class methods must be chosen with care as to make its purpose clear.

---

## Expressiveness

**Expressiveness** is the ease with which a class can be written.

In other words, how easy is it to write the class you want to make? 

If you want to give someone else instructions on how to write a class, how easy would it be to do so?

---

## Building a simple class

Let us say we are a teacher that wants to create a class roster. 

In this roster we will have the students first name, last name, student ID, and grade.

The program will allow students to be added and removed, be identified by I.D, display the records of a particular student, display the records of all students, and display the average grade of all students.

Sounds like a lot so lets pseudo-code it.

    1. Create a class called Roster.
    2. Create a constructor that takes in the first name, last name, student ID, and grade.
    3. Create a function that adds a student to the roster.
    4. Create a function that removes a student from the roster.
    5. Create a function that displays the records of a particular student.
    6. Create a function that displays the records of all students.
    7. Create a function that displays the average grade of all students.
    8. Create a function that displays the number of students in the roster.

The list looks long but it is actually quite simple.

From the top:

1. Create a class called Roster.

```javascript
class Roster {
  constructor() {
    this.data = [];
  }
}
```
The above is the `Roster` class with the constructor that initializes (stores) the data in an array.

**Note: Fore you to be able to add and remove students from tvampire king cyoahe roster, the data must be stored in an array.**

***Warning: Remember the `this` keyword is used to refer to the current object otherwise it will return an error.***

2. Create a function that adds a student to the roster.

```javascript

  addStudent(firstName, lastName, studentID, grade) {
    const student = { firstName, lastName, studentID, grade };
    this.data.push(student);
  }

```

The `addStudent` method is used to add a student to the roster. 

Keep in mind that when adding a student to the roster, the student must have a first name, last name, student ID, and grade. 

It will **not** work if any of the values are missing.

The `push` method is used to add a student to the array. Without it, the student will not be added to the array.


4. Create a function that removes a student from the roster.

```javascript

  removeStudent(studentID) {
    const index = this.data.findIndex(
      (student) => student.studentID === studentID
    );
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

```

The `removeStudent` method is used to remove a student from the roster.

The reason why only the student ID is needed is because the student ID is unique to each student. 

The function works by using a `for` loop to iterate through the array and find the student ID that matches the student ID that was passed in.

The `findIndex` method is used to find the first index that satisfies the provided testing function and then returns it. 

Then the `if` statement is used to check if the index is not equal to -1 (which means that the student ID was not found). If the student ID was found, then the `splice` method is used to remove the student from the array.

---

The `splice` method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. 

The `splice` method is read by the first parameter being the starting index, the second parameter being the number of elements to remove, and the third parameter being the elements to add to the array.

In the example above, the index being used in the first parameter is the index that was found by the `findIndex` method.

Then the second parameter is 1 because we only want to remove one student, which is the student that was found by the `findIndex` method.

---

***Warning: If there are no elements that pass the testing function, then -1 is returned.***

**Note: Remember that deleting any variable will delete the entire object so it helps to have a unique identifier.**

5. Create a function that displays the records of a particular student.

```javascript

  displayStudent(studentID) {
    const student = this.data.find(
      (student) => student.studentID === studentID
    );
    return student ? student : "Student not found";
  }

```

The `displayStudent` method is used to display the records of a particular student via their student ID.

The function works by using a `for` loop to iterate through the array and find the student ID that matches the student ID that was passed in. 

Then it returns the student if the student ID was found or it returns "Student not found" if the student ID was not found.

*Note: The `find` method is similar to the `findIndex` method except that `find` returns the value while `findIndex` returns the index.*

6. Create a function that displays the records of all students.

```javascript

  displayAllStudents() {
    return this.data;
  }

```

The `displayAllStudents` method is used to display the records of all students.

It returns the array of students that have been stored in the `data` member.

7. Create a function that displays the average grade of all students.

```javascript

  displayAverageGrade() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i].grade;
    }
    return sum / this.data.length;
  }

```

The `sum` variable is used to store the sum of all the grades (which is initialized to `0`).

The `for` loop is used to iterate through the array and add the grades to the `sum` variable.

Then the `sum` variable is divided by the length of the array to get the average grade.

The `[i]` is used to access the grade of each student.

The `this` keyword is used to refer to the current object and like above would not work without it. 

8. Create a function that displays the number of students in the roster.

```javascript

  displayNumberOfStudents() {
    return this.data.length;
  }

```

The above is pretty self-explanatory as it returns the length of the array.


Let's put it all together.

```javascript
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
```

Congratulations, you have created a class!

---

## Support Methods

A **support method** is a method in a class that does not merely retrieve or store data. 

These methods may even be called **helper methods**.

A well designed class will have support methods that are used to help the class perform its job.

For example, let us say that we have a method that is used to give a student a letter grade based on their grade.

```javascript
  getLetterGrade() {
    if (this.grade >= 90) {
      return "A";
    } else if (this.grade >= 80) {
      return "B";
    } else if (this.grade >= 70) {
      return "C";
    } else if (this.grade >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
```
The above is a support method since it does not merely retrieve or store data.

**Data redundancy** is when the same data is stored in more than one place.

Data redundancy is a problem because it can lead to data inconsistency since the data can be changed in one place but not in another.

For example, let us say that a program stores both the age and date of birth from a user. 

This can lead to inconsistency since one can be changed but not the other. 

Therefore, it is better to store one or the other. 

---

**"If those books are in agreement with the Quran, we have no need of them; and if these are opposed to the Quran, destroy them." - Umar ibn al-Khaṭṭāb** 

---

Unlike get and set methods which are always public, the support methods can be public, private, or protected.

**Warning: If a support method is public, then it can be called by any function.**

While public methods appear to make a class easier to use, they can also make a class harder to use since they can be called by any function which can cause problems.

## Dynamic Data 

**Dynamic Data** is one of the best reasons to use classes.

Dynamic data is data that can change during the execution of a program.

For example, let us say that we have a program that is used to keep track of a student's grade.

The student's grade can change during the execution of the program, so it is considered dynamic data.

**Warning: If a program does not have dynamic data, then it does not need a class.**

One of the benefits of class is that it isolates code and allows for the code to be debugged. 

**Composition** is the process of using an object of one class as a data member in another class.

**Type declaration** is the process of declaring a variable to be of a particular type.

It is the backbone of object-oriented programming.

It is usually a good idea to create a diagram for pointer manipulations.

**Short-circuit evaluation** is the process of evaluating the left operand of a logical expression and then evaluating the right operand only if necessary.

In lay-mens terms, it's a boolean expression.

--- 

## Exceptions

In C++ (and other languages), there is a mechanism called **exceptions** which allow either a function or a method to signal that it cannot complete its task.

They are typically used when there is no good answer for what to return when a function or method fails.

---

## Doubly Linked Lists

Linked lists that link on both directions are called **doubly linked lists**.

---

## Destructor

A **destructor** is a special method that is called when an object goes out of the scope or is destroyed.

If your programs lacks dynamic data, then there is no need for a destructor.

**If your program has dynamic data, then it needs a destructor.**

The look like this:

In JavaScript the need for a destructor is not as important as it is in C++. 

This is because JavaScript has a garbage collector that automatically deletes objects that are no longer needed.

---

## Deep Copy

A **deep copy** is a copy of an object that is independent of the original object.

The opposite of a deep copy is a **shallow copy**.

A **shallow copy** is a copy of an object that is dependent on the original object.

If the original object is changed, then the shallow copy will also be changed.

However, if the original object is changed, then the deep copy will not be changed.


In Javascript, a deep copy can be made by using the `JSON.parse(JSON.stringify(object))` method.

`JSON` refers to JavaScript Object Notation which is a text-based way of representing JavaScript objects such as arrays. 

<span style = "color:yellow">***Note: To parse something is to convert it from one format to another.***</span> 

The `JSON.parse` is used to convert a JSON string into a JavaScript object.

The act of converting an Javascript object into a JSON string is called **serialization**.

An example looks like:

```javascript
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Output: John
console.log(obj.age); // Output: 30
console.log(obj.city); // Output: New York
```

<span style = 'color: red'>Warning: You would not be able to access the properties of the object if it was left as a JSON string!</span>

The `stringify` method is used to convert a JavaScript object into a JSON string.

The act of converting a JSON string into an Javascript object is called **deserialization**.

An example looks like:

```javascript
const obj2 = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString2 = JSON.stringify(obj2);
console.log(jsonString2); // Output: {"name":"John","age":30,"city":"New York"}
```

Now you might be asking what does any of this has to do with deep copying?

Well, the `JSON.parse(JSON.stringify(object))` method is used to make a deep copy of an object.

It looks weird but here is a shot at explaining it.

`JSON.parse` converts the Javascript object into a JSON string.

The `JSON.stringify` converts the JSON string into a Javascript object.

The value within the parenthesis is the object that you want to make a deep copy of.

A feature of C++ is `operator overloading` which allows you to redefine the what the built-in operators do.

---

<span style = "color:red">***Warning: `Operator overloading` does not exist in Javascript!***</span>

The closest thing that you can do is use `toString` and `valueOf` methods.

`toString` is used to convert an object to a string.

`valueOf` is used to convert an object to a primitive value.

`Proxy` can let you intercept and define custom behavior for fundamental operations as well, but none of these are recommended.

---

`copy constructor` is a constructor that takes an object of the same class as a parameter.

It is used to make a copy of an object.

It does not really exist in Javascript, but you can make a copy of an object by using the `Object.assign` method.

---

## Object.assign

`Object.assign` is a method that is used to copy the values of all enumerable own properties from one or more source objects to a target object.

Enumerable meaning that the properties can be iterated over with iteration meaning that the properties can be accessed one by one.

Example:

```javascript
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 3, c: 4 }
```

It takes two variables as parameters, the first being the target object and the second being the source object.

If the target object already has a property with the same name, then the property will be overwritten with the value from the source object.

So, in this case the `b` property will be overwritten with the value from the source object.

Elements that the source object has that the target object does not have will be added to the target object.

This is a **shallow copy** because it only copies the values of the properties and not the properties themselves, therefore if the source object is changed then the target object will also be changed.

Example: 

```javascript
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source); // { a: 1, b: 3, c: 4 }

source.b = 5;

console.log(result); // { a: 1, b: 5, c: 4 }
```
---

## Mistakes to Avoid

### The fake class

A **fake class** is a class that is correct syntactically but has no real meaning.

In languages such as C++, which is a hybrid tongue capable for both procedural and object-oriented programming, it is possible to write a class that is syntactically correct but is not needed. 

In languages such aconst obj = {
  value: 0,
  set myProperty(newValue) {
    this.value = newValue;
  }
};

obj.myProperty = 42; // Setter invoked with the value 42
console.log(obj.value); // Output: 42s Javascript, which is a purely object-oriented language, it is not "Do I need a class?" but "How am I going to incorporate this into a class". This need to class everything can lead to a **fake class**.

***Examples of fake classes***

There are quite a few ways that a program can contain a **fake class**.

One way is for a programmer to use global variable in lieu of a local parameters.
    
This causes the program to have all bunch of global variables shoveled into a class which causes the program to have the same problems as a program that uses global variables even though there aren't any.

---

Another situation is where programmers force object-oriented programming into a program that does not need it. 

For example, a class is created to only perform a very specific function that only makes sense in the context of the original program. 

Two ways to offset this problem are to ask yourself if the class name can be something short rather than `TheClassThatDoesThisOneThingThatIsVerySpecificToThisProgram` and if the class can be used in another program.

Some other issues are from legacy code (code that is old and outdated), experimental code (code that is used to test a new idea), placeholder code (code that is used to hold a place for something else), and code that is written by someone who is unfamiliar with object-oriented programming.

### The Single-Taskers

A **single-tasker** is a class that only performs one task.

Classes should be made to be as general as possible while still remaining consistent with the purpose of the program.

This can be achieved via **template classes** which are classes that can be used with different data types.

For example, the a `studentCollection` class can contain code that can be used to encapsulate a collection of anything not just students.

## Exercises

Create a class to store the data for an automobile. The class should have the following members:

1. Manufacturer name
2. Model name
3. Model year

The class should have a `get/set` method for each data member.

---

## A quick overview of getters/setters.

Getters and setters are special functions that allow you to define the behavior of getting and setting a value on an object property.

They can also be used to encapsulate property access which enables more control over properties.

***We use getters to access properties in an object.***

***We use setters to change (or mutate) and object.***


<span style = "color:yellow">Note: If you are just using  `get` and `set` methods to return and set a variable, then there is no benefit in using them.</span>

#### **Getters**

A `get` method is used to get the value of a property.

Pretty simple right?

Getters can be used for a wide range of things such as:

- Getters can be used to compute or derive property values dynamically based on other properties or external factors.
- Getters can be used to validate the value of a property. Data checks such as type checking, range checking, and consistency checking can be performed in a getter.
- Getters allow for more reactive programming. For example, if a property that a getter depends on, the getter will be automatically re-evaluated to update the value of the property.

```javascript
const obj = {
  get myProperty() {
    console.log('Getter accessed!');
    return 'Hello!';
  }
};

console.log(obj.myProperty); // Output: "Getter accessed!" followed by "Hello!"
console.log(objGet.myProperty()); // TypeError: obj.myProperty is not a function
```

<span style = "color: red">Warning: When calling a getter, do not use the parenthesis as it will return an error. The getter is automatically called when you access a property like a regular property! </span>

Of course, this can be done without the getter as follows:

```javascript
const obj = {
  myProperty: 'Hello!'
};

console.log(obj.myProperty); // Output: "Hello!"
```

It functions the same way as a getter but a `get` is used for more than just returning a value.

One of the most common uses of a getter is to return a value that is derived from other properties.

```javascript
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.firstName + ' ' + person.lastName); // Output: "John Doe"
console.log(`${person.firstName} ${person.lastName}`); // Output: "John Doe"
console.log(person.fullName()); // Output: "John Doe"
```

The above are all variations of the same thing - calling a full name.

`console.log(person.firstName + ' ' + person.lastName);` is the most basic way of doing it, but it can be somewhat tedious to type out.

`console.log(${person.firstName} ${person.lastName});` is a bit easier to type out, but it can be a bit confusing to read.

`console.log(person.fullName());` is the easiest to read, but requires a function to be defined.

There is one large issue with all of these methods and its that they are read-only.

You cannot set the full name from outside the object.

```javascript
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

obj.fullName = 'Jane Doe';

console.log(obj.fullName()); // Output: "John Doe"
```

Since the `fullName` is a function, it cannot be set.

In order to change the variable, the `fullName()` method must be changed to a property (without the parenthesis).

```javascript
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

obj.fullName = 'Jane Doe';

console.log(obj.fullName); // Output: "John Doe"
```

Uh oh. There seems to be an issue. 

Even with the `get`, the program still does not allow the `fullName` to be changed.

This is where setters come in.

#### **Setters**

A `set` method is used to set (change) the value of a property.

Pretty simple right?

Lets use it in accordance with the example above.

```javascript
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
   /*set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },*/
};

obj.fullName = 'Jane Doe';

console.log(obj.fullName); // Output: "Jane Doe"
```

(The parts in the `set` method are called **destructuring**.)




---

Let us pseudo-code it!

    1. Create a class called Automobile.
    2. Create a constructor that takes in the manufacturer name, model name, and model year.
    3. Create a function that gets the manufacturer name.
    4. Create a function that sets the manufacturer name.
    5. Create a function that gets the model name.
    6. Create a function that sets the model name.
    7. Create a function that gets the model year.
    8. Create a function that sets the model year.

The list looks long but it is actually quite simple.

From the top:

1. Create a class called Automobile.

```javascript
class Automobile {
    
}
```

Simple enough.

2. Create a constructor that takes in the manufacturer name, model name, and model year.

```javascript
class Automobile {
    constructor(manufacturerName, modelName, modelYear) {
        this.manufacturerName = manufacturerName;
        this.modelName = modelName;
        this.modelYear = modelYear;
    }
}
```

The constructor is used to initialize the object. 

(Note: The `this` keyword is used to refer to the current object.)

3. Create a function that gets the manufacturer name.

```javascript
class Automobile {
    constructor(manufacturerName, modelName, modelYear) {
        this.manufacturerName = manufacturerName;
        this.modelName = modelName;
        this.modelYear = modelYear;
    }
    getManufacturerName() {
        return this.manufacturerName;
    }
}
```

The `getManufacturerName` method is used to get the manufacturer name.

It would look like this:

```javascript
const car = new Automobile('Toyota', 'Camry', 2019);
console.log(car.getManufacturerName()); // Output: "Toyota"
```



4. Create a function that sets the manufacturer name.

```javascript
class Automobile {
    constructor(manufacturerName, modelName, modelYear) {
        this.manufacturerName = manufacturerName;
        this.modelName = modelName;
        this.modelYear = modelYear;
    }
    getManufacturerName() {
        return this.manufacturerName;
    }
    setManufacturerName(value) {
        this.manufacturerName = value;
    }
}
```

The `setManufacturerName` method is used to set the manufacturer name.

It would look like this:

```javascript
const car = new Automobile('Toyota', 'Camry', 2019);
car.setManufacturerName('Honda');
console.log(car.getManufacturerName()); // Output: "Honda"
```

The car manufacturer name is now `Honda` instead of `Toyota`.

5. Create a function that gets the model name.

```javascript
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
  setManufacturerName(value) {
    this.manufacturerName = value;
  }
}
```

The `getModelName` method is used to get the model name.

It would look like this:

```javascript
const car = new Automobile("Ford", "Mustang", 1969);
console.log(car.getManufacturerName()); // Output: "Ford"
```

6. Create a function that sets the model name.

```javascript
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
  setManufacturerName(value) {
    this.manufacturerName = value;
  }
  setModelName(value) {
    this.modelName = value;
  }
}
```

The `setModelName` method is used to set the model name.

It would look like this:

```javascript
const car = new Automobile("Ford", "Mustang", 1969);
car.setModelName("F-150");
console.log(car.getModelName()); // Output: "F-150"
```

The car model name is now `F-150` instead of `Mustang`.

7. Create a function that gets the model year.

```javascript
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
}
```

The `getModelYear` method is used to get the model year.

It would look like this:

```javascript
const car = new Automobile("Ford", "Mustang", 1969);
console.log(car.getModelYear()); // Output: 1969
```

8. Create a function that sets the model year.

```javascript
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
```

The `setModelYear` method is used to set the model year.

It would look like this:

```javascript
const car = new Automobile("Ford", "Mustang", 1969);
car.setModelYear(2019);
console.log(car.getModelYear()); // Output: 2019
```

The car model year is now `2019` instead of `1969`.


