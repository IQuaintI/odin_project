---
id: 5d00h243d2426x4gy2lw90q
title: Chapter 2 pure puzzles
desc: 'The chapter 2 follow-along in notes'
updated: 1681316403475
created: 1679874742535
---
# Half of a square

        Write a program that uses only two output statements,
        to produce a pattern of hash symbols shaped like half
        of a perfect 5x5 square (or a right triangle):
        
        #####
        ####
        ###
        ##
        #
---
***NOTE: The `for` loop starts a new line every iteration so things display:***
<br />
`1`
<br />
`2`
<br />
`3`

***and not*** `1 2 3`

---

## Lets break it down

**How would we display a single row of `#`?**

        Create a for loop that loops 1 times.
        Create a variable that holds the number of # to print.
        Print the # to the console.

**Create a for loop that loops 1 times.**

```javascript
    for (let i = "#"; i.length < 2; i += "#") { 
        //do something
    }
```

**Note:** The length of the string is `< 2` because we want to print 1 and if we set it to `< 1` it will print 0 since it stops before the number is reached.

`length` is used to get how long a string is (How many characters there are). In this case we are using it to get the length of the string `i` which is `#` and then adding `#` to it

**Create a variable that holds the number of # to print.**

```javascript
    for (let i = hash; i.length < 2; i += hash) { 
        //do something
    }
```

The `let` declaration that is stated above is used to create a variable. In this case we are creating a variable called `i` and setting it to `#`

The variable can also be set outside of the for loop.

```javascript
    let i = "#";
    for (i; i.length < 2; i += "#") { 
        //do something
    }
```

or like this 

```javascript
    let i = "#---
***NOTE: The `for` loop starts a new line every iteration so things display:***
<br />
`1`
<br />
`2`
<br />
`3`

***and not*** `1 2 3`

---";   
    for (; i.length < 2; i += "#") { 
        //do something
    }
```

or maybe even this

```javascript
    let hash = "#";
    for (let i = hash; i.length < 2; i += hash) { 
        //do something
    }
```

**Print the `#` to the console.**

```javascript
    for (let i = "#"; i.length < 2; i += "#") {
    console.log(i);
    }
```
---

Now that we know how to print a single row of `#` we can use that to print the rest of the rows.

**How would we print the rest of the rows?**
    
            Create a for loop that loops 5 times.
            Create a variable that holds the number of # to print.
            Print the # to the console.

```javascript
    for (let i = "#"; i.length < 6; i += "#") {
        console.log(i);
    }
```

It seems there is an issue. 

The above code prints the following:

        #
        ##
        ###
        ####
        #####

and we want:

        #####
        ####
        ###
        ##
        #

**How do we do that?**

We can loop in reverse by doing a simple alteration.

```javascript
    for (let i = 6; i > 0; i--) {
    console.log(i);
    }
```

The above iterates from 6 to 1 as such:
    
            6
            5
            4
            3
            2
            1

To convert this to our problem we have to do a bit more tinkering.

We are going to be using the `repeat()` method. This method returns a new string with a specified number of copies of the string it was called on.

```javascript
  for (let i = 6; i > 0; i--) {
  console.log("#".repeat(i));
  }
```
---

*EDIT: I have figured out an alternative for the above:*
    
```javascript
    for (let i = 0; i < 6; i++) {
    console.log("#".repeat(6 - i));
    }
```

The `6 - i` means that once `i` is 1, `6 - i` will be 5. This will print out 5 `#` and so on. 

The `i < 6` means that there will be `6` lines and the `i++` means that `i` will increase by 1 every iteration. Conversely, `i--` would mean that `i` would decrease by 1 every iteration.

**Furthermore, the `6 - 1` means that the first line will start at `6` `#` and will decrease by 1 every iteration.**

---
The above finally prints out our desired message: 

        #####
        ####
        ###
        ##
        #
        
---

Keep in mind that `reverse` is a method that can be used to turn around arrays such as:
 
```javascript
    let arr = [1, 2, 3, 4, 5];
    arr.reverse();
    console.log(arr);
    // [5, 4, 3, 2, 1]
```
But it won't work on strings:

```javascript
    let str = "12345";
    str.reverse();
    console.log(str);
    // Uncaught TypeError: str.reverse is not a function
```

This is because `reverse` is a method that **only** works on arrays.

If you want it to work on strings, the string must be turned into an array:
    
```javascript
    let word = 'hello';
    let arr = word.split('');
    console.log(arr);
    // ["h", "e", "l", "l", "o"]
```
`split` turns a string into an array which can then be used with `reverse`:

```javascript
    let word = 'hello';
    let arr = word.split('');
    arr.reverse();
    console.log(arr);
    // ["o", "l", "l", "e", "h"]
```

