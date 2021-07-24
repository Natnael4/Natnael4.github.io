
/* *****************************************************************************************************/

/* runs test to see if expected argument is === to value returned by functiontest argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* *****************************************************************************************************/

// array comparing function

function myFunctionArrayTest(expected, found) {
    let result = Array.isArray(expected) &&
        Array.isArray(found) &&
        expected.length === found.length &&
        expected.every((val, index) => val === found[index]);

    if (result === true) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* *****************************************************************************************************/

// prob 1
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log("Expected output of max of 1,2 is 2 " + myFunctionTest(3, max(2, 3)));
console.assert(max(2, 3) === 2, "Expected output of max of 2,3 is 3 TEST FAILED");

/* *****************************************************************************************************/

// prob 2
function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    return num3;
}

console.log("Expected output of maxOfThree of 1,3,2 is 3 ", myFunctionTest(3, maxOfThree(1, 3, 2)));
console.assert(maxOfThree(1, 3, 2) === 3, "Expected output of maxOfThree of 1,3,2 is 3 TEST FAILED");

/* *****************************************************************************************************/

// prob 3
function isVowel(c) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    if (c.length !== 1) {
        return false;
    }
    for (let i = 0; i < vowels.length; i++) {
        if (c == vowels[i]) {
            count++;
        }
    }
    if (count == 1) { return true; }
    else { return false; }
}

console.log("Expected output of isVowel 'a' is true", myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel 'U' is true", myFunctionTest(true, isVowel('U')));
console.assert(isVowel('a') === true, "Expected output of isVowel 'a' is true");

/* *****************************************************************************************************/

// prob 4.1
function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }

    return s;
}

console.log("Expected output of sum of [1, 2, 3, 4] is 10", myFunctionTest(10, sum([1, 2, 3, 4])));
console.assert(sum([1, 2, 3, 4]) === 10, "Expected output of sum of [1, 2, 3, 4] is 10");

/* *****************************************************************************************************/

// prob 4.2
function multiply(arr) {
    let s = 1;
    for (let i = 0; i < arr.length; i++) {
        s *= arr[i];
    }

    return s;
}

console.log("Expected output of the multiplication of [1, 2, 3, 4] is 24", myFunctionTest(24, multiply([1, 2, 3, 4])));
console.assert(multiply([1, 2, 3, 4]) === 23, "Expected output of sum of [1, 2, 3, 4] is 24");

/* *****************************************************************************************************/

// prob 5
function reverse(str) {
    var reversed = "";
    var n = str.length;
    while (n > 0) {
        reversed += str.substring(n - 1, n);
        n--;
    }
    return reversed;
}

console.log("Expected output of reverse of 'javascript' is 'tpircsavaj'", myFunctionTest("tpircsavaj", reverse("javascript")));
console.assert(reverse("javascript") === "tpircsavaj", "Expected output of reverse of 'javascript' is 'tpircsavaj'");


/* *****************************************************************************************************/

// prob 6
function findLongestWord(words) {
    let longestword = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestword) {
            longestword = words[i];
        }
        return longestword;
    }
}

console.log("Expected output of findLongestWord ['Natnael', 'John', 'George'] is Natnael", myFunctionTest("Natnael", findLongestWord(['Natnael', 'John', 'George'])));
console.assert(findLongestWord(['Natnael', 'John', 'George']) === "Natnael", "Expected output of findLongestWord ['Natnael', 'John', 'George'] is Natnael");

/* *****************************************************************************************************/

// prob 7
function filterLongWords(words, num) {
    let longestwords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > num) {
            longestwords.push(words[i]);
        }
    }
    return longestwords;
}

console.log("Expected output of filterLongWords ['Natnael', 'John', 'George'] is 'Natnael', 'George'",
    myFunctionArrayTest(['Natnael', 'George'], filterLongWords(['Natnael', 'John', 'George'], 5)));


/* *****************************************************************************************************/

// prob 8
document.writeln("Modified problem 8 output: <br/>");

const a = [2, 1, 4, 6, 9];
const b = a.map(function (elem) {
    return elem * 10;
})


document.writeln(b.toString() + "<br/>");
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log();

document.writeln(c.toString() + "<br/>");
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
document.writeln(d + "<br/>");


const d2 = a.find(function (elem) { return elem > 1; }); 
const d3 = a.findIndex(function (elem) { return elem > 1; }); 
document.writeln(d2 + "<br/>");
document.writeln(d3);