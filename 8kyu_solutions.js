//                                                      Newest always on top...

/*      Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
    return array.map(item => item * -1);
  }



/*      Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {

    let bmiIndex = weight / Math.pow(height, 2);
                        
    if(bmiIndex <= 18.5) {return "Underweight"}
    else if(bmiIndex <= 25.0) {return "Normal"}
    else if(bmiIndex <= 30.0) {return "Overweight"}
    else {return "Obese"}
  }




/*      Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    let array = [];
    
    for(let i = 1; i <= n; i++) {
      array.unshift(i)
    }
    return array;
  }




/*      Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
    return array.length > 0 ? (array.reduce((a, b) => a + b) / array.length) : 0}




/*      Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    let spl = name.split(' ');
    return (spl[0][0] + '.' + spl[1][0]).toUpperCase();
  }



/*      Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {
    switch (operation) {
      case '-': return value1 - value2;
      case '+': return value1 + value2;
      case '/': return value1 / value2;
      case '*': return value1 * value2;
    }
 }




/*      Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}




/*      Convert a Number to a String!

We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/

function numberToString(num) {
    return num.toString();
  }




/*      Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
    return x.replace(/ /g, "");
  }




/*      String repeat

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    return s.repeat(n);
  }




/*      Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
  let counter = 0;
  
  for (const obj of arrayOfSheep) {
    if (obj === true) counter++;
  }
  return counter;
}



// ...-2022/04/15

/*      Century From Year

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
    return Math.ceil(year/100);
}




/*      Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
*/

function monkeyCount(n) {
    let numbers = [];
    
    for(let i = 0; i <= n-1; i++) {
        numbers.push(i + 1);
    }
      
    return numbers;
}




/*      Sum Arrays

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

function sum (numbers) {
    let total = 0;
  
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
  
    return total;
}




/*      Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

function areYouPlayingBanjo(name) {
    let firstLetter = name.toLowerCase().startsWith("r");
    
    if(firstLetter) {
      return name + " plays banjo";
    }

    return name + " does not play banjo";
}




/*      Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
    let strReverse = "";
    
    for(let i = str.length -1; i >= 0; i--) {
      strReverse += str[i];
    }

    return strReverse;
}




/*      Find Maximum and Minimum Values of a List

Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/

var min = function(list){
    list.sort(function(a, b) {return a - b});
    return list[0];
}

var max = function(list){
    list.sort(function(a, b) {return b - a}); 
    return list[0];
}




/*      Sum without highest and lowest number

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(array) {
    if(array && array.length > 1 ) {
        let sort = array.sort(function(a,b) {
            return a - b;
        })
      
        let newArr = array.slice(1, array.length-1);
        let sum = 0;
       
        for(let i = 0; i < newArr.length; i++) {
            sum += newArr[i];
        }
        return sum;
    }
    
    return 0;
}




/*      Array plus array

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    
    for(let i = 0; i <= arr1.length-1; i++){
        sum += arr1[i];
    }
      
    for(let j = 0; j <= arr2.length-1; j++) {
        sum += arr2[j];
    }
    
    return sum;
}




/*      Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b){
    return b.toString();
}




/*      Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord( bool ) {
    if (bool === true) {
        return "Yes";
    } 
    
    return "No";
}




/*      Jenny's secret message

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

function greet(name){
    if(name === "Johnny") {
        return "Hello, my love!";
    }
    
    return "Hello, " + name + "!";
}




/*      Grasshopper - Summation

Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    let sum = 0;
    
    for(let i = 1; i <= num; i++) {
        sum += i; 
    }
    
    return sum;
}




/*      Opposite number

Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    return number * -1;
}




/*      Rock Paper Scissors!
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
    if (p1 == p2) {
        return "Draw!";
    } else if (p1 == "rock" && p2 == "scissors") {
        return "Player 1 won!";
    } else if (p1 == "scissors" && p2 == "paper") {
        return "Player 1 won!";
    } else if (p1 == "paper" && p2 == "rock") {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}




/*      Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(num) {
    if (num > 0) {
        return -Math.abs(num);
    }
    
    return num;
}




/*      Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
    return str.slice(1,-1);
}




/*      Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    result = arr.filter(checkPos);
    
    function checkPos(num) {
      return num > 0;
    }
    
    function getSum(total, num) {
      return total + num;
    }
    
    return result.reduce(getSum, 0);
}




/*      Even or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}




/*      You only need one - Beginner

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {
    return a.includes(x);
}




/*      Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
    result = number % 2;
    
    if(result === 0) {
        return number * 8;
    }
    
    return number * 9;
}




/*      Beginner Series #1 School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!
*/

function paperwork(n, m) {
    if(n < 0 || m < 0) {
        return 0;
    }
    
    return n * m;
}




/*      Function 1 - hello world

Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of?
What is a "hello world" solution you would want to show your friends?
*/

function greet() {
    return "hello world!";
}




/*      Parse nice int from char problem

You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
The first character in the string is always a number.
*/

function getAge(inputString){
    return parseInt(inputString);
}