To return the string-made-array back into a string, `join` is to be used like so:

```javascript
    let word = 'hello';
    let arr = word.split('');
    arr.reverse();
    let newWord = arr.join('');
    console.log(newWord);
    // olleh
```

***None of this works on numbers.***

```javascript
    let num = 12345;
    let arr = num.split('');
    arr.reverse();
    let newNum = arr.join('');
    console.log(newNum);
    // Uncaught TypeError: num.split is not a function
```

**However, the `reverse` does not work in this scenario**
    
The `#` that is assigned to `i` is a single character string. So when we do `i.length < 6` it is checking the length of the string `#` which is `1` and then prints just `1`.

---

# Problem: Sideways triangle

        Write a program only uses two 
        output statements to create the following pattern:
        
        #
        ##
        ###
        ####
        ###
        ##
        #
---

## Lets break it down

**How would we display a single row of `#`?**

        Create a for loop that loops 1 times.
        Create a variable that holds the number of # to print.
        Print the # to the console.

We already have done all this up top being: 
    
```javascript
    for (let i = "#"; i.length < 2; i += "#") {
    console.log(i);
    }
```

and we already know how to print the rest of the rows out in descending order:

```javascript
    for (let i = 6; i > 0; i--) {
    console.log("#".repeat(i));
    }
```

But how do we print the rows in ascending order? Simple. 

We can use the `repeat()` method to print the rows in ascending order like so:

```javascript
    for (let i = 0; i < 6; i++) {
    console.log("#".repeat(i));
    }
```

Notice that `i` is equal to `0` instead of `6`, since we are counting up and not down.

Notice that the increment is `i++` instead of `i--` since we are counting up and not down.

Notice that the condition is `i < 6` instead of `i > 0` since the loop will start at `0` and increase by `1` until it reaches `6` and then stop (at `5`).

***But how do we stop halfway and go back down?***

We use a conditional statement:

```javascript
    for (let i = 0; i < 8; i++) {
        if (i < 5) {
            console.log("#".repeat(i));
        } else {
            console.log("#".repeat(8 - i));
        }
    }
```

We use `i < 8` so we get 7 rows (remember it stops at one before).

We use `i < 5` so we get 4 rows (remember it stops at one before) in ascending order.

We use `8 - i` so we get 4 rows (remember it stops at one before) in descending order.

**The `8 - i` means that we are starting at `8` and subtracting `i` which is the current iteration of the loop.** 

So the first time the loop runs `i` is `0` so `8 - 0` is `8` and we print `8` rows of `#`. 

The second time the loop runs `i` is `1` so `8 - 1` is `7` and we print `7` rows of `#`. 

The third time the loop runs `i` is `2` so `8 - 2` is `6` and we print `6` rows of `#`. 

The fourth time the loop runs `i` is `3` so `8 - 3` is `5` and we print `5` rows of `#`. 

The fifth time the loop runs `i` is `4` so `8 - 4` is `4` and we print `4` rows of `#`. 

The sixth time the loop runs `i` is `5` so `8 - 5` is `3` and we print `3` rows of `#`. 

The seventh time the loop runs `i` is `6` so `8 - 6` is `2` and we print `2` rows of `#`. 

The eighth time the loop runs `i` is `7` so `8 - 7` is `1` and we print `1` rows of `#`.

---

***Warning: If the number being used to subtract (i.e `4 - 1` in an `i < 6`) then it will throw a `Range Error: Invalid count value: -1` which means that there are not enough characters complete the list of lines. ***

For example: 
```javascript
    for (let i = 0; i < 6; i++) {
    console.log("#".repeat(4 - i));
    }
```
Would return:

```javascript
    RangeError: Invalid count value: -1
```

However, this does return something:

```javascript
    for (let i = 0; i < 6; i++) {
    console.log("#".repeat(5 - i));
    }
```

Would return: 

```javascript 
    #####
    ####
    ###
    ##
    #

```

Notice how there is an empty line at the bottom. 

This is because the loop runs `6` times and the last time it runs `i` is `5` so `5 - 5` is `0` and we print `0` rows of `#`.

The one above this that is set to `4 - i` returns an error because the loop does not have enough characters to complete the list of lines.

The `0` space that is left at the bottom of the 6 lines in the above example is left one higher leaving an empty line at the bottom.

That empty line is what throws the error. 

Visualization:

```javascript
    for (let i = 0; i < 6; i++) {
    console.log("#".repeat(5 - i));
    }
```

```javascript
    ##### // 5 - 0 
    #### // 5 -1 
    ### // 5 - 2
    ## // 5 - 3
    # // 5 - 4
    // This is where the 0 would go in (5 - 5)
```

