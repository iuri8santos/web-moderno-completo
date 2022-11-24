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