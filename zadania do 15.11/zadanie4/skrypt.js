const array = [10, 11, "ania", 11];
const f = 11;

const result = filterArray(array, f);
console.log(result);

function filterArray(arr, target) {
    let filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}