```javascript
    for (let i = 0; i < 6; i++) {
    console.log("#".repeat(4 - i));
    }
```

```javascript
    #### // 4 - 0
    ### // 4 - 1
    ## // 4 - 2
    # // 4 - 3
     // This is where the 0 would go in (4 - 4)
    // Empty line that throws the error
```


# Luhn Algorithm

The Luhn algorithm is a simple checksum formula 
used to validate a variety of identification
numbers, such as credit card numbers

The formula works like this:

Starting with the next to last digit and 
continuing with every other digit going 
back to the beginning of the card, double 
the digit.

Sum all doubled and untouched digits in 
the number.

If that total is a multiple of 10, the number
is valid.

Let's use `4847 3529 8926 3094` for an example:

1. We can start with a process called the *sum of odd numbers*

It stands to be noted that the first digit in ths line (and in others) is numbered `0` and not `1`. 

So the numbers are numbered like this:

```javascript
    0  1  2  3 / 4  5  6  7 / 8  9  10  11 / 12  13  14  15
    4  8  4  7 / 3  5  2  9 / 8  9  2   6 /  3   0   9   4
```

But back to what we were doing.

The *sum of odd numbers* for this array would be: 

```javascript
    4 + 0 + 6 + 9 + 9 + 5 + 7 + 8 = 48
```

**Note: You count from right to left.**

2. Now we have to lay out all even numbers and just like the odds, we lay them **right to left.**

```javascript
   9  3  2  8  2  3  4  4
```

3. All of the even numbers that we pulled have to be doubled. 

```javascript
   9   3   2   8   2   3   4   4
   18  6   4   16  4   6   8   8
```

Now we have to add up all these numbers, but there is one catch.

***The numbers that are double digit are added together to make one whole digit!***

For example, the doubled `9` becomes `18` but we have to add the `1` and the `8` together to make `9`.

```javascript
   9   3   2   8   2   3   4   4
   18  6   4   16  4   6   8   8
   //The final list below
   9   6   4   7   4   6   8   8
```

4. That finalized row of numbers must now be added together:

For the evens: 

```javascript
   9 + 6 + 4 + 7 + 4 + 6 + 8 + 8 = 52
```

For the odds:

```javascript
   4 + 0 + 6 + 9 + 9 + 5 + 7 + 8 = 48 
```

Now that we have the odds and evens added together, we can add them together:

```javascript
   48 + 52 = 100
```

In order to test if the number is valid, we have to divide the sum by `10` and if the remainder is `0` then the number is valid.

```javascript
   100 / 10 = 10 with a remainder of 0
```

## Write a program that detects if a number is a valid credit card number

### Lets break it down
        1. We have to take the users input and check if it is a valid credit card number.

        2. We have to take the number and turn it
        into an array of numbers.

        3. Sum all the odd numbers starting from the right.

        4. Take all the even numbers and double them (again from the right).

        5. Add all the numbers together. 

Since we already broke it all down above this should not be to hard. But we shall see. 

**We have to take the users input and check if it is a valid credit card number.**

We can do this by using the `prompt` method.

```javascript
    let number = prompt("Enter a credit card number");
```

The `prompt` method is used to bring up a dialog box that asks the user for input. 

*However, how do we know if the number is valid?*

We can do this by using the `isNaN` method.

```javascript
    let number = prompt("Enter a credit card number");
    if (isNaN(number)) {
        console.log("That is not a number");
    }
```

`isNaN` is used to check if the value is not a number
(Nan = Not a Number). 

But what if the user enters a number that is not a credit card number?

We can do this by using the `length` method.

```javascript
    let number = prompt("Enter a credit card number");
    if (isNaN(number)) {
        console.log("That is not a number");
    } else if (number.length < 13 || number.length > 16) {
        console.log("That is not a valid credit card number. Please enter a number between 13 and 16 digits.");
    }
```

The `length` method is used to check how any characters a value has. In this case we are checking if the number entered is between 13 and 16 digits.

**We have to take the number and turn it into an array of numbers.**

We can do this by using the `Array.from` method.

```javascript
    let number = prompt("Enter a credit card number");
    if (isNaN(number)) {
        console.log("That is not a number");
    } else if (number.length < 13 || number.length > 16) {
        console.log("That is not a valid credit card number. Please enter a number between 13 and 16 digits.");
    } else {
        let numberArray = Array.from(number);
    }
```

The `Array.from` method is used to create a new array from an array-like or iterable object.

But there is a small problem. The `Array.from` method turns the number into a string. We need to turn it into a number.

For that we are going to use the `map` method and the `Number` method.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
      }
