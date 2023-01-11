//   extract values from form
const player = (() => {

  const form = document.getElementById("myForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //   make form disappear after submit
    form.classList.remove("show");

  
  });
})();

//   make the gameboard interactable on click
//   when player clicks a tile, the X or O displays in the tile
const gameboard = (() => {
  const tile = document.querySelectorAll("#tile");
  
  tile.forEach((cell) => {
    cell.removeEventListener("click", makeMove);
    cell.addEventListener("click", makeMove, { once: true });
  });
  let playerOne = choice.value;
  let playerTwo = "";
  let playerTurn = false;

  function makeMove(e) {
    const cell = e.target;

    if (playerOne === "X") {
      playerTwo = "O";
    }
    if (playerOne === "O") {
      playerTwo = "X";
    }

    if (cell.textContent === "" && !playerTurn) {
      cell.textContent = playerOne;
      playerTurn = true;
    }
    if (cell.textContent === "" && playerTurn) {
      cell.textContent = playerTwo;
      playerTurn = false;
    }
  }
  
  
})();

const displayController = (() => {


 
})();





//   switch turns after player chooses a tile
//   make sure a tile cant be overwritten
//   check to see if theres a winner everytime a tile is chosen
//   if theres a winner, endgame and display who won
//   if there is no winner when all the tiles are clicked, display a tie

