const player = (() => {})();

const gameboard = (() => {
  let board = [];
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
})();

const displayController = (() => {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    turn();
    //   make form disappear after submit
    form.classList.remove("show");
  });
  const turnPlayer = document.getElementById("turn-player");
  const tile = document.querySelectorAll("#tile");
  //   make the gameboard interactable on click
  tile.forEach((cell) => {
    cell.removeEventListener("click", makeMove);
    //   make sure a tile cant be overwritten
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
    //   when player clicks a tile, the X or O displays in the tile
    if (cell.textContent === "" && !playerTurn) {
      cell.textContent = playerOne;
      //   switch turns after player chooses a tile
      playerTurn = true;
      turn();
    }
    if (cell.textContent === "" && playerTurn) {
      cell.textContent = playerTwo;
      playerTurn = false;
      turn();
    }
  }

  function turn() {
    if (!playerTurn) {
      turnPlayer.textContent = `${playerOne} Turn`;
    }
    if (playerTurn) {
      turnPlayer.textContent = `${playerTwo} Turn`;
    }
  }
})();

//   check to see if theres a winner everytime a tile is chosen
//   if theres a winner, endgame and display who won
//   if there is no winner when all the tiles are clicked, display a tie
