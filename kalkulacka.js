const vstup1 = document.getElementById("vstup1");
const vstup2 = document.getElementById("vstup2");
const vysledek = document.getElementById("vysledek");

document.getElementById("tlPlus").addEventListener("click", function () {
    vypocet("+");
});

document.getElementById("tlMinus").addEventListener("click", function () {
    vypocet("-");
});

document.getElementById("tlKrat").addEventListener("click", function () {
    vypocet("*");
});

document.getElementById("tlDeleno").addEventListener("click", function () {
    vypocet("/");
});

function vypocet(operace) {
    const a = parseFloat(vstup1.value);
    const b = parseFloat(vstup2.value);

    if (isNaN(a) || isNaN(b)) {
        vysledek.innerHTML = "❌ Zadej platná čísla";
        return;
    }

    let res;

    switch (operace) {
        case "+":
            res = a + b;
            break;
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/":
            if (b === 0) {
                vysledek.innerHTML = "❌ Nelze dělit nulou";
                return;
            }
            res = a / b;
            break;
    }

    vysledek.innerHTML = "Výsledek: <strong>" + res + "</strong>";
}
