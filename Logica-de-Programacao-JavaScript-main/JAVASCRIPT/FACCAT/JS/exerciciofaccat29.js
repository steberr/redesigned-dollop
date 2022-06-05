let numero1, numero2, numero3;

numero1 = parseFloat(prompt("Digite o primeiro numero:"));
numero2 = parseFloat(prompt("Digite o segundo numero:"));
numero3 = parseFloat(prompt("Digite o terceiro numero:"));

if (numero1 == numero2 || numero2 == numero3 || numero3 == numero1) {
    alert("[ERRO] Digite apenas numeroes diferentes!");
} else if (numero1 > numero2 && numero1 > numero3) {
    alert("O maior numero digitado foi: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    alert("O maior numero digitado foi: " + numero2);
} else {
    alert("O maior numero digitado foi: " + numero3);
}