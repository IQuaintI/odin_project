---
id: 584oe1uztm6s8jpv2lcelzf
title: How to think like a programmer
desc: ''
updated: 1679875434311
created: 1679683783819
---
        Coding is about explaining something complicated to a dumb box.
---

## Programming
        Programming is not about languages, it's about logic.
        Programming is not about syntax, it's about algorithms.
        Programming is not about tools, it's about thinking.
        Programming languages are easier than human languages as they have a fixed syntax and grammar.

***If you don't know what code to write you don't know the problem you are trying to solve.***
--- 
## Comments
***Comments are not for you and they are not for the next person.***

***Code is there to explain the comments to the computer***

***Your comments are your code***

### **You know when your algorithm is complete when you can look at every line and understand what it does.** 

        It is only then that you can start worrying about code
---
## Variables
Creating new variables has three main components that must come together to create a new variable.

        Name - What should it be called?
        Type - What type of data does it hold?
        Initial Value - What is it's starting value?
   
```javascript
    const name = 'Initial Value'
```

---
## Output

What message do you want to send the user?

```javascript
    console.log('Message')
```
---
## Input
What information do you need from the user?

        Variable - Where would the answers be stored?
        Message - What question is the user being asked?

Input should never be the first line of your algorithm as you need to know what you are asking for before you can ask for it.

You also need to have a variable in place to catch the answer

```javascript
    const name = prompt('What is your name?')
```
---
## Program

***If you are confused find someone who looks comfortable and make them uncomfortable***

**To write an algorithm do not use any code, just write out the steps in plain English**

        Create a variable for x
        Create a variable for y
        Create a variable for sum 
        Ask the user for a number and store it in x
        Ask the user for a number and store it in y
        Add x and y together and store the result in sum
        Display the result of sum

The above is a very good algorithm and can be translated into code very easily.

Afterwards, the comments are translated to code

Create a variable for x
```javascript
    let x
```
Create a variable for y
```javascript
    let y
```
Create a variable for sum
```javascript
    let sum
``` 
Ask the user for a number and store it in x
```javascript
    let x = prompt('Enter a number')
```
Ask the user for a number and store it in y
```javascript
    let y = prompt('Enter a number')
```
Add x and y together and store the result in sum
```javascript
    const sum = x + y
```
Display the result of sum
```javascript
    console.log(sum)
```

The final code would look like this:

```javascript
    const x = prompt('Enter a number')
    const y = prompt('Enter a number')
    const sum = x + y
    console.log(sum)
```

If you were to actually run the code above you would get the following result:

        Enter a number: 1
        Enter a number: 2
        12

This is because the prompt function returns a string and the + operator is used to concatenate strings. (Concatenation is the process of joining strings together.)

To fix this we need to convert the strings to numbers.

```javascript
    const x = Number(prompt('Enter a number'))
    const y = Number(prompt('Enter a number'))
    const sum = x + y
    console.log(sum)
```

Now when you run the code you will get the following result:

        Enter a number: 1 let i = 0
    while (i < 10) {
        console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        i++
    }
        Enter a number: 2
        3

---
```parseInt``` can be used to convert a string to an integer.

```Number``` can be used to convert a string to a number.

Either one can be used to convert a string to a number but, ```Number``` is called as a function that performs type conversion while ```parseInt``` is called as a function that parses a string a returns an integer.  

        Parsing means that an integer is analyzed and converted into a manner that can be readable.

        An integer being a data type used to represent real numbers that do not have fractional values.
        Simply, an integer is a whole number.
 
Parsing example: 

```javascript
    parseInt('1.2') // returns 1
    parseInt(20px) // returns 20 
    parseInt(2e10) // returns 2
```

**```parseInt``` stops at the first non-numeric character.**

Number example:

```javascript
    Number('1.2') // returns 1.2
    Number(20px) // returns NaN
    Number(2e10) // returns 20000000000 //The e is used to represent 10 being multiplied by itself 10 times (2 * 10^10)
```

**```Number``` will return attempt to convert the whole string and will return NaN if the whole string cannot be converted to a number.**

---

## Failure is a wonderful thing

All programming is debugging. 

***Did you tell it how to do it wrong or did you tell it the wrong thing?***

Is it an issue of implementation or algorithm?

## How to debug

The best way to debug is to not have bugs.

**Bad implementation can be googled but a bad algorithm cannot be.**

*If Google is not getting you your answer then your issue is not poor implementation but poor algorithms (or a poor understanding of the problem).*

Don't start from the solution, **start from the problem.** 

You can't solve a problem if you don't know what the problem is.

## Loop

Loops have three parts:

        Initial Value - What is the starting value?
        Condition - When should the loop stop?
        Increment - How should the value change each time?

```javascript
    for (let i = 0; i < 10; i++) {
        console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    }
```

The loop stops the number before the condition is met as ```i``` cannot equal it since ```i``` is **less** than 10.

## While loop

The while loop is similar to the for loop but it does not have an increment. It will perform the loop as long as the condition is true.

***Even though while loops do not have a stop condition, the stop condition must still be considered otherwise you might run into an infinite!***

```javascript 
   let a = 1;
   while (a === 1) {
       console.log('Infinite loop') // Infinite loop
   }
```
---
## Missile Command

You have to enter a the right password otherwise missiles will launch. 
You get three chances to get it right before sundown.
        
        Create a variable for password
        Create a variable for guess and allow it to take user input
        Create a variable for tries
        Create a while loop that presents the guess prompt and increments tries so long as the guess is not equal to the password and tries is less than 3
        Create an if statement that displays a message if the guess is equal to the password
        Create an else statement that displays a message if the guess is not equal to the password


Create a variable for password
```javascript
    let password = 'password'
```

Create a variable for guess and allow it to take user input
```javascript
    let guess = prompt('Enter the password')
```

Create a variable for tries
Note: The variable ```tries``` is set to ```1``` because the first guess is not counted as a try. This is because the while loop will not run if the guess is correct on the first try.
```javascript
    let tries = 1
```

Create a while loop that presents the guess prompt and increments tries so long as the guess is not equal to the password and tries is less than 3
```javascript
    while (guess !== password && tries < 3) {
        tries++
        guess = prompt('Enter the password')
    }
```

Create an if statement that displays a message if the guess is equal to the password
```javascript
    if (guess === password) {
        console.log('You have entered the correct password')
    }
```

Create an else statement that displays a message if the guess is not equal to the password
```javascript
    else {
        console.log('You have failed to enter the correct password')
    }
```

The final code would look like this:

```javascript
    let password = 'password'
    let guess = prompt('Enter the password')
    let tries = 1
    while (guess !== password && tries < 3) {
        tries++
        guess = prompt('Enter the password')
    }
    if (guess === password) {
        console.log('You have entered the correct password')
    } else {
        console.log('You have failed to enter the correct password')
    }
```
