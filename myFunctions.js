// use constants for function expressions
const exclamation = function(str) 
                     { return str + "!" ; };
console.log(exclamation("Hello"));

exclamation = "!";   // error!

// Zero parameters
function bark() {
	let dogName = "Fido";
	console.log(`${ dogName } says woof woof`);
}
bark();

// One parameter
function barkOne(dogName) {
	console.log(`${ dogName } says woof woof`);
}
barkOne("Fido");

// Multiple parameters
function dogsBark(dogName1, dogName2, dogName3) {
	console.log(`${ dogName1 } says woof woof`);
	console.log(`${ dogName2 } says woof woof`);
	console.log(`${ dogName3 } says woof woof`);
}
dogsBark("Fido", "Rover", "Spot");

// Pass by value
let fido = "Fido";
let rover = "Rover";
let spot = "Spot";
function dogsChange(fido, rover, spot) {
	fido = "Good dog";
	rover = "Bad dog!";
	spot = "Sweet dog";
}
dogsChange(fido, rover, spot);
console.log(`Dog names: ${ fido }, ${ rover }, ${ spot }`);

function barkReturn(dogName) {
	let sound = "woof woof";
	let result = `${ dogName } says ${ sound }`;
	return result;
}
let fidoBark = barkReturn("Fido");
console.log(fidoBark);

// Multiple parameters with one or more arguments
function dogsBarkRest(...dogNames) {
	for (let i = 0; i < dogNames.length; i++) {
		console.log(`${ dogNames[i] } says woof woof`);
	}
}
dogsBarkRest("Fido", "Rover", "Spot");

// default values
function dogBarkDefault(dogName = "Fido", dogAge = 3) {
	console.log(`${ dogName } is ${ dogAge } years old and says woof woof`);
}
dogBarkDefault();
dogBarkDefault("Rover");
dogBarkDefault("Spot", 5);

let result;
// return a value
function circleArea(r) {
	let area = Math.PI * r * r;
	return area;
}
result = circleArea(3);
console.log("Area:", result);

// or a value from an expression
function circleArea(r) {
	return Math.PI * r * r;
}
result = circleArea(3);
console.log("Area:", result);






