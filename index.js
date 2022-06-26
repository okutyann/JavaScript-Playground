//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


//関数
async function getPkemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
    const pokemons = await res.json();
    console.log(pokemons)
    return pokemons;
}

//関数
async function listPkemon(){
    const pokemons = await getPkemon();
    pokemons.results.forEach(pokemon => {
        const list = document.createElement("li");
        list.innerText = pokemon.name;
        lists.appendChild(list);
    });    
}

//イベント
window.addEventListener("load",listPkemon)
button.addEventListener("click",listPkemon);

