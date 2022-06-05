let numero;

numero = parseFloat(prompt("Digite um numero: "));

if (numero > 0) {
    alert(numero + " | Este numero é positivo ");
} else if (numero == 0) {
    alert(numero + " | Este numero é zero ");
} else {
    alert(numero + " | Este numero é negativo ");
}