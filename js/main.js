const pokemonImage = document.getElementById("js--pokemon-image")
let randomNumber = Math.floor(Math.random() * 1019 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImage.src = realData.sprites.front_default;
        pokemonName = realData.species.name;
        pokemonNameCap = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    });

/*Api de tv show*/
const tvShow = document.getElementById("js--tvShow")
const tvShowDesc = document.getElementById("js--tvShowDesc")
const tvShowImage = document.getElementById("js--tvShowImage")
fetch("https://api.tvmaze.com/search/shows?q=winx%20club")
  .then(function (response) {
    return response.json();
  })
  .then(function (realData) {
    tvShow.innerText = realData[0].show.name;
    tvShowDesc.innerHTML = realData[0].show.summary;

  })
/*Api pokemon*/
const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed === false) {
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = pokemonNameCap + " has fled!"
        }
        else {
            pokemonText.innerText = pokemonNameCap + " has Caught!"
        }
        pokemonGamePlayed = true;
    }
}

const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");
inputField.onkeyup = function(event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        /*Api call naar de age predictor*/
        let age = fetch("https://api.agify.io/?name=" + name)
            .then(function (response) {
            return response.json();
            })
            .then(function(realData) {
                inputField.style.display = "none";
                nameText.innerText = realData.age;
            });
    }
}

const barGraph = document.getElementById("bar")
const lineGraph = document.getElementById("line")
const pieGraph = document.getElementById("pie")
new Chart(barGraph, {
    type: 'bar',
    display: true,
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        color: '#ffffff',
        datasets: [{
            backgroundColor: '#4aa86b',
            label: 'time spend online',
            data: [32, 87, 42, 61, 28, 12, 73],
            borderWidth: 1
        }]
    },
    options: {
        color: '#000',
        scales: {
            y: {
                ticks: {
                    color: '#000',
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: '#000',
                }
            }
        }
    }
});
new Chart(lineGraph, {
    type: 'line',
    display: true,
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        color: '#ffffff',
        datasets: [{
            backgroundColor: '#92f0b3',
            label: 'when i feel sleepy',
            data: [32, 87, 42, 61, 28, 12, 73],
            borderWidth: 1
        }]
    },
    options: {
        color: '#000',
        scales: {
            y: {
                ticks: {
                    color: '#000',
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: '#000',
                }
            }
        }
    }
});
new Chart(pieGraph, {
    type: 'pie',
    display: true,
    data: {
        labels:[
            'skill',
            'prog',
            'flex'
        ],
        color: '#ffffff',
        datasets: [{
            backgroundColor: [
                '#0f7d36',
                '#4c6153',
                '#93baa1'
            ],
            label: 'homework ',
            data: [32, 87, 42],
            borderWidth: 1
        }]
    },
});