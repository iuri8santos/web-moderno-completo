// breakContinue

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`x = ${nums[x]}`) // x = 1 ...
    // console.log(`${x} = ${nums[x]}`) 0 = 1 ...
}
for (y in nums) {
    if (y == 5) { //desvio de fluxo no 5, indo pro próximo
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // quando 2,3, ele para
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')

// doWhile

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
    } while (opcao != -1)

console.log('Até a próxima!')

// for1

let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}
const notas = [6.5, 3.4, 9.0, 8.1, 2.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}
// console.log(i) i não declarado fora do for

// for2

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

// if1

function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

// if2

function teste1(num) {
    if(num > 7)
      console.log(num)
    console.log('Final')
}
teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7)
        ; // não usar com as estrturas de controle
    {
      console.log(num)
    }
}
teste2(6)
teste2(8)

// ifElse

const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //cuidado!!

// ifElseIf

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação.')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado.')
    } else {
        console.log('Nota Inválida!')
    }
}
imprimirResultado(9.3)
imprimirResultado(7.1)
imprimirResultado(4.7)
imprimirResultado(3.8)
imprimirResultado(12.8)
imprimirResultado(-1)

// switch

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra!')
            break // se tirar o break, o todo é executado!
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação.')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado.')
            break
        default:
            console.log('Nota inválida!')
    }
}
imprimirResultado(9.7)
imprimirResultado(8.3)
imprimirResultado(5)
imprimirResultado(3.2)
imprimirResultado(-1.6)
imprimirResultado(18)

// while

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima!')