```

The `map` method creates a new array and calls a function on each element in the array.
(i.e If you wanted to double every number in an array you would use the `map` method as each individual number is doubled and not the total amount)

For example:

```javascript
    let numbers = [1, 2, 3, 4, 5];
    numbers = numbers.map((num) => num * 2);
    console.log(numbers); // [2, 4, 6, 8, 10]
```

In this case we are using the `map` method to turn the string into a number. The `Number` method is used to turn a numbered-strings into a number. 

`parseInt` could also be used here but `Number` was chosen instead because `parseInt` will stop at the first non-number character. Whereas `Number` will turn the whole string into a number. 

This is important because we **only** want numbers in our program. 

Therefore, if `Number` returns a `NaN` then we have an added layer of security to make sure that the user only entered numbers.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
      }
```

**Sum all the odd numbers starting from the right.**

We can do this by using the `reverse` method.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        console.log(numberArray);
      }
```

The `reverse` method is used to reverse the order of the elements in an array. Since, the numbers are now reversed we can just add numbers together from the left (since the numbers are swapped).

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
      }
```

The `for` loop is used to loop through the array. The `if` statement is used to check if the index is odd. If it is odd then we add it to the `oddNumbers` array.

The `for` loop iterates through the whole array via `i < numberArray.length` and `i++` is used to increment the index.

The `if` statement checks to see if index is odd by dividing the number to see if it **does** have a remainder. If it does have a remainder then it is odd. 

Keep in mind the number being divided is the number spot in the array ***not*** the number itself. (i.e 0 is the first number in the array, 1 is the second number in the array, etc.)

**Take all the even numbers and double them (again from the right).**

This is not that different from pulling the odd numbers from the array. 

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
      }
```

Whereas the odd numbers were pushed to the `oddNumbers` array the even numbers are pushed to the `evenNumbers` array.

The `for` loop checks if the numbers in the `numberArray` by dividing the numbers in the array by `2` and checking if the remainder is `0`. If the remainder is `0` then the number is even.

**Now we have to double the even numbers**

We create another array to hold the doubled even numbers and then we use the `map` method to double the numbers in the `evenNumbers` array.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
      }
```

**Before we proceed we have to add the numbers that were doubled into the double digits separately**

We can do this by using the `toString` method. This method will turn the number into a string. 

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
      }
```

Now we have to split the numbers into separate digits. We can do this by using the `split` method. This method will split the string into an array of strings.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
      }
```

As you can see the `doubledEvenNumbersArray` is an array of strings. We need to convert the strings into numbers. We can do this by using the `map` method.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
      }
```

We have `Nan` in our array and have to get rid of it. We can do this by using the `filter` method. This method will filter out the `Nan` from the array.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
        let doubledEvenNumbersArrayNumbersFiltered = doubledEvenNumbersArrayNumbers.filter(
          (num) => !isNaN(num)
        );
      }
```

Now we add can add together the doubled numbers with the commas and `Nan` removed.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
        let doubledEvenNumbersArrayNumbersFiltered = doubledEvenNumbersArrayNumbers.filter(
          (num) => !isNaN(num)
        );
        let sumOfDoubledEvenNumbers = doubledEvenNumbersArrayNumbersFiltered.reduce(
          (a, b) => a + b
        );
      }
```

Now we can add the sum of the doubled numbers with the sum of the odd numbers.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
        let doubledEvenNumbersArrayNumbersFiltered = doubledEvenNumbersArrayNumbers.filter(
          (num) => !isNaN(num)
        );
        let sumOfDoubledEvenNumbers = doubledEvenNumbersArrayNumbersFiltered.reduce(
          (a, b) => a + b
        );
        let sumOfOddNumbers = oddNumbers.reduce((a, b) => a + b);
        let sumOfAllNumbers = sumOfDoubledEvenNumbers + sumOfOddNumbers;
      }
```

Now we can check if the sum of all numbers is divisible by 10. If it is, then the credit card number is valid.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        numberArray = numberArray.reverse();
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
        let doubledEvenNumbersArrayNumbersFiltered = doubledEvenNumbersArrayNumbers.filter(
          (num) => !isNaN(num)
        );
        let sumOfDoubledEvenNumbers = doubledEvenNumbersArrayNumbersFiltered.reduce(
          (a, b) => a + b
        );
        let sumOfOddNumbers = oddNumbers.reduce((a, b) => a + b);
        let sumOfAllNumbers = sumOfDoubledEvenNumbers + sumOfOddNumbers;
        if (sumOfAllNumbers % 10 === 0) {
          console.log("This is a valid credit card number");
        } else {
          console.log("This is not a valid credit card number");
        }
      }
