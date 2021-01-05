// simple function...
console.log("sayHello();");
const sayHello = function () {
  console.log("Hello, world");
}

sayHello();

console.log();

// revised sayHello() function with more functionality.
console.log("sayHello2();");
const sayHello2 = function (name) {
  console.log("Hello, " + name);
}

sayHello2("John");
sayHello2("Doe");
sayHello2("Jane");

console.log();

// more functions...
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

// yet more functions.
// returned a string...
const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("John"); // ... to be assigned here...
console.log(greeting); // ... to be printed out here.
