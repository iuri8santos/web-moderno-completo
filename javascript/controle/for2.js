const notas = [6.5, 3.4, 9.0, 8.1, 2.7]
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
// console.log(atributo)