```

**There is an issue however. **

The `reverse` methods is causing the numbers to be reversed in the wrong order.

The numbers that would normally be odd are now even due to the reversal.

For our example, the number was `4847 3529 8926 3094` and the reversed number is `4903 6298 9253 7484`.

This means that the odd numbers in the new array are: `9, 3, 2, 8, 2, 3, 4, 4,` and the even numbers are: `4, 0, 6, 9, 9, 5, 7, 8`.

The odd numbers are now even and the even numbers are now odd.

This means that the numbers that should be doubled are now not doubled.

We can fix this by reversing the array again by simply removing the `reverse` function. This will give us the correct numbers.

```javascript
      let number = prompt("Enter a credit card number");
      if (isNaN(number)) {
        console.log("That is not a number");
      } else if (number.length < 13 || number.length > 16) {
        console.log(
          "That is not a valid credit card number. Please enter a number between 13 and 16 digits."
        );
      } else {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
        let doubledEvenNumbersArrayNumbersFiltered = doubledEvenNumbersArrayNumbers.filter(
          (num) => !isNaN(num)
        );
        let sumOfDoubledEvenNumbers = doubledEvenNumbersArrayNumbersFiltered.reduce(
          (a, b) => a + b
        );
        let sumOfOddNumbers = oddNumbers.reduce((a, b) => a + b);
        let sumOfAllNumbers = sumOfDoubledEvenNumbers + sumOfOddNumbers;
        if (sumOfAllNumbers % 10 === 0) {
          console.log("This is a valid credit card number");
        } else {
          console.log("This is not a valid credit card number");
        }
      }
```

This completes our credit card validator.  

Now we can refactor. 

## Refactoring

Our code is quite long and there is a lot of repetition.

We can refactor this code by creating a function that will take in a number and return a boolean value.

```javascript
      function validateCreditCard(number) {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        let oddNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(numberArray[i]);
          }
        }
        let evenNumbers = [];
        for (let i = 0; i < numberArray.length; i++) {
          if (i % 2 === 0) {
            evenNumbers.push(numberArray[i]);
          }
        }
        let doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        let doubledEvenNumbersString = doubledEvenNumbers.toString();
        let doubledEvenNumbersArray = doubledEvenNumbersString.split("");
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
        let doubledEvenNumbersArrayNumbersFiltered = doubledEvenNumbersArrayNumbers.filter(
          (num) => !isNaN(num)
        );
        let sumOfDoubledEvenNumbers = doubledEvenNumbersArrayNumbersFiltered.reduce(
          (a, b) => a + b
        );
        let sumOfOddNumbers = oddNumbers.reduce((a, b) => a + b);
        let sumOfAllNumbers = sumOfDoubledEvenNumbers + sumOfOddNumbers;
        if (sumOfAllNumbers % 10 === 0) {
          return true;
        } else {
          return false;
        }
      }
```

Converting the for loop into a function makes it easier to further break it down. 

We can then call this function by passing in the credit card number.

We can break down the function into smaller functions. 

We can then create the functions that will return the odd numbers, even numbers, doubled even numbers and the sum of the doubled even numbers.

```javascript
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
        let doubledEvenNumbersArrayNumbers = doubledEvenNumbersArray.map(
          (num) => Number(num)
        );
        let doubledEvenNumbersArrayNumbersFiltered = doubledEvenNumbersArrayNumbers.filter(
          (num) => !isNaN(num)
        );
        let sumOfDoubledEvenNumbers = doubledEvenNumbersArrayNumbersFiltered.reduce(
          (a, b) => a + b
        );
        return sumOfDoubledEvenNumbers;
      }
      function getSumOfOddNumbers(oddNumbers) {
        let sumOfOddNumbers = oddNumbers.reduce((a, b) => a + b);
        return sumOfOddNumbers;
      }
```

Then we can add them together and return a boolean value.

```javascript
      function validateCreditCard(number) {
        let numberArray = Array.from(number);
        numberArray = numberArray.map((num) => Number(num));
        let oddNumbers = getOddNumbers(numberArray);
        let evenNumbers = getEvenNumbers(numberArray);
        let doubledEvenNumbers = getDoubledEvenNumbers(evenNumbers);
        let sumOfDoubledEvenNumbers = getSumOfDoubledEvenNumbers(
          doubledEvenNumbers
        );
        let sumOfOddNumbers = getSumOfOddNumbers(oddNumbers);
        let sumOfAllNumbers = sumOfDoubledEvenNumbers + sumOfOddNumbers;
        if (sumOfAllNumbers % 10 === 0) {
          return `The credit card number ${number} is valid`
        } else {
          return `The credit card number ${number} is not valid`;
        }
      }
```

There you have it. 

The completed credit card validator.

# Problem: Up-side down triangle

    Write a program that uses only two outputs to produce an up-side down triangle.
    ########
     ######
      ####
       ##

## Let's break it down

How would we display a single row of `#`?

