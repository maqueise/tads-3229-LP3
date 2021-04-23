const pokeDex = document.querySelector('ul.pokedex')
async function getPokemon(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    const response = await axios.get(url)
    const pokemon = response.data
    const card = `
        <li class="card">
            <img src="${urlImage}" class="card-image">
            <h1 class="card-title">${pokemon.name}</h1>
        </li>
    `
    pokeDex.innerHTML+= card
}

getPokemon(1)
getPokemon(2)
getPokemon(3)
getPokemon(4)
getPokemon(5)
getPokemon(6)
getPokemon(7)