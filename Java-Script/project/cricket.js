// let totalScore = 0;
// let totalScorePlayer1 = 0;
// let totalScorePlayer2 = 0;
// let playerWickets = 0;

// let playerWin = function () {
//     if (totalScorePlayer1 > totalScorePlayer2) {
//         console.log(`Player 1 Wins !!`);
//         console.log(`Click on 'New Match' Button to start the New Match..`);
//     }else if (totalScorePlayer1 == totalScorePlayer2) {
//         console.log(`Match is Tied !!`);
//     } else {
//         console.log(`Player 2 Wins !!`);
//         console.log(`Click on 'New Match' Button to start the New Match..`);
//     }
// }


// function Randomscore(){
//     for (var i = 0; i < 30; i++) {
//         var count = 0;
//         for (var j = 0; j < Math.floor(Math.random() * 6 + 0); j++) {
//             count++;
//         }
//         console.log(count);
//         document.getElementById('btn.play').style.display = "none";
//     }

// }

// let button = document.getElementById("flip");
// let result = document.getElementById("result");

// function fnClick(event) {
//     let num = Math.random();

//     if (num < 0.5) {
//         result.innerHTML = "You got Head, " + "Team-1 will be batting first";
        
//     } else {
//         result.innerHTML = "You got Tail, " + "Team-2 will be batting first";

//     }
// }

// button.addEventListener("click", fnClick);


const TEAM_1 = 'Team 1';
const TEAM_2 = 'Team 2';
const TOTAL_OVERS = 5;
const TOTAL_PLAYERS = 5;

let team1Score = 0;
let team2Score = 0;
let team1Batsmen = 0;
let team2Batsmen = 0;
let team1Wickets = 0;
let team2Wickets = 0;
let team1Overs = 0;
let team2Overs = 0;

// Function to simulate a coin toss
function coinToss() {
  return Math.floor(Math.random() * 2) === 0 ? TEAM_1 : TEAM_2;
}

// Function to simulate a ball
function simulateBall() {
  return Math.floor(Math.random() * 10);
}

// Function to simulate a team's innings
function playInnings(team) {
  let score = 0;
  let wickets = 0;
  let overs = 0;
  let batsmen = 1;

  while (overs < TOTAL_OVERS && wickets < TOTAL_PLAYERS) {
    const runs = simulateBall();

    if (runs === 0) {
      wickets++;
      batsmen++;

      if (batsmen > TOTAL_PLAYERS) {
        break;
      }
    } else {
      score += runs;
    }

    overs += 1;
  }

  if (team === TEAM_1) {
    team1Score = score;
    team1Wickets = wickets;
    team1Overs = overs;
    team2Batsmen = 1;
  } else {
    team2Score = score;
    team2Wickets = wickets;
    team2Overs = overs;
  }
}

// Function to start the game
function startGame() {
  const tossWinner = coinToss();
  const tossLoser = tossWinner === TEAM_1 ? TEAM_2 : TEAM_1;

  console.log(`The toss was won by ${tossWinner}.`);

  const firstInningsTeam = tossWinner;
  const secondInningsTeam = tossLoser;

  console.log(`${firstInningsTeam} will bat first.`);

  playInnings(firstInningsTeam);

  console.log(`${firstInningsTeam} scored ${team1Score}/${team1Wickets} in ${team1Overs.toFixed(1)} overs.`);

  console.log(`${secondInningsTeam} needs to score ${team1Score + 1} runs to win.`);

  playInnings(secondInningsTeam);

  console.log(`${secondInningsTeam} scored ${team2Score}/${team2Wickets} in ${team2Overs.toFixed(1)} overs.`);

  if (team2Score > team1Score) {
    console.log(`${secondInningsTeam} won the game!`);
  } else {
    console.log(`${firstInningsTeam} won the game!`);
  }
}

startGame();


// let year = 2020;

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(`${year} is a leap year`);
// } else {
//   console.log(`${year} is not a leap year`);
// }