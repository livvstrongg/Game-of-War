let drawButton = document.querySelector(".button1")
let rematchButton = document.querySelector(".button2")
let p1discard = document.querySelector(".pile-one")
let p2discard = document.querySelector(".pile-two")
let playerOneCard = document.querySelector(".card1")
let playerTwoCard = document.querySelector(".card2")
let player1DiscardPile = document.querySelector(".discard-pile")
let player2DiscardPile = document.querySelector(".discard.pile2")
let playerOnePoints = 26
let playerTwoPoints = 26
// let playerOnePile = 0
// let playerTwoPile = 0
let scoreOne = document.querySelector(".score1")
let scoreTwo = document.querySelector(".score2")
// let roundsMessage = document.querySelector(".rounds")
let winnerOneMessage = document.querySelector(".winner1")
let winnerTwoMessage = document.querySelector(".winner2")
// let drawMessage = document.querySelector(".draw")
let deck = []
let playerOneDeck = []
let playerTwoDeck = []

//function to reset the game once the game is over
function reset(){
    location.reload()
}

 //trying to create a deck of cards, showing up in console but not underneath P1 Card or P2 card which is what I want it to do.
function makeDeck(){
    let suit = ["♠", "♣", "♥", "♦"]
    let rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
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
    Jack: 11,
    Queen: 12,
    King: 13,
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
    return deck;
}
makeDeck()

function shuffleDeck(){
    for(let i = 0; i <= 26; i++) {
        let randomNumber = Math.floor(Math.random() * deck.length)
        playerOneDeck.push(deck[randomNumber])
        let randomNumber2 = Math.floor(Math.random() * deck.length)
        playerTwoDeck.push(deck[randomNumber2])
    }
    console.log(shuffleDeck)
    return shuffleDeck
}

function splitDeck(){
    let halfDeck = Math.ceil(deck.length / 2);
    playerOneDeck = deck.slice(0, halfDeck)
    playerTwoDeck = deck.slice(0, halfDeck)
}

function randomNum(){
    let random = Math.floor(Math.random() * deck.length)
    playerOneCard.innerHTML = random
    let random2 = Math.floor(Math.random() * deck.length)
    playerTwoCard.innerHTML = random2
}
// function decreaseRound(){
//     if (rounds >= 1){
//         rounds -= 1
//         roundsLeft.innerHTML = rounds
//     }else{
//         drawButton.style.display="none"
//         roundsLeft.innerHTML = "Game Over!"
//         roundsMessage.style.display="none"
//     }
// }


function winner(){
    if(playerOnePoints && playerTwoPoints) {
        console.log("no winner yet")
    } else {
        if(playerOnePoints === 0) console.log('player two wins')
        else console.log("player one wins!")
    } 
}

// The winner message functions I am pretty sure are working?
function increasePlayerOneScore(){
    playerOnePoints += 1
    scoreOne.innerHTML = playerOnePoints
    winnerOneMessage.style.display="block"
    winnerTwoMessage.style.display="none"

}
function decreasePlayerOneScore(){
    playerOnePoints -= 1
    scoreOne.innerHTML = playerOnePoints
}
function increasePlayerTwoScore(){
    playerTwoPoints += 1
    scoreTwo.innerHTML = playerTwoPoints
    winnerTwoMessage.style.display="block"
    winnerOneMessage.style.display="none"
}
function decreasePlayerTwoScore(){
    playerTwoPoints -= 1
    scoreTwo.innerHTML = playerTwoPoints
}


// this is mostly working; but there is a bug 

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
    play()
    // makeDeck()
})


rematchButton.addEventListener("click", () => {
    reset()
    console.log("this button also works")
})


// This function is not working; but the idea is that when the game is over a special 
// message will display saying who is the winner
function gameOver(){
    if (roundsLeft.innerHTML >= 1 && scoreOne.innerHTML > scoreTwo.innerHTML){
        winnerOneMessage.style.display = ""
    }
    else if (roundsLeft.innerHTML >= 1 && scoreOne.innerHTML < scoreTwo.innerHTML){
        winnerTwoMessage.style.display = ""
    }
} 