
// VARIÁVEL DE CONTROLE: 
let botao = false; 
const stp = 2000; // AQUI É A CONSTANTE DO TIMEOUT - ALTERAR O VALOR POR AQUI NÉ.

// FUNÇÃO BOTÃO - PRESSIONADO 
function botaoPressionado (){ 
botao =  !botao

// MENSAGEM 1: SIMULAÇÃO DE CLIQUE - CONSOLE
console.log("Usuário clicou no botão");

// BOTÃO - IDENTIFICA SE A CONDIÇÃO DO BOTÃO É DIFERENTE DE SUA PRÓPRIA ATRIBUIÇÃO, OU SEJA, SE FOR DIFERENTE DE FALSO (= TRUE)  ACONTECE A BRINCADEIRINHA
if (botao) setTimeout(() => { 
    console.log("Dados do pedido chegaram ao servidor!"); // MENSAGEM 2: SIMULAÇÃO DE DADOS ENTREGUE.
}, stp);    
}   

botaoPressionado(); // PUXA A FUNÇÃO E ATIVA ELA.

// MENSAGEM 2: ENTRADA DE UMA MENSAGEM ALEATÓRIA
console.log("Oi");

// QUESTÃO 1° - POR QUAL MOTIVO A MENSAGEM 3 APARECE PRIMEIRO QUE A 2?
/* RESPOSTA: A mensagem três apareceu primeiro que a segunda, pois ela age como uma mensagem com tempo pré-definido. Depois de um determinado tempo ela aparecerá 
*/

// FUNÇÃO QUE SIMULA UMA CONSULTA QUE DEMORA 2 SEGUNDOS NO SERVIDOR.
function buscarProdutoNoServidor(idProduto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idProduto === 101) {
                resolve({ id: 101, nome: "Teclado Mecânico", estoque: 5 });
            } else {
                reject("Erro 404: Produto não encontrado no banco de dados!");
            }
        }, 2000);
    });
}

// DESAFIO 2: EXIBIÇÃO DE PRODUTOS
async function exibirProduto() {
    console.log("Buscando produto...");
    const produto = await buscarProdutoNoServidor(101);
    console.log("Produto encontrado: " + produto.nome + " | Estoque: " + produto.estoque);
}

// DESAFIO 3: CONSULTAÇÃO COM SEGURANÇA
async function consultarComSeguranca(id) {
    try {
        console.log("Buscando produto " + id + "...");
        const produto = await buscarProdutoNoServidor(id);
        console.log("Produto encontrado: " + produto.nome + " | Estoque: " + produto.estoque);
    } catch (erro) {
        console.log("Falha na operação: " + erro);
    } finally {
        console.log("Consulta finalizada.");
    }
}

// TESTANO
async function executarTestes() {
    await exibirProduto();             // DESAFIO 2
    await consultarComSeguranca(101);  // DESAFIO 3: SUCESSO
    await consultarComSeguranca(999);  // DESAFIO 3: FALHA
}

executarTestes();