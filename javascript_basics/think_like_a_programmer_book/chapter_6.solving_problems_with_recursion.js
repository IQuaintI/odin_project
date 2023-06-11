//[docs/notes/think_like_a_programmer.chapter_6_solving_problems_with_recursion.md]//

function countdown(i) {
  console.log(i);
  if (i <= 0) {
    return;
  } else {
    countdown(i - 1);
  }
}

countdown(5);

//Indirect recursion

function isEven(i) {
  if (i === 0) {
    return true;
  } else {
    return isOdd(i - 1);
  }
}

function isOdd(i) {
  if (i === 0) {
    return false;
  } else {
    return isEven(i - 1);
  }
}

console.log(isEven(5));
console.log(isOdd(5));

function countUp(i, max) {
  console.log(i);
  if (i < max) {
    countUp(i + 1, max);
  }
}

countUp(1, 5);

function countDown(i) {
  if (i <= 0) {
    return;
  } else {
    console.log(i);
    countDown(i - 1);
  }
}

countDown(5);

function sum(arr, size) {
  let total = 0;
  for (let i = 0; i < size; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4, 5], 5));

function sumRecursive(arr, size) {
  if (size <= 0) {
    return 0;
  } else {
    return sumRecursive(arr, size - 1) + arr[size - 1];
  }
}

console.log(sumRecursive([1, 2, 3, 4, 5], 5));

function factorialHeadRecursion(n) {
  if (n === 0) {
    return 1;
  }

  // Recursive call occurs before any other operations
  const recursiveResult = factorialHeadRecursion(n - 1);

  // Subsequent operations are performed after the recursive call returns
  return n * recursiveResult;
}

console.log(factorialHeadRecursion(3));

function factorialTailRecursion(n, accumulator = 1) {
  if (n === 0) {
    return accumulator;
  }

  // Recursive call occurs as the last operation
  return factorialTailRecursion(n - 1, n * accumulator);
}

console.log(factorialTailRecursion(3));

function factorial(number, currentNumber, product) {
  currentNumber = currentNumber || 1;
  product = product || 1;

  if (currentNumber > number) {
    return product;
  }

  return factorial(number, currentNumber + 1, product * currentNumber);
}

console.log(factorial(5)); // Output: 120
