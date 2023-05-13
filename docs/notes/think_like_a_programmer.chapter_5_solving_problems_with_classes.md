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

## What is a constructor?

The constructor is a special method that is called when an object is created.

The constructor is used to initialize the object.

***Warning: If a class does not have a constructor, the class would not be able to initialize the object.***

A new object is created by using the `new` keyword.

```javascript
const person = new ClassName("John", "Doe");
```

## What is this?

`this` is a special keyword that refers to the current object.

It is one of the most confusing things that you will encounter in JavaScript.

`this` changes depending on the context.

In this case, when `this` is called on a method, it refers to the object that the method belongs to.

`this` can also be called on it's own and it refers to the global object.

The global 