// const {EventEmitter} = require('events');
import {EventEmitter} from 'events'
//Esse tipo de importação esta a partir da versao 12 do NodeJs
// a extensão do arquivo deve ser .mjs ( m de module )

class Evento extends EventEmitter{} // classe evento herdando de EventEmitter
const meuEvento = new Evento() // obj meuEvento é uma instancia do obj Evento

// .on criando um evento - Deve ter nome e um callback ( O que ele deve executar )
// metodo .on subscriber - assinante
meuEvento.on('seguranca', (x,y,z)=>{
    console.log(`Executando o evento segurança: ${x} ${y} ${z}`);
})

// emit - Emitir o evento
// metodo .emit - publisher - emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salario', 'Funcionario');

/**
 * Se alguem emitir o evento chamado segurança
 *    Reaja da seguinte forma meuEvento.on que recebe 3 parametros
 *      Os parametros estão no emit > 'userAdmin', 'Alterou Salario', 'Funcionario'
 */




meuEvento.on('encerrar', (dados)=>{
    console.log(`Assinante ${dados}`);
})

meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados');