const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let v = 0;
while(v < ingredients.length) {
  console.log(ingredients[v]);
  v++;
}

console.log("\n");

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let k = ingredients.length - 1; k > 0; k--) {
  console.log(ingredients[k]);
}
