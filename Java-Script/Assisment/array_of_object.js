const games = [
    {
        name: "GTA 5",
        storage: "5 GB",
        mode: "Both",
        release_year: "2019",
        category: "Action"
    },
    {
        name: "Valorant",
        storage: "30 GB",
        mode: "Online",
        release_year: "2019",
        category: "Action"
    },
    {
        name: "Asphalt 9",
        storage: "10 GB",
        mode: "Both",
        release_year: "2018",
        category: "Racing"
    },
    {
        name: "Candy Crush",
        storage: "500 MB",
        mode: "Offline",
        release_year: "2018",
        category: "Puzzle"
    }
];


let newGame = {
    name: "BGMI",
    storage: "2 GB",
    mode: "Online",
    release_year: "2019",
    category: "Action"
};
games.push(newGame)

newGame = {
    name: "BGMI",
    storage: "2 GB",
    mode: "Online",
    release_year: "2019",
    category: "Action"
}

if (newGame.hasOwnProperty('name')){
    console.log('Key already exists')
} else {
    newGame['name'] = 'FR';
}

let gameExist = false;

for(const game of games) {
    if(game.name == newGame.name){
        gameExist = true;
    }
}

if (!gameExist) {
    games.push(newGame);
}

const onlineGames = [];
const offlineGames = [];
const bothGames = [];

for (let game of games) {
    if(game.mode == "Online"){
        onlineGames.push(game)
    } else if (game.mode == "Offline"){
        offlineGames.push(game);
    } else {
        bothGames.push(game);
    }
}
console.log({onlineGames, offlineGames, bothGames});
console.log(`Total Games: ${games.length}`);