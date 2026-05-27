
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
    const pokemon = await GrabPokemon(randomID)
    return pokemon
}

function guardarPokemon(data){
    pass
    /* Guardar pokemon en local storage */
}

function printPokemon(data){
    const ZonaFoto = document.querySelector("#ZonaAparicionPokemon");
    const foto = document.createElement("img");
    foto.addEventListener("click", () => {
        guardarPokemon(data)
        window.location.href = `my_pokemons.html`;
    });
    foto.src = data.sprites.front_default;
    ZonaFoto.appendChild(foto);
}

async function createPokemon(){
    const data = await randomPokemon()
    printPokemon(data)
}

createPokemon()