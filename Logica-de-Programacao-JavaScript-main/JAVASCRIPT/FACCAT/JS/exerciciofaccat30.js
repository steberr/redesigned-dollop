let numero1, numero2, numero3, menor, meio, maior;

numero1 = parseFloat(prompt("Digite o primeiro numero:"));
numero2 = parseFloat(prompt("Digite o segundo numero:"));
numero3 = parseFloat(prompt("Digite o terceiro numero:"));

if (numero1 == numero2 || numero2 == numero1 || numero3 == numero1) {
    alert("[ERRO] Digite apenas numeroes diferentes!");
} else if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1;
    if (numero2 < numero3) {
        meio = numero3;
        menor = numero2;
    } else {
        meio = numero2;
        menor = numero3;
    }
    alert("Ordem crescente: " + menor + ", " + meio + ", " + maior);
} else if (numero2 > numero1 && numero2 > numero3) {
    maior = numero2;
    if (numero1 < numero3) {
        meio = numero3;
        menor = numero1;
    } else {
        meio = numero1;
        menor = numero3;
    }
    alert("Ordem crescente: " + menor + ", " + meio + ", " + maior);
} else if (numero3 > numero1 && numero3 > numero2) {
    maior = numero3;
    if (numero2 < numero1) {
        meio = numero1;
        menor = numero2;
    } else {
        meio = numero2;
        menor = numero1;
    }
    alert("Ordem crescente: " + menor + ", " + meio + ", " + maior);
}