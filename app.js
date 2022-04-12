let playerOneCard = document.querySelector(".p1card")
let playerTwoCard = document.querySelector(".p2card")
let drawButton = document.querySelector(".button1")
let rematchButton = document.querySelector(".button2")
let player1DiscardPile = document.querySelector(".p1-discard")
let player2DiscardPile = document.querySelector(".p2-discard")
let winnerOneMessage = document.querySelector(".winner1")
let winnerTwoMessage = document.querySelector(".winner2")
let winnerThreeMessage = document.querySelector(".winner3")
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
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
let scores = {
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    10:10,
    J:11,
    Q:12,
    K:13,
    A:14
}
let winner1 = document.querySelector(".winner1")
let winner2 = document.querySelector(".winner2")
let winner3 = document.querySelector(".winner3")
let roundsLeft = document.querySelector(".rounds_left")
let rounds = 26
winner1 = 'none'
winner2 = 'none'
winner3 = 'none'

function createDeck()
{
    let deck = new Array();
    for(let i = 0; i < suits.length; i++)
    {
    for(let x = 0; x < values.length; x++)
{
    let cards = {value: values[x], suit: suits[i], score: scores[values[x]]};
    deck.push(cards);
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
		let playerOneDeck = Math.floor((Math.random() * deck.length));
		let playerTwoDeck = Math.floor((Math.random() * deck.length));
		let tmp = deck[playerOneDeck];

		deck[playerOneDeck] = deck[playerTwoDeck];
		deck[playerTwoDeck] = tmp;
	}
}

function randomNum(){   
    let random = Math.floor(Math.random() * deck.length)
    playerOneCard.innerHTML = deck[random].value + deck[random].suit + deck[random].score;
    // document.getElementById('value').innerHTML = deck[random].value
    // document.getElementById('suit').innerHTML = deck[random].suit
    // document.getElementById('score').innerHTML = deck[random].score
    let random2 = Math.floor(Math.random() * deck.length)     
    playerTwoCard.innerHTML = deck[random2].value + deck[random2].suit + deck[random2].score;
}

playerOneDeck = deck.slice(0, deck.length / 2);
playerTwoDeck  = deck.slice(deck.length / 2, deck.length);

function increasePlayer1DiscardPile(){
    if (player1Count >= 1){
        player1Count -= 1
        // player1Count.innerHTML = player1Count
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        // roundsMessage.style.display="none"
    }
}

function increasePlayer2DiscardPile(){
    if (player2Count >= 1){
        player2Count -= 1
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        // roundsMessage.style.display="none"
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
    winnerThreeMessage.style.display="block"
}

function increasePlayerTwoDiscardPile(){
    player2Discard += 2
    player2DiscardPile.innerHTML = player2Discard
    winnerTwoMessage.style.display="block"
    winnerOneMessage.style.display="none"
    winnerThreeMessage.style.display="block"
}

function play(){
    let highest1 
    if(playerOneCard.innerHTML.length === 3) {
        highest1 = parseInt(playerOneCard.innerHTML.split('')[2])
    } else if (playerOneCard.innerHTML.length === 4) {
        let highest1tmp = playerOneCard.innerHTML.split('')
        highest1 = parseInt(highest1tmp[2] + highest1tmp[3]) 
    } else {
        let highest1tmp = playerOneCard.innerHTML.split('')
        highest1 = parseInt(highest1tmp[3] + highest1tmp[4]) 
    }
    console.log(highest1)
    let highest2 
    if(playerTwoCard.innerHTML.length === 3) {
        highest2 = parseInt(playerTwoCard.innerHTML.split('')[2])
    } else if (playerTwoCard.innerHTML.length === 4) {
        let highest2tmp = playerTwoCard.innerHTML.split('')
        highest2 = parseInt(highest2tmp[2] + highest2tmp[3]) 
    } else {
        let highest2tmp = playerTwoCard.innerHTML.split('')
        highest2 = parseInt(highest2tmp[3] + highest2tmp[4]) 
    }
    console.log(highest2)
    if (highest1 > highest2){
      console.log('player one had the higher cards')
      increasePlayerOneDiscardPile()
    } else if (highest1 < highest2){
        console.log("player two had the higher card")
        increasePlayerTwoDiscardPile()
    }else if (highest1 === highest2)
    console.log("its a draw")

}

function decreaseRound(){
    if (rounds >= 1){
        rounds -= 1
        roundsLeft.innerHTML = rounds
    }else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        // roundsMessage.style.display="none"
    }
}
// createDeck()
// randomNum()
// // decreaseRound()
// shuffle(deck)

drawButton.addEventListener("click", () => {
    createDeck()
    randomNum()
    shuffle(deck)
    play()
    decreaseRound()
    increasePlayer1DiscardPile()
    increasePlayer2DiscardPile()
    gameOver()
})

function reset(){
    location.reload()
}

rematchButton.addEventListener("click", () => {
    reset()
    console.log("this button also works")
})

function gameOver(){

    if (rounds === 0 && player1Discard > player2Discard){
        winnerOneMessage.innerHTML = "Player One Wins"
    }
    else if (rounds === 0 && player1Discard < player2Discard){
        winnerTwoMessage.innerHTML = "Player Two Wins "
    } else if (rounds === 0 && player1Discard === player2Discard){
        winnerThreeMessage.innerHTML = "It's a tie"
    }
}
 


console.log(playerOneDeck);
console.log(playerTwoDeck);