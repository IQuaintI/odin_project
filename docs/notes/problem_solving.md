---
id: 2blxbiqns3r9h02m4id9d5v
title: Problem Solving
desc: ""
updated: 1679676542616
created: 1679584580444
---

## **This is a practice in problem solving through FizzBuzz**

    Write a program that takes a user’s input and prints the numbers from one to the number the user entered.
    However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz.
    For numbers which are multiples of both three and five print FizzBuzz.

## **Psuedo code for FizzBuzz**

    1. Take the user's input.
    2. When the user inputs a number loop from 1 to the entered number.
    3. If the current number is divisible by 3 then print "Fizz".
    4. If the current number is divisible by 5 then print "Buzz".
    5. If the current number is divisible by 3 and 5 then print "FizzBuzz".
    6. Otherwise print the current number.

### **1. Take the user's input**
```javascript 
let answer = parseInt(prompt("Enter a number"));
``` 

```prompt``` brings up a box that allows to enter a value.

 #### **_Warning: ```prompt``` throws an error if called with node in the terminal as it can only be seen on an html webpage!_**

```parseInt``` is used to convert the input into a number so 11 reads as ```11``` and not 1 and 1.



### **2. This loop starts at 1 and ends at the number the user entered**

```javascript
for (let i = 1; i <= answer; i++) {
console.log(i);
}
```

---
The ```for``` loop is used to loop through a block of code a number of times. 

The ```let i = 1``` sets the variable ```i``` to 1.
(```i``` is typically set to ```0``` but in the interest of this little project ```i``` set it to ```1``` as ```0``` cannot be divided which results in ```NaN```. However, in this project it returns **FizzBuzz** since the loop is testing to see if there is ```0``` remaining after dividing by ```3``` and ```5``` which there is since ```0``` cannot be divided showing that it is a multiple of both ```3``` and ```5```.)

The ```i <= answer``` is the condition that will be checked each time the loop is run. In this case, the loop will run until ```i``` is greater than ```answer```. (The loop stops on the number that ```answer``` is set to.)

The ```i++``` is the code that will be run after each loop. 

The ```console.log(i)``` is the code that will be run each time the loop is run.

---

### **3. If the current number is divisible by 3 then print "Fizz"**


```javascript
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
```
The ```%``` is the modulus operator. It returns the remainder of the division of two numbers. It is *not* dividing the numbers but rather returning the remainder of the division (in this case to see if the number is divisible by 3.)

### **4. If the current number is divisible by 5 then print "Buzz"**

```javascript
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

### **5. If the current number is divisible by 3 and 5 then print "FizzBuzz"**

```javascript
for (let i = 1; i <= answer; i++) {
if (i % 3 === 0 && i % 5 === 0) {
console.log("FizzBuzz");
} else if (i % 3 === 0) {
console.log("Fizz");
} else if (i % 5 === 0) {
console.log("Buzz");
} else {
console.log(i);
}
}
```

### **6. Otherwise print the current number**
```javascript
else {
console.log(i);
}
```
The ```else``` statement is used to run a block of code if the condition is false. In this case, if the number is not divisible by 3 and/or 5 then it will print the number. The ```i``` is the current number in the loop.


#### **Knowledge Check**

    1Q. What are the three stages in the problem solving process?
    1A. Understand, Plan, and Execute.

    2Q. Why is it important to clearly understand the problem first?
    2A. If you don't understand the problem you can't solve it.

    3Q. What can you do to help get a clearer understanding of the problem?
    3A. Break the problem down into smaller pieces and try to solve each piece individually.

    4Q. What are some of the things you should do in the planning stage of the problem solving process?
    4A. Consider the inputs and outputs, consider the edge cases, and consider the constraints.

    5Q. What is an algorithm?
    5A. A set of instructions for solving a problem.

    6Q. What is pseudocode?
    6A. Writing out the steps of an algorithm in plain English.

    7Q. What are the advantages of breaking a problem down and solving the smaller problems?
    7A. It makes the problem more manageable and it helps prevent burnout.


---

# **A question from "How to think like a programmer"**

## **Return the third largest number in an array**

### **Psuedo code for third largest number**

    1. Take the user's input and convert it to an array. 
    2. Sort the array in descending order.
    3. Pick the third number in the array.


### **1. This takes the user's input and converts it to an array**
    
```javascript
let array = prompt("Enter a list of numbers separated by commas");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```
```prompt``` brings up a box that allows to enter a value.
The ```array``` that is logged here is for display purposes. The values entered in the prompt would be logged otherwise.

### **2. This sorts the array in descending order**

```javascript
let sortedArray = array.sort((a, b) => b - a);

console.log(sortedArray);
```

---
```array.sort ```organizes them in alphabetical order.
```javascript
const months = ["Jan", "March", "April", "June"];
months.sort(); // [ 'April', 'Feb', 'Jan', 'March' ]
```
Alphabetical order is determined by the Unicode value of each character in the string. In this case ```April``` comes before ```Feb``` because the Unicode value of ```A``` is less than the Unicode value of ```F```.
(The unicode value of ```A``` is ```65``` and the unicode value of ```F``` is ```70```.) ***The lower unicode value comes first.*** 



```array.sort((a, b) => a - b)``` organizes them in ascending order
```javascript
months.sort((a, b) => a - b); // [ 'Jan', 'Feb', 'March', 'April' ]
```
The function ```(a,b) = a - b``` is a callback function.
 
    A callback function is a function that is passed into another function as an argument. 
    The callback function is then called inside the outer function to complete some kind of routine or action.  

***If it returns a negative number, ```a``` will come before ```b```. If it returns a positive number, ```b``` will come before ```a```. If it returns ```0```, ```a``` and ```b``` will remain unchanged.***

```array.sort((a, b) => b - a)``` organizes them in descending order
```javascript
months.sort((a, b) => b - a); // [ 'April', 'March', 'Feb', 'Jan' ]
```

How numbers work using the above principles.
```javascript
const numbers = [1, 30, 4, 21, 100000];
numbers.sort(); // [1, 100000, 21, 30, 4]
numbers.sort((a, b) => a - b); // [1, 4, 21, 30, 100000]
numbers.sort((a, b) => b - a); // [100000, 30, 21, 4, 1]
```
---