const exclamation = function(str) { 
	return str + "!" ; 
};

const question = function(str) { 
	return str + "?" ; 
};

const quote = function(str) { 
	return '<blockquote>' + str + '</blockquote>'; 
};

function punctuate(sentence, punctuation) {
	return punctuation(sentence);
}

console.log(punctuate("Carpe diem", quote));


