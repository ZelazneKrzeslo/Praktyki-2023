function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function compare(a, b) {
    return a > b;
}

function secondMax(arr) {
    let max = null;
    let secondMax = null;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (max === null || arr[i] > max) {
                secondMax = max;
                max = arr[i];
            } else if (secondMax === null || arr[i] > secondMax) {
                secondMax = arr[i];
            }
        } else if (typeof arr[i] === "string") {
            if (max === null || arr[i].length > max.length) {
                secondMax = max;
                max = arr[i];
            } else if (secondMax === null || arr[i].length > secondMax.length) {
                secondMax = arr[i];
            }
        }
    }

    return secondMax;
}

function funkcja() {
    let tab1 = [1, 5, 10, 15];
    let tab2 = [1, 1, 3, 3, 4, 4, 4];
    let tab3 = ["ala", "robert", "stanislaw"];

    bubbleSort(tab1);
    console.log(secondMax(tab1));

    bubbleSort(tab2);
    console.log(secondMax(tab2));

    bubbleSort(tab3);
    console.log(secondMax(tab3));
}

funkcja();