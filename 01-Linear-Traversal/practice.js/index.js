
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
console.log('Order Summary :', orderSummary(orders));


// Problems 2 


const stockItems = ["laptop", "phone", "tablet", "phone", "laptop", "laptop", "watch", "phone"];
function getInventoryAnalytics(arr){
    let counter = {};
    let maxCount = 0;
    let mostFrequentItem = "";
    let uniqueItemCount = 0;
    for(let i = 0 ; i < arr.length; i++){

        let item = arr[i];
        if(counter[item]){
            counter[item]++
        }else {
            counter[item] = 1;
            uniqueItemCount++
        }
        if(counter[item] > maxCount){
            maxCount = counter[item];
            mostFrequentItem = item
        }

    }
    return {
        itemCounts: counter, 
        mostFrequentItem,
        uniqueItemCount
    }
}
console.log('Inventory Analytics :', getInventoryAnalytics(stockItems))
