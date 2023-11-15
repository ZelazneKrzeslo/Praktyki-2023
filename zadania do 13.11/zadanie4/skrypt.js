function anagram() {
    var word1 = document.getElementById('input1').value;
    var word2 = document.getElementById('input2').value;

    var result = document.getElementById('wynik');
    
    result.innerHTML = areAnagrams(word1, word2) 
        ? 'Anagramy' 
        : 'Nieanagramy';
}

function areAnagrams(word1, word2) {
    var cleanWord1 = whitespace(word1).toLowerCase();
    var cleanWord2 = whitespace(word2).toLowerCase();

    var sortedWord1 = sort(cleanWord1);
    var sortedWord2 = sort(cleanWord2);

    return sortedWord1 === sortedWord2;
}

function whitespace(word) {
    var cleanWord = '';
    for (var i = 0; i < word.length; i++) {
        if (word[i] !== ' ') {
            cleanWord += word[i];
        }
    }
    return cleanWord;
}

function sort(word) {
    var characters = word.split('');
    for (var i = 0; i < characters.length; i++) {
        for (var j = 0; j < characters.length - i - 1; j++) {
            if (characters[j].charCodeAt(0) > characters[j + 1].charCodeAt(0)) {
                var temp = characters[j];
                characters[j] = characters[j + 1];
                characters[j + 1] = temp;
            }
        }
    }
    return characters.join('');
}
  

