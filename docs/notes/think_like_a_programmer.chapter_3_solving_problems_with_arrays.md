---
id: spm9otbzn4eh2t8bv838kix
title: Chapter 3 Solving Problems With Arrays
desc: ''
updated: 1683260328381
created: 1679874808534
---

## Introduction

The prior chapter dealt with *scalar variables* which are variables that can only hold one value at a time. 

In this chapter we will look at *array variables* which can hold multiple values at a time being an aggregate data type.

## What is an Array?

Arrays are a data structure that can hold multiple values of the same type.

This is because arrays are *vector* data structures which are a collection of values that are all of the same type.

In this instance we will be using vectors as to mean an array without a set size.

Most importantly, arrays are *homogeneous* data structures which means that all of the values in the array are of the same type.

The individual elements in an array are accessed by their *index* which is a number that represents the position of the element in the array.
(They can also refer to them as *subscripts*.)

**Arrays offer *random access* which means that you can access any element in the array in constant time.**

## Basic Array Operations

### Storing Values in an Array

To store values in an array you must first declare the array and then assign values to it.

```javascript 
// Declare an array of 5 integers
let myArray = new Array(5);// [0, 0, 0, 0, 0] 
```
The above returns 5 empty elements in an array.

We can declare more specific arrays by assigning values to them.

The above is also an alternate way of declaring an array as opposed to using the array literal syntax.

(The `new` keyword is not necessary when using the array literal syntax.)


```javascript
let myArray = [1, 2, 3, 4, 5];// [1, 2, 3, 4, 5]
```

### Copying Arrays

There might be moments where you want to copy an array such as when you want to sort an array without modifying the original array.

This can be done with the `slice()` method.

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = myArray.slice();
```

The `slice()` method can be altered to copy only a portion of the array.

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = myArray.slice(1, 3);// [2, 3]
```

The above returns a copy of the array from the index of 1 to the index of 3.

**Note: Computers begin counting at 0.**

`slice()` returns a *shallow copy*.

***A shallow copy is a copy that is dependant on the original copy.***

This means that if you modify the original copy, the shallow copy will also be modified.

***A deep copy is a copy that is not dependant on the original copy.***

This means that if you modify the original copy, the deep copy will not be modified.

### Retrieving Values from an Array

To retrieve values from an array you must use the index of the element you want to retrieve.

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = myArray[2]; // 3
```

The index of the element you want to retrieve is placed in square brackets after the array variable. 

### Searching for a Specific Value

More often than not you rarely know the index of the element you want to retrieve. 

You need to search for the value you want to retrieve.

If the elements in the array are sorted, you can use the `indexOf()` method to search for the value.

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = myArray.indexOf(3); // 2
```

The `indexOf()` method returns the index of the element you are searching for.

However, if the elements in the array are not sorted you can use the `findIndex()` method to search for the value.

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = myArray.findIndex((element) => element === 3); // 2
```

The `findIndex()` method takes a callback function as an argument.

**If no element satisfies the testing function, `-1` is returned.**

The `findIndex()` method returns the index of the first element that satisfies the testing function.

The above is the compacted version. It looks different spelled out:

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = myArray.findIndex(function(element) {
    return element === 3;
}); // 2
```

The first element in the array that is the number three has its index returned. 

It also works for strings:

```javascript
let myArray = ['hi', 'hello', 'hey', 'howdy'];
let myArrayCopy = myArray.findIndex((element) => element === 'hey'); // 2
```

The above returns the index of the element that is the string `'hey'`.

### Criterion-Based Searches

Sometimes we are looking for a relationship between values.

One of the things we can do is look for the highest number in an array.

```javascript
let myArray = [1, 2, 3, 4, 5];
let highestNumber = Math.max(...myArray); // 5
```

The ellipsis (`...`) is the spread operator which spreads the array into individual elements.

#### Spread Operator

