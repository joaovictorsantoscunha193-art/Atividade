// CONSTANTES - DOCUMENTAÇÕES (CONSTS)
const formBusca = document.getElementById("form-busca");
const inputPokemon = document.getElementById("input-pokemon");
const mensagemStatus = document.getElementById("mensagem-status");
const cardPokemon = document.getElementById("card-pokemon");
const pokeId = document.getElementById("poke-id");
const pokeImg = document.getElementById("poke-img");
const pokeNome = document.getElementById("poke-nome");
const pokeTipo = document.getElementById("poke-tipo");

// FUNÇÃO DE BUSCAR POKEMON ONDE RECEBE OS PARÂMETROS "nomeID" - AQUI VAI RECEBER NOME OU ID.
async function buscarPokemon(nomeID) {
    const termo = nomeID.toLowerCase().trim(); // ACEITA TANTO CAPS QUANTO SEM CAPS
    const url = `https://pokeapi.co/api/v2/pokemon/${termo}`; // AQUI PUXA A URL DA API.

    mensagemStatus.textContent = "Buscando Pokémon..."; // CONTEXTO DA PROCURA - BUSCANDO
    cardPokemon.classList.add("oculto");

    // UTILIZA UM TRY PARA VERIFICAÇÃO E AÇÃO 
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Pokémon não encontrado!"); // VERIFICA SE A RESPOSTA É COERENTE
        const dados = await resposta.json(); // CONVERTE O TOPO O PARÂMETRO EM UM OBJETO MANIPULÁVEL EM JSON(JAVASCRIPT) 

        pokeId.textContent = "#" + dados.id;
        pokeImg.src = dados.sprites.other["official-artwork"].front_default;
        pokeImg.alt = dados.name;
        pokeNome.textContent = dados.name;
        pokeTipo.textContent = dados.types.map((t) => t.type.name).join(" / "); // ISSO AQUI É UM ARRAY

        mensagemStatus.textContent = ""; // CONTEXTO DA PROCURA - ELE ZERA NOVAMENTE QUANDO ENCONTRA
        cardPokemon.classList.remove("oculto"); // REMOVE A OCULTAÇÃO
    } catch (erro) {
        mensagemStatus.textContent = erro.message;
    }
}
// EVENTO DE SUBTMIT - ENVIO
formBusca.addEventListener("submit", (event) => {
    event.preventDefault();
    buscarPokemon(inputPokemon.value);
});