
// Module 2 Conditionals & Logical Operators
// Decision Making
// check Equality
function checkEquality(a, b) {
  return a === b;
}
console.log(checkEquality(4, 8));
console.log(checkEquality(4, "5"));
console.log(checkEquality(8, 8));
console.log(checkEquality(6, null));

// Even of Number
function evenOrOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}

console.log(evenOrOdd(6));
console.log(evenOrOdd(11));
console.log(evenOrOdd(25));
console.log(evenOrOdd(60));

// milk store logic
function milkStore(money) {
  return money > 20 ? "can you buy milk" : "not enough money";
}
console.log(milkStore(25));
console.log(milkStore(2));
console.log(milkStore(20));

// the truth checker
function isTruthyChecker(val) {
  // Ye kya hai? JS mein 0, null, undefined, "", aur NaN pehle se hi "Falsy" hote hain. ! (NOT) lagane se wo true ho jate hain, aur dusra ! lagane se wo wapas apni asli boolean state mein aa jate hain.
  return val === 0 || val === null || val === undefined ? false : true;
}

console.log(isTruthyChecker(0));
console.log(isTruthyChecker(5));
console.log(isTruthyChecker(null));
console.log(isTruthyChecker(undefined));
console.log(isTruthyChecker(12));

// pass or fail
function isPassed(score) {
  if (score > 90) return "A";
  else if (score > 50 && score <= 90) return "B";
  else return "Fail";
}
console.log(isPassed(49));
console.log(isPassed(90));
console.log(isPassed(95));
console.log(isPassed(65));
