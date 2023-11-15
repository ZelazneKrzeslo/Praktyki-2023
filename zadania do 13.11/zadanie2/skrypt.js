function palindrome() {
  var input = document.getElementById('input').value;
  var cleanedInput = '';
  var reversedInput = '';

  for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);
      if (charCode !== 32) {
          cleanedInput += String.fromCharCode(charCode);
          reversedInput = input[i] + reversedInput;
      }
  }

  cleanedInput = cleanedInput.toLowerCase();
  reversedInput = reversedInput.toLowerCase();

  document.getElementById('wynik').innerHTML = cleanedInput === reversedInput ? 'Palindrom.' : 'Nie palindrom';
}