let fidoBark = bark("Fido");
console.log(fidoBark);

let bark = function(dogName) {
    let sound = "woof woof";
    return `${ dogName } says ${ sound }`;
}

