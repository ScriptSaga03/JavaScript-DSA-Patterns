console.log("=================================================");
console.log("Linear Traversal Array Mix Pattern Problems");
console.log("=================================================");

/**
 * PROBLEM 1: E-Commerce Order Summary
 * PATTERN: Filtering + Transformation + Accumulation
 * TIME COMPLEXITY: O(N) | SPACE COMPLEXITY: O(N)
 */
const orders = [250, -40, 0, 1200, -100, 450, 0, 80];

function orderSummary(arr) {
    const finalSales = [];
    let totalRevenue = 0;
    let totalValidOrders = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            const gstAmount = Number((arr[i] * 1.18).toFixed(2));
            finalSales.push(gstAmount);
            totalRevenue += gstAmount;
            totalValidOrders++;
        }
    }

    return {
        finalSales,
        totalRevenue: Number(totalRevenue.toFixed(2)),
        totalValidOrders
    };
}

console.log("Order Summary :", orderSummary(orders));

console.log("-------------------------------------------------");

/**
 * PROBLEM 2: Duplicate Product Detector & Inventory Analytics
 * PATTERN: Frequency Map + State Tracking
 * TIME COMPLEXITY: O(N) | SPACE COMPLEXITY: O(U) where U = Unique Items
 */
const stockItems = ["laptop", "phone", "tablet", "phone", "laptop", "laptop", "watch", "phone"];

function getInventoryAnalytics(arr) {
    let counter = {};
    let maxCount = 0;
    let mostFrequentItem = "";
    let uniqueItemCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (counter[item]) {
            counter[item]++;
        } else {
            counter[item] = 1;
            uniqueItemCount++;
        }

        if (counter[item] > maxCount) {
            maxCount = counter[item];
            mostFrequentItem = item;
        }
    }

    return {
        itemCounts: counter,
        mostFrequentItem,
        uniqueItemCount
    };
}

console.log("Inventory Analytics :", getInventoryAnalytics(stockItems));

console.log("-------------------------------------------------");

/**
 * PROBLEM 3: Sales Team Target & Bonus Analytics
 * PATTERN: Conditional Filtering + Aggregation + Math Derived Properties
 * TIME COMPLEXITY: O(N) | SPACE COMPLEXITY: O(K) where K = Qualified Scores
 */
const salesScores = [45, 82, 30, 95, 60, 20, 75];

const bonusAnalytics = arr => {
    let qualifiedScores = [];
    let bonusAmount = 10;
    let qualifiedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50) {
            let updatedScore = arr[i] + bonusAmount;
            qualifiedScores.push(updatedScore);
            qualifiedSum += updatedScore;
        }
    }

    let totalGivenBonus = bonusAmount * qualifiedScores.length;
    let avgQualifiedScore = qualifiedScores.length > 0 
        ? Number((qualifiedSum / qualifiedScores.length).toFixed(2)) 
        : 0;

    return {
        qualifiedScores,
        totalGivenBonus,
        avgQualifiedScore
    };
};

console.log("Bonus Analytics :", bonusAnalytics(salesScores));

console.log("-------------------------------------------------");

/**
 * PROBLEM 4: Daily Financial Surplus Tracker
 * PATTERN: Prefix Sum (Cumulative Running Total) + Extreme Values Tracking
 * TIME COMPLEXITY: O(N) | SPACE COMPLEXITY: O(N)
 */
const netDailyCash = [200, -50, 300, -600, 150, 500];

function financialSurplusTracker(arr) {
    let runningBalance = [];
    let runningBalanceSum = 0;
    let peakBalance = -Infinity;
    let inDebtDays = 0;

    for (let i = 0; i < arr.length; i++) {
        runningBalanceSum += arr[i];
        runningBalance.push(runningBalanceSum);

        if (runningBalanceSum > peakBalance) {
            peakBalance = runningBalanceSum;
        }

        if (runningBalanceSum < 0) {
            inDebtDays++;
        }
    }

    return {
        runningBalance,
        peakBalance,
        inDebtDays
    };
}

console.log("Financial Tracker :", financialSurplusTracker(netDailyCash));
