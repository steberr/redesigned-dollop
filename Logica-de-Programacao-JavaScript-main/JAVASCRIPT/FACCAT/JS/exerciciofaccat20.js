let valor1, valor2;

alert("Ordem crescente de valores")
valor1 = parseInt(prompt("Digite um valor:"));
valor2 = parseInt(prompt("Digite outro valor:"));

if (valor1 == valor2) {
    alert("[ERRO] Digite valores diferentes!");
} else if (valor1 > valor2) {
    alert("1º Valor: " + valor1 + "  |2º Valor: " + valor2);
} else {
    alert("1º Valor: " + valor2 + " | 2º Valor: " + valor1);
}