// The Sum of a Range
let rango = (start, end, steps = 1) => {
    const array = [];
    if (start > end) {
        for (let i = start; i >= end; i += steps) {
            array.push(i);            
        }
    } else {
        for (let i = start; i <= end; i += steps) {
            array.push(i);
        }        
    }
    return array;
};
console.log(rango(3,25));

const array = rango(3,25);

function suma(numbers) {
    let result = 0;
    let i = 0;
    while (i < numbers.length) {
        result += numbers[i]; 
        i++;
    }
    console.log(result);
}

function suma2(numbers) {
    let result = 0;
    for (const iteraction of numbers) {
        result += iteraction;
    }
    console.log(result);
}

suma(array);
suma2(array);
console.log(rango(5, 2, -1));

// Reversing an Array
let reverseArray = function (numbers) {
    let reverse = [];
    for (let i = numbers.length -1; i >= 0; i--) {
        reverse.push(numbers[i]); 
    }
    return reverse;
}

let array1 = [1,2,3,4,5];
console.log(reverseArray(array1));

let array2 = reverseArray(array1);
function reverseArrayInPlace(numbers) {
    let inPlace = [];
    for (let i = 0; i < numbers.length; i++) {
        inPlace.unshift(numbers[i]);        
    }
    return inPlace;
}
console.log(reverseArrayInPlace(array2));

//Deep Comparison
function deepComparison(value1, value2) {
    if ((typeof value1 === "object") && (typeof value2 === "object")) {
        let keys1, keys2;
        keys1 = Object.keys(value1);
        keys2 = Object.keys(value2);
        if ((null === value1) || (null === value2)) {
            return console.log("Los valores no son iguales");
        }

        if (value1.length != value2.length) {
            return console.log("No son iguales");
        }       

        let i = 0;
        while (i < keys1.length) {
            if (keys1[i] !== keys2[i]) return console.log("No son iguales");
            else i++;
        }
        return console.log("Son igules");                
    } else if(typeof value1 == typeof value2){       
        return console.log("Son iguales");         
    }else {
        return console.log("no son iguales");
    }
}
const person = {name: "juano", age: 12};
const person2 = {name: "juano", age: 12};
deepComparison(person, person2);
deepComparison(person2, [1,2,3]);