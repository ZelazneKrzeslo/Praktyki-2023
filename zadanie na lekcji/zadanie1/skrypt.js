function rekurencja(x,y) {
    if (x > y) {
        y = y - 1;
        console.log(y);
        rekurencja(x,y);
    }
    else{
        console.log(y);
    }
}
rekurencja(11,8);