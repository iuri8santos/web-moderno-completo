// arrowFunction1

let dobro = function(a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' // possui o param _
console.log(ola())

// arrowFunction2

function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa

// arrowFunction3

let comparaComThis = function (param) {
    console.log(this === param)   
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

// callApply

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {
    preco: 49990, desc: 0.20
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

// callback1

const fabricante = ['Mercedes', 'Audi', 'BMW']
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricante.forEach(imprimir)
fabricante.forEach(fabricante => console.log(fabricante))

// callback2

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Usando callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas4 = notas.filter(nota => nota < 7)
console.log(notasBaixas4)

const notasMenorQue7 = nota => nota < 7 // Assim, pode-se reciclar a função
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

// callback3

// Exemplo de callback no navegador
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}

// cidadaoPrimeiraClasse

// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}
run(function () { console.log('Executando ...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3) (4)
const cincoMais = soma(2, 3) // Armazenando uma constante em uma variável
cincoMais(4)

// classsFactory

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}
const p2 = criarPessoa('Joaquim')
p2.falar()

// closure

// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação!

const x = 'Global'
function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())

// contextoLexico

const valor = 'Global'
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()

// desafioFuncaoConstrutora

function Pessoa(nome) {
    this.nome = nome
this.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}
}
const p1 = new Pessoa('João')
p1.falar()

// factory1

const prod1 = {
    nome: '...',
    preco: 45
}
const prod2 = {
    nome: '...',
    preco: 54
}

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

// factory2

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

// funcaoConstrutora

function Carro (velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 // let é privado
    this.acelerar = function() { // this é público
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}
const uno = new Carro // sem ()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() // 20
ferrari.acelerar() // 40, e assim, por diante
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() // 340
ferrari.acelerar() // 350
ferrari.acelerar() // 350
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

// funcoesAnonimas

const soma = function (x, y) {
    return x + y
}
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(3, 5, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa!')
    }
}
pessoa.falar()

const pessoa1 = { // Ou também
    falar() {
        console.log('Opa!')
    }
}
pessoa1.falar()

// iife

// IIFE = Imediately Invoked Function Expression
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()

// paramPadrao

// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// Estratégia 2, 3 e 4 para gerrar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// paramsERetornoSaoOpcionais

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(2, 3, 7, 14)
console.log(area(5, 5))

// paramsVariaveis

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma())
console.log(soma('a', 'b', 'c'))

// thisEBlind1

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e Objeto Orientado

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// thisEBlind2

function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000)
}
new Pessoa

// console.log(soma(3, 4)) // Funções carregadas antes de carregar o código, na function declaration

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x,y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(sub(3, 4))
console.log(mult(3, 4))

// Fim funcao