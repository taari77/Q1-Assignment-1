// Initialize an array with some initial string elements
var stringArray2 = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Original Array:", stringArray2);
// Create a subarray without modifying the original array.
var SliecArray = stringArray2.slice(0, 2); /*Returns a subarray from index 0 to index 1*/
console.log("SliceArray" + "[" + SliecArray + "]");
console.log("AfterSlicing Array:", stringArray2);
