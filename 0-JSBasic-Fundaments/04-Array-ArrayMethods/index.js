

// Arrays
function getFirstElement(arr){
    let firstElem = arr[0];
  console.log(firstElem)
}
getFirstElement(["M","e","h","t","a","b"]);
getFirstElement([1,2,3,4,5]);


// 2. Print Array Elements
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([10, 20, 30, 40, 50]);

// 3. Sum of Array
function sumOfArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log("sum of array :", sumOfArray([10, 20, 30, 40, 50]));


// 4.1: (Array Methods Challenges)

let fruit = ["Apple", "Banana"];
fruit.push("Mango")
console.log(fruit);

// remove last
fruit.pop();
console.log(fruit);

// add to front
fruit.unshift("Papaya");
console.log(fruit);

// DoubleTrouble
const cart = [];
function addToCart(item){
  cart.push(item);
};

function removeToCart(){
  cart.shift();
}

// 1. Laptop add kiya
addToCart("Laptop");
console.log("Laptop jodne ke baad:", cart);

// 2. Phone add kiya
addToCart("Phone");
console.log("Phone jodne ke baad:", cart);


// 3. Pehla item shift kiya (Laptop nikal jayega)
removeToCart();
console.log("Shift karne ke baad final cart:", cart);



// 🚀 Array & CRUD Practice Sheet (25 Problems)
// Level 1: Basic Array & CRUD (Warm-up)
// Create & Print: Ek array banao movies naam ka jisme 3 movies hon. Use print karo.
let movies = [];
function  addMovies(item) {
    Array.isArray(item) ? movies.push(...item) : movies.push(item);
}


function printMovies(){
  console.log('--- Movie\s list ---');
  for(let movie of movies) console.log(movie);
};



addMovies('Naruto');
addMovies('Attack On Titan');
addMovies(["Death Note", "Dragon Ball Z"]);

printMovies()


// Access Last: Bina length ko direct number likhe (jaise arr[2] nahi), kisi bhi array ka aakhiri element return karne wala function banao.
function getLastElement(arr){
  if(arr.length === 0 ) return 'Array empty';

  return arr[arr.length - 1]
  
}


console.log(getLastElement(movies));
console.log(getLastElement(["A", "B", "C"]));

// Add New (Create): push aur unshift ka use karke ek array ke start aur end mein ek-ek naya number jodo.

function addToEnd(arr, item){
  arr.push(item);
}
addToEnd(movies, 'Ninja Hatori');

function addToFront(arr, item){
  arr.unshift(item);
}
addToFront(movies,'Lookism');

console.log(movies);





// Remove (Delete): pop aur shift ka use karke ek array ke pehle aur aakhiri element ko delete karo.



function removeToEnd(arr){
  arr.pop();
};

function removeToFront(arr) {
  arr.shift();
}

removeToEnd(movies);
removeToFront(movies);
console.log(movies)

// Update Element: Ek array ['HTML', 'CSS', 'JS'] mein CSS ko badal kar Tailwind CSS kar do.

function updateElement(arr,item){
  arr.splice(1,1,item);
}

updateElement(movies, 'Dan Da Dan');
console.log(movies);



// Check Index: Ek array mein kisi element ka position (index) pata karne ke liye .indexOf() ka use karo. (E.g., ["A", "B", "C"] mein "B" ka index kya hai?).

function getPositionOfMovie(arr, item){
  return arr.indexOf(item)
}
console.log(getPositionOfMovie(movies, 'Dan Da Dan'));

// Check Existence: .includes() ka use karke check karo ki ek array mein "Apple" hai ya nahi.
function searchElements(arr, item){
  return arr.includes(item);
}
console.log(searchElements(movies, 'Naruto'));

// Array to String: .join() method ka use karke array ['J', 'A', 'V', 'A'] ko ek single word "JAVA" mein badlo.
let convertString = [...movies].join(", ");
console.log(convertString);
