const x = [1, 4, 5,"Ania"];
let liczby = true;

for (let i = 0; i < x.length; i++) {

  if (typeof x[i] !== 'number') {

    liczby = false;

    break;
    
  }

}

if (liczby) {

  let suma = 0;

  for (let i = 0; i < x.length; i++) {

    suma += x[i];

  }

  console.log(suma);

} 
else {

  console.log("Nie wszystkie elementy w tablicy są liczbami.");

}