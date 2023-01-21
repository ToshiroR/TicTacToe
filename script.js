const player = (() => {})();

const gameboard = (() => {})();

const displayController = (() => {
  const form = document.getElementById("myForm");
  const turnPlayer = document.getElementById("turn-player");
  const tile = document.querySelectorAll("#tile");
  const cellElement = document.querySelectorAll("[data-cell]");

  const winNum = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], 
  ];
 
  let playerOne = choice.value;
  let playerTwo = "";
  if (playerOne === "X") {
    playerTwo = "O";
  }
  if (playerOne === "O") {
    playerTwo = "X";
  }
  let playerTurn;

  //  form Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    playerTurn = false;
    turn();
    //   make form disappear after submit
    form.classList.remove("show");
  });

  //   make the gameboard interactable on click
  tile.forEach((cell) => {
    cell.removeEventListener("click", makeMove);
    //   make sure a tile cant be overwritten
    cell.addEventListener("click", makeMove, { once: true });
  });

  function makeMove(e) {
    const cell = e.target;
    const currentTurn = !playerTurn ? playerOne : playerTwo;
    console.log(currentTurn);
    //   when player clicks a tile, the X or O displays in the tile
    placeMarker(cell, currentTurn);
    //   switch turns after player chooses a tile
    swapTurn();
    turn();
  }

  function turn() {
    if (!playerTurn) {
      turnPlayer.textContent = `${playerOne} Turn`;
    }
    if (playerTurn) {
      turnPlayer.textContent = `${playerTwo} Turn`;
    }
  }

  function swapTurn() {
    playerTurn = !playerTurn;
  }

  function checkWin(currentTurn) {
    return winNum.some((combos) => {
      return combos.every((index) => {
        return cellElement[index].textContent.contains(currentTurn);
      });
    });
  }

  function placeMarker(cell, currentTurn) {
    cell.textContent = currentTurn;
  }
})();

//   check to see if theres a winner everytime a tile is chosen
//   if theres a winner, endgame and display who won
//   if there is no winner when all the tiles are clicked, display a tie
