console.log(`\n`);

console.log(`Nome do Arquivo: \n`, __filename);
console.log(`\n`);
console.log(`Diretório do Arquivo: \n`, __dirname);
console.log(`\n`);
console.log(`Parâmetros de execução: `,process.argv[3]);

console.log(`Sistema Operacional: `,process.env.OS);
console.log(`UserName: `,process.env.USERNAME);
console.log(`User Domain: `,process.env.USERDOMAIN);
console.log(`Computer Name: `,process.env.COMPUTERNAME);

console.log(`\n`);



// console.log(`UserName: `,process.env);
console.log(`Plataform: `,process.platform);

/**
 * Para rodar a aplicação
 * nodemon [nome do aqruivo] -a 
 * nodemon 03-S3A24-varInternas-ObjetoProcess.js -a arquivo.js
 */