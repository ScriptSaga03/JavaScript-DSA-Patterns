/*
5 Practice Problems:
Find Largest Number: Array me sabse bada number dhoondho.

Find Smallest Number: Array me sabse chhota number dhoondho.

Find Second Largest: Array ka second highest number nikalo (bina sort kiye).

Shortest Word: Strings ke array me sabse chhoti length waala word nikalo.

Difference of Max and Min: Highest aur Lowest number ka gap/difference nikalo.
*/

const numbers = [5,47,9,23,2,12];

function findLargestNumbers(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > max) 
            max = arr[i]
    }
    return max;
}

console.log('Largest number :', findLargestNumbers(numbers));


// find smallest number
const findSmallestNumber = arr =>{
    let min = arr[0];
    for(let i = 0;  i < arr.length; i++){
        if(arr[i] < min)
            min = arr[i]
    }
    return min;
}
console.log('smallest number :', findSmallestNumber(numbers));


const getDiff =  arr => {
    let max = arr[0];
    let min = arr[0];
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    let diff = max - min;
    return diff;

}

console.log('Difference between lognest and smallest number :', getDiff(numbers))



const getShortestWord = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return "";
    
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i]; 
        }
    }
    return shortest;
};

console.log('Shortest word:', getShortestWord(["Mehtab", "JS", "Node"]));
const getSecondLargest = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; // Shift purana largest
            largest = arr[i];       // Set naya largest
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
};

console.log("Second largest:", getSecondLargest([5, 47, 9, 23, 2, 12])); // Output: 23
