function generateRandomValue(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}
function changePlayers() {
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
    if (currentPlayerName == player1Name) {
        document.getElementById("current").innerText = player2Name;
    }
    else {
        document.getElementById("current").innerText = player1Name;
    }
}
window.onload = function () {
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function createNewGame() {
    let player1Score = document.getElementById("score1").value;
    let player2Score = document.getElementById("score2").value;
    player1Score = "0";
    player2Score = "0";
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
    if (player1Name == "" || player2Name == "") {
        alert("Please enter a name!");
        return false;
    }
    document.getElementById("turn").classList.add("open");
    document.getElementById("total").value = "0";
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}
function rollDie() {
    let currTotal = parseInt(document.getElementById("total").value);
    let dieRoll = generateRandomValue(1, 6);
    if (dieRoll == 1) {
        changePlayers();
        currTotal = 0;
    }
    if (dieRoll > 1) {
        currTotal += dieRoll;
    }
    let currRollTxtBox = document.getElementById("die");
    currRollTxtBox.value = dieRoll.toString();
    let total = document.getElementById("total");
    total.value = currTotal.toString();
}
function holdDie() {
    let currentTotal = parseInt(document.getElementById("total").value);
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
    if (currentPlayerName === player1Name) {
        let score1 = parseInt(document.getElementById("score1").value);
        currentTotal += score1;
        let currScore1 = document.getElementById("score1");
        currScore1.value = score1.toString();
    }
    else if (currentPlayerName === player2Name) {
        let score2 = parseInt(document.getElementById("score2").value);
        currentTotal += score2;
        let currScore2 = document.getElementById("score2");
        currScore2.value = score2.toString();
    }
    currentTotal = 0;
    changePlayers();
}
