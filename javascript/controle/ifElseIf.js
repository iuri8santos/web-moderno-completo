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