const lastIndexOf = function (numberArray, number) {
  let latestIndex;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === number) {
      latestIndex = i;
    }
  }

  if (latestIndex === undefined) {
    return -1;
  } else {
    return latestIndex;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
