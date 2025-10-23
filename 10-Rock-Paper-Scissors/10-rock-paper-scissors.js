let score = JSON.parse(localStorage.getItem('score')) 
  || {
    user : 0, computer : 0, draws : 0
  } ;
  updateScoreElement();

function resetScore() {
  score.user = 0;
  score.computer = 0;
  score.draws = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  alert("Scores have been reset!");
}

function playGame(choice) {       
  let ComputerChoice = "";
  let result = "";

  ComputerChoice = pickComputerMove();

  // Deciding result
  if (choice === "Rock") {
    if (ComputerChoice === "Rock") result = "Draw";
    else if (ComputerChoice === "Paper") result = "Computer wins";
    else result = "You win";
  } 
  else if (choice === "Paper") {
    if (ComputerChoice === "Rock") result = "You win";
    else if (ComputerChoice === "Paper") result = "Draw";
    else result = "Computer wins";
  }
  else {
    if (ComputerChoice === "Rock") result = "Computer wins";
    else if (ComputerChoice === "Paper") result = "You win";
    else result = "Draw";
  }
  // Updating score
  if (result === "You win") score.user += 1;
  else if (result === "Computer wins") score.computer += 1;
  else score.draws += 1;

  // Saving it to Local Storage

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = 
  `You chose  
  <img src="images/${choice}-emoji.png" alt="" class="move-icon">
  Computer chose 
  <img src="images/${ComputerChoice}-emoji.png" alt="" class="move-icon">`;
}
function pickComputerMove() {
    let randomNumber = Math.random();
    // Deciding computer choice
    if (randomNumber < 1 / 3) return "Rock";
    else if (randomNumber < 2 / 3) return "Paper";
    else return "Scissors";
    }

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =  `You : ${score.user}, Computer : ${score.computer}, Draws : ${score.draws}`;
}