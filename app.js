//in order of HTML
let playerOneCard = document.querySelector(".p1card")
let playerTwoCard = document.querySelector(".p2card")
let playerOneCardCount = document.querySelector(".p1card-count")
let playerTwoCardCount = document.querySelector(".p2card-count")
let drawButton = document.querySelector(".button1")
let rematchButton = document.querySelector(".button2")
let player1DiscardPile = document.querySelector(".p1-discard")
let player2DiscardPile = document.querySelector(".p2-discard")
let winnerOneMessage = document.querySelector(".winner1")
let winnerTwoMessage = document.querySelector(".winner2")
let player1 = []
let player2 = []
let player1Count = 26
let player2Count = 26
let player1Discard = 0
let player2Discard = 0
let deck = []
let playerOneDeck = []
let playerTwoDeck = []
let suits = ["♠", "♣", "♥", "♦"]
let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
let winner1 = document.querySelector(".winner1")
let winner2 = document.querySelector(".winner2")
let roundsLeft = document.querySelector(".rounds_left")
let rounds = 26
winner1 = 'none'
winner2 = 'none'

function createDeck()
{
    let deck = new Array();
    for(let i = 0; i < suits.length; i++)
    {
    for(let x = 0; x < values.length; x++)
{
    let card = {value: values[x], suit: suits[i]};
    deck.push(card);
}
}
return deck; 
  
}

deck = createDeck()
//deck of cards created

function shuffle(deck)
{
	for (let i = 0; i < 52; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function randomNum(){   
    let random = Math.floor(Math.random() * deck.length)
    playerOneCard.innerHTML = deck[random].value + deck[random].suit;
    let random2 = Math.floor(Math.random() * deck.length)     
    playerTwoCard.innerHTML = deck[random2].value + deck[random2].suit;
}

playerOneDeck = deck.slice(0, deck.length / 2);
playerTwoDeck  = deck.slice(deck.length / 2, deck.length);

function increasePlayer1DiscardPile(){
    if (player1Count >= 1){
        player1Count -= 1
        player1Count.innerHTML = player1Count
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}

function increasePlayer2DiscardPile(){
    if (player2Count >= 1){
        player2Count -= 1
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}

function winner() {
    if (player1Count && player2Count) {
        
    } else {
        if (player1Count === 0) {
            winner2.style.display = "block";
        }
        else {
            winner1.style.display = "block";
        }
    }
}

function increasePlayerOneDiscardPile(){
    player1Discard += 2
    player1DiscardPile.innerHTML = player1Discard
    winnerOneMessage.style.display="block"
    winnerTwoMessage.style.display="none"
}

function increasePlayerTwoDiscardPile(){
    player2Discard += 2
    player2DiscardPile.innerHTML = player2Discard
    winnerTwoMessage.style.display="block"
    winnerOneMessage.style.display="none"
}




function play(){
    if (playerOneCard.innerHTML > playerTwoCard.innerHTML){
      console.log('player one had the higher cards')
      increasePlayerOneDiscardPile()
    } else if (playerOneCard.innerHTML < playerTwoCard.innerHTML){
        console.log("player two had the higher card")
        increasePlayerTwoDiscardPile()
    }else if (playerOneCard.innerHTML == playerTwoCard.innerHTML)
    console.log("its a draw")

}

function decreaseRound(){
    if (rounds >= 1){
        rounds -= 1
        roundsLeft.innerHTML = rounds
    }else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}

drawButton.addEventListener("click", () => {
    createDeck()
    randomNum()
    decreaseRound()
    shuffle(deck)
    play()
    increasePlayer1DiscardPile()
    increasePlayer2DiscardPile()
})

function reset(){
    location.reload()
}

rematchButton.addEventListener("click", () => {
    reset()
    console.log("this button also works")
})

function gameOver(){
    if (player1Count && player2Count === 0){
        winnerOneMessage.style.display = ""
    }
    else if (roundsLeft.innerHTML >= 1 && playerOneCardCount.innerHTML < playerTwoCardCount.innerHTML){
        winnerTwoMessage.style.display = ""
    }
} 