function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("victoryScreen").style.display = "none";
}
function victory() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("victoryScreen").style.display = "block";
}
function goToHome(){
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("victoryScreen").style.display = "none";
}