//challenge1 : sum of the numbers
const addition = (num: number, num1: number): number => num + num1;

//convert 2  minutes into seconds
const convert = (minutes: number): number => minutes * 60;

//Perimeter of a Rectangle
const findPerimeter = (width: number, length: number): number =>
  (width + length) * 2;

//challenge: check Negative
const isNegative = (num: number): boolean => (num < 0 ? true : false);

//challenge 5 can I Drive

const canDrive = (name: string, age: number): string =>
  age < 18
    ? `${name} is not old enough to drive yet`
    : `${name} is old enough to drive`;

//challenge 6  Largest Number
const findLargest = (...number: number[]): number => {
  let largest = number[0];
  number.forEach((element: number): void => {
    if (element > largest) largest = element;
  });
  return largest;
};

//challlenge 7 BMI colculator
function calculateBMI(weight: number, height: number): string {
  let BMI = weight / (height * height);
  let result = "Your BMI is ";
  if (BMI > 30) {
    result += `${BMI} - Obese`;
  } else if (BMI >= 25) {
    result += `${BMI} - Overweight`;
  } else if (BMI >= 18.5) {
    result += `${BMI} - Overweight`;
  } else result += `${BMI} - Underweight`;
  return result;
}
//challenge 8 Greeting Base on Time
function greetUser(name: string, hour: number): string {
  let message = `${name}!`;
  if (hour >= 22 || hour <= 4) {
    message = "Good morning, " + message;
  } else if (hour >= 18) {
    message = "Good evening, " + message;
  } else if (hour >= 12) {
    message = "Good afternoon, " + message;
  } else message = "Good morning, " + message;
  return message;
}

//challenge 9 FiiBuzz
function fizzBuzzCheck(num: number): string {
  if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
  if (num % 3 == 0) return "Fizz";
  if (num % 5 == 0) return "Buzz";
  return num.toString();
}

//challenge 10 Perimeter2
function perimeter(shape: string, num: number): number {
  let shapes = {
    s: (radius: number): number => 3.142 * (radius * 2),
    c: (side: number): number => side * 4,
  };
  return shapes[shape](num);
}

//challenge 11 sum of Even Number
function sumEvenNumbers(num: number): number {
  let sum = 0;
  for (let i = 2; i <= num; i += 2) sum += i;
  return sum;
}

//challenge 12 Multiply by itself
const powerUp = (num: number, times: number): number => num ** times;

//challenge 13 Factorial Calculator
const factorial = (num: number): number =>
  num <= 0 ? 1 : num * factorial(num - 1);

//challenge 14 Mulktiple Sum
function sumMultiples(num: number, divisor: number): number {
  let sum = 0;
  for (let i = divisor; i <= num; i += divisor) {
    sum += i;
  }
  return sum;
}

//challenge 15 Sum of Digits
const sumDigits = (num: number): number =>
  num == 0 ? 0 : (num % 10) + sumDigits(Math.floor(num / 10));
