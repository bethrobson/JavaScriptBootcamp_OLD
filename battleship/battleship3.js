// ship is new this step
let ship = {
	locations: [0, 0, 0],
	hits: ["", "", ""],

	fire: function(location) {
		let index = this.locations.indexOf(location);
		if (index >= 0) {
			this.hit(location);
			return true;
		} else {
			this.miss(location);
			return false;
		}
	},
	hit: function(location) {
		let index = this.locations.indexOf(location);
		if (this.hits[index] === "hit") {
			displayMessage("Oops, you already hit that location!");
		} else {
			displayMessage("HIT!");
		}
		this.hits[index] = "hit";
		displayHit(location);
		if (this.isSunk()) {
			displayMessage("You sank my battleship!");
		}
	},
	miss: function(location) {
		displayMiss(location);
		displayMessage("You missed");
	},
	isSunk: function() {
		let isSunk = true;
		for (let i = 0; i < this.hits.length; i++) {
			if (this.hits[i] != "hit") {
				isSunk = false;
				break;
			}
		}
		return isSunk;
	}
};

// Global variables
const boardSize = 7;
const shipLength = 3;
const ships = [ ship ]; // just one for now, more later!

function displayMessage(msg) {
	let messageArea = document.getElementById("messageArea");
	messageArea.innerHTML = msg;
}
function displayHit(location) {
	let cell = document.getElementById(location);
	cell.setAttribute("class", "hit");
}
function displayMiss(location) {
	let cell = document.getElementById(location);
	cell.setAttribute("class", "miss");
}

function processGuess(guess) {
	let location = parseGuess(guess);

	if (location) { // if location != null
		let hit = ships[0].fire(location); // new
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


function generateShipLocations() {
	ships[0].locations = generateShip();
	console.log("Ship:", ships[0]); // cheater for testing
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




