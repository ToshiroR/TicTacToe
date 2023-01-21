const player = (() => {})();

const gameboard = (() => {})();

const displayController = (() => {
  const form = document.getElementById("myForm");
  const turnPlayer = document.getElementById("turn-player");
  const tile = document.querySelectorAll("#tile");
  const winText = document.querySelector("[win-text]");
  const winningMessage = document.querySelector(".winning-message");
  const cellElement = document.querySelectorAll("[data-cell]");
  const restart = document.getElementById("restart");
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
  restart.addEventListener("click", startGame);
  //   make the gameboard interactable on click
  function startGame() {
    tile.forEach((cell) => {
      cell.classList.remove(playerOne);
      cell.classList.remove(playerTwo);
      cell.textContent = "";
      playerTurn = false;
      cell.removeEventListener("click", makeMove);
      //   make sure a tile cant be overwritten
      cell.addEventListener("click", makeMove, { once: true });
      winningMessage.classList.remove("show");
    });
  }

  function makeMove(e) {
    const cell = e.target;
    const currentTurn = !playerTurn ? playerOne : playerTwo;
    placeMarker(cell, currentTurn);
    if (checkWin(currentTurn)) {
      endGame(false, currentTurn);
    } else if (isDraw()) {
      endGame(true);
    } else {
      swapTurn();
      turn();
    }
  }
  //    display whos turn it is
  function turn() {
    if (!playerTurn) {
      turnPlayer.textContent = `${playerOne} Turn`;
    }
    if (playerTurn) {
      turnPlayer.textContent = `${playerTwo} Turn`;
    }
  }

  //   switch turns after player chooses a tile
  function swapTurn() {
    playerTurn = !playerTurn;
  }

  //   check to see if theres a winner everytime a tile is chosen
  function checkWin(currentTurn) {
    return winNum.some((combos) => {
      return combos.every((index) => {
        return cellElement[index].classList.contains(currentTurn);
      });
    });
  }

  //   when player clicks a tile, the X or O displays in the tile
  function placeMarker(cell, currentTurn) {
    cell.textContent = currentTurn;
    cell.classList = currentTurn;
  }

  //   if theres a winner, endgame and display who won
  function endGame(draw, currentTurn) {
    if (draw) {
      winText.textContent = "Draw!";
    } else {
      winText.textContent = `${currentTurn} Wins!`;
    }
    winningMessage.classList.add("show");
  }

  //   if there is no winner when all the tiles are clicked, display a Draw
  function isDraw() {
    return [...cellElement].every((cell) => {
      return (
        cell.classList.contains(playerOne) || cell.classList.contains(playerTwo)
      );
    });
  }

  startGame();
})();
