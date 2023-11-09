function palindrome() {

    var input = document.getElementById('input').value;

    var znakiBiale = input.replace(/\s/g, '').toLowerCase();

    var odwracanie = znakiBiale.split('').reverse().join('');

    var palindrom = znakiBiale === odwracanie;

    var wynik = document.getElementById('wynik');
    wynik.innerHTML = palindrom;
    
    if (palindrom) {
        wynik.innerHTML = 'Palindrom.';
      } else {
        wynik.innerHTML = 'Nie palindrom';
      }
      
  }