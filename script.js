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
};
