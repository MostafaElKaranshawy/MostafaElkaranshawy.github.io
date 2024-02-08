let game = document.querySelector('.game');
let menu = document.querySelector('.menu');
game.style.display = 'none';

var mode;
var winning = false;
var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]
let player1 = document.querySelector('.players .player1');
let player2 = document.querySelector('.players .player2');
var turn;
var symbol = ' ';
var boardE = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];


let reset = function () {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    UpdateBoard();
    winning = false;
    mode = '';
    turn = 0;
    symbol = ' ';
    game.style.display = 'none';
    menu.style.display = 'flex'
}
let checkDraw = function () {
    if(winning)return;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] == ' ')return;
        }
    }
    alert("Draw !!!!!!");
    reset();
}
let checkRow = function (n){
    if(symbol == ' ')return false;
    for(let i = 0; i < 3; i++){
        if(board[n][i] != symbol)return false;
    }
    return true;
}
let checkCol = function (n){
    if(symbol == ' ')return false;
    for(let i = 0; i < 3; i++){
        if(board[i][n] != symbol)return false;
    }
    return true;
}
let checkDL = function() {
    if(symbol == ' ')return false;
    for(let i = 0; i < 3; i++){
        if(board[i][i] != symbol)return false;
    }
    return true;
}
let checkDR = function() {
    if(symbol == ' ')return false;
    if(board[0][2] == symbol && board[1][1] == symbol && board[2][0] == symbol)return true;
    else return false;
}

let checkWinnig = function (){
    console.log("check")
    if(symbol != ' '){
        for(let i = 0; i < 3; i++){
            if(checkRow(i)){
                winning = true;
                boardE[i][0].style.transform = 'translateX(100%)'
                boardE[i][2].style.transform = 'translateX(-100%)'
                boardE[i][1].style.zIndex = '10';
                setTimeout(()=>
                {
                    boardE[i][1].style.transform = 'scale(5)';
                },2000)
                setTimeout(reset, 4000);
                break;
            }
            if(checkCol(i)){
                winning = true
                boardE[0][i].style.transform = 'translateY(100%)'
                boardE[2][i].style.transform = 'translateY(-100%)'
                boardE[1][i].style.zIndex = '10';
                setTimeout(()=>
                {
                    boardE[1][i].style.transform = 'scale(5)';
                    
                },2000)
                setTimeout(reset, 4000);
                break;
            }
            if(checkDL()){
                winning = true
                boardE[0][0].style.transform = 'translate(100%, 100%)'
                boardE[2][2].style.transform = 'translate(-100%, -100%)'
                boardE[1][1].style.zIndex = '10';
                setTimeout(()=>
                {
                    boardE[1][1].style.transform = 'scale(5)';
                    
                },2000)
                setTimeout(reset, 4000);
                break;
            }
            if(checkDR()){
                winning = true
                boardE[2][0].style.transform = 'translate(100%, -100%)'
                boardE[0][2].style.transform = 'translate(-100%, 100%)'
                boardE[1][1].style.zIndex = '10';
                setTimeout(()=>
                {
                    boardE[1][1].style.transform = 'scale(5)';
                    
                },2000)
                setTimeout(reset, 4000);
                break;
            }
        }
    }
}

for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        let name = '.row' + i + ' .col' + j;
        boardE[i-1][j-1] = document.querySelector(name);
    }
}

let UpdateBoard = function (){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            boardE[i][j].textContent = board[i][j];
            boardE[i][j].style.transform = 'translateX(0)'
            boardE[i][j].style.transform = 'translateY(0)'
            boardE[i][j].style.transform = 'scale(1)'
            boardE[i][0].style.zIndex = '1'
        }
    }
    
}

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        boardE[i][j].addEventListener('click', ()=> {
            if(board[i][j] == ' '){
                // if(mode != 'computer'){
                handleTurn();
                board[i][j] = symbol;
                UpdateBoard();
                setTimeout(checkWinnig, 50);
                setTimeout(()=>{
                    if(mode == 'computer' && !winning){
                        handleTurn();
                        UpdateBoard();
                        setTimeout(checkWinnig, 50);
                    }
                }, 500);
                if(!winning)setTimeout(checkDraw,50)
            }
            else{
                alert('Wrong place')
            }
        })
    }
}
let startGame = function () {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
    UpdateBoard();
    turn = 0;
    if(mode == 'computer')player2.textContent = 'Computer O';
    else{
        player2.textContent = 'Player2 O'
    }
}
player1.style.backgroundColor=  'rgb(252, 34, 34)';
let handleComputer = function () {
    if(winning)return;
    turn = 0;
    symbol = 'O';
    player1.style.backgroundColor=  'rgb(252, 34, 34)';
    player2.style.backgroundColor=  'transparent';
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] == ' '){
                board[i][j] = 'O';
                if(checkRow(i) || checkCol(j) || checkDL() || checkDR()){
                    return;
                }
                board[i][j] = ' ';
            }
        }
    }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] == ' '){
                board[i][j] = 'X';
                symbol = 'X';
                if(checkRow(i) || checkCol(j) || checkDL() || checkDR()){
                    symbol = 'O';
                    board[i][j] = 'O';
                    return;
                }
                board[i][j] = ' ';
            }
        }
    }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] == ' '){
                board[i][j] = 'O';
                return;
            }
        }
    }
}
let handleTurn = function () {
    if(turn == 0){
        turn = 1;
        symbol = 'X';
        player1.style.backgroundColor=  'transparent';
        player2.style.backgroundColor=  'rgb(74, 74, 248)';
    }
    else if(mode != 'computer'){
        turn = 0;
        symbol = 'O';
        player1.style.backgroundColor=  'rgb(252, 34, 34)';
        player2.style.backgroundColor=  'transparent';
    }
    else if(mode == 'computer'){
        handleComputer();
    }
}


let col = document.querySelectorAll('.col');
var currentCol;

// Set Mode
let computerMode = document.querySelector('.menu .computer');
let playerMode = document.querySelector('.menu .player');
computerMode.addEventListener('click' , () => {
    mode = 'computer';
    menu.style.display = 'none';
    game.style.display = 'flex';
    console.log(mode);
    startGame();
})
playerMode.addEventListener('click' , () => {
    mode = 'player';
    menu.style.display = 'none';
    game.style.display = 'flex';
    console.log(mode);
    startGame();
})