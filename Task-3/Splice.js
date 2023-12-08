// Initialize an array with some initial string elements
var stringArray1 = ["apple", "banana", "orange", "grape", "kiwi"];
// Example usage:
console.log("Original Array:", stringArray1);
// Create a subarray by removing elements from the original array.
var removedElements = stringArray1.splice(1, 2);
/*Removes two elements starting from index 1*/
console.log("subarray " + "[" + removedElements + "]");
console.log("after splice Array:", stringArray1);
// Original Array will be shown after removing two elements from index 1
