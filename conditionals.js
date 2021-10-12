let price = 5.00;

if (price < 5.00) {
	console.log("Item on sale!");
} else if (price == 5.00) {
	console.log("Item is regular price.");
} else { // price > 5.00
	console.log("Item is expensive!");
}

price = 7.00;

if (price <= 5.00) {
	console.log("Item on sale!");
} else {
	console.log("Item is full price.");
}