The spread operator is used to spread an array into individual elements.

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = [...myArray]; // [1, 2, 3, 4, 5]
```

There might appear to be no difference between the above and the `slice()` method. But this is not true as the spread operator returns a deep copy.

```javascript
let myArray = [1, 2, 3, 4, 5];
let myArrayCopy = [...myArray];
myArrayCopy[0] = 10;
console.log(myArray); // [1, 2, 3, 4, 5]
console.log(myArrayCopy); // [10, 2, 3, 4, 5]
```

The above shows that the original array is not modified when the deep copy is modified.

***Note: The main difference between the spread operator (`...`) and the `slice()` is that the `slice()` can only be used on arrays while the spread array can be used on any iterable object.***

We would also find the smallest number in an array.

```javascript
let myArray = [1, 2, 3, 4, 5];
let smallestNumber = Math.min(...myArray); // 1
```

We can also find only even numbers in an array.

```javascript
let myArray = [1, 2, 3, 4, 5];
let evenNumbers = myArray.filter((element) => element % 2 === 0); // [2, 4]
```

**There are many different criteria that can be constructed.**

### Sorting

You can arrange the elements in an array in a particular order.

One such example would be in ascending order.

```javascript
let myArray = [5,4,3,2,1];
let ascendingOrder = myArray.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
```

The `sort()` method takes a callback function as an argument.

*A callback function is a function that is passed as an argument to another function.*

The callback function takes two parameters `a` and `b`.
Spelled out it looks something like this:

```javascript
let myArray = [5,4,3,2,1];
let ascendingOrder = myArray.sort(function(a, b) {
    return a - b;
}); // [1, 2, 3, 4, 5]
```

(The above maths out like 1 - 2 = -1 so 1 is placed before 2.)

***The sort checks to see if the first element is less than the second element. If it is, it returns a negative number. If it is not, it returns a positive number.***

***If it returns a negative number the first element is placed before the second element. If it returns a positive number the second element is placed before the first element.***

***If it returns zero, the order of the elements is unchanged.***

The elements can be sorted in descending order.

```javascript
let myArray = [5,4,3,2,1];
let descendingOrder = myArray.sort((a, b) => b - a); // [5, 4, 3, 2, 1]
```

The above is the compacted version. It looks different spelled out:

```javascript
let myArray = [5,4,3,2,1];
let descendingOrder = myArray.sort(function(a, b) {
    return b - a;
}); // [5, 4, 3, 2, 1]
```

**The above checks to see if the first element is greater than the second element. If it is, it returns a positive number. If it is not, it returns a negative number.**

**If it returns a positive number the first element is placed before the second element. If it returns a negative number the second element is placed before the first element.**

(In the above example, it would be 5 - 4 = 1. 1 is a positive number so 5 is placed before 4.)

Sorting can also be used for strings.

```javascript
let myArray = ['hi', 'hello', 'hey', 'howdy'];
let ascendingOrder = myArray.sort((a, b) => a - b); // ['hello', 'hey', 'hi', 'howdy']
```

The above is the compacted version. It looks different spelled out:

```javascript
let myArray = ['hi', 'hello', 'hey', 'howdy'];
let ascendingOrder = myArray.sort(function(a, b) {
    return a - b;
}); // ['hello', 'hey', 'hi', 'howdy']
```

It checks the first letter of every word and sees which comes first in the alphabet. It sorts as such. Since all the letters here begin with `h`, the second letter is checked and alphabetized accordingly.

There are many other ways you can sort things but we will not go into them here.


## Insertion and Deletion

We can sort arrays via insertion and deletion.

We can insert values with the `push()` method.

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.push(6); // [1, 2, 3, 4, 5, 6]
```

The `push()` method adds the value to the end of the array.

We can also use the `unshift()` method to add values to the beginning of the array.

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.unshift(0); // [0, 1, 2, 3, 4, 5]
```

The `unshift()` method adds the value to the beginning of the array.

We can delete values with the `pop()` method.

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.pop(); // [1, 2, 3, 4]
```

The `pop()` method removes the last value from the array.

We can also use the `shift()` method to remove values from the beginning of the array.

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.shift(); // [2, 3, 4, 5]
```

The `shift()` method removes the first value from the array.

We can also remove values from the middle of the array with the `splice()` method.

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 1); // [1, 2, 4, 5]
```

The `splice()` method takes two arguments. The first argument is the index of the element you want to remove. The second argument is the number of elements you want to remove.

So, in the above case it would remove the element at index 2 (which is 3 since computers count from 0) and remove 1 element.

We can also add elements with the `splice()` method.

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 0, 3.5); // [1, 2, 3, 3.5, 4, 5]
```

The `splice()` method takes three arguments. The first argument is the index of the element you want to remove. The second argument is the number of elements you want to remove. The third argument is the element you want to add.

So, in the above it would be read as "remove 0 elements at index 2 and add 3.5".

## Iterators

A 'higher-order variable' is a function that accepts functions as parameters and/or returns a function.

An 'iterator' is a higher-order variable that takes a function as a parameter and calls that function on each element of an array.

The `forEach()` method is an iterator.

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
    console.log(element);
});
```

