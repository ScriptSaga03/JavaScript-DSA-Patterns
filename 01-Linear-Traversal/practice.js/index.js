
console.log("=================================================");
console.log('Linear Traversal Array Mix Pattern Problems');
console.log("=================================================");



// Problem 1
const orders = [250, -40, 0, 1200, -100, 450, 0, 80];
function orderSummary (arr){
  const finalSales = [];
  let totalRevenue = 0;
  let totalValidOrders = 0;
  for(let i = 0 ; i < arr.length ; i ++){
     if(arr[i] > 0){
        const gstAmount = Number((arr[i] * 1.18).toFixed(2))
        finalSales.push(gstAmount);
        totalRevenue += gstAmount;
        totalValidOrders++
     }
  }
  return {
    finalSales,
    totalRevenue,
    totalValidOrders
  }
}
console.log('Order Summary :', orderSummary(orders))
