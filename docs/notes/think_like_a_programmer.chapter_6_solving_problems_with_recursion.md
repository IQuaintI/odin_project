# Chapter 6: Solving Problems with Recursion

## What is Recursion?

**Recursion is technique where the a function directly or indirectly calls itself.**

Yes, it is that simple. 

There is more too it but keep in mind that much of what is exercised in this chapter includes loops which can make this somewhat harder to understand

It is a way of solving problems by breaking them down into smaller and smaller sub-problems until you get to a small enough problem that it can be solved trivially.

Recursion looks elegant when done well, but is actually a rather difficult concept for most people to understand since it is different from the way that most people think.

The most common recursion is a function that calls itself directly. This is called **direct recursion**.

```javascript
function countdown(i) {
  console.log(i);
  if (i <= 0) {
    return;
  } else {
    countdown(i - 1);
  }
}
```

The above function sets a countdown from a given number to zero. 

It does this by printing the number and then calling itself with the number minus one. 

It stops when the number is less than or equal to zero.

There is also **indirect recursion** where a function calls another function that calls the first function.

```javascript
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
```

The above functions check if a number is even or odd.

The `isEven` function checks if the number is zero, if it is then it returns true, otherwise it calls the `isOdd` function with the number minus one.

This means that the `isEven` is effectively checking to see if the number is odd since it is running it through the `isOdd` function and then subtracting the number by one.

Further break down:


    1. First, it checks whether the argument is zero.
    2. If it is, it returns true, because zero is even.
    3. If it isn’t zero, it subtracts one from the given number, 
    and calls the other function (it now has to be the other one—you just checked that it isn’t zero).
    4. After receiving an answer, it returns the opposite. 
    If isEven returned true, the whole call returns false, and vice versa.
    5. The result is a chain of function calls that will end up returning either true or false. */ 

This works because isEven calls isOdd with the integer minus 1, which calls isEven with the integer minus 2, which calls isOdd with the integer minus 3, and so on until the integer is 0. When the integer is 0, isEven returns true and the recursion stops.

The `isOdd` function works the same way, except it calls `isEven` instead of `isOdd` when the integer is not 0.

This one is bit confusing but know that it is prone to error and is **not** recommended.

There is also something known as the **base case**. 

**This is the condition that stops the recursion.**


## Head and Tail Recursion

There are two types of recursion: **head recursion** and **tail recursion**.

**Head recursion** is when the recursive call is at the beginning of the function.

```javascript
function factorialHeadRecursion(n) {
  if (n === 0) {
    return 1;
  }
  
  // Recursive call occurs before any other operations
  const recursiveResult = factorialHeadRecursion(n - 1);
  
  // Subsequent operations are performed after the recursive call returns
  return n * recursiveResult;
}

```

The above function takes a number, subtracts one from it, and then multiplies it by the result of the recursive call. 

This is head recursion because the recursive call occurs before other operations.

**Tail recursion** is when the recursive call is at the end of the function.

```javascript
function factorialTailRecursion(n, accumulator = 1) {
  if (n === 0) {
    return accumulator;
  }
  
  // Recursive call occurs as the last operation
  return factorialTailRecursion(n - 1, n * accumulator);
}

```

The recursive function is called at the end of the function. 

The factorial reads that it takes the number and subtracts one and then multiplies it by the accumulator.

Note: The tail accumulator is used to keep track of the result of the previous recursive call allowing the function to maintain state across each recursive call.

A head recursion can reduce the data passed to the recursive call.

A tail recursion can result in passing additional data to the recursive call.

It is easy to get stuck in a tail recursion mode because they use implementation to early.



## The Big Recursive Idea

The BRI is that if you follow certain conventions in your coding, ***you can pretend that no recursion is taking place.***

<span style = "color:yellow">Note: A request is concerned with what not how!</span>

Let's this out!

### Computing the sum of an array of integers

    Write a recursive function that is given an array of integers and the size of the array as parameters. The function returns the sum of the integers in the array.

We can make this easy by first using an iterative solution.

```javascript
function sum(arr, size) {
  let total = 0;
  for (let i = 0; i < size; i++) {
    total += arr[i];
  }
  return total;
}
```

Now let's try it recursively.

```javascript
function sumRecursive(arr, size) {
  if (size <= 0) {
    return 0;
  } else {
    return sumRecursive(arr, size - 1) + arr[size - 1];
  }
}
```

The recursion here is not really needed since iterative solutions tend to be better for sequential data structures like arrays while recursive solutions tend to be better for hierarchical data structures like trees.

### Common Mistakes

***Starting implementation to early can cause issues further down the line that are hard to mend due to the issue being so deeply rooted in the code.***

One of the most common issues with recursive programs is overthinking them.

It's one of the biggest hurdles to programming in general.

Try not to do that here.

***Too Many parameter's***

Let us design a program that a number and returns the factorial of that number.

<span style = "color:yellow"> Note: A factorial is the product of an integer and all the integers below it. So, the factorial of 4 is 4 * 3 * 2 * 1 = 24. </span>

In order to do this we would need three things:

1. The number that is being factored 
2. The current number that is being multiplied
3. The product of the multiplication

```javascript
function factorial(number, currentNumber, product) {
  currentNumber = currentNumber || 1;
  product = product || 1;

  if (currentNumber > number) {
    return product;
  }

  return factorial(number, currentNumber + 1, product * currentNumber);
}

console.log(factorial(5, 1, 1)); // Output: 120
```

While the code above works as intended, it is not exactly an easy read. 

**To break it down:**

The `currentNumber` is set to `1` if it is not already set.

The `product` is set to `1` if it is not already set.

(These are the default values for the parameters so that the function can be called with only the number parameter.)

The `if` statement initially checks if the `currentNumber` is greater than the `number`.

If it is, then the end condition has been reached and the `product` is returned.

If not, then the function calls itself and then adds one to the `currentNumber` and multiplies the `product` by the `currentNumber`.

Then the function returns the result of the recursive call.

---

Before we proceed, let us break down the parameters.

The first number is the one you enter.

The second is the number that is being multiplied. 

(This second number is a somewhat hidden parameter that is used to keep track of the current number that is being multiplied.)

**However, the only number that is multiplied is the `product`**

***The numbers prior to the `product` are not multiplied and are there for the purpose of keeping track of the current number and the end condition!***

Or at least I think so.

---

The additional parameters (`currentNumber` and `product`) are used to keep track of the current number and the product of the multiplication, but they are not useful to the user of the function.

**The user of the function only cares about the number that is being factored.**

We can avoid this problem by using a wrapper function.

The refactored version:

```javascript
function factorial(number) {
  function factorialHelper(currentNumber, product) {
    if (currentNumber > number) {
      return product;
    }

    return factorialHelper(currentNumber + 1, product * currentNumber);
  }

  return factorialHelper(1, 1);
}

console.log(factorial(5)); // Output: 120
```
The wrapper function is called `factorial` while the recursive function is called `factorialHelper`.

The `factorial` function calls the `factorialHelper` function with the initial values of `1` and `1`.

(The values are `1` and `1` because the `currentNumber` and `product` are set at the bottom where it says `return factorialHelper(1, 1);`)

The `if` statement checks if the `currentNumber` is greater than the `number`. (Basically checking to see if the end condition has been reached.)

If it is, then the `product` is returned.

If not, then the function calls itself and then adds one to the `currentNumber` and multiplies the `product` by the `currentNumber`.

Then the function returns the result of the recursive call.












