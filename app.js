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
let deck = []
let playerOneDeck = []
let playerTwoDeck = []
let suits = ["♠", "♣", "♥", "♦"]
let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']


function getDeck()
{
    let deck = new Array();
    for(let i = 0; i < suits.length; i++)
    {
    for(let x = 0; x < values.length; x++)
{
    let card = {Value: values[x], Suit: suits[i]};
    deck.push(card);
}
}
return deck; 
  
}

deck = getDeck()

function shuffle(deck)
{
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function renderDeck(deck)
{
      document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

function randomNum(){
    console.log("the deck length is", deck.length)
    let random = Math.floor(Math.random() * deck.length)
    console.log("random number 1", random);
    playerOneCard.innerHTML = random
    let random2 = Math.floor(Math.random() * deck.length)
    console.log("random number 2", random2);
    playerTwoCard.innerHTML = random2
}


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
        // p2DiscardPile.innerHTML = player2Count
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}

function winner(){
    if(player1Count && player2Count) {
        console.log("no winner yet")
    } else {
        if(player1Count === 0) console.log('player two wins')
        else console.log("player one wins!")
    } 
}

function increasePlayerOnevalue(){
    if(player)
    player1Count += 2
    playerOneCardCount.innerHTML = player1Count
    winnerOneMessage.style.display="block"
    winnerTwoMessage.style.display="none"
}
function decreasePlayerOnevalue(){
    player1Count -= 1
    playerOneCardCount.innerHTML = player1Count
}
function increasePlayerTwovalue(){
    player2Count += 2
    playerTwoCardCount.innerHTML = player2Count
    winnerTwoMessage.style.display="block"
    winnerOneMessage.style.display="none"
}
function decreasePlayerTwovalue(){
    player2Count -= 1
    playerTwoCardCount.innerHTML = player2Count
}

function play(){
    if (playerOneCard.innerHTML > playerTwoCard.innerHTML){
      console.log('player one had the higher cards')
      increasePlayerOnevalue()
      decreasePlayerTwovalue()
    } else if (playerOneCard.innerHTML < playerTwoCard.innerHTML){
        console.log("player two had the higher card")
        increasePlayerTwovalue()
        decreasePlayerOnevalue()
    }else if (playerOneCard.innerHTML == playerTwoCard.innerHTML)
    console.log("its a draw")

}

drawButton.addEventListener("click", () => {
    randomNum()
    getDeck()
    shuffle(deck)
    // renderDeck(deck)
    play()
    increasePlayer1DiscardPile()
    increasePlayer2DiscardPile()
    // makeDeck()
})

function reset(){
    location.reload()
}

//THIS WORKS
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