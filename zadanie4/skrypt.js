function anagram() {

    var slowo1 = document.getElementById('input1').value;
    var slowo2 = document.getElementById('input2').value;

    var wynik = document.getElementById('wynik');
    
    wynik.innerHTML = sprawdzenie(slowo1, slowo2) 
    ? 'Anagramy' 
    : 'Nieanagramy';

}

function sprawdzenie(slowo1, slowo2) {

    var znakiBiale1 = slowo1.replace(/\s/g, '').toLowerCase();
    var znakiBiale2 = slowo2.replace(/\s/g, '').toLowerCase();

    var posortowane1 = znakiBiale1.split('').sort().join('');
    var posortowane2 = znakiBiale2.split('').sort().join('');

    return posortowane1 === posortowane2;

}
  

