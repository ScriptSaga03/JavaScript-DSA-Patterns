
// 2.2: (Switch Case Challenges)
// calculator
function simpleCalculator(a, b, operation) {
  let result;

  // switch case
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;

    default:
      result = "Invalid operation";
  }
  return result;
}

console.log('calculation :', simpleCalculator(5,3,'+'));
console.log('calculation :', simpleCalculator(5,3,'*'));
console.log('calculation :', simpleCalculator(5,3,'-'));
console.log('calculation :', simpleCalculator(5,3,'/'));
console.log('calculation :', simpleCalculator(5,3,'%'));
console.log('calculation :', simpleCalculator(5,3,'o'));


// day names
function daysName(day){
  if(day === 1) return 'Monday';
  else if(day === 2) return 'Tuesday';
  else if(day === 3) return 'Wednesday';
  else if(day === 4) return 'Thursday';
  else if(day === 5) return 'Friday';
  else if(day === 6) return 'Saturday';
  else if (day === 7 ) return 'Sunday'
  else return 'Invalid Input'
}
console.log('Days Name:', daysName(5));
console.log('Days Name:', daysName(15));
console.log('Days Name:', daysName(2));

// by switch condition
function weeksName(day){
  switch (day){
    case '1':
      return 'Monday';
    case '2':
      return 'Tuesday';
    case '3':
      return 'Wednesday';
    case '4':
      return 'Thursday';
    case '5':
      return 'Friday';
    case '6':
      return 'Saturday';
    case '7':
      return 'Sunday';
    default:
      return 'invalid day';
  }
}
console.log(weeksName('5'));
console.log(weeksName(true));
console.log(weeksName('55'));
console.log(weeksName('1'));


// fruit color
function fruitColor(str){
  let color;
  let fruit  = str.toLowerCase();
  switch (fruit){
    case 'apple':
      color = "Red";
      break;
    case 'banana':
      color = 'Yellow';
      break;
    case 'grapes':
      color = 'Green';
      break;
    default:
      color = 'invalid color';
  }
  return color;
}

console.log('fruit color: ', fruitColor('Apple'));
console.log('fruit color: ', fruitColor('Guava'));
console.log('fruit color: ', fruitColor('banana'));
console.log('fruit color: ', fruitColor('apple'));
