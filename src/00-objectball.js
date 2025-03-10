function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}
console.log(gameObject());

function numPointsScored(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName].points;
    } else if (game.away.players[playerName]) {
      return game.away.players[playerName].points;
    } else {
      return "Player not found";
    }
  }

  function shoeSize(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName].shoe;
    } else if (game.away.players[playerName]) {
      return game.away.players[playerName].shoe;
    } else {
      return "Player not found";
    }
  }

  function teamColors(teamName) {
    let game = gameObject();
    switch (teamName) {
      case game.home.teamName:
        return game.home.colors;
      case game.away.teamName:
        return game.away.colors;
      default:
        return "Team not found";
    }
  }

  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }

  function playerNumbers(teamName) {
    let game = gameObject();
    let team;
    if (teamName === game.home.teamName) {
      team = game.home;
    } else if (teamName === game.away.teamName) {
      team = game.away;
    } else {
      return "Team not found";
    }
  let numbers = [];
  for (let player in team.players) {
    numbers.push(team.players[player].number);
  }
  return numbers;
}

function playerStats(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName];
    } else if (game.away.players[playerName]) {
      return game.away.players[playerName];
    } else {
      return "Player not found";
    }
  }

  function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;
  
    for (let location in game) {
      for (let player in game[location].players) {
        if (game[location].players[player].shoe > biggestShoe) {
          biggestShoe = game[location].players[player].shoe;
          rebounds = game[location].players[player].rebounds;
        }
      }
    }
    
    return rebounds;
  }

  function mostPointsScored(){
    let game = gameObject();
    let players = { ...game.home.players, ...game.away.players };
  
    let maxPlayer = Object.entries(players).reduce((max, [name, stats]) =>
      stats.points > max.points ? { name, points: stats.points } : max,
      { name: "", points: 0 }
    );
  
    return `${maxPlayer.name} scored the most points which is${maxPlayer.points}`;
  };

function winningTeam(){
    let game = gameObject();
    let homePoints = Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0);
    let awayPoints = Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0);
  
    if (homePoints > awayPoints) {
        return `${game.home.teamName} won with ${homePoints} points`;
    } else {
        return `${game.away.teamName} won with ${awayPoints} points`;
    }
};
function playerWithLongestName() {
    let game = gameObject();
    let playersArray = Object.keys({ ...game.home.players, ...game.away.players });
  
    let longestName = playersArray.reduce((longest, player) => 
      player.length > longest.length ? player : longest, ""
    );
  
    return longestName;
};

