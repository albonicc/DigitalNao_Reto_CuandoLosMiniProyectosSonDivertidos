const output = document.querySelector("p#output")
const container = document.querySelector("div.container")
const MAX_API_NUM_PAGES = 40
let apiPage = 1

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchCharacters = async () => {
    const URL = `https://rickandmortyapi.com/api/character/?page=${apiPage}`
    console.log(URL)
    console.log(apiPage)
    const response = await fetch(URL)
    const {results} = await response.json()
    const characters = results
    apiPage < MAX_API_NUM_PAGES ? apiPage++ : apiPage = 1
    return characters
}

const renderCharacter = character => {
    const template = `<div class="character-box">
                         <h4 class="character-name">${character.name}</h4>
                         <img src="${character.image}" alt="${character.name}" class="character-picture">
                     </div>`
    return template
}

const displayCharactersData = async () => {
    const characters = await fetchCharacters()
    // console.log(characters)
    // console.log(typeof(characters))
    characters.forEach(character =>  {
        // console.log(character)
        container.innerHTML += renderCharacter(character)
    });
}

displayCharactersData()
document.addEventListener("scrollend", async (event) => {
    await sleep(1000)
    console.log(apiPage)
    displayCharactersData()
  });