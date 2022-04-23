// Looping a Triangule
let counter = 0;
let messages = "";
while (counter < 7) {
    console.log(messages = messages + "#");
    counter++;
}

console.log("\n");

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    }else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }    
}

console.log("\n");

// Chessboard
let numeral = "";
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                numeral += " ";
            }else {
                numeral += "#";
            }            
        }else {
            if (j % 2 == 0) {
                numeral += "#";
            }else {
                numeral += " ";
            }
        }      
    }
    numeral += "\n";    
}
console.log(numeral);