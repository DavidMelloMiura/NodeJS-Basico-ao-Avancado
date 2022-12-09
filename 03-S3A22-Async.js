// Arrow function - ()=>{}

function sum(z){
    return new Promise((resolve, reject) =>{
        if(Number(z) == NaN || Number(z) == undefined || typeof z != 'number' ) {
            reject('Tá de brincadeira?');
        }
        setTimeout(()=>{ //retorna a função arrow depois de 3s (3000)
            resolve (z + 1000);
        },3000);
    })
}


/**
 * Se a função vai ser async eu tenho uma estrutura de try catch
 * trycatch - se der certo tudo bem é executado, se der algum erro o catch captura o erro
 * Como é uma promesa o await é usado toda vez que eu quero executar uma função cujo o retorno é uma promise
 * 
 * Neste caso existe uma promise na função sum(z)
 * Quando ela é chamada na função main você usa await antes da chamada da função sum(230) => await sum(230)
 */



async function main() {
    try {
        const resultado = await sum(230);
        console.log(`Resultado com Async/Await: ${resultado}`);
    } catch (error) {
        console.log(`Temos problemas: ${error}`);
        console.log(process.env.USERNAME); // Mostra o usuario do windows - Pode pegar pelo usuario do banco de dados
    }
}

main(); //Executa a função main


