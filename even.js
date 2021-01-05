const isEven = function (num) {
  return num % 2 === 0;
}

for (let i = 0; i < 100; i++) {
  if(isEven(i) === true) {
    console.log(i + " is even");
   } else {
    console.log(i + " is odd");
   }   
}




