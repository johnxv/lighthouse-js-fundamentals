const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return Math.PI * radius * radius;
  }
}

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));
