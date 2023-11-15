const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const polaczone = [...arr1, ...arr2];
console.log("1. Łączenie tablic:", polaczone);

const ostatniElement = arr2.reverse()[0];
console.log("2. Ostatni element w tablicy arr2:", ostatniElement);

const filtruj = (array, arg) => array.filter(item => item.includes(arg));
const filtrowaneTab = filtruj(arr2, "a");
console.log("3. Zastosowanie filter w tablicy arr2:", filtrowaneTab);

const suma = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("4. Suma elementów w tablicy numbers:", suma);

const zmapowane = numbers.map(item => item ** 2 + 3);
console.log("5. .map() po tablicy numbers:", zmapowane);

// Zadania dodatkowe:

const parzyste = numbers.filter(item => item % 2 === 0);
console.log("Dodatkowe 1. Liczby parzyste w tablicy numbers:", parzyste);

const min = (arr) => arr.length === 1 ? arr[0] : Math.min(arr[0], min(arr.slice(1)));
const Min = min(numbers);
console.log("Dodatkowe 2. Najmniejszy element w tablicy numbers:", Min);