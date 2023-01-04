//   extract values from form
const player = (() => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.remove("show");
  });
})();
//   make form disappear after submit
//   make the gameboard interactable on click
//   when player clicks a tile, the X or O displays in the tile
const gameboard = (() => {
  const tile = document.querySelectorAll("#tile");
  let playerTurn = false;
  tile.forEach((cell) => {
    cell.removeEventListener("click", makeMove);
    cell.addEventListener("click", makeMove, { once: true });
  });

  function makeMove(e) {
    const cell = e.target;
    let player = choice.value;
    let enemy = "";
    if (player === "X") {
      enemy = "O";
    }
    if (player === "O") {
      enemy = "X";
    }

    if (cell.textContent === "" && !playerTurn) {
      cell.textContent = player;
      playerTurn = true;
    }
    if (cell.textContent === "" && playerTurn) {
      cell.textContent = enemy;
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

