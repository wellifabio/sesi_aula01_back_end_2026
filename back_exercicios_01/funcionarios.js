const funcionarios = [
    { nome: "João Silva", cargo: "Gerente", salario: 5000, tempoServico: 5 },
    { nome: "Maria Silva", cargo: "Desenvolvedora", salario: 4000, tempoServico: 3 },
    { nome: "Marta Silva", cargo: "Designer", salario: 3500, tempoServico: 2 },
    { nome: "Mário Silva", cargo: "Analista", salario: 3000, tempoServico: 4 }
]
funcionarios.forEach(funcionario => {
    console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}, Tempo de Serviço: ${funcionario.tempoServico}`)
})