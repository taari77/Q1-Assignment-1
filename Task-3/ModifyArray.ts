// Initialize an array with some initial string elements
const stringArray: string[] = ["apple", "banana", "orange"];

// Example usage:
console.log("String Array:", stringArray);

// Add new elements to the end of the array.
stringArray.push("grape", "kiwi");
console.log("After Adding elements:", stringArray);

// Remove the last element from the array.
stringArray.pop();
console.log("After Removing last Element:", stringArray);

// Remove the first element from the array.
stringArray.shift();
console.log("After Removig first Element:" , stringArray);

// Add new elements to the beginning of the array.
stringArray.unshift("pear", "melon");
console.log("After adding beginning element", stringArray);
