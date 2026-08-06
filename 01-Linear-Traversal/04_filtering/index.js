// ==========================================
// 1. FILTER ODD NUMBERS (Filtering)
// ==========================================
const oddNumbersInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOddNumbers(arr) {
    const oddNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }

    return oddNumbers;
}

console.log('Filtered Odd Numbers:', getOddNumbers(oddNumbersInput));


// ==========================================
// 2. REMOVE DUPLICATES (Out-of-Place / Extra Space)
// ==========================================
const duplicateInput = [1, 2, 2, 3, 4, 5, 1];

function removeDuplicatesNewArray(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

console.log('Remove Duplicates (New Array):', removeDuplicatesNewArray(duplicateInput));


// ==========================================
// 3. REMOVE DUPLICATES IN-PLACE (Sorted Array / Two Pointers)
// ==========================================
const sortedNumbersInput = [1, 1, 2, 3];

function removeDuplicatesInPlace(arr) {
    if (arr.length === 0) return 0;

    let writeIndex = 1;

    for (let readIndex = 1; readIndex < arr.length; readIndex++) {
        if (arr[readIndex] !== arr[writeIndex - 1]) {
            arr[writeIndex] = arr[readIndex];
            writeIndex++;
        }
    }

    return writeIndex; // Returns new valid length
}

const uniqueLength = removeDuplicatesInPlace(sortedNumbersInput);
console.log('In-Place Unique Count:', uniqueLength);
console.log('In-Place Modified Array:', sortedNumbersInput.slice(0, uniqueLength));


// ==========================================
// 4. PASSING SCORES WITH BONUS (Filtering + Transformation)
// ==========================================
const scoresInput = [35, 88, 42, 20, 95, 60];

function getPassingScoresWithBonus(arr) {
    const passedStudents = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        // >= 40 covers exact pass marks edge case
        if (arr[i] >= 40) {
            passedStudents.push(arr[i] + 5);
            count++;
        }
    }

    return {
        passedStudents,
        count
    };
}

console.log('Passing Students:', getPassingScoresWithBonus(scoresInput));


// ==========================================
// 5. TRANSACTION CASHBACK / BONUS (Filtering + Math + Formatting)
// ==========================================
const transactionsInput = [150, -50, 200, -20, 0, 50];

function processValidTransactions(arr) {
    const shoppingCart = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            // Calculation pehle, toFixed(2) end me, phir Number conversion
            const updatedAmount = Number((arr[i] * 1.10).toFixed(2));
            shoppingCart.push(updatedAmount);
            count++;
        }
    }

    return {
        cart: shoppingCart,
        count
    };
}

console.log('Shopping Cart:', processValidTransactions(transactionsInput));
