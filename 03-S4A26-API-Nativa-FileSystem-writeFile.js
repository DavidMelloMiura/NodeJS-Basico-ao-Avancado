
/**
 * Importando apenas o modulo de leitura dos metodos fs
 */

const {writeFile} = require('fs')

writeFile('file.txt', 'Criando arquivo de texto WriteFile', err =>{
    if(err) throw err
    console.log('Arquivo criado com sucesso');
})