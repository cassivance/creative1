var player1;
var player2;
var current_player;
var game_board;
var x_marker;
var o_marker;
var current_marker;

function startGame() {
    resetBoardAppearance();
    game_board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("victoryScreen").style.display = "none";
    document.getElementById("tieScreen").style.display = "none";

    player1 = document.getElementById("player1").value || "Player One";
    player2 = document.getElementById("player2").value || "Player Two";
    x_marker = "X";
    o_marker="O"

    if(Math.random() > 0.5) current_player = player1;
    else current_player = player2;
    document.getElementById("currentplayer").innerHTML = current_player;
    current_marker = x_marker;
  }

function topLeft(){
    if (game_board[0][0] == "") {
        game_board[0][0] = current_player;
        checkIfGameOver();
        document.getElementById("topLeft").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;
        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        // (current_marker == x_marker)
        //     ? document.getElementsByClassName("markers").style.color = "blue"
        //     : document.getElementsByClassName("markers").style.color = "red";

        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function topMid(){
    if (game_board[0][1] == "") {
        game_board[0][1] = current_player;
        checkIfGameOver();
        document.getElementById("topMid").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;

        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function topRight(){
    if (game_board[0][2] == "") {
        game_board[0][2] = current_player;
        checkIfGameOver();
        document.getElementById("topRight").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;

        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function midLeft(){
    if (game_board[1][0] == "") {
        game_board[1][0] = current_player;
        checkIfGameOver();
        document.getElementById("midLeft").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;

        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function midMid(){
    if (game_board[1][1] == "") {
        game_board[1][1] = current_player;
        checkIfGameOver();
        document.getElementById("midMid").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;

        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function midRight(){
    if (game_board[1][2] == "") {
        game_board[1][2] = current_player;
        checkIfGameOver();
        document.getElementById("midRight").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;
        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function botLeft(){
    if (game_board[2][0] == "") {
        game_board[2][0] = current_player;
        checkIfGameOver();
        document.getElementById("botLeft").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;
        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function botMid(){
    if (game_board[2][1] == "") {
        game_board[2][1] = current_player;
        checkIfGameOver();
        document.getElementById("botMid").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;

        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}
function botRight(){
    if (game_board[2][2] == "") {
        game_board[2][2] = current_player;
        checkIfGameOver();
        document.getElementById("botRight").innerHTML = current_marker;

        (current_player == player1)
            ? current_player = player2
            : current_player = player1;

        (current_marker == x_marker)
            ? current_marker = o_marker
            : current_marker = x_marker;
        document.getElementById("currentplayer").innerHTML = current_player;
    }
}

function checkIfGameOver() {
    //Victory conditions
    //Rows
    if (game_board[0][0] != "" && game_board[0][0] == game_board[0][1] && game_board[0][0] == game_board[0][2]) victory(game_board[0][0]);
    else if (game_board[1][0] != "" && game_board[1][0] == game_board[1][1] && game_board[1][0] == game_board[1][2]) victory(game_board[1][0]);
    else if (game_board[2][0] != "" && game_board[2][0] == game_board[2][1] && game_board[2][0] == game_board[2][2]) victory(game_board[2][0]);
    //Columns
    else if (game_board[0][0] != "" && game_board[0][0] == game_board[1][0] && game_board[0][0] == game_board[2][0]) victory(game_board[0][0]);
    else if (game_board[0][1] != "" && game_board[0][1] == game_board[1][1] && game_board[0][1] == game_board[2][1]) victory(game_board[0][1]);
    else if (game_board[0][2] != "" && game_board[0][2] == game_board[1][2] && game_board[0][2] == game_board[2][2]) victory(game_board[0][2]);
    //Diagonals
    else if (game_board[0][0] != "" && game_board[0][0] == game_board[1][1] && game_board[0][0] == game_board[2][2]) victory(game_board[0][0]);
    else if (game_board[0][2] != "" && game_board[0][2] == game_board[1][1] && game_board[0][2] == game_board[2][0]) victory(game_board[0][2]);

    //Tie
    else if (game_board[0][0] != "" && game_board[0][1] != "" && game_board[0][2] != "" &&
             game_board[1][0] != "" && game_board[1][1] != "" && game_board[1][2] != "" &&
             game_board[2][0] != "" && game_board[2][1] != "" && game_board[2][2] != "") tie();
}

function resetBoardAppearance() {
    document.getElementById("topLeft").innerHTML = "";
    document.getElementById("topMid").innerHTML = "";
    document.getElementById("topRight").innerHTML = "";
    document.getElementById("midLeft").innerHTML = "";
    document.getElementById("midMid").innerHTML = "";
    document.getElementById("midRight").innerHTML = "";
    document.getElementById("botLeft").innerHTML = "";
    document.getElementById("botMid").innerHTML = "";
    document.getElementById("botRight").innerHTML = "";
}

function victory(winner) {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("victoryScreen").style.display = "block";
    document.getElementById("tieScreen").style.display = "none";

    document.getElementById("winner").innerHTML = winner;
}
function tie() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("victoryScreen").style.display = "none";
    document.getElementById("tieScreen").style.display = "block";
}
function goToHome(){
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("victoryScreen").style.display = "none";
    document.getElementById("tieScreen").style.display = "none";
}
