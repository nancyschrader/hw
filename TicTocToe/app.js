//console.log("You are linked up");


/*----- constants -----*/
/*----- app's state (variables) -----*/

let board;

/*----- cached element references -----*/
const square = Array.from($)
/*----- event listeners -----*/
/*----- functions -----*/

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
};
init();
render();

function render() {
    board.forEach(function(mark, index) {
        console.log(mark, index)
    });
};