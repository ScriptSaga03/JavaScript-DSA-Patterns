// Loops
for(let i = 1; i <=10; i ++){
  console.log(i)
}


// even numbers only 
for(let i = 1; i<=20; i++){
  if(i % 2 === 0) console.log('even number :',i)
}

// sum of n 
function sumUpTo(n){
 let total = 0;
  for(let i = 1; i <=n; i++){
    total += i;
  }
  return total;
}
console.log('sum of n :', sumUpTo(3));

// table
function table(n){
 console.log(`---- Table of ${n} ----`);
  for(let i = 1; i <= 10; i++){
   let result = n * i;
    console.log(`${n} * ${i} = ${result}`);
  }
}
table(5);
table(11)
table(17)

// reverse counting
function reverseCounting(){
  for(let i = 10; i >= 1 ; i--) console.log(i)
}
reverseCounting()


// while loop
// jb hme ik hi condition maloom ho aur woh jb tk true hai jb tk loop chalta rhega
console.log(` ------ while loop ------`)
let i = 10;
while(i >= 1){
  console.log(i);
  i--
}
