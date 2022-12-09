/** File System - API NATIVA DO NODE JS
 * Permite manipular arquivos e pastas do SO
 * Ler, Criar, Mover, Copiar arquivos
 * 
 * Vai funcionar no lado do servidor,
 * no lado do cliente não tem como manipular os arquivos, não é seguro
 * 
 * Servidor de arquivos, rotinas na empresa para manipular automaticamente
 * Backup, copiar determinado arquivo por meio do horario
 */

const fs = require('fs');

fs.readdir(__dirname, (err, data)=>{
    if(err) throw err;

    data.forEach((file) => {
        console.log(__dirname + '\\' + file + '\n');
    });

});