// Initialize an array with some initial string elements
const stringArray2: string[] = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Original Array:", stringArray2);

// Create a subarray without modifying the original array.
const SliecArray = stringArray2.slice(0,2) /*Returns a subarray from index 0 to index 1*/
console.log("SliceArray" + "[" + SliecArray + "]");
console.log("AfterSlicing Array:", stringArray2);
// There is not change in the original array
