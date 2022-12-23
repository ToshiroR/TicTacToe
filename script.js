//   extract values from form
const player = (() => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let choice = document.forms["myForm"]["choice"].value;

    form.classList.remove("show");
  });
})();
//   make form disappear after submit
//   make the gameboard interactable on click
//   when player clicks a tile, the X or O displays in the tile
const gameboard = (() => {
  const tile = document.querySelectorAll("#tile");

  tile.forEach((cell) => {
    cell.removeEventListener("click", makeMove);
    cell.addEventListener("click", makeMove, { once: true });
  });

  function makeMove(e) {
    const cell = e.target;
    cell.textContent = "x";
  }
})();
//   switch turns after player chooses a tile
//   make sure a tile cant be overwritten
//   check to see if theres a winner everytime a tile is chosen
//   if theres a winner, endgame and display who won
//   if there is no winner when all the tiles are clicked, display a tie
