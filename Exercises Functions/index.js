// Minimum
let Minimum = function (x, y) {
	if (x > y) {
		console.log(`El valor minimo es ${y}`);
	}else{
		console.log(`El valor minimo es ${x}`);
	}
};

Minimum(5,10);
Minimum(30,6);

// Bean Counting
let counter = 0;
let countBs = (word) => {
	let i = 0;
	while (i < word.length) {		
		if (word[i] === "B") {
			counter += 1;
		}
		i++;	
	}
	if (counter == 1) {
		console.log(`There is a B in the word ${word}`);
	} else {
		console.log(`There are ${counter} letters B in the word ${word}`);
	}
};

countBs("dBaiseBBsaeBeitneBB");

counter = 0;
let countChar = countBs = function (word, letter) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			counter += 1;
		}
	}	
	if (counter == 1) {
		console.log(`There is a ${letter} in the word ${word}`);
	} else {
		console.log(`There are ${counter} letters ${letter} in the word ${word}`);
	}
};

countChar("elisErsafnEEdfjasE", "f");