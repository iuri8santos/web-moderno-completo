// aritmeticos

const [a, b, c, d] = [3, 5 , 1, 12]
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2
console.log(soma, subtracao, multiplicacao, divisao, modulo)

// array

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

// atribuicao

const a = 7
let b = 3

b += a // b = b + a
console.log(b)

b -= 4 // b = b - 4
console.log(b)

b *= 2 // b = b * 2
console.log(b)

b /= 3 // b = b / 3
console.log(b)

b %= 2 // b = b % 2
console.log(b)

// bloco

{
    console.log('Passo 1');
    {
        console.log('Passo 1.1');

    }
    console.log('Passo 2');
    console.log('Passo 3');
}

{
    console.log('Passo 4');
    {
        console.log('Passo 4.1');
        {
            console.log('Fim do passo 4');
        }
    }
    console.log('Passo 5');
}
{
    console.log('Fim!');
}

// booleanos

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 0))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || 'epa'))
console.log(('' || null || 0 || 'epa'))

let nome = ''
console.log(nome || 'desconhecido')

// comentario

//Comentário de uma linha
console.log('Linha 1')

/*comentário de
múltiplas linhas*/
console.log('Linha 2')

/*
* Comentário
* de
* múltiplas
* linhas
*/
console.log('Linha 3')

// comentarios

console.log('Passo #03');
console.log('Passo #01');
// comentário de uma linha

/*
este 
é um comentário de
múltimplas
linhas
*/

console.log('Passo #02');

// dados1

var nome = 'Caneta';
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5
var precoFinal = preco + imposto;

console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);

nome = 'Caneta BIC';
console.log(nome);

blabla = 123; //variável não indicada
console.log(blabla);

// dados2

let preco = 19.90;
let desconto = 0.4;
console.log(19.9 * 0.6);

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = 'Caderno'; //string -> sequência de símbolos/texto
let categoria = 'Papelaria';
console.log('Produto: ' + nome + ', Categoria: ' + categoria + ', Preço: ' + preco +', Desconto: ' + desconto);

console.log('1' + 1); //soma de texto com número

// dados3

let idade = 31;
console.log(typeof 31);
console.log(typeof idade);

let salario = 4578.32; // ponto flutuante
console.log(typeof salario);

let estaChovendo = true; //ou false
console.log(typeof estaChovendo);

console.log(typeof 'teste'); // string
console.log(typeof "teste");

// dados4

const a = 3;
// ...
// a = a + 10;
// ...
console.log(a);

// desafio_area

const pi = 3.14159
let raio = 7;
let areaCirc = pi * raio * raio;

console.log('O valor da área da circunferência é: ' + areaCirc + ' m2');

console.log(Math.PI);
areaCirc = Math.PI * raio * raio;
console.log('O valor da área da circunferência é: ' + areaCirc + ' m2');

// desafio_sentenca_blocos

console.log('Bloco ímpar.');
{
    console.log('1');
    console.log('3');
    console.log('5');
    console.log('7');
    console.log('9');
}
console.log('Bloco par.');
{
    console.log('2');
    console.log('4');
    console.log('6');
    console.log('8');
    console.log('10');
}

// desafio-troca

let a = 7;
let b = 94;

// trocar o valor de a por b.
let temp = a;
a = b;
b = temp;

// ou [a, b] = [b, a];
console.log(a, b);

// destructuring1

// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// destructuring2

const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3 , n5, n6)

const [, [, nota]] = [[,8 , 8], [9, 6, 8]]
console.log(nota)

// destructuring3

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))

// destructuring4

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))

// erro

function tratarErroELancar(erro) {
    throw new Error('...')
    // throw 10
    //throw true
    /* throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } */
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)

// funcao1

// funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) //NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //5 soma somente os 2 primeiros
imprimirSoma()

// Funçao com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

// funcao2

// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno inplícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

// funcaoEmQuaseTudo

console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// hoisting

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)

// logicos

/*
    v e v -> v
    v e f -> f
    f e v -> f
    f e f -> f

    v ou v -> v
    v ou f -> v
    f ou v -> v
    f ou f -> f

    v xor v -> f (ou exclusivo = xor)
    v xor f -> v
    f xor v -> v
    f xor f -> f

    !v -> f
    !f -> v
*/
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)

// notacaoPonto

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())
obj3.exec()

// null-undefined

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

// console.log(valor.toString)  Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)

// numeros

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(total)
console.log(media.toFixed(2)) // para 2 casas decimais
console.log(media.toString(2)) // para sistema binário
console.log(typeof media)
console.log(typeof Number)

// numerosAlgunsCuidados

console.log(7 / 0)
console.log('10'/2)
console.log('3' + 2) // a string ganha
console.log('3' - 2)
console.log('10,2'/2) //NotaNumber
console.log('Show!'*2)
console.log(0.1 + 0.7)
//console.log(10.toString)
console.log(10.345.toFixed(2))

// objetos1

const prod1 = []
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod1)

// objetos2

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

// organizacao

console.log('Olá, Mundo!')
{
    console.log('Sentença')
    console.log('de código')
}

// parNomeValor

const saudacao = 'Opa'
function exec() {
    const saudacao = 'Faaaala'
    return saudacao
}
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)

// relacionais

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// sentenca1

console.log("Bom dia!");
console.log("Bom tarde!");
console.log("Bom noite!");

// sentenca2

console.log('Passo #03');
console.log('Passo #01');
console.log('Passo #02');

// string

const escola = 'Cod3r'

console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,Pedro'.split(','))

// templateString

/* const nome = 'Rebeca'
const concatenacao = 'Olá' + nome '!'
const template = '
    Olá
    ${ nome } !'
console.log(concatenacao, template)
*/
// expressões
console.log('1 + 1 = ${1 + 1}')

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

// ternarios

const resultado =  nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/* const resultado =  nota => {
    nota >= 7 ? 'Aprovado' : 'Reprovado'
} igual a de cima */
console.log(resultado(7.1))
console.log(resultado(6.7))

// tipagemFraca

let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.14159
console.log(qualquer)
console.log(typeof qualquer)

//Evite nomes genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso

console.log(valor)
console.log(typeof valor)

console.log(numero)
console.log(typeof numero)

console.log(pqp)
console.log(typeof pqp)

// unarios

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // 2 = 2 v -> 3
console.log(++num1 === --num2) // 2 = 1 f

// usandoLet1

let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// usandoLetEmLoop1

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i = ', i)

// usandoLetEmLoop2

const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
funcs[2]()
funcs[6]()
funcs[8]()

// usandoVar1

{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste ()
{
    var local = 123
    console.log(local)
}
teste()

// usandoVar2

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// usandoVarEmLoop1

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i = ', i)

// usandoVarEmLoop1

const funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

// variaveisEConstantes

var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b) // 30 40

a = 300
b = 400

console.log(a, b)

const c = 5
console.log(c)