We did this earlier so this should not be to hard.

```javascript 
    for (let i = 1; i > 0; i--) {
        console.log("#".repeat(i));
    }

```

This will display a single row of `#`.

Then we have to create a loop that will display the rows of `#` in descending order.

```javascript 
    for (let i = 8; i > 0; i--) {
        console.log("#".repeat(i));
    }

```

---

*EDIT: I don't know if this is needed for this part but it is interesting.*
*EDIT V2: It was a breakthrough*

This creates the upside-down triangle but it is not properly
aligned.

We can fix this by adding a space before the `#`.

```javascript 
    for (let i = 8; i > 0; i--) {
        console.log(" ".repeat(8 - i) + "#".repeat(i));
    }
```

The `' '` creates a space and the `8 - i` creates the correct number of spaces. So, if `i` is 8 then `8 - 8 = 0` and there will be no spaces. If `i` is 7 then `8 - 7 = 1` and there will be 1 space. If `i` is 6 then `8 - 6 = 2` and there will be 2 spaces. And so on.

So it would look like:

        ######## // 0 spaces

         ####### // 1 space

          ###### // 2 spaces

           ##### // 3 spaces

            #### // 4 spaces

             ### // 5 spaces

              ## // 6 spaces

               # // 7 spaces 

*The spaces are how far the `#` is from the left side of the screen.*

---

We need our code to look like:

    ########
     ######
      ####
       ##

So we need to add a space before the `#` and after the `#`.

```javascript 
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
```

The code above is the finalized code.

# Problem: Another strange shape

Write a problem that outputs the following pattern:

    ##
      ####
     ######
    ########
    ########
     ######
      ####
       ## 

## Let's break it down

We already know how to display a single row of `#`.

```javascript  
    for (let i = 1; i > 0; i--) {
        console.log("#".repeat(i));
    }
```

We also know how to display empty spaces `' '`.

```javascript  
    for (let i = 1; i > 0; i--) {
        console.log(" ".repeat(i));
    }
```

Now we have to create the pattern.

```javascript
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
```

The way the above is read. 

If `i === 8` is 8 then display 0 space and `##`. 
If `i === 7` is 7 then display 1 space and `####`. 
If `i === 6` is 6 then display 2 spaces and `######`. 
If `i === 5` is 5 then display 3 spaces and `########`. 
If `i === 4` is 4 then display 4 spaces and `########`. 
If `i === 3` is 3 then display 4 spaces and `######`. 
If `i === 2` is 2 then display 4 spaces and `####`. 
If `i === 1` is 1 then display 4 spaces and `##`.

# Problem: Another strange shape

Write a program that outputs the following pattern:

    #              #
     ##          ##
      ###      ###
        ########
        ########
      ###      ###
     ##          ##
    #              #

## Let's break it down

We already know how to display a single row of `#`.

```javascript  
    for (let i = 1; i > 0; i--) {
        console.log("#".repeat(i));
    }
```

We also know how to display empty spaces `' '`.

```javascript  
    for (let i = 1; i > 0; i--) {
        console.log(" ".repeat(i));
    }
```

Now we have to create the pattern.

```javascript
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
```

The above reads:

If `i === 8` is 8 then display 0 space and `#` and 14 spaces and `#`.
If `i === 7` is 7 then display 1 space and `##` and 10 spaces and `##`.
If `i === 6` is 6 then display 2 spaces and `###` and 6 spaces and `###`.
If `i === 5` is 5 then display 4 spaces and `########` and 10 spaces.
If `i === 4` is 4 then display 4 spaces and `########` and 8 spaces.
If `i === 3` is 3 then display 2 spaces and `###` and 6 spaces and `###`.
If `i === 2` is 2 then display 1 space and `##` and 10 spaces and `##`.
If `i === 1` is 1 then display 0 space and `#` and 14 spaces and `#`.

# Problem: ISBN Validation

Write a program that validates the 13-digit ISBN code. 

The program should ask the user to enter the 13-digit code and then output `Valid` or `Invalid`.

### Let's break it down

The International Standard Book Number (ISBN) code is a 13-digit code.

For us to validate the ISBN code, we need to know the following:

    1. Take the user input and remove the hyphens.

    1. Take the first 12 digits of the ISBN code 
       and multiply each digit alternatively by 1 and 3.

    2. Add the 12 products together.
    
    3. Divide the sum by 10 and determine the remainder.

    4. If the remainder is not 0 then subtract the remainder from 10. 
       The result is the check digit. 
       If the remainder is 0 then the check digit is 0.

Let us use the number: `978-1-861-97271-2`

The first 12 digits are: `978186197271`

