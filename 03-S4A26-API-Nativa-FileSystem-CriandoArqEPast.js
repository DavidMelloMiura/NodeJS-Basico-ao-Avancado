/** ReadFile - Forma não bloqueante
 *  Forma bloqueante - Trava conexao ler o arquivo todo
 * e quando ler ele libera
 */

const fs = require('fs')
const assets = ['css', 'js', 'imagens', 'fonts', 'lib'];

function make(dir) {
    dir.forEach(item => {
        
        fs.mkdir(`projeto/assets/${item}`,{recursive: true},(err) => {
            if(err) throw err
            console.log(`Diretorio criado com sucesso: ${item}`);
        })
    });
// recursive: true - permite criar diretorio dentro de diretorio
}

make(assets);