`forEach()` has been used prior but to elaborate it is used to apply a condition to every element in an array.

If we wanted to double every element in an array we could do this:

```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
    element = element * 2;
    console.log(element);
});
```

Another iterator is the `reduce()` method.

```javascript
let myArray = [1, 2, 3, 4, 5];
let sum = myArray.reduce(function(previous, current) {
    return previous + current;
});
console.log(sum); // 15
```

This one is a bit tricky but bear with me. The `reduce()` method takes two arguments. The first argument called the `accumulator` while the second is called the `currentValue`.

The `accumulator` is the value that is returned each time the function is executed. It is the value that is added to the `currentValue`.

Spelled out, the `reduce()` just adds the `currentValue` to the `accumulator` and returns the sum.

The `reduce()` method can also be used to find the maximum value in an array.

```javascript
let myArray = [1, 2, 3, 4, 5];
let max = myArray.reduce(function(previous, current) {
    return previous > current ? previous : current;
});
console.log(max); // 5
```

This one looks even stranger but it reads:

"Return the `previous` value if it is greater than the `current` value. Otherwise, return the `current` value."

---

A quick detour to explain something important.

The return above seems odd because it is using something called a ternary operator.

This is the only operator in JavaScript that takes three operands. It is a shortcut for an `if...else` statement.

    The condition is the first operand. 

    The second operand is the expression to execute if the condition is true. 

    The third operand is the expression to execute if the condition is false.

---

We can find the mode of the array with the `reduce()` method.

```javascript
let myArray = [1, 2, 3, 4, 5, 5];
let mode = myArray.reduce(function(previous, current) {
    previous[current] = (previous[current] || 0) + 1;
    return previous;
}, {});
console.log(mode); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 2 }
```

The above is not easy to look at but we can struggle through it.

We can do that by altering the code a bit.

```javascript
let myArray = [1, 2, 3, 4, 5, 5];
let mode = myArray.reduce(function (previous, current) {
  if (current in previous) {
    previous[current] += 1;
  } else {
    previous[current] = 1;
  }
  return previous;
}, {});
console.log(mode); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 2 }
```

This does the same thing as the above but it is easier to read. 

The `for...in` statement is used to loop through the properties of an object.

In this case, it is used to loop through the properties of the `previous` object.

If the `current` value is in the `previous` object, it adds one to the value of the `current` property.

If the `current` value is not in the `previous` object, it creates a new property with the `current` value and sets it to 1.

Then it returns the `previous` object which contains the `current` value and the number of times it appears in the array.

The empty array `{}` is the initial value of the `previous` object. It is where the array is stored. 

**Warning: If the `{}` is not present then the program will return an error!**

*Note: The reason it reads `previous[current]` is because the `current` value is the property of the `previous` object.*

---

## A quick side-lesson

There are two types of notation. Dot notation (`.`) and bracket notation(`[]`).

Dot notation is used to access properties of an object.

```javascript
let myObject = {
    name: 'John',
    age: 30
};

console.log(myObject.name); // John
```

Bracket notation is used to access properties of an object.

```javascript
let myObject = {
    name: 'John',
    age: 30
};

console.log(myObject['name']); // John
```

The difference between the two is that dot notation is used when the property name is known and bracket notation is used when the property name is unknown.

```javascript
let myObject = {
    name: 'John',
    age: 30
};

let myProperty = 'name';

console.log(myObject.myProperty); // undefined

console.log(myObject[myProperty]); // John
```

The reason the first one returns `undefined` is because it is looking for a property called `myProperty` which does not exist.

---

With the above taken into consideration, we can now better understand that the `previous[current]` is looking for a property called `current` in the `previous` object and that dot notation would not work here due to the fact that the property name is unknown until the program is run.

---

## Refactoring

Refactoring is the process of restructuring existing computer code without changing its external behavior.

This is typically done to improve the code's readability, simplify its structure, or to make it easier to maintain. 

One of the ways this is done is to utilize the built-in methods of the array.

Lets say you wanted to find the highest number in an array. 

You could do it:

```javascript
let myArray = [1, 2, 3, 4, 5];

let max = myArray[0];

for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > max) {
        max = myArray[i];
    }
}

console.log(max); // 5
```

