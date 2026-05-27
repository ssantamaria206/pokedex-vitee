
async function GrabPokemon(idOrName) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);

        if (!resposta.ok) {
            throw new Error("Error al cargar pokemon");
        }
        return await resposta.json();
    } catch (error) {
        console.error(error);
    }
}

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