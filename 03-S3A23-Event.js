/**
 * Node trabalha com programação dirigida ao evento
 * Event tem execução continua, o codigo esta sendo executado e posso chamar ele quantas vezes eu precisar
 * 
 * No caso de promise ele executa, resolve e encerra o processamento
 */


const EventEmitter = require('events');

class Evento extends EventEmitter{}

const meuEvento = new Evento()

// .on criando um evento - Deve ter nome e um callback ( O que ele deve executar )
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento segurança: ${x} ${y}`);
})

// emit - Emitir o evento
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salario');