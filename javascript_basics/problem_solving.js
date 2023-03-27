//FizzBuzz

//let answer = prompt("Enter a number");
let answer = 15;

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

//[[problem_solving]]

let password = "password";
let guess = prompt("Enter the password");
let tries = 1;
while (guess !== password && tries < 3) {
  tries++;
  guess = prompt("Enter the password");
}
if (guess === password) {
  console.log("You have entered the correct password");
} else {
  console.log("Missiles launched");
}
