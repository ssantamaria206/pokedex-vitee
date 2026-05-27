import fetchPokemon from "./api.js"

async function randomPokemon () {
    const randomID = Math.floor(Math.random() * 151) + 1;
    const pokemon = fetchPokemon(randomID)
}

function printPokemon(){
    const ZonaFoto = document.querySelector("#ZonaAparicionPokemon");
    const foto = document.createElement("img");
    foto.src = data.sprites.front_default;
    ZonaFoto.appendChild(foto);
}

function createPokemon(){
    const data = randomPokemon()
    printPokemon(data)
}

createPokemon()