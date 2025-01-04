let objAtletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

for (let i = 0; i < objAtletas.length; i++) {
  let atleta = objAtletas[i];
  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas: ${atleta.notas.join(', ')}`);
  
  let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
  let notasComputadas = notasOrdenadas.slice(1, 4);
  let media = notasComputadas.reduce((soma, nota) => soma + nota, 0) / notasComputadas.length;
   
  console.log(`Média: ${media.toFixed(2)}`);
  console.log('---------------------------');
}
