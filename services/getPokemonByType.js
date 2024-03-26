const baseUrl = "https://pokeapi.co/api/v2"

const getPokemonByType = async(type) => {
    let response = await fetch(`${baseUrl}/type/${type}`).then(res => res.json())
    return response.pokemon
}

const getPokemonSprite = async(url) => {
    // shiny check
    const shinyCheck = document.getElementById('shiny').checked
    const animated = document.getElementById('animated').checked
    const defaultSprite = "./MissingNoNormal.webp"
    
    let response = await fetch(url).then(res => res.json())
    if(animated){
        if(shinyCheck)
            return response.sprites.versions["generation-v"]["black-white"].animated.front_shiny||response.sprites.front_shiny||defaultSprite
        else
            return response.sprites.versions["generation-v"]["black-white"].animated.front_default||response.sprites.front_default||defaultSprite
    }
    else {
        if(shinyCheck)
            return response.sprites.front_shiny||defaultSprite
        else
            return response.sprites.front_default||defaultSprite
    }
    // return response.sprites.other['official-artwork'].front_default
}

const getPokemonNameAndSpriteFromObject = async(obj) => {
    /**
     * obj {Object}
     * {
     *  pokemon: {
     *          name: String,
     *          url: String
     *          }
     * },
     * slot: String
     */
    const name = obj.pokemon.name
    const sprite = await getPokemonSprite(obj.pokemon.url)
    return [name, sprite]
}

export {getPokemonByType, getPokemonNameAndSpriteFromObject}