
// prob 7
function filterLongWords(words, i) {
    return words.filter(w => w.length > i);
}



// prob 4.1

function sum(arr) {
    return arr.reduce((num1, num2) => num1 + num2, 0);
}

// prob 4.2

function multiply(arr) {
    return arr.reduce((num1, num2) => num1 * num2, 1);
}

// prob 5

function reverse(str) {
    return str.split("").reverse().join("");
}



