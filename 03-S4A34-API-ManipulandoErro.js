// throw new Error('Deu erro na minha maquina funciona');

function execute() {
    executeTo()
}

function executeTo() {
    throw new Error('Deu erro na minha maquina funciona');
}

function init(){
    // Tente executar - Se der erro execute o catch
    try {
        execute()
    } catch (e) {
        console.log(`Temos um problema ${e}`); //Se colocar e.message - Aparece só a mensagem de erro
    }
}

init();

/** Fluxo
 * init() acima chama funcao init que tenta execute() que chama executeTo() que cria o erro
 * Vai para o catch - Mostra a mensagem do catch e e.message mostra a mensagem de erro que foi criada junto com a criação do erro
 * 
 * Então vai para o console Depois do erro
 */

console.log('Depois do erro');
