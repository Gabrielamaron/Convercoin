const real = document.getElementById("value");
const cotacaoDolar = 5.33;
const valorEmDolar = document.getElementById("output");

function converter() {
    const valorConvertido = (real.value / cotacaoDolar).toFixed(2);

    valorEmDolar.innerHTML = "O valor em dólar americano é US$" + valorConvertido;
}
