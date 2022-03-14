
// Global variables
const boardSize = 7;

// displayHit, displayMiss, displayMessage
function displayHit(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
}
function displayMiss(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
}
function displayMessage(msg) {
	let messageArea = document.getElementById("messageArea");
	messageArea.innerHTML = msg;
}

// Parse a guess from the user
function parseGuess(guess) {
	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		let firstChar = guess.charAt(0);
		let row;
		if (firstChar === "A") {
			row = 0;
		} else if (firstChar === "B") {
			row = 1;
		} // and so on
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

	let location = parseGuess(guess);
	displayMessage(`You tried to hit a ship at location ${ location }`);

	guessInput.value = "";
}


// init - called when the page has completed loading
window.onload = init;

function init() {
	// Fire! button onclick handler
	let fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
}


