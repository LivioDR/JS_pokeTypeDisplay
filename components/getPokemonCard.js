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
    let maxOfStats = Math.max(...Object.values(arr[2]))
    let statsDiv = ''
    for(const [key, val] of Object.entries(arr[2])){
        statsDiv += `<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center;" title="${val}">
        <p style="font-size: 0.5em; width:30%;">${toCapitalCase(key.replace("-"," "))}</p>
        <div style="width:60%;">
            <div style="height:0.5em;width:${(100*val)/maxOfStats}%;background-color:#6464e1;"></div>
        </div>
        <p style="width: 5%; font-size: 0.5em;">${val}</p>
      </div>`
    }
    statsDiv = `<div>${statsDiv}</div>`

    return (
        `<div class="pokeCard press-start" id="${arr[0]}">
            <p>${toCapitalCase(arr[0])}</p>
            <img src="${arr[1]}" alt="${arr[1]}" style="margin-bottom: 5%;"/>
            ${statsDiv}
        </div>`
    )
}
export  {getPokemonCard, toCapitalCase}