The check digit is: `2`


## Take the user input and remove the hyphens.

We need to take user input by using `prompt` and remove the hyphens along with other validations.

```javascript
let isbn = prompt("Enter the 13-digit ISBN code: ");


function isValid(isbn) {
  return isbn.length === 13;
}

function isValidNumber(isbn) {
  return !isNaN(isbn);
}

function validate(isbn) {
  isbn = isbn.replace(/-/g, "");
  if (isValid(isbn) && isValidNumber(isbn)) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
```

The above reads:

`isValid` function checks if the length of the ISBN code is 13.

`isValidNumber` function checks if the ISBN code is a number. This is done by using `isNaN` which checks if the value is not a number.

The `removeHyphens` function removes the hyphens from the ISBN code. However, the `replace` function only replaces the first hyphen. 

To replace all the hyphens, we need to use the `g` flag. The `g` flag is used to perform a global match (find all matches rather than stopping after the first match).

```javascript
function removeHyphens(isbn) {
  return isbn.replace(/-/g, "");
}
```

The `removeHyphens` function while functional complicates this program. We can just add the `replace` function to the `validate` function.

### Take the first 12 digits of the ISBN code and multiply each digit alternatively by 1 and 3.

Let us use the number: `978-1-861-97271-2`.

How do we take the first 12 digits of the ISBN code?

We can use the `substring` function to take the first 12 digits of the ISBN code.

```javascript
function validate(isbn) {
  isbn = isbn.replace(/-/g, "");
  if (isValid(isbn) && isValidNumber(isbn)) {
    let firstTwelveDigits = isbn.substring(0, 12);
    return firstTwelveDigits;
  } else {
    return "Invalid";
  }
}
```


`substring` is a function that takes two parameters. The first parameter is the starting index and the second parameter is the ending index.

The above reads: `0` being the first digit and `12` being the 13th digit.

Keep in mind that the `substring` function does not include the ending index. This means that the `substring` function will take the first 12 digits of the ISBN code since it stops on the last digit.

**Now we have to turn these numbers into an array in order to multiply each digit separately**

How do we multiply each digit alternatively by 1 and 3?

We can use the `split` function to split the string into an array of substrings.

```javascript
function validate(isbn) {
  isbn = isbn.replace(/-/g, "");
  if (isValid(isbn) && isValidNumber(isbn)) {
    let firstTwelveDigits = isbn.substring(0, 12);
    let firstTwelveDigitsArray = firstTwelveDigits.split("");
    return "Valid";
  } else {
    return "Invalid";
  }
}
```

The `split` renders something like:

```javascript
["9", "7", "8", "1", "8", "6", "1", "9", "7", "2", "7", "1"]
```

**We need to convert the string into numbers.**

We can use the `map` function to convert the string into numbers.

```javascript
function validate(isbn) {
  isbn = isbn.replace(/-/g, "");
  if (isValid(isbn) && isValidNumber(isbn)) {
    let firstTwelveDigits = isbn.substring(0, 12);
    let firstTwelveDigitsArray = firstTwelveD igits.split("").map(Number);
    return "Valid";
  } else {
    return "Invalid";
  }
}
```


The `map` function affects each element in the array. The `Number` function converts the string into a number.

**Now we have to multiply each digit**

We can use the `map` function to multiply each digit alternatively by 1 and 3.

```javascript
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
    return "Valid";
  } else {
    return "Invalid";
  }
}
```

The above reads: If the index is divisible by 2 then multiply the digit by 3. If the index is not divisible by 2 then multiply the digit by 1.

Basically, even numbers are multiplied by 3 and odd numbers are multiplied by 1.

The `digit` and `index` parameters are the parameters of the `map` function. 

The `digit` parameter is the current element being processed in the array. 

The `index` parameter is the index of the current element being processed in the array.

In other words, the first element in the array is `9` and the index is `0`. The second element in the array is `7` and the index is `1`.

If the index is divisible by 2 then multiply the digit by 3. If the index is not divisible by 2 then multiply the digit by 1.

###  Add the 12 products together.

We can use the `reduce` function to add the 12 products together.

```javascript
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
    return "Valid";
  } else {
    return "Invalid";
  }
}
```

`reduce` is a function that takes two parameters. The first parameter is the accumulator and the second parameter is the current value. The accumulator is the total of the previous values. The current value is the current element being processed in the array.

In other words, the `a` parameter is the total of the previous values. The `b` parameter is the current element being processed in the array. 

**Now we have to divide the sum by 10**

We can use the `modulus` operator to divide the sum by 10.

```javascript
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
    if (sum % 10 === 0) {
      return "Valid";
    } else {
      return "Invalid";
    }
  } else {
    return "Invalid";
  }
}
```

