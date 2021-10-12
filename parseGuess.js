function parseGuess(guess) {
	if (guess === null || guess.length !== 2) {
		// alert the user
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		let rowStr = guess.charAt(0);
		let row;
		// for now, do a simple test and convert, handle only A & B
		if (rowStr === "A") {
			row = 0;
		} else if (rowStr === "B") {
			row = 1;
		} // we'll handle all rows A-G later!
		let colStr = guess.charAt(1);
		let col = parseInt(colStr);
		// if row is still undefined, or col couldn't be parsed....
		if (isNaN(row) || isNaN(col)) {
			alert("Oops, that isn't on the board.");
		} else {
			return `Row: ${ row }, Col: ${ col }`;
		}
	}
	return null;
}
