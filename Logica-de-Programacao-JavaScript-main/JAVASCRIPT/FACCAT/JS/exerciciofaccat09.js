let salarioAtual
let reajuste
let novoSalario

salarioAtual = parseFloat(prompt("Digite o valor do seu salário atual R$:"));
reajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));
novoSalario = salarioAtual + (salarioAtual * reajuste / 100);
alert("O valor do seu salário será: R$ " + novoSalario);