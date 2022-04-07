let drawButton = document.querySelector(".button1")
let rematchButton = document.querySelector(".button2")
let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let playerOneCard = document.querySelector(".card1")
let playerTwoCard = document.querySelector(".card2")

console.log(cards)

function randomNum(){
    let random = Math.floor(Math.random() * cards.length)
    console.log(random)
    playerOneCard.innerHTML = random
}

function randomNum2(){
    let random2 = Math.floor(Math.random() * cards.length)
    console.log(random2)
    playerTwoCard.innerHTML = random2
}

drawButton.addEventListener('click', () => {
    randomNum()
    randomNum2()
})

rematchButton.addEventListener('click', () => {
    console.log("this works too")
})