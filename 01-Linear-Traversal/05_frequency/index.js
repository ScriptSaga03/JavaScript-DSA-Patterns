


let items = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countInventory(arr){
   let counter = {};
   for(let i = 0; i < arr.length ; i++){
    let item = arr[i]
    if(counter[item]){
        counter[item] ++;
    }else{
        counter[item] = 1
    }
   }
   return counter
}

console.log(countInventory(items));




/*

counter = {};
item = arr[i]

start  = apple
                counter[item] === counter[item]
ind     | elem    |     operation       |   condition    |    action    |   stack      |

0         apple      counter has apple      false           apple = 1      apple : 1
1         banana     counter has banana     false           banana = 1     apple:1, banana :1
2         apple      counter has banana     true            apple + 1      apple :2 , banana :1
3         orange     counter has orange     false           orange =1      apple:2 ,banana1, orange:1
4         banana     counter has banana     true            banana +1      apple 2:, banana 2, orange:11
5         apple      counter has banana     true            apple(2) +1    apple 3, banana 2, orange :1

*/




let chars = ["a", "b", "c", "a", "b", "d"];

function firstNonRepeatingChar(str) {
    let freqMap = {};

    // Pass 1: Frequency map ready karo
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freqMap[char]) {
            freqMap[char]++;
        } else {
            freqMap[char] = 1;
        }
    }

    // Pass 2: Original order me check karo ki kiska count exact 1 hai
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freqMap[char] === 1) {
            return char; // Pehla non-repeating milte hi return kar do ("c")
        }
    }

    return null; // Agar koi non-repeating character na mile
}

console.log('first non repeating char :', firstNonRepeatingChar(chars));
// Output: "c"

