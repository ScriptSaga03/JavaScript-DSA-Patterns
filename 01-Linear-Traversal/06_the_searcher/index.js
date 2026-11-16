// Element Searcher Pattern
// Problem 1 : Element Search
const elementSearcher = (arr, target) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};

console.log(elementSearcher([10, 20, 30, 40, 50], 40));
console.log(elementSearcher([10, 20, 30, 40, 50], 70));
console.log(elementSearcher([10, 20, 30, 40, 50], 10));
console.log(elementSearcher([], 10));

// Problem 2: First Negative Number and return index
const findFirstNegative = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] < 0){
      return i;
    }
  }
  return 0;
};
console.log("First negative number in [1, 2, 3, -4, 5]:", findFirstNegative([1, 2, 3, -4, 5]));
console.log("First negative number in [1, 2, 3, 4, 5]:", findFirstNegative([1, 2, 3, 4, 5]));
console.log("First negative number in [-1, -2, -3, -4, -5]:", findFirstNegative([-1, -2, -3, -4, -5]));


// Problem 3: Check Positive Number and return true or false
const checkPositiveNumber  = (arr) =>{
    if(!Array.isArray(arr) || arr.length === 0) return 0;

    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i] < 0 ){
            return false;
        }
    }
    return true;
};
console.log("Check Positive number in [1, 2, 3, -4, 5]:", checkPositiveNumber([1, 2, 3, -4, 5]));
console.log("Check Positive number in [1, 2, 3, 4, 5]:", checkPositiveNumber([1, 2, 3, 4, 5]));
console.log("Check Positive number in [-1, -2, -3, -4, -5]:", checkPositiveNumber([-1, -2, -3, -4, -5]));

