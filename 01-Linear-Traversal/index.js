/**
 * SECTION 1: THE SEARCHER PATTERN
 * Use: Element dhoondna, Index nikalna, ya Boolean check (true/false).
 */

// 1. Array ka maximum number dhundo.
const number = [1, 5, 10, 6, 4, 12];
function maxNumber() {
  let maxNum = number[0];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > maxNum) maxNum = number[i];
  }
  return maxNum;
}
console.log("Max Number:", maxNumber());

// 2. Array ka minimum number dhundo.
function getMinNumber(arr) {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) minNum = arr[i];
  }
  return minNum;
}
console.log('Min Number:', getMinNumber(number));

// 3. Diye gaye number ka index find karo (Manual Searcher).
function getIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log('Find Index (12):', getIndex(number, 12));

// 4. Pehla element dhundo jo 100 se bada ho.
function findElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) return arr[i];
  }
  return 'none';
}

// 5. Specific element ki last occurrence dhundo (Reverse Searcher).
function findLastIndex(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// 6. Check karo kya array mein "apple" maujood hai? (Boolean Searcher).
function isExistItem(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return true;
  }
  return false;
}

/**
 * SECTION 2: THE ACCUMULATOR PATTERN
 * Use: Pura array traverse karke ek single result (Sum, String, Total) nikalna.
 */

// 7. Array ke saare elements ka total sum.
function getTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// 8. Array ke saare elements ko string mein convert karo (String Accumulator).
function convertInString(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

// 9. Shopping Cart ka total bill nikalna (Object Property Accumulator).
const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];
function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].price;
  }
  return total;
}
console.log("Total Bill:", calculateTotal(cart));

/**
 * SECTION 3: THE COUNTER PATTERN
 * Use: Kisi condition ke base par frequency ya ginti nikalna.
 */

// 10. Check karo kya array mein koi negative number hai? (Negative Counter).
function getNegativeNumbers(arr) {
  let box = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) box.push(arr[i]);
  }
  return box;
}

// 11. Array mein kitne numbers 0 se bade hain?
const countElem = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) count++;
  }
  return count;
};

// 12. Kitne numbers even hain aur kitne odd? (Object Counter).
const countEvenOddNum = (arr) => {
  let count = { even: 0, odd: 0 };
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? count.even++ : count.odd++;
  }
  return count;
};

/**
 * SECTION 4: THE TRANSFORMER & FILTER PATTERN
 * Use: Purane array se ek naya modified array taiyar karna.
 */

// 13. Har number ko 2 se multiply karke naya array banao (Mapper).
function updatedArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}

// 14. Filter-Multiply Combo (Even ko double, odd ko same).
function transformedArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] % 2 === 0 ? arr[i] * 2 : arr[i]);
  }
  return result;
}

// 15. Sirf even numbers ko naye array mein push karo (Filter).
function getEvenNumber(arr) {
  let evenNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenNumber.push(arr[i]);
  }
  return evenNumber;
}

// 16. Array ke har element ka square nikalna.
function getSquare(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}

// 17. Do arrays ko merge karke ek naya array banana.
function mergedArr(arr1, arr2) {
  let combined = [];
  for (let i = 0; i < arr1.length; i++) combined.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) combined.push(arr2[i]);
  return combined;
}

// 18. Ek array ko dusre array mein copy karna (Manual Copy).
function copyArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

/**
 * SECTION 5: THE POINTER & STEP PATTERN
 * Use: Indexing aur movement ke saath khelna.
 */

// 19. Array ka second largest element dhundo (Two-Winner Logic).
function getSecondLargestElm(arr) {
  let largest = -Infinity, secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// 20. Array ko reverse karna (Two-Pointer Swap).
function reversedArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++; right--;
  }
  return arr;
}

// 21. Array ko reverse karna (Backward Traversal).
function reversedTraversal(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// 22. Check karo kya array "Sorted" hai? (Future Look-ahead i+1).
function isSortedArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// 23. Array ke alternate elements print karo (Step Jump i+=2).
function printAlternate(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    console.log("Alternate Element:", arr[i]);
  }
}
