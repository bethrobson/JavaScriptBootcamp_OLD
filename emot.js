let emot = "XOxxOO";
let hugs = 0;
let kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

for (let c in emot) {
	if (emot.charAt(c) === "X") {
		hugs++;
	} else if (emot.charAt(c) === "O") {
		kisses++;
	}
}
console.log(`${hugs} hugs and ${kisses} kisses`);

