const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonImage.src = realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
console.log(pokemonText);
let pokemonGamePlayed = false;

catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0){
            pokemonText.innerText = "pokemon fled!"
        }
        else{
            pokemonText.innerText = "pokemon caught!"
        }
        pokemonGamePlayed = true;
    }
}