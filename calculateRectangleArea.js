const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, - 5));