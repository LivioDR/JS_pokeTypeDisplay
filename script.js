import { getPokemonByType, getPokemonNameAndSpriteFromObject } from "./services/getPokemonByType.js";
import {getAllTypes} from "./services/getTypes.js";
import {getPokemonCard, toCapitalCase} from "./components/getPokemonCard.js";

let types = await getAllTypes()
const typeDropdown = document.getElementById('typeInput')
types.forEach(element => {
    let option = document.createElement('option')
    option.value = element
    option.innerText = toCapitalCase(element)
    typeDropdown.appendChild(option)
});
const searchBtn = document.getElementById('confirmType')
const handleTypeSelection = async() => {
    searchBtn.disabled = true
    searchBtn.innerText = 'Loading...'
    let allPokemonByType = await getPokemonByType(typeDropdown.value)
    const listContainer = document.getElementById('listContainer')
    listContainer.innerHTML = ''
    let pokeCards = ''
    for(const [key, val] of Object.entries(allPokemonByType)){
        let resultArray = await getPokemonNameAndSpriteFromObject(val)
        pokeCards += getPokemonCard(resultArray)
    }
    listContainer.innerHTML = pokeCards
    searchBtn.disabled = false
    searchBtn.innerText = 'Search'
}

searchBtn.addEventListener('click',handleTypeSelection)
