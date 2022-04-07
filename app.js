let drawButton = document.querySelector(".button1");
let rematchButton = document.querySelector(".button2");
// let suits = ['H','C','S','D'];
// let value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
// let deck = [];
let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let roundsLeft = document.querySelector('.rounds_left');
let playerOneCard = document.querySelector(".card1");
let playerTwoCard = document.querySelector(".card2");
let rounds = 26;
let playerOnePoints = 26;
let playerTwoPoints = 26;
let scoreOne = document.querySelector(".score1");
let scoreTwo = document.querySelector(".score2");
let roundsMessage = document.querySelector(".rounds");
let winningDiv = document.querySelector('.winner');
let activeGame = true;


function reset(){
    location.reload()
}

function randomNum(){
    let random = Math.floor(Math.random() * cards.length)
    playerOneCard.innerHTML = random
    let random2 = Math.floor(Math.random() * cards.length)
    playerTwoCard.innerHTML = random2
    
}

function shuffleDeck() {
    for (let i =0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function decreaseRound(){
    if(rounds >= 1){
    rounds -= 1
    roundsLeft.innerHTML = rounds 
}else{ 
drawButton.style.display = "none"
roundsLeft.innerHTML = "Game over!"
roundsMessage.style.display = "none"
}
}

function increasePlayerOneScore(){
    playerOnePoints += 1
    scoreOne.innerHTML = playerOnePoints 
    // console.log(playerOnePoints)
}
function decreasePlayerOneScore(){
    playerOnePoints -= 1   
    scoreOne.innerHTML = playerOnePoints 
}
function increasePlayerTwoScore(){
    playerTwoPoints += 1
    scoreTwo.innerHTML = playerTwoPoints 
}
function decreasePlayerTwoScore(){
    playerTwoPoints -= 1
    scoreTwo.innerHTML = playerTwoPoints  
}

//mostly working, but bug makes it occasionally not work
function play(){
    if(playerOneCard.innerHTML > playerTwoCard.innerHTML){
        increasePlayerOneScore()
        decreasePlayerTwoScore()
    }
    else if (playerOneCard.innerHTML < playerTwoCard.innerHTML){
        increasePlayerTwoScore()
        decreasePlayerOneScore()
    }else 
    console.log("draw") 
    }

drawButton.addEventListener('click', () => {
    randomNum()
    decreaseRound()
    play()
})


rematchButton.addEventListener('click', () => {
    reset()
    console.log("this works too")
})
