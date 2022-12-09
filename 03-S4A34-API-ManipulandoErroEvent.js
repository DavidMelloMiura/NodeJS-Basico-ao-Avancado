const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const validaObj = (a) => {
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'));
    }else{
        console.log('Objeto válido');
    }
}

emitter.addListener('error', (err)=>{
    console.log(err.message);
})

// let dados = 9
let dados = {name: 'Hcode', course: 'NodeJS'}


validaObj(dados)

console.log('Tipo de Variavel: ' + typeof(dados));