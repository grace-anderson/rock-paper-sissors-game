// user input options
var options = ["R", "P", "S"];

//result options
var result = {
  wins: 0,
  losses: 0,
  ties: 0,
};

//function that holds game logic
function playGame() {
  var userChoice = prompt("Enter R, P or S");
  userChoice = userChoice.toUpperCase();
  //if userChoice does not exist in options
  if (!options.includes(userChoice) || options == null) {
    alert("INVALID INPUT " + userChoice);
    playGame(); //keep playing the game
    return;
  }

  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  //update to OR - use video about 9:43
  if (userChoice === computerChoice) {
    result.ties++;
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "R")
  ) {
    result.wins++;
  } else {
    result.losses++;
  }

  //Alert user of results
  alert(
    "Stats:\n\nWins: " +
      result.wins +
      "\nLosses: " +
      result.losses +
      "\nTies: " +
      result.ties
  );

  if (confirm("Would you like to play again?")) {
    //if user says yes, keep playing the game
    playGame(); //functions are recursive, can call itself
  }
}

//when page refreshes, call the function
playGame();
