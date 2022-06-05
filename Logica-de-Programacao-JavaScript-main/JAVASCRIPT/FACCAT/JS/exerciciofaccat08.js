// exerciciofaccat08
// Votos Validos

let TotalEleitores;
let TotalBranco;
let TotalNulos;
let TotalValidos;
let PorcentagemVotosNulos;
let PorcentagemVotosBrancos;
let PorcentagemVotosValidos;

TotalEleitores=parseInt(prompt("Digite o numero total de eleitores: "));

TotalBranco=parseInt(prompt("Digite o numero total de votos brancos: "));

TotalNulos=parseInt(prompt("Digite Numero Total de Votos Nulos: " ));

TotalValidos=parseInt(prompt("Digite Numero Total de Votos Validos: "));

PorcentagemVotosNulos = TotalNulos/TotalEleitores*100

PorcentagemVotosBrancos = TotalBranco/TotalEleitores*100

PorcentagemVotosValidos = TotalValidos/TotalEleitores*100

alert("Porcentagem de Votos Nulos É:"+PorcentagemVotosNulos+" % "+"Porcentagem de Votos Brancos É:"+PorcentagemVotosBrancos+" % "+"Porcentagem de Votos Validos É:"+PorcentagemVotosValidos+" % ");