// Difficaulties:
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

// Variables:
let timer;
let selectedNum;
let selectedTile;
let disableSelect;

window.onload = function() {
    // Run startgame function when button is clicked
    id('start-btn').addEventListener('click', startGame);
}

function startGame() {
    // Choose board difficulty
    let board;
    if (id('diff-1').checked) {
        board = easy[0];
    } else if (id('diff-2').checked) {
        board = medium[0];
    } else {
        board = hard[0];
    }
    disableSelect = false;
    //Creates board based on difficulty
    generateBoard(board)
}

function generateBoard(board) {
    //Clear previous boards
    clearPrevious()
    //let used to increment tile ids
    let idCount = 0;
    for (let i = 0; i < 81; i++) {
        //create new paragraph element
        let cell = document.createElement('p');
        if (board.CharAt(i) != '-') {
            //Set cell to correct number
            cell.textContent = board.CharAt(i);
        } else {
            //add click event listener to tile
        }
        //assign tile id
        cell.id = idCount;
        idCount ++;
        //add tile class to all titles
        cell.classList.add('cell');
        if ((cell.id > 17 && cell.id < 27) || (cell.id > 44 & cell.id < 54)) {
            cell.classList.add('bottomBorder');
        }
        if ((cell.id + 1) % 9 == 3 || (cell.id + 1) % 9 == 6) {
            cell.classList.add('rightBorder');
        }
        // add cell to board
        id('board').appendChild(cell);
    }
}

function clearPrevious() {
    //Access all tiles
    let cells = qsa('.cell');
    //Remove each tile
    for (let i = 0; i < cells.length; i++) {
        cells[i].remove();
    }
    //Clear timer
    if (timer) clearTimeout(timer);
    // deselect numbers
    for(let i = 0; i < id('number-container').children.length;i++) {
        id('number-container').children[i].classList('selected');
    }
    //clear selected variables
    selectedTile = null;
    selectedNum = null;
}


//helper functions
function id(id) {
    return document.getElementById(id);
}

function qs(selector) {
    return document.querySelector(selector);
}

function qsa(selector) {
    return document.querySelectorAll(selector);
}