Or you can just use the built-in `Math.max()` method.

```javascript
let myArray = [1, 2, 3, 4, 5];

let max = Math.max(...myArray);

console.log(max); // 5
```

**Remember that even "Dead Code" can be useful!**

## Non-scalar Arrays

Arrays can hold more than just numbers and strings.

They can hold other arrays.

```javascript
let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```

The above is a two-dimensional array.

It is an array of arrays.

The first array is the first row. The second array is the second row. The third array is the third row.

We can access the elements of the array by using the index of the array and the index of the element.

```javascript
let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(myArray[0][0]); // 1

console.log(myArray[1][1]); // 5

console.log(myArray[2][2]); // 9
```

The above reads: 

The first `[]` is the array and the next `[]` is the element. 

So `[0]` is the first array and `[0]` is the first element of the first array which in the above is `1`. 

## When do we use arrays?

Arrays are used when we want to store multiple values of the same type.

They are also used when we want to store multiple values of different types.

Whenever you are dealing with a collection of data, that is a sign that an array may be used.

## Summary

There are vector-based responses and scalar-based responses.

Vector being a collection of values and scalar being a single value.

Typically a programmer has to decide between a program thats *inefficient in space* or *inefficient in time*.

Space-inefficient programs use more memory than necessary.

Time-inefficient programs take longer to run than necessary.

*Performance tuning* is the process of making a program more efficient.

Another aspect to consider is if *random access* is needed. 

Random access is the ability to access any element in the array in constant time.

Arrays allow for the ability to access any element in the array in constant time.

While linked lists do not allow for the ability to access any element in the array in constant time meaning that every variable in the sort needs to be accessed prior to the variable you are looking for.

## Exercises

**Sort by highest grade order**

Let's psuedo-code it!

    1. Create an array of objects with the name and grade of each student.
    2. Sort the array by the grade of each student.
    3. Print the array to the console.

Sounds simple but who knows.

**Create an array of objects with the name and grade of each student.**

```javascript
let students = [
    {
        name: 'John',
        grade: 90
    },
    {
        name: 'Jane',
        grade: 100
    },
    {
        name: 'Jack',
        grade: 80
    },
    {
        name: 'Jill',
        grade: 95
    }
];
```

Not that hard. 

**Sort the array by the grade of each student.**

```javascript
students.sort((a, b) => b.grade - a.grade);
```

The `sort()` method is used to sort the array with the `b.grade - a.grade` being the criteria.

The `.grade` part is used to specifically target the grade of each student.

So it reads as if the grade of `b` is greater than the grade of `a` then `b` is placed before `a`.

**Print the array to the console.**

```javascript
console.log(students);
```

The above prints:

```javascript
[
  { name: 'Jane', grade: 100 },
  { name: 'Jill', grade: 95 },
  { name: 'John', grade: 90 },
  { name: 'Jack', grade: 80 }
]
```

**Find the average grade of the students.**

```javascript
let sum = students.reduce((previous, current) => previous + current.grade, 0);
let average = sum / students.length;
console.log(average);
```

The above uses the `reduce()` method to add up all the grades.

The average is then calculated by dividing the sum by the number of students. 

The number of students is found by using the `length` property of the array. This checks how many elements are in the array.

So there are four students and the sum of their grades is 365.

The `0` is the initial value of the `previous` variable. It is where the sum is stored. 

***Without a place to store the data, it returns a NaN (Not a Number)!***

## Write a program that checks if an array is sorted

Let's psuedo-code it!

    1. Create an array of numbers.
    2. Create a function that checks if the array is sorted.
    3. Print the result to the console.
    
**Create an array of numbers.**

```javascript
let myArray = [1, 2, 3, 4, 5];
```

**Create a function that checks if the array is sorted.**

```javascript
function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}
```

The above utilizes a `for` loop to check if the array is sorted.

The function accepts one parameter, in this case titled `array`. 

The `for` loop checks if the `i`th element is greater than the `i + 1`th element.

The `i + 1` means the next element in the array. Therefore, it is checking if the current element is greater than the next element.

If it is, it returns `false` which means that the array is not sorted.

If it is not, it returns `true` which means that the array is sorted.

## Write a substitution cipher

Let's psuedo-code it!

    1. Create an array of letters.
    2. Create a function that takes a string and returns a string.
    3. Print the result to the console.

**Create an array of letters.**

