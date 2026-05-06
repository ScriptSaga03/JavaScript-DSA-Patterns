
// Module 1 => Variables, Data Types & Arithmetic Operators
// Hours in second
function secondInHours(hour) {
  return hour * 3600;
}
console.log(secondInHours(5));

// perimeter of triangle
function perimeterOfTriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}

console.log(perimeterOfTriangle(34, 23, 15));

// reminder of two numbers
function getReminder(val1, val2) {
  return val1 % val2;
}
console.log(getReminder(10, 3));
console.log(getReminder(10, 5));
console.log(getReminder(40, 6));

// edge of triangle
function edgeOfTriangle(side1, side2) {
  return side1 + side2 - 1;
}
console.log(edgeOfTriangle(12, 18));

// square of number
function squareOfNumber(num) {
  return num * num;
}
console.log(squareOfNumber(5));
console.log("method 2: square of number :-", Math.pow(5, 2));

// convert age to days
function convertAgeToDate(age) {
  return age * 365;
}
console.log(convertAgeToDate(12));

// average
function getAverage(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  return Math.floor(avg);
}
console.log(getAverage(5, 8, 3));

// string jointer
function stringJointer(str1, str2) {
  return str1 + " " + str2;
}
console.log(stringJointer("Mehtab", "Developer"));


