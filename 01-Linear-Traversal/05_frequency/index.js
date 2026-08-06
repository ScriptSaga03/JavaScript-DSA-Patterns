


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

