function funkcja(x, y) {

    if (y >= x) {

      console.log(y);
      funkcja(x, y - 1);

    }

}
  
funkcja(8, 11);