// asyncAwait

const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}
// Recurso do ES8
// Objetivo de simplificar o uso de promises ...
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // Retorna um objeto asyncFunction
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

// asyncAwait1

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}
// esperarPor(2000)
//     .then(() => console.log('Executando promessa 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promessa 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promessa 3...'))
function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}
async function retornarValorRapido() {
    return 20
}
async function executar() {
    let valor = await retornarValorRapido()
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
    return valor + 3
}
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}
executar()
    .then(console.log)

// asyncAwait2

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}
async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
            }
        return numeros
    } catch(e) {
        if(tentativas > 5) {
            throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}
gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)

// forOf

for (let letra of 'Cod3r')
console.log(letra)

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma){ // Ao invés de 'for in' vamos usar 'for of' aqui
    console.log(i)
}
for (let assunto of assuntosEcma) {
    console.log(assunto)
}
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}

// map

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.angular)
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
// chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

// operadorSpreadRest

// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348, 99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)

// promise1

let a = 1
console.log(a)
// p.then(function(valor) {
//     console.log(valor) // somente um valor
// })
// p.then(valor => console.log(valor)) // Ou assim ...

// function primeiroElemento(array) {
//     return array[0]
// } // ou abaixo
const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    // .then(valor => valor[0])
    // .then(primeiro => console.log(primeiro))
    // .then(primeiro => primeiro[0])
    .then(primeiroElemento) // array
    .then(primeiroElemento) // string
    .then(primeiraLetra)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    // .then(letra => console.log(letra))
    // .then(letra => letra.toLowerCase())
    // .then(letraMinuscula => console.log(letraMinuscula))
    .then(console.log)

// promise2

setTimeout(function() {
    console.log('Execuntando callback 1...')
    setTimeout(function() {
        console.log('Execuntando callback 2...')
        setTimeout(function() {
            console.log('Execuntando callback 3...')
        }, 2000)
    }, 2000)
}, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promessa ...')
            resolve()
        }, tempo)
    })
}
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)

// promise3

function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}
gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)

// promise4

function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(function() {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
        }, tempo)
    })
}
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}
console.time('tempoDeExecucao')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('tempoDeExecucao')
    })

// promise5

const { reject } = require("lodash");
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}
funcionarOuNao('Testando ...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
        )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))

// promisedesafio

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}
const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)

// promises

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Para o 'reject'

// revisao1

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

// revisao2

// Arrow function
const soma = (a, b) => a + b // return implícito quando sem corpo '{ }'
console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}
log(undefined)
log(null)
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

// revisao3

// ES6: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhoria na Notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi, gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())

// set

// Não aceita repetição e não é indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Luan', 'Júlia', 'Luan']
const nomesSet = new Set(nomes);console.log(nomesSet)

// taggedTemplate1

// Tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`)

// taggedTemplate2

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.90
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)

// usandoCallbacks

// Sem promise
const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})

// usandoPromises

// Com promise
const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    // .then(x => console.log(x)) // gera 3 arrays com as 3 turmas separadas
    .then(turmas => [].concat(...turmas))
    // .then(x => console.log(x)) // 1 array com as 3 turmas juntas
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
    
    getTurma('D').catch(e => console.log(e.message))

// Fim ESNext