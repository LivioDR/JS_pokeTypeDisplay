const baseUrl = "https://pokeapi.co/api/v2/type"

const getAllTypes = async() => {
    let result = await fetch(baseUrl).then(res => res.json())
    const typesArray = result.results.map(item => item.name)
    return typesArray
}

export {getAllTypes}