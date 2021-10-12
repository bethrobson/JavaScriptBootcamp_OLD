let numArray = [2, 7, 7, 3, 9, 0, 1, 6, 8, 3, 8, 4, 7, 9];

// concatenate 2 arrays
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = array1.concat(array2);
console.log("Concatenation of array1 and array2:", array3);

// find the index of an item in the array
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let dayIndex = days.indexOf("Wed");
console.log("Index of Wed:", dayIndex);

// push new items onto an array
let temps = [59, 62, 65, 73, 68];
temps.push(72);
temps.push(65);
console.log("Temps:", temps);

// does an array include a value?
let locations = ["C3", "D3", "E3"];
let isIncluded = locations.includes("D3");
console.log("Is D3 in locations?", isIncluded);

// forEach, an alternative to for loop
locations.forEach((loc) => console.log("Location:", loc));

// is every item in an array a match for a test?
let nums = [10, 11, 12, 13];
let isEvery = nums.every((v) => v > 9);
console.log("Is every num > 9?", isEvery);

// which is the first number > 3?
let big3 = numArray.find((v) => v > 3);
console.log("First number bigger than 3:", big3);

// create a new array by adding 1
let newArray = [];
numArray.forEach((v) => newArray.push(v + 1));
console.log("Num array:", numArray);
console.log("New array:", newArray);

// reverse the array
numArray.reverse(); // modifies original array


