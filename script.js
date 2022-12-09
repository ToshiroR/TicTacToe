const Player = (name, choice) => {
    const getName = () => name;
    const getChoice = () => choice;

    return {getName, getChoice}
};


const gameBoard = () => {
    let board = [
      ['','',''],
      ['','',''],
      ['','','']
    ];

    const play = (spot) => {
      for (i = 0; i < board.length; ++i) {
        for (j = 0; j < board.length[i]; ++j){
          
        }
      }

    }
};


const tosh = Player("tosh", "x")

console.log(tosh.getChoice())