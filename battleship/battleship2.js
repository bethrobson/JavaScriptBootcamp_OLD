
// Global variables
const boardSize = 7;
const shipLength = 3;
const ships = [ [0, 0, 0], ["", "", ""] ];

// fire, hit, miss, isSunk all new this step
function fire(location) {
	let index = ships[0].indexOf(location);
	if (index >= 0) {
		hit(location);
		return true;
	} else {
		miss(location);
		return false;
	}
}
function hit(location) {
	let index = ships[0].indexOf(location);
	if (ships[1][index] === "hit") {
		displayMessage("Oops, you already hit that location!");
	} else {
		displayMessage("HIT!");
	}
	ships[1][index] = "hit";
	displayHit(location);
	if (isSunk()) {
		displayMessage("You sank my battleship!");
	}
}
function miss(location) {
	displayMiss(location);
	displayMessage("You missed");
}
function isSunk() {
	let isSunk = true;
	for (let i = 0; i < ships[1].length; i++) {
		if (ships[1][i] != "hit") {
			isSunk = false;
			break;
		}
	}
	return isSunk;
}

function displayMessage(msg) {
	let messageArea = document.getElementById("messageArea");
	messageArea.innerHTML = msg;
}
// displayHit and displayMiss new this step
function displayHit(location) {
	let cell = document.getElementById(location);
	cell.setAttribute("class", "hit");
}
function displayMiss(location) {
	let cell = document.getElementById(location);
	cell.setAttribute("class", "miss");
}

// new this step
function processGuess(guess) {
	let location = parseGuess(guess);

	if (location) { // if location != null
		let hit = fire(location);
		// more here later
	}
}

// Parse a guess from the user
// Updated in this step
function parseGuess(guess) {
	const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		let firstChar = guess.charAt(0);
		// updated in this step
		let row = alphabet.indexOf(firstChar);
		let column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= boardSize ||
		           column < 0 || column >= boardSize) {
			alert("Oops, that's off the board!");
		} else {
			return row + column; // location
		}
	}
	return null;
}


// Event handler to handle a click on the Fire button
function handleFireButton() {
	let guessInput = document.getElementById("guessInput");
	let guess = guessInput.value.toUpperCase();

	processGuess(guess);

	guessInput.value = "";
}


// init - called when the page has completed loading
window.onload = init;

function init() {
	// Fire! button onclick handler
	let fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	generateShipLocations();
}


// new this step
function generateShipLocations() {
	ships[0] = generateShip();
	console.log("Ship:", ships); // cheater for testing
}

// READY BAKE
function generateShip() {
	let direction = Math.floor(Math.random() * 2);
	let row, col;

	if (direction === 1) { // horizontal
		row = Math.floor(Math.random() * boardSize);
		col = Math.floor(Math.random() * (boardSize - shipLength + 1));
	} else { // vertical
		row = Math.floor(Math.random() * (boardSize - shipLength + 1));
		col = Math.floor(Math.random() * boardSize);
	}

	let newShipLocations = [];
	for (let i = 0; i < shipLength; i++) {
		if (direction === 1) {
			newShipLocations.push(`${row}${(col + i)}`);
		} else {
			newShipLocations.push(`${(row + i)}${col}`);
		}
	}
	return newShipLocations;
}




