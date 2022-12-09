// const { spawn } = require('child_process')
// // const ls = spawn('ls', ['..'])

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// })


// ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// })

// ls.on('close', (code) => {
//     console.log(`Processo em segundo plano finalizado com o código ${code}`);
// })



/** OBSERVAÇÃO
 * 
 * A AULA DEVE ESTAR PASSANDO COMANDO NO LINUX
 * PEGAR ESTE LINK E TENTAR FAZER COMANDOS DO WINDOWS = DIR
 * 
 * 
 * LINK
 * https://nodejs.org/api/child_process.html#spawning-bat-and-cmd-files-on-windows
 */
 
const { spawn, exec } = require('child_process')
// const bat = spawn('cmd')

const bat = exec('dir')



console.log('\n===== APRESENTAÇÃO =====\n');

bat.stdout.on('data', (data)=>{
    console.log(data.toString());
})

bat.stderr.on('data', (data)=>{
    console.log(data.toString());
})

bat.on('close', (code)=>{
    console.log(`Processo em segundo plano finalizado com o código ${code}`);
})



