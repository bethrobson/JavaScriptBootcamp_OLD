class Ship {
	constructor() {
		this.locations = [0, 0, 0];
		this.hits = ["", "", ""];
	}

	fire(location) {
		let index = this.locations.indexOf(location);
		if (index >= 0) {
			this.hit(location);
			return true;
		} else {
			this.miss(location);
			return false;
		}
	}
	hit(location) {
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
			shipsSunk++;
		}
	}
	miss(location) {
		displayMiss(location);
		displayMessage("You missed");
	}
	isSunk() {
		return this.hits.every((v) => v === "hit");
	}

	// READY BAKE - new this step
	doesCollide(locations) {
		for (let i = 0; i < locations.length; i++) {
			if (this.locations.includes(locations[i])) {
				return true;
			}
		}
		return false;
	}
}

// Global variables
const boardSize = 7;
const shipLength = 3;
const numShips = 3; // new this step
let shipsSunk = 0; // new this step
const ships = [ new Ship(), new Ship(), new Ship() ]; // updated for this step

function fire(location) {
	for (let i = 0; i < numShips; i++) {
		let hit = ships[i].fire(location);
		if (hit) {
			return true;
		}
	}
	return false;
}

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
	if (location) {
		let hit = fire(location);
		if (hit && (shipsSunk === numShips)) {
			displayMessage(`You sank all my battleships`);
		}
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

// READY BAKE
function generateShipLocations() {
	let locations;
	for (let i = 0; i < numShips; i++) {
		do {
			locations = generateShip();
		} while (collision(locations));
		ships[i].locations = locations;
	}
	console.log("Ships array: ", ships);
}

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

function collision(locations) {
	for (let i = 0; i < numShips; i++) {
		let ship = ships[i];
		if (ship.doesCollide(locations)) {
			return true;
		}
	}
	return false;
}

