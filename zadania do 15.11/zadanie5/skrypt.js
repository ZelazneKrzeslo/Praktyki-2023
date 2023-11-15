const array = [1, 4, 5];
let areNumbers = checkIfNumbers(array);

if (areNumbers) {
    let sum = calculateSum(array);
    console.log(sum);
} else {
    console.log("Nie wszystkie elementy w tablicy są liczbami.");
}

function checkIfNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return false;
        }
    }
    return true;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}