let scoops = 0;
while (scoops < 3) {
	scoops = scoops + 1;
	console.log("adding a scoop of icecream", scoops);
}
console.log(`total of ${scoops} scoops`);

scoops = 3;
for (let i = 0; i < scoops; i++) {
	console.log("adding a scoop of icecream", i);
}
console.log(`total of ${i} scoops`); // error! i is not defined outside the loop
console.log(`total of ${scoops} scoops`);

scoops = 0;
while (scoops < 3) {
	scoops = scoops + 1;
	console.log("adding a scoop of icecream", scoops);
	if (scoops == 3) {
		let msg = "We're done";
		console.log(msg);
	}
}
