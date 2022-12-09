
// CÓDIGO NORMAL - Função Sincrona - Trabalhando na sequencia que digitamos

// function soma(z){
    //     return z + 1000;
    // }
    
    // console.log(soma(1));
    
    

    
// CÓDIGO COM INFORMAÇÕES DO BANCO DE DADOS (1000)

function soma(z, callback){
    return setTimeout(()=>{ //retorna a função arrow depois de 3s (3000)
        return callback (null, z + 1000); //null esta no lugar do err da função abaixo
    },3000);
}

// Dessa forma não funciona - Não soma
// function escreve() {
//     console.log('Executando a função escrere', soma(1));
// }

// // escreve();
// console.log(soma(500));



// CALLBACK FUNCTION
function resolveSoma(err, resultado) {
    if(err) throw err; //se err tiver alguma coisa throw (estoura) esse err throw (para e mostra o erro)
    console.log(resultado); //Se passar pela linha acima então esta tudo certo
}

soma(200, resolveSoma); // (z, callback) - callback é o resolve soma

// Espera 3s e chama o resolveSoma  passando null no lugar do erro e z mais 1000 no lugar do resultado