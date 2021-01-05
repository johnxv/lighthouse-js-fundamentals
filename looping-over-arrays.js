const amounts = [61.00, 52.25, 112.99, 5.00];

// normal for loop demo
console.log("Normal for loop demo.");
let total = 0;
for(let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}

console.log("Order total is: " + total);

console.log("\n");
// for...of loop demo
console.log("for...of loop demo.");
let total2 = 0;
for (let amount of amounts) {
  total2 += amount;
}

console.log('Order total2 is: ' + total2);