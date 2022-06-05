//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500
let somadora=0,contadora=1;

do {
   if (contadora%2 ==0) {
    
    somadora=somadora+contadora
    document.write(" O valor da contadora " +contadora+ " Valor da soma dos numeros pares corresponde a: " +somadora+ "<br/>" + "<br/>" ); 
       
   } 
   contadora++;
} while (contadora<501);