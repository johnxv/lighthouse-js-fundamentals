const howManyHundreds = function (number) {
  let count = 0;

  while(number >= 100) {
    number = number - 100;
    count++;
  }

  return count;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));

