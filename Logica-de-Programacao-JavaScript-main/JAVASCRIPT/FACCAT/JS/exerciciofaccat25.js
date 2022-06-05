//Exerciciofaccat25
let numeroContaCliente;
let saldo;
let debito;
let credito;
let saldoAtual;

numeroContaCliente=prompt("Digite o Numero da Conta Do Cliente: ");
saldo=parseFloat(prompt("Digite o Saldo da Conta do Cliente: "));
debito=parseFloat(prompt("Digite o Valor do Debito da Conta do Cliente: "));
credito=parseFloat(prompt("Digites Valor do Credito Na Conta do Cliente: "));
saldoAtual=saldo-debito+credito;

if (saldoAtual>=0) {
    alert("Saldo Positivo No Valor De: "+saldoAtual+"RS$");
} else {
    alert("Saldo Negativo No Valor De: "+saldoAtual+"R$");
}

