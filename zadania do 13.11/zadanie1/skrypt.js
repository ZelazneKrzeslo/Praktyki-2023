function calculate() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const lista = document.getElementById("lista").value;
    let wynik;

    switch (lista) {
        case "add":
            wynik = x + y;
            break;
        case "subtract":
            wynik = x - y;
            break;
        case "multiply":
            wynik = x * y;
            break;
        case "divide":
            if (y === 0) {
                alert("Nie dzieli się przez 0.");
                return;
            }
            wynik = x / y;
            break;
    }
    document.getElementById("wynik").textContent = wynik;
}

