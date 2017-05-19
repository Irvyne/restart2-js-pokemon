// Trainers
// Name
// Pokemons
// Name
// HP
// Attack
// Type

const trainers = [
    {
        name: "Sasha",
        pokemons: [
            {name: "Pikachu", hp: 100, attack: 30, type: "electric"},
            {name: "Salameche", hp: 115, attack: 20, type: "fire"},
            {name: "Secateur", hp: 80, attack: 17, type: "plant"}
        ]
    },
    {
        name: "Pierre",
        pokemons: [
            {name: "Racaillou", hp: 100, attack: 18, type: "rock"},
            {name: "Onyx", hp: 200, attack: 20, type: "rock"},
            {name: "Magicarpe", hp: 500, attack: 1, type: "water"}
        ]
    },
    {
        name: "Regis",
        pokemons: [
            {name: "Florizarre", hp: 300, attack: 28, type: "plant"},
            {name: "Tortank", hp: 250, attack: 31, type: "water"},
            {name: "Dracaufeu", hp: 280, attack: 29, type: "feu"}
        ]
    }
];

let trainerHtml = document.getElementById("trainer");

trainerHtml.innerHTML = `
    ${trainers.map((t, i) => `
        <div class="trainer col-md-4" onclick="selectTrainer(this)" data-index="${i}">
            <h2>${t.name}</h2>
            <ul>
                ${t.pokemons.map(p => `
                    <li>${p.name}</li>
                `).join('')}
            </ul>
        </div>
    `).join('')}
`;

function selectTrainer(el) {
    let index = el.getAttribute("data-index");
    let pokemons = trainers[index].pokemons;
    let pokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

    console.log(pokemon);
}


/*for (let i = 0; i < trainers.length; i++) {
    let trainer = trainers[i];

    let trainerBox = document.createElement("div");
    let trainerName = document.createElement("h2");
    let trainerList = document.createElement("ul");
    trainerName.textContent = trainer.name;

    trainerBox.appendChild(trainerName);
    trainerBox.appendChild(trainerList);

    for (let j = 0; j < trainer.pokemons.length; j++) {
        let pokemon = trainer.pokemons[j];
        let pokemonElement = document.createElement("li");

        pokemonElement.textContent = `    ${pokemon.name} de type ${pokemon.type}`;

        trainerList.appendChild(pokemonElement);
    }

    trainerHtml.appendChild(trainerBox);
}*/
