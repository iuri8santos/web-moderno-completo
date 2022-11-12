const produtos = [
    {nome: 'Notebook', preco: 2599, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

console.log(produtos.filter(function(q) {
    return q.preco > 2500, q.fragil == true // pode-se retirar o true, pois se é true, é fragil
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // como aqui

console.log(produtos.filter(caro).filter(fragil))