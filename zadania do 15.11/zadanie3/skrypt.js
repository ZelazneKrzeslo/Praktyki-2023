const array1 = ["Hania", "Ania"];
const array2 = ["Gregor", "Henio"];

const combined = combineArrays(array1, array2);
console.log(combined);

function combineArrays(arr1, arr2) {
    let mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
        mergedArray.push(arr2[j]);
    }

    return mergedArray.join(", ");
}