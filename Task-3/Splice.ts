// Initialize an array with some initial string elements
const stringArray1: string[] = ["apple", "banana", "orange", "grape", "kiwi"];

// Example usage:
console.log("Original Array:", stringArray1);

// Create a subarray by removing elements from the original array.
const removedElements = stringArray1.splice(1,2) 
/*Removes two elements starting from index 1*/
console.log("subarray " + "[" + removedElements + "]");
console.log("after splice Array:", stringArray1);
// Original Array will be shown after removing two elements banana and orange from index 1


