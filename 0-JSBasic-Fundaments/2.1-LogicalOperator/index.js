// Module 2.1 Logical Operator
// cinema ticket
// or operator
function canGoCinema(age, hasPermission) {
  return age > 15 || hasPermission;
}
console.log("can go cinema :", canGoCinema(12, true));
console.log("can go cinema :", canGoCinema(18, true));
console.log("can go cinema :", canGoCinema(5, false));

// job eligibility
const isEligible = (graduate, hasExperience) => {
  return graduate && hasExperience;
};
console.log(isEligible(true, true));
console.log(isEligible(true, false));
console.log(isEligible(false, false));

// rainy days
function rainyDays(isRainy, hasUmbrella) {
  return isRainy && !hasUmbrella;
}

console.log(rainyDays(true, false)); // true because !hasUmbrella true ko false kr dega and false ko true
console.log(rainyDays(false, true)); //false
console.log(rainyDays(true, false)); //true
