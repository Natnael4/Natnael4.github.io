const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
function getNumber() {
    readline.question('Enter a number or type stop to terminate: ', input => {
        if (input.trim() === "stop") {
            console.log(`Sum of all the numbers you enterd is: ${sum}`)
            readline.close();
        } else {
            sum += parseInt(input);
            getNumber();
        }
    });
}
getNumber();