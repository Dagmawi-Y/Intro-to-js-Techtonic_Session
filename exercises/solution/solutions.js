// Exercise 1: Variable Manipulation
let a = 5;
let b = 10;

// Swapping values of variables a and b
let temp = a;
a = b;
b = temp;

console.log('Exercise 1: Variable Manipulation - After swapping:');
console.log('a =', a);
console.log('b =', b);

// Exercise 2: String Reversal
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log('\nExercise 2: String Reversal');
console.log(reverseString('hello')); // Should output "olleh"

// Exercise 3: Array Filtering
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log('\nExercise 3: Array Filtering');
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output [2, 4]

// Exercise 4: Array Summation
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log('\nExercise 4: Array Summation');
console.log(sumArray([1, 2, 3, 4, 5])); // Should output 15

// Exercise 5: Array Sorting
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log('\nExercise 5: Array Sorting');
console.log(sortArray([3, 1, 5, 2, 4])); // Should output [1, 2, 3, 4, 5]

// Exercise 6: Fibonacci Sequence
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log('\nExercise 6: Fibonacci Sequence');
console.log(fibonacci(10)); // Should output [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Exercise 7: Factorial Calculation
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log('\nExercise 7: Factorial Calculation');
console.log(factorial(5)); // Should output 120 (5!)

// Exercise 8: Palindrome Checker
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log('\nExercise 8: Palindrome Checker');
console.log(isPalindrome('racecar')); // Should output true
console.log(isPalindrome('hello')); // Should output false
