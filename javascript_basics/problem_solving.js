//This is a practice in problem solving through FizzBuzz//

/*
    Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
    However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
    For numbers which are multiples of both three and five print FizzBuzz.
*/

//Psuedo code for FizzBuzz//

/*
    1. Take the user's input 
    2. When the user inputs a number loop from 1 to the entered number
    3. If the current number is divisible by 3 then print "Fizz"
    4. If the current number is divisible by 5 then print "Buzz"
    5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
    6. Otherwise print the current number
*/

//1. This takes the user's input and converts it to an integer//
// let answer = parseInt(prompt("Enter a number"));
let answer = 15;

//2. This loop starts at 1 and ends at the number the user entered//

/*
for (let i = 1; i <= answer; i++) {
  console.log(i);
}
*/

//However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz.//
//The below satisfies 3 and 4//

/*
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

//For numbers which are multiples of both three and five print FizzBuzz.//
//The below satisfies 5//
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

//Knowledge Check//

/*
    1Q. What are the three stages in the problem solving process?
    1A. Understand, Plan, and Execute

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
    7A. It makes the problem more manageable and it helps prevent burnout

*/

// // //

//A question from "How to think like a programmer"//
//Return the third largest number in an array//

//Psuedo code for third largest number//

/*
    1. Take the user's input and convert it to an array
    2. Sort the array in descending order
    3. Pick the third number in the array
*/

//1. This takes the user's input and converts it to an array//
//let array = prompt("Enter a list of numbers separated by commas");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//2. This sorts the array in descending order//
let sortedArray = array.sort((a, b) => b - a);

console.log(sortedArray);


//Array.sort testing//

//array.sort organizes them in alphabetical order//
const months = ["Jan", "March", "April", "June"];
months.sort(); // [ 'April', 'Feb', 'Jan', 'March' ]
//array.sort((a, b) => a - b) organizes them in ascending order//
//array.sort((a, b) => b - a) organizes them in descending order//
months.sort((a, b) => a - b); // [ 'Jan', 'Feb', 'March', 'April' ]
months.sort((a, b) => b - a); // [ 'April', 'March', 'Feb', 'Jan' ]

//array.sort organizes them in ascending order// //Note: Only the first number is sorted//
const numbers = [1, 30, 4, 21, 100000];
numbers.sort(); // [1, 100000, 21, 30, 4]
//array.sort((a, b) => a - b) organizes them in ascending order//
//array.sort((a, b) => b - a) organizes them in descending order//
numbers.sort((a, b) => a - b); // [1, 4, 21, 30, 100000]
numbers.sort((a, b) => b - a); // [100000, 30, 21, 4, 1]

//
