async function callApi (){
    const res =await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
    const users = await res.json();
    console.log(users.name);
}

callApi();