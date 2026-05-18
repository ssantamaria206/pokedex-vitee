fetchPokemonList().then(async (Pokemons) => {
    const CaixaPokemons = document.getElementById("mainPkmGrid");
    const promises = Pokemons.map(async (pokemon) => {
        const resposta = await fetch(pokemon.url);
        const data = await resposta.json();
        return {
            name: data.name,
            sprite: data.sprites.front_default,
            type: data.types[0].type.name
        };
    });

    const results = await Promise.all(promises);
    results.forEach(pokemon => {
        const article = document.createElement("article");
        article.classList.add('pokemon-card');
        article.classList.add(`${pokemon.type}`);
        article.addEventListener("click", () => {
             window.location.href = `detalls.html?name=${pokemon.name}`;
        });
        const foto = document.createElement("img");
        foto.src = pokemon.sprite;
        const name = document.createElement("p");
        name.textContent = pokemon.name;
        article.appendChild(foto); 
        article.appendChild(name);
        CaixaPokemons.appendChild(article);
    });
});


const searchInput = document.getElementById('pkmSearchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const InputUser = e.target.value.toLowerCase();
        const PokemonCards = document.querySelectorAll('.pokemon-card');

        PokemonCards.forEach(card => {
            const text = card.querySelector('p');
            if (text) {
                const PokemonName = text.textContent.toLowerCase();
                card.style.display = PokemonName.includes(InputUser) ? 'flex' : 'none';
            }
        });
    });
}