```javascript
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
               'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
               'u', 'v', 'w', 'x', 'y', 'z'];
```

Literally just the alphabet.

**Create a function that takes a string and returns a string.**

```javascript
function substitutionCipher(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let index = letters.indexOf(string[i]);
        result += letters[index + 1];
    }
    return result;
}
```

The above function accepts one parameter, in this case titled `string`.

The `for` loop loops through the `string` parameter.

The `result` variable is where the result is stored. It is left blank to start.

The `index` variable is read:

The `indexOf()` method returns the index of the first occurrence of a specified value in a string.

Basically, it tracks the letters being used in the string used in the `string` parameter.

The `result` variable is then added to the `letters` array with the `index + 1` being the criteria.

Again, the `result` variable takes the letters from the `letters` array and adds `1` to them resulting in the letters being shifted by one.

So the word `hello` would become `ifmmp`.

We can also use the go from cipher to plain text.

```javascript
function substitutionCipher(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let index = letters.indexOf(string[i]);
        result += letters[index - 1];
    }
    return result;
}
```

The only difference is that we are subtracting `1` from the `index` variable.

So, the letters shift back by one. So, `ifmmp` would become `hello`.

## Randomly generated cipher array

We can up the difficulty by creating a randomly generated cipher array.

Let's psuedo-code it!

    1. Create an array of letters.
    2. Create a function that takes a string and returns a string.
    3. Print the result to the console.

**Create an array of letters.**

```javascript
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
               'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
               'u', 'v', 'w', 'x', 'y', 'z'];
```

**Create a function that takes a string and returns a string.**

```javascript
function substitutionCipher(string) {
    let result = '';
    let cipher = letters.slice();
    cipher.sort(() => Math.random() - 0.5);
    for (let i = 0; i < string.length; i++) {
        let index = letters.indexOf(string[i]);
        result += cipher[index];
    }
    return result;
}
```

The big difference between this one and the one above is the `cipher` variable.

It it a function that takes the `letters` array and uses the `slice()` method to copy it.

The `sort()` method is then used to sort the array by randomizing it with the `Math.random()` method.

Without the `-0.5` the `sort()` method would sort the array in ascending order. 

Essentially, there is no randomization without the `-0.5`.

**Note: The number used after the `Math.random` decides how it is randomized so in the above if it were `-1` then the alphabet in letters would just begin from z to a. If it were `1` then it would just be a to z. The `-0.5` is used to randomize.**

***Warning: I could not find out how to randomize the letters absent of the `0.5`. Addition seems to nothing in this regards so subtracting is the only go to.  ***

**Perhaps there is something about the rest of it that eludes me.**

## Grade quartiles

Let's psuedo-code it!

    1. Create an array of numbers.
    2. Create a function that takes an array and returns an array.
    3. Print the result to the console.

**Create an array of numbers.**

```javascript
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

**Create a function that takes an array and returns an array.**

```javascript
function gradeQuartiles(array) {
    let result = [];
    let sortedArray = array.slice();
    sortedArray.sort((a, b) => a - b);
    let firstQuartile = sortedArray[Math.floor(sortedArray.length / 4)];
    let secondQuartile = sortedArray[Math.floor(sortedArray.length / 2)];
    let thirdQuartile = sortedArray[Math.floor(sortedArray.length * 3 / 4)];
    result.push(firstQuartile, secondQuartile, thirdQuartile);
    return result;
}
```
The above looks confusing but its not that out of pocket.

The function accepts one parameter, in this case titled `array`.

The `results` stores the array. It is empty to start. 

`sortedArray()` is a function that takes the `array` parameter and uses the `slice()` method to copy it. 

Then the array is sorted with the `sort()` method.

In this case it is ordered in sequence from lowest to highest.

The `firstQuartile` variable is read: 

    The first quartile is the median of the lower half of the data set. 
    This is found by dividing the data set with the median and then dividing the lower half of the data set with the median.

The `secondQuartile` variable is read:

    The second quartile is the median of the data set. 
    his is found by dividing the data set in half. 

The `thirdQuartile` variable is read:

    The third quartile is the median of the upper half of the data set. 
    This is found by multiplying the data set with the median and then dividing the upper half of the data set with the median.
    
    It is multiplied by 3 because the data set is divided into 4 parts. 
    So, the upper half is 3/4 of the data set.

The `result` variable is then pushed with the `firstQuartile`, `secondQuartile`, and `thirdQuartile` variables.

---

Good work!