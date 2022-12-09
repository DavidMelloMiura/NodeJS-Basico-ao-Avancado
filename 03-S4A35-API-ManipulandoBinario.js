const Buffer = require('buffer').Buffer
const buf = Buffer.from('Curso Completo de NodeJS')

console.log(buf);
console.log(buf.toString());
console.log(buf.toString('utf16le'));


// Setando utf-8 direto na var
const buf_string = Buffer.from('Carregando uma string', 'utf-8');
console.log(buf_string.toString());


// Boolean - É Buffer?
console.log(Buffer.isBuffer(buf_string))

// Mostra parte do Buffer no caso de 0 a 10
console.log(buf_string.toString('utf-8', 0, 10));