// let, const
{
    var a = 2
    let b = 3 // só vale dentro do bloco
    console.log(b)
}
console.log(a)

// Templete string
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ... tras] = 'Cod3r'
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3] // Espaço vazio
console.log(x, y)

const {idade: i, nome } = {nome: 'Ana', idade: 9}
console.log(i, nome)