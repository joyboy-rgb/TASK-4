const capitalizeOriginal = require("./original");
const capitalizeRefactored = require("./refactored");

const testString = "this is a sample STRING to Test THE function";

console.time("Original");
for (let i = 0; i < 100000; i++) {
  capitalizeOriginal(testString);
}
console.timeEnd("Original");

console.time("Refactored");
for (let i = 0; i < 100000; i++) {
  capitalizeRefactored(testString);
}
console.timeEnd("Refactored");
