/* 
Exercise: To check Divisibility and Multiple
Make by: Cristian Johany Devia
Course: Math Foundations
Term: #1
Date: 03-07-2022
*/

const myNumber = 80;
const myDivisor = 10;

// CHECK IF A NUMBER IS DIVISIBLE BY X NUMBER
function checkDivisibility(number, divisor) {
  return number % divisor === 0;
}

// CHECK IF A NUMBER MULTIPLE
function checkMultiple(number, divisor) {
  const divisionResult = number / divisor; // 6
  return divisor * divisionResult === number;
}

const isDivisible = checkDivisibility(myNumber, myDivisor);

if (!isDivisible) {
  console.log('It is not divisible!');
} else {
  const isMultiple = checkMultiple(myNumber, myDivisor);
  console.log(
    `- Is it divisible? ${isDivisible}\n- Is it multiple? ${isMultiple}`
  );
}

/* 
1. exercise: Create a method to calculate if a number is divisible:
	- NOTE: When we get a remainder different of zero(0), It means that the number
		is not divisible.

2. exercise: Create a method to check if a number is multiple of another one.
3. exercise: Create a method to check if is a prime number or composite number
4. exercise: Create a method to check if a number is even or odd
5. exercise: Create a method to add algebraic expressions
*/
