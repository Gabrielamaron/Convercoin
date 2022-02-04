const real = document.getElementById("value");
const cotacaoDolar = 5.28;
const valorEmDolar = document.getElementById("output");

function converter() {
    const valorConvertido = real.value / cotacaoDolar;

    valorEmDolar.innerHTML = "O valor em dólar americano é US$" + valorConvertido.toFixed(2);
}
