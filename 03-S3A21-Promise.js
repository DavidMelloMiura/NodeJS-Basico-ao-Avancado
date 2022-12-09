// Quando esta tranalhando com Promise não precisa passar uma função de Callback
// Pode comparar com o arquivo - 03-S3A20-CallbackFunctions

// Arrow function - ()=>{}

function soma(z){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{ //retorna a função arrow depois de 3s (3000)
            resolve (z + 1000);
        },3000);
    })
    
}

soma(230)
.then((resultado)=> {
    console.log(`Resolvido, resultado: ${resultado}`);
}) //.then = se deu tudo certo


// Se tudo der certo dentro da promise (linha 7)
// É executado o then depois da chamada da função soma

// Usando PROMISE ficou mais simples do que com CALLBACK


// Dentro da promise tem uma função estatica usando setTimeout,
// Mas poderia ter uma busca em um Banco de dados ou uma API por exemplo
