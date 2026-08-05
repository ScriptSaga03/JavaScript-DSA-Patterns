


// Problem 1 Element Search 
// Pattern The searcher
let arr = [10, 20, 30, 40];

function searchElem(arr, target) {
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false
}
console.log('Search Element :', searchElem(arr, 30))
console.log('Search Element :', searchElem(arr, 50))
console.log('Search Element :', searchElem(arr, 20))


// Problem 2 Find first negative number
// Pattern The Searcher with index return 
let arr1 = [12, 5, -8, 20, -3]
const findFirstNegNum = arr =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return i
        }
    }
    return -1
}

console.log('first negative number : ', findFirstNegNum(arr1));



// Problem Check All Positive
// PATTERN THE SEARCHER
function checkAllPositive(arr){
    for(let i = 0 ; i < arr.length;  i++){
        if(arr[i] <= 0) {
            return false
        }
    }
    return true
}
console.log('Check All positive numbers :', checkAllPositive(arr1))
console.log('Check All positive numbers :', checkAllPositive(arr))

// Problem 4 Prime Number
// pattern The Searcher
// Step 1: Prime Check Helper Function
function isPrimeNumber(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Kisi aur number se divide ho gaya
    }
    return true;
}
console.log('check prime : ', isPrimeNumber([4, 6, 8,9,11, 15]))
// Step 2: Array Linear Search Loop
function findFirstPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPrimeNumber(arr[i])) {
            return arr[i]; // Pehla prime milte hi return
        }
    }
    return null; 
}

console.log('First Prime:', findFirstPrime([4, 6, 8, 9, 11, 15])); 


// Problem 5 Target Frequency Limit
function checkFrequencyLimit(arr, target, k){
    let count = 0;
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] === target) {count++}
        if(count === k){
            return true
        }
    }
    return false
}
console.log(checkFrequencyLimit([2, 5, 2, 8, 2, 9], 2, 2));
console.log(checkFrequencyLimit([2, 5, 2, 8, 2, 9], 5, 2));
console.log(checkFrequencyLimit([2, 5, 2, 8, 2, 9, 5 , 5], 2, 2)); 
