const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return base * (height / 2);
  }
}

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));