const produtos = [
    { nome: "Notebook", preco: 2500, quantidade: 5 },
    { nome: "Mouse", preco: 50, quantidade: 20 },
    { nome: "Teclado", preco: 100, quantidade: 15 }
]

produtos.forEach(produto => {
    console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}, Total: ${(produto.preco * produto.quantidade).toFixed(2)}`)
})