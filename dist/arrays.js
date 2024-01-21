//const nomeAlunos = ['joao', 'maria', 'joana'];

//nomeAlunos.forEach(function(nomeDoAluno, indice){
// console.log (`#${indice} nome do aluno: ${nomeDoAluno}`)
//})
//const notaAlunos = ['10', '8', '4'];

//notaAlunos.forEach(function(notaDoAluno, indice){
//console.log (`#${indice} nota do aluno: ${notaDoAluno}`)
//})

const alunos = ['joao', 'maria', 'joana'];
const alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual
  };
  return itemAtual;
});
console.log(alunos2);
const notas = ['10', '8', '4'];
const notas2 = notas.map(function (novoItem) {
  novoItem = {
    nota: novoItem
  };
  return novoItem;
});
console.log(notas2);
const alunoNota = [10, 8, 4];
const alunoMaiorNota = notas.map(function (notaAtual) {
  return notaAtual >= 6;
});
console.log(alunoMaiorNota);
const todosAlunosTemMaiorNota = alunoMaiorNota.every(function (item) {
  return item.nota >= '6';
});
console.log(todosAlunosTemMaiorNota);