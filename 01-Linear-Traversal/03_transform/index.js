const numbers = [3, 5, 6, 7, 9];


function doubleAllElem(arr){
    let newARR= []
    for(let i = 0; i < arr.length; i ++){
       newARR.push(arr[i] * 2)
    }
    return newARR
}
console.log('double all elements', doubleAllElem(numbers));


function squreAllElem(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * arr[i])
    }
    return newArr;
}
console.log('squre all elemenst : ', squreAllElem(numbers));


// convert to uppercase
const transInUpperCase = arr =>{
    let word = [];
    for(let i  = 0; i < arr.length;  i++){
       word.push(arr[i].toUpperCase())
    };
   return word;
}
console.log(transInUpperCase(['mehtab','suhail']));


function addGST(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + (arr[i] * 0.18)); // Base Price + 18% Tax
        // Ya phir direct: arr[i] * 1.18
    }
    return newArr;
}
console.log(addGST(numbers))



function converBool(arr) {
    let val = [];
    for(let i = 0 ; i < arr.length ; i++){
      val.push(arr[i] > 5 ? true : false)
    }
    return val
}
console.log(converBool(numbers))
