let chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
};

console.log("Car make:", chevy.make);

// change the passengers property to 4
chevy.passengers = 4;

// add a new property, horsepower
chevy.horsepower = 140;

console.log(chevy);

const mini = {
	make: "Mini",
	model: "Mark I",
	year: 1959,
	color: "red",
	passengers: 4,
	convertible: false,
	mileage: 998
};

// mini = 3;  // error! can't reassign a const

// ...but we can change properties and add new properties
mini.color = "blue";
mini.horsepower = 180;

function changeCar(car) {
	console.log(car);
	car = 10;
	console.log(car);
}

function changeMileage(car) {
	car.mileage = car.mileage + 100;
}

let fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	drive: function() {
		alert("zoom zoom");
	}
};

// fiat with more methods... 
let fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	start: function() {
		started = true;
	},
	stop: function() {
		started = false;
	},
	drive: function() {
		if (started) {
			alert("zoom zoom");
		} else {
			alert("You need to start the engine first.");
		}
	}
};

fiat.drive(); // error! Uncaught reference error, started


// corrected fiat, using this
let fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			alert("zoom zoom");
		} else {
			alert("You need to start the engine first.");
		}
	}
};


