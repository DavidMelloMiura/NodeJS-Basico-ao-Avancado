console.log('Exibindo mensagem no console');

console.error(new Error('Exibindo mensagem de erro, temos problemas'));

const cars = ['Toyota', 'Honda', 'Hyundai']
console.table(cars);

// const carros = {
//     marca: 'Toyota', modelo: 'Corolla',
//     marca: 'Honda', modelo: 'Civic',
//     marca: 'Hyundai', modelo: 'Sonata'
// }

const carros = [

    {marca: 'Toyota', modelo: 'Corolla'},
    {marca: 'Hyundai', modelo: 'Sonata'},

]
// 

// carros.forEach(carro => console.table(carro));
carros.forEach(carro => {
    console.table(carro);
})


// Mostra quantia de processo conforme vai adicionando
console.count('processo');
console.count('processo');
console.count('processo');

console.log('Resetando o processo'); 
console.countReset('processo'); // Reseta contagem

console.count('processo');



// Conta o tempo de execução 
console.time('contador'); // Inicio da contagem

for(let i = 0; i < 100; i++){
    console.log('-');
}

console.timeEnd('contador'); // Final da contagem


/** ASSERT - Verifica se uma condição esta dando certo
 *  Se tiver dando certo não faz nada
 *  Mas se der algum problema - exibe mensagem de erro
 */

console.assert(true, 'Faça alguma coisa');
console.assert(false, 'Ih Rapaz %s, que pena', 'Não funcionou');

console.clear();

    
    

