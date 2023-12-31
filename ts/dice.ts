function generateRandomValue(minValue:number, maxValue:number):number{
    //TODO: use random to generate a number between min and max
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}


function changePlayers():void{
    let currentPlayerName = (<HTMLElement>document.getElementById("current")).innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    if (currentPlayerName == player1Name) {
        (<HTMLElement>document.getElementById("current")).innerText = player2Name //switches from player 1 to player 2
    }
    else{
        (<HTMLElement>document.getElementById("current")).innerText = player1Name //switches form player 2 to player 1
    }
}

window.onload = function(){
    let newGameBtn = document.getElementById("new_game") as HTMLButtonElement;
    newGameBtn.onclick = createNewGame;

    (<HTMLButtonElement>document.getElementById("roll")).onclick = rollDie;

    (<HTMLButtonElement>document.getElementById("hold")).onclick = holdDie;
}

function createNewGame(){
    //set player 1 and player 2 scores to 0
    let player1Score = (<HTMLInputElement>document.getElementById("score1")).value;
    let player2Score = (<HTMLInputElement>document.getElementById("score2")).value;
    player1Score = "0";
    player2Score= "0";

    //verify each player has a name
    //if both players don't have a name display error
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;
    if (player1Name == "" || player2Name == "") {
        alert("Please enter a name!");
        return false;
    }

    //if both players do have a name start the game!
    (<HTMLElement>document.getElementById("turn")).classList.add("open");
    (<HTMLInputElement>document.getElementById("total")).value = "0";
    //lock in player names and then change players
    (<HTMLInputElement>document.getElementById("player1")).setAttribute("disabled", "disabled");
    (<HTMLInputElement>document.getElementById("player2")).setAttribute("disabled", "disabled");
    changePlayers();
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    let dieRoll = generateRandomValue(1, 6);

    //if the roll is 1
    if (dieRoll == 1) {
    //  change players
    changePlayers();
    //  set current total to 0
    currTotal = 0;
    }
    
    //if the roll is greater than 1
    if (dieRoll > 1) {
    //  add roll value to current total
    currTotal += dieRoll; 
        
    }
    //set the die roll to value player rolled
    
    //Figure out how to display the die roll in the actual Die text box
    let currRollTxtBox: HTMLInputElement = document.getElementById("die") as HTMLInputElement;
    currRollTxtBox.value = dieRoll.toString();

    //display current total on form
    let total: HTMLInputElement = document.getElementById("total") as HTMLInputElement;
    total.value = currTotal.toString();

    //figure out how display current score in the specific players score box
}

function holdDie():void{
    //get the current turn total
    let currentTotal = parseInt((document.getElementById("total")as HTMLInputElement).value);
    //determine who the current player is
    let currentPlayerName = (<HTMLElement>document.getElementById("current")).innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //add the current turn total to the player's total score
    let score1 = parseInt((document.getElementById("score1") as HTMLInputElement).value);
    let score2 = parseInt((document.getElementById("score2")as HTMLInputElement).value);

    if (currentPlayerName === player1Name) {
        score1 += currentTotal;
        let currScore1: HTMLInputElement = document.getElementById("score1") as HTMLInputElement;
        currScore1.value = score1.toString();
      } 
      else if (currentPlayerName === player2Name){
        score2 += currentTotal;
        let currScore2: HTMLInputElement = document.getElementById("score2") as HTMLInputElement;
        currScore2.value = score2.toString();
      }
        //reset the turn total to 0
        let totalTxtBox: HTMLInputElement = document.getElementById("total") as HTMLInputElement;
        totalTxtBox.value = "0";

        let dieTxtBox: HTMLInputElement = document.getElementById("die") as HTMLInputElement;
        dieTxtBox.value = "0";
        //change players
        changePlayers();


        //if score reaches 100
        if (score1 >= 100) {
            alert("Player " + player1Name + " wins!");
        }
        else if (score2 >= 100) {
            alert("Player " + player2Name + " wins!");
        }
}