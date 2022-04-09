let drawButton = document.querySelector(".button1")
let rematchButton = document.querySelector(".button2")
let p1discard = document.querySelector(".pile-one")
let p2discard = document.querySelector(".pile-two")
let playerOneCard = document.querySelector(".card1")
let playerTwoCard = document.querySelector(".card2")
let firstPlayer = 0
let secondPlayer = 0
let player1DiscardPile = document.querySelector(".discard-pile")
let player2DiscardPile = document.querySelector(".discard.pile2")
let playerOnePoints = 26
let playerTwoPoints = 26
let scoreOne = document.querySelector(".score1")
let scoreTwo = document.querySelector(".score2")
let winnerOneMessage = document.querySelector(".winner1")
let winnerTwoMessage = document.querySelector(".winner2")
let deck = []
let playerOneDeck = []
let playerTwoDeck = []

function drawCards() {
    playerOneDeck[0] = playerOneDeck.shift([0])
    playerOneDeck.innerHTML = playerOneDeck[0].Value
    playerTwoDeck[0] = playerTwoDeck.shift([0])
    playerTwoDeck.innerHTML = playerTwoDeck[0].Value      
}

function makeDeck(){
    let suit = ["♠", "♣", "♥", "♦"]
    let rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    let score = {
    A: 14,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
}
for (let i = 0; i<suit.length; i++) {
    for(let j=0; j<rank.length; j++){
        let card = {
            suit: suit[i],
            rank: rank[j],
            score: score[rank[j]]
        };
        deck.push(card);
        }
    }
    console.log(deck)
}
makeDeck()

function shuffleDeck(){
    for(let i = 0; i <= 26; i++) {
        let randomNumber = Math.floor(Math.random() * deck.length)
        playerOneDeck.push(deck[randomNumber])
        let randomNumber2 = Math.floor(Math.random() * deck.length)
        playerTwoDeck.push(deck[randomNumber2])
    }
    return shuffleDeck
}

function randomNum(){
    let random = Math.floor(Math.random() * deck.length)
    playerOneCard.innerHTML = random
    let random2 = Math.floor(Math.random() * deck.length)
    playerTwoCard.innerHTML = random2
}

function increasePlayer1DiscardPile(){
    if (playerOnePoints >= 1){
        playerOnePoints -=0
        p1discard.innerHTML = playerOnePoints
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}

function increasePlayer2DiscardPile(){
    if (playerTwoPoints >= 1){
        playerTwoPoints -=0
        p2discard.innerHTML = playerTwoPoints
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}

function winner(){
    if(playerOnePoints && playerTwoPoints) {
        console.log("no winner yet")
    } else {
        if(playerOnePoints === 0) console.log('player two wins')
        else console.log("player one wins!")
    } 
}

function increasePlayerOneScore(){
    playerOnePoints += 2
    scoreOne.innerHTML = playerOnePoints
    winnerOneMessage.style.display="block"
    winnerTwoMessage.style.display="none"

}
function decreasePlayerOneScore(){
    playerOnePoints -= 1
    scoreOne.innerHTML = playerOnePoints
}
function increasePlayerTwoScore(){
    playerTwoPoints += 2
    scoreTwo.innerHTML = playerTwoPoints
    winnerTwoMessage.style.display="block"
    winnerOneMessage.style.display="none"
}
function decreasePlayerTwoScore(){
    playerTwoPoints -= 1
    scoreTwo.innerHTML = playerTwoPoints
}

function play(){
    if (playerOneCard.innerHTML > playerTwoCard.innerHTML){
      console.log('player one had the higher cards')
      increasePlayerOneScore()
      decreasePlayerTwoScore()
    } else if (playerOneCard.innerHTML < playerTwoCard.innerHTML){
        console.log("player two had the higher card")
        increasePlayerTwoScore()
        decreasePlayerOneScore()
    }else if (playerOneCard.innerHTML == playerTwoCard.innerHTML)
    console.log("its a draw")

}

drawButton.addEventListener("click", () => {
    randomNum()
    drawCards()
    play()
    increasePlayer1DiscardPile()
    increasePlayer2DiscardPile()
    // makeDeck()
})

function reset(){
    location.reload()
}

rematchButton.addEventListener("click", () => {
    reset()
    console.log("this button also works")
})

function gameOver(){
    if (roundsLeft.innerHTML >= 1 && scoreOne.innerHTML > scoreTwo.innerHTML){
        winnerOneMessage.style.display = ""
    }
    else if (roundsLeft.innerHTML >= 1 && scoreOne.innerHTML < scoreTwo.innerHTML){
        winnerTwoMessage.style.display = ""
    }
} 