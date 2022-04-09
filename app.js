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

function makeDeck(){
    let suit = ["♠", "♣", "♥", "♦"]
    let rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    let value = {
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
for (let i = 0; i < suit.length; i++) {
    for(let j = 0; j < rank.length; j++){
        let card = {
            suit: suit[i],
            rank: rank[j],
            value: value[rank[j]]
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

function drawCards() {
    playerOneDeck[0] = playerOneDeck.shift([0])
    playerOneDeck.innerHTML = playerOneDeck[0].value
    playerTwoDeck[0] = playerTwoDeck.shift([0])
    playerTwoDeck.innerHTML = playerTwoDeck[0].value      
}

function randomNum(){
    let random = Math.floor(Math.random() * deck.length)
    playerOneCard.innerHTML = random
    let random2 = Math.floor(Math.random() * deck.length)
    playerTwoCard.innerHTML = random2
}

function increasePlayer1DiscardPile(){
    if (player1Count >= 1){
        player1Count -= 1
        p1discard.innerHTML = player1Count
    } else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}

function increasePlayer2DiscardPile(){
    if (player2Count >= 1){
        player2Count -= 1
        p2Discard.innerHTML = player2Count
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
    drawCards()
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

// function gameOver(){
//     if (player1Count && player2Count === 0){
//         winnerOneMessage.style.display = ""
//     }
//     // else if (roundsLeft.innerHTML >= 1 && playerOneCardCount.innerHTML < playerTwoCardCount.innerHTML){
//     //     winnerTwoMessage.style.display = ""
//     // }
// } 