// CRIANDO E EXPORTANDO UM MODULO

console.log('\nExecutando module-01.js\n');


const executa = () => {
    console.log('Executando função executa')
}

oculta = () => {
    console.log('Executando função oculta')
}

const welcome = 'Bem vindo ao módulo module-01.js'


// Exportando varias funções coloca entre { }
module.exports = {executa, oculta, welcome}