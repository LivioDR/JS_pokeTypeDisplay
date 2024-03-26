const moreThanOneWord = (text) => {
    let regex = /\s/
    return regex.test(text.replaceAll("-"," "))
}
const wordToCapitalCase = (text) => {
    return text[0].toUpperCase() + text.substring(1)
}
const toCapitalCase = (name) => {
    let capName = ''
    if(moreThanOneWord(name)){
        let arr = name.split("-")
        for(let i=0; i<arr.length; i++){
            arr[i] = wordToCapitalCase(arr[i])
        }
        return arr.join(" ")
    }
    else{
        return wordToCapitalCase(name)
    }
}

const getPokemonCard = (arr) => {
    return (
        `<div class="pokeCard press-start" id="${arr[0]}">
            <img src="${arr[1]}" alt="${arr[1]}" />
            <p>${toCapitalCase(arr[0])}</p>
        </div>`
    )
}
export  {getPokemonCard, toCapitalCase}