const http = require('http');
const hostname = '127.0.0.2';
const port = 3000;
const url = `http://${hostname}:${port}/`;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Bem vindo<br>Node.JS</h1>');

});

server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando em ${url}`);
})




// Assim que executar o Script, abrir o navegador


const open = (process.platform == 'darwin'? 'open':
process.platform == 'win32'? 'start':'xdg-open');

require('child_process').exec(open + ' ' + url);

// console.log(`UserName: `,process.platform);