let temps = [56, 58, 59, 61, 61];
let flavors = ["vanilla", "chocolate", "strawberry"];
let didScore = [true, true, false, true, false, false];
let tictactoe = [ ["X", "O", "X"], ["O", "X", "O"], ["X", "O", ""] ];

console.log(`My favorite is ${flavors[0]}`);

// getting and setting values
let tempOnMonday = temps[0];
console.log("The temp on Monday was ", tempOnMonday);
console.log("The temp on Tuesday was ", temps[1]);

let i = 2;
console.log("The temp on Wednesday was ", temps[i]);
console.log("The temp on Saturday (i=6) was ", temps[i+4]);


flavors[3] = "rocky road";
flavors[100] = "sparse vanilla";
console.log("Flavors: ", flavors);

console.log("Top row of the Tic Tac Toe board", tictactoe[0]);
console.log("Center play:", tictactoe[1][1]);

// length property
console.log("Length of temps array:", temps.length);

// Creating an array
let cats = ["Fluffy", "Pickles", "Oliver"];
// or....
let dogs = [];
dogs[0] = "Fido";
dogs[1] = "Rover";
dogs[2] = "Spot";
console.log("Dogs:", dogs);

// Arrays are Objects too
temps.length;  // returns 5
temps[temps.length - 1]; // last element of temps
temps.sort(); //sorts array, destructive

let moreFlavors = ["spice", "curry"];
flavors.push("lemon");
flavors.indexOf("lemon"); // 3
flavors.includes("orange"); // false
flavors.concat(moreFlavors);

// Iterate with an array
for (let i = 0; i < flavors.length; i++) {
    if (flavors[i] == "vanilla") {
        console.log("We have vanilla!");
    }
}

for (let i in flavors) {
    if (flavors[i] == "vanilla") {
        console.log("We have vanilla!");
    }
}

// sort the flavors - modifies the original array!!
flavors.sort();