***If the remainder is not 0 then subtract the remainder from 10. The result is the check digit. If the remainder is 0 then the check digit is 0.***

Now we need to see if the remainder is equal to the check digit.

We can do that by using the `endsWith` function.

```javascript
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
```

The `endsWith` function checks if the string ends with the check digit.

_Note: `endsWith` is case sensitive and only works with strings._

The above works as advertised. Good work.

# Conversion from decimal to binary

## Introduction

We are going to convert a decimal number to a binary number.

Let's break it down:

      1. Convert the decimal number to a binary number.
      2. Convert the binary number to a decimal number.

## Convert the decimal number to a binary number

First, we need to take the user input.

```javascript
let decimalNumber = prompt("Enter a decimal number.");
```

Next, we need to convert the decimal number to a binary number.

```javascript
let decimalNumber = prompt("Enter a decimal number.");

let binaryNumber = decimalNumber.toString(2);
```

The `toString` function converts the decimal number to a binary number.

The number `2` is the radix. 

**The radix is the base of the number system, meaning that it is the number of digits or unique symbols that can be used to represent numbers in a positional numeral system.** 

**On this case a radix of `2` means that the number system is binary or base 2 or alternates between 0 and 1.**

The radix is optional and if it is not specified then the default value is `10` which is a base 10 number system or the decimal number system.

_Note: The `toString` function only works with numbers._

## Convert the binary number to a decimal number

First, we need to take the user input.

```javascript
let binaryNumber = prompt("Enter a binary number.");
```

Now we need to convert the binary number to a decimal number.

```javascript
let binaryNumber = prompt("Enter a binary number.");

let decimalNumber = parseInt(binaryNumber, 2);
```

`parseInt` is a function that takes two parameters. 

The first parameter is the string to be converted to a number. 

The second parameter is the radix. 

So, the above takes the `binaryNumber` and uses `2` as the radix which is the `0` and `1`.

_Note: The `parseInt` function only works with strings._

## Conversion from decimal to hexadecimal

This is not that hard:

      1. Convert the decimal number to a hexadecimal number.
      2. Convert the hexadecimal number to a decimal number.

We can do that by:

```javascript
let decimalNumber = prompt("Enter a decimal number.");

let hexadecimalNumber = decimalNumber.toString(16);

let decimalNumber = prompt("Enter a hexadecimal number.");

let hexadecimalNumber = parseInt(decimalNumber, 16);
```

The radix `16` is used because it uses the numbers `0` to `9` and the letters `A` to `F`.

Now we need to create a function that uses the above code.

We will now not use the `prompt` function in the function and check if the user input is a number.

First we will create a function that converts decimal to binary.

```javascript
function decimalToBinary(decimalNumber) {
  if (isNaN(decimalNumber)) {
    return "Invalid";
  } else {
    let binaryNumber = decimalNumber.toString(2);
    return binaryNumber;
  }
}
```

Now we will create a function that converts binary to decimal.

```javascript
function binaryToDecimal(binaryNumber) {
  if (isNaN(binaryNumber)) {
    return "Invalid";
  } else {
    let decimalNumber = parseInt(binaryNumber, 2);
    return decimalNumber;
  }
}
```

Now we will create a function that converts decimal to hexadecimal.

```javascript
function decimalToHexadecimal(decimalNumber) {
  if (isNaN(decimalNumber)) {
    return "Invalid";
  } else {
    let hexadecimalNumber = decimalNumber.toString(16);
    return hexadecimalNumber;
  }
}
```

Now we will create a function that converts hexadecimal to decimal.

```javascript
function hexadecimalToDecimal(hexadecimalNumber) {
  if (isNaN(hexadecimalNumber)) {
    return "Invalid";
  } else {
    let decimalNumber = parseInt(hexadecimalNumber, 16);
    return decimalNumber;
  }
}
```

All of the above functions work as advertised. Good work. But we can do better. 

## We can convert this to a general function

We can create a function that converts any number system to any number system.

```javascript
function numberSystemToNumberSystem(number, from, to) {
  if (isNaN(number)) {
    return "Invalid";
  } else {
    let number = parseInt(number, from);
    let number = number.toString(to);
    return number;
  }
}
```

So the above works like this:

      1. The first parameter is the number to be converted.
      2. The second parameter is the number system that the number is in. 
      3. The third parameter is the number system that the number will be converted to.

The code would look like such:
  
  ```javascript
  numberSystemToNumberSystem(10, 10, 2);
  ```

The number radixes are:

      1. Binary: 2
      2. Octal: 8
      3. Decimal: 10
      4. Hexadecimal: 16

So the above code would convert the number `10` from the decimal number system to the binary number system.

## Conclusion

Well Done.