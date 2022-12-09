
/** ReadFile - Forma não bloqueante
 *  Forma bloqueante - Trava conexao ler o arquivo todo
 * e quando ler ele libera
 */

const fs = require('fs')
fs.readFile('file.txt', (err, data) => {
    if(err) throw err;

    // console.log('\n' + data.toString());
});


/** ReadFileSync
 *  Forma bloqueante - Trava conexao ler o arquivo todo
 * e quando ler ele libera
 */
const texto = fs.readFileSync('file.txt');
console.log(`Texto: ${texto}`);