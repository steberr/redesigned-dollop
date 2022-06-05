let numerocarros
let vendas
let salarioFixo
let numerovendas
let omissao
let pVendas 
let salarioTotal

alert("Cálculo de salário de um funcionário");
numerocarros = parseInt(prompt("Digite a quantidade carros vendidos:"));
vendas = parseFloat(prompt("Digite o valor total de vendas: R$"));
salarioFixo = parseFloat(prompt("Digite o valor do salário fixo: R$"));
numerovendas = parseFloat(prompt("Digite o valor recebido por cada carro vendido: R$"));

comissao = vendas * 0.05;
pVendas = numerovendas * numerocarros;
salarioTotal = salarioFixo + comissao + pVendas;

alert("O valor final do salário deste funcionário será de: R$ " + salarioTotal);