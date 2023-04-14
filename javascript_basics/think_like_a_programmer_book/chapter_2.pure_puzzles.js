// [[think_like_a_programmer.chapter_2_pure_puzzles]]

//Problem: Half of a square

for (let i = 6; i > 0; i--) {
  console.log("#".repeat(i));
}

//Problem: Sideways triangle

for (let i = 0; i < 8; i++) {
  if (i < 5) {
    console.log("#".repeat(i));
  } else {
    console.log("#".repeat(8 - i));
  }
}

//Luhns Algorithm Function
//let number = prompt("Enter a credit card number");
let number = "4847352989263094"; //valid

function validateCreditCard(number) {
  let numberArray = Array.from(number);
  numberArray = numberArray.map((num) => Number(num));
  let oddNumbers = getOddNumbers(numberArray);
  let evenNumbers = getEvenNumbers(numberArray);
  let doubledEvenNumbers = getDoubledEvenNumbers(evenNumbers);
  let sumOfDoubledEvenNumbers = getSumOfDoubledEvenNumbers(doubledEvenNumbers);
  let sumOfOddNumbers = getSumOfOddNumbers(oddNumbers);
  let sumOfAllNumbers = sumOfDoubledEvenNumbers + sumOfOddNumbers;
  if (sumOfAllNumbers % 10 === 0) {
    return `The credit card number ${number} is valid`;
  } else {
    return `The credit card number ${number} is invalid`;
  }
}

function getOddNumbers(numberArray) {
  let oddNumbers = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(numberArray[i]);
    }
  }
  return oddNumbers;
}
function getEvenNumbers(numberArray) {
  let evenNumbers = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(numberArray[i]);
    }
  }
  return evenNumbers;
}
function getDoubledEvenNumbers(evenNumbers) {
  let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
  return doubledEvenNumbers;
}
function getSumOfDoubledEvenNumbers(doubledEvenNumbers) {
  let doubledEvenNumbersString = doubledEvenNumbers.toString();
  let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
  let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map((num) =>
    Number(num)
  );
  let doubledEvenNumbersArrayNumbersFiltered =
    doubledEvenNumbersArrayNumbers.filter((num) => !isNaN(num));
  let sumOfDoubledEvenNumbers = doubledEvenNumbersArrayNumbersFiltered.reduce(
    (a, b) => a + b
  );
  return sumOfDoubledEvenNumbers;
}
function getSumOfOddNumbers(oddNumbers) {
  let sumOfOddNumbers = oddNumbers.reduce((a, b) => a + b);
  return sumOfOddNumbers;
}

console.log(validateCreditCard(number));

//Problem: Upside down triangle
for (let i = 8; i > 0; i--) {
  if (i === 8) {
    console.log("#".repeat(8));
  } else if (i === 7) {
    console.log(" ".repeat(8 - i) + "#".repeat(6) + " ".repeat(8 - i));
  } else if (i === 6) {
    console.log(" ".repeat(8 - i) + "#".repeat(4) + " ".repeat(8 - i));
  } else if (i === 5) {
    console.log(" ".repeat(8 - i) + "#".repeat(2) + " ".repeat(8 - i));
  }
}

//Problem: I don't know what this is called
for (let i = 8; i > 0; i--) {
  if (i === 8) {
    console.log("#".repeat(2));
  } else if (i === 7) {
    console.log(" ".repeat(9 - i) + "#".repeat(4));
  } else if (i === 6) {
    console.log(" ".repeat(7 - i) + "#".repeat(6));
  } else if (i === 5) {
    console.log(" ".repeat(5 - i) + "#".repeat(8));
  } else if (i === 4) {
    console.log(" ".repeat(4 - i) + "#".repeat(8));
  } else if (i === 3) {
    console.log(" ".repeat(4 - i) + "#".repeat(6));
  } else if (i === 2) {
    console.log(" ".repeat(4 - i) + "#".repeat(4));
  } else if (i === 1) {
    console.log(" ".repeat(4 - i) + "#".repeat(2));
  }
}

//Problem: Another strange shape

