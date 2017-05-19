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

for (let i = 0; i < trainers.length; i++) {
    let trainer = trainers[i];

    console.log(trainer.name);

    for (let j = 0; j < trainer.pokemons.length; j++) {
        let pokemon = trainer.pokemons[j];

        //console.log('    ' + pokemon.name + ' de type ' + pokemon.type);
        console.log(`    ${pokemon.name} de type ${pokemon.type}`);
    }
}
