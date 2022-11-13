Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) { // Percorrer todo o array
        if (callback(this[i], i, this)) {
            newArray.push(THIS[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2599, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 2600
const fragil = produto => produto.fragil // como aqui

console.log(produtos.filter(caro).filter(fragil))