for (let i = 8; i > 0; i--) {
  if (i === 8) {
    console.log("#".repeat(1) + " ".repeat(14) + "#".repeat(1));
  } else if (i === 7) {
    console.log(" ".repeat(1) + "#".repeat(2) + " ".repeat(10) + "#".repeat(2));
  } else if (i === 6) {
    console.log(" ".repeat(2) + "#".repeat(3) + " ".repeat(6) + "#".repeat(3));
  } else if (i === 5) {
    console.log(" ".repeat(4) + "#".repeat(8) + " ".repeat(10));
  } else if (i === 4) {
    console.log(" ".repeat(4) + "#".repeat(8) + " ".repeat(8));
  } else if (i === 3) {
    console.log(" ".repeat(2) + "#".repeat(3) + " ".repeat(6) + "#".repeat(3));
  } else if (i === 2) {
    console.log(" ".repeat(1) + "#".repeat(2) + " ".repeat(10) + "#".repeat(2));
  } else if (i === 1) {
    console.log("#".repeat(1) + " ".repeat(14) + "#".repeat(1));
  }
}

//Problem: Validate ISBN

let isbn = "978-1-861-97271-2";
//let isbn = prompt("Enter the 13-digit ISBN code: ");

function isValid(isbn) {
  return isbn.length === 13;
}

function isValidNumber(isbn) {
  return !isNaN(isbn);
}

let checkDigit = isbn[isbn.length - 1];

function validate(isbn) {
  isbn = isbn.replace(/-/g, "");
  if (isValid(isbn) && isValidNumber(isbn)) {
    let firstTwelveDigits = isbn.substring(0, 12);
    let firstTwelveDigitsArray = firstTwelveDigits.split("").map(Number);
    let multipliedDigits = firstTwelveDigitsArray.map(function (digit, index) {
      if (index % 2 === 0) {
        return digit * 3;
      } else {
        return digit * 1;
      }
    });
    let sum = multipliedDigits.reduce(function (a, b) {
      return a + b;
    });
    if (sum % 10 === 0 || isbn.endsWith(checkDigit)) {
      return `The ISBN ${isbn} is valid.`;
    } else {
      return `The ISBN ${isbn} is invalid.`;
    }
  } else {
    return "Invalid";
  }
}

console.log(validate(isbn));

//Convert decimal to binary

/*
let decimalNumber = prompt("Enter a decimal number.");

let binaryNumber = decimalNumber.toString(2);
*/

/*
let binaryNumber = 100;

let decimalNumber = parseInt(binaryNumber, 2);

console.log(decimalNumber);
*/

/*
function decimalToBinary(decimalNumber) {
  if (isNaN(decimalNumber)) {
    return "Invalid";
  } else {
    let binaryNumber = decimalNumber.toString(2);
    return binaryNumber;
  }
}

function binaryToDecimal(binaryNumber) {
  if (isNaN(binaryNumber)) {
    return "Invalid";
  } else {
    let decimalNumber = parseInt(binaryNumber, 2);
    return decimalNumber;
  }
}

function decimalToHexadecimal(decimalNumber) {
  if (isNaN(decimalNumber)) {
    return "Invalid";
  } else {
    let hexadecimalNumber = decimalNumber.toString(16);
    return hexadecimalNumber;
  }
}

function hexadecimalToDecimal(hexadecimalNumber) {
  if (isNaN(hexadecimalNumber)) {
    return "Invalid";
  } else {
    let decimalNumber = parseInt(hexadecimalNumber, 16);
    return decimalNumber;
  }
}
*/

function numberSystemToNumberSystem(number, from, to) {
  if (isNaN(number)) {
    return "Invalid";
  } else {
    number = parseInt(number, from);
    number = number.toString(to);
    return number;
  }
}

/*
console.log(decimalToBinary(100));
console.log(binaryToDecimal(1100100));
console.log(decimalToHexadecimal(100));
console.log(hexadecimalToDecimal(100));
*/
console.log(numberSystemToNumberSystem(100, 10, 2));

//Word Checker

//let sentence = prompt("Enter a sentence.");
let sentence = "The quick brown fox jumps over the lazy dog.";

let words = sentence.split(" ");

let characters = sentence.length;

let vowels = sentence.match(/[aeiou]/gi).length;

console.log(words);
console.log(characters);
console.log(vowels);
