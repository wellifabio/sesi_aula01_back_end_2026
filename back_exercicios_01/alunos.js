const alunos = [
    { nome: "Ana Silva", idade: 15, cidade: "Amparo", notaFinal: 10 },
    { nome: "Maria Silva", idade: 14, cidade: "Amparo", notaFinal: 8 },
    { nome: "Marta Silva", idade: 16, cidade: "Amparo", notaFinal: 7.5 },
    { nome: "Mário Silva", idade: 15, cidade: "Amparo", notaFinal: 8.3 },
]

alunos.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Cidade: ${aluno.cidade}, Nota Final: ${aluno.notaFinal}`)
})