//[[think_like_a_programmer.chapter_3_solving_problems_with_arrays]]//

//Sort by highest grade

let students = [
  {
    name: "John",
    grade: 90,
  },
  {
    name: "Jane",
    grade: 100,
  },
  {
    name: "Jack",
    grade: 80,
  },
  {
    name: "Jill",
    grade: 95,
  },
];

students.sort((a, b) => b.grade - a.grade);

console.log(students);

let sum = students.reduce((previous, current) => previous + current.grade, 0);
let average = sum / students.length;
console.log(average);

//Write a program that can tell if the array is sorted or not

let myArray = [1, 2, 5, 4, 5]; //false
let myArray2 = [1, 2, 3, 4, 5]; //true

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted(myArray));
console.log(isSorted(myArray2));

//Creating a cipher

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function substitutionCipher(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let index = letters.indexOf(string[i]);
    result += letters[index + 1];
  }
  return result;
}

console.log(substitutionCipher("hello"));

//Random cipher

function substitutionCiphers(string) {
  let result = "";
  let cipher = letters.slice();
  cipher.sort(() => Math.random() + 0.5);
  for (let i = 0; i < string.length; i++) {
    let index = letters.indexOf(string[i]);
    result += cipher[index];
  }
  return result;
}

console.log(substitutionCiphers("hello"));

// Number quartiles
let myArrayQuartile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function gradeQuartiles(array) {
  let result = [];
  let sortedArray = array.slice();
  sortedArray.sort((a, b) => a - b);
  let firstQuartile = sortedArray[Math.floor(sortedArray.length / 4)];
  let secondQuartile = sortedArray[Math.floor(sortedArray.length / 2)];
  let thirdQuartile = sortedArray[Math.floor((sortedArray.length * 3) / 4)];
  result.push(firstQuartile, secondQuartile, thirdQuartile);
  return result;
}

console.log(gradeQuartiles(myArrayQuartile));
