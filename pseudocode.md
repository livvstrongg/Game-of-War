# PHASE 1

1. Click start on opening page
2. Click both player 1 and player 2 'draw' buttons
3. Click 'next' button
4. Both cards previously played will be enter into winning players deck
5. Repeat this until one player holds all of the cards.
6. In case of tie, both players will be prompted to draw 3 cards face down and then draw a 4th card that is face up (this will hopefully all happen in one move). The player whose 4th card is highest will receive all the cards on the table. 
7. Player who eventually holds all of the cards in the deck is declared the winner. 
8. Once a winner is declared that user will be brought to a screen with a button that gives them the option for a rematch. 

# PHASE 2

1. Create a cards object
    a. create suits property
    b. create a value property (2-Ace)
2. Create a deck object
3. Create a rematch function

#  HTML: 

- H1 of "Game of War"
- P1, P2, & Next buttons
- Card Table div
- H2 of score
- Start button 
- P1 & P2 Deck of Cards div
- Middle of table div

# Page 1:
-Needs Title & Start button
-Once start button is pressed it will need to transfer over to the game table

# Game Page:
-needs 2 places for the cards
-cards need to be evenly distrubeted (each player having 26 cards at the beginning)
-each pile of cards needs to be connected to their specific draw button that when pressed will flip over the top card in their deck
-computer will need to be able to tell which player had the higher value card and assign both cards that have been played to that player
-There needs to be a number on top of each deck keeping track of how many cards each player has in their deck, another option for this would be to keep track of how many cards are in deck at the top (i.e. 24-28)
-once one player has run out of cards, opposite player is declared the winner
-once a winner is declared user is taken to a rematch page

# Rematch Page:
-rematch must have a 'rematch' button
-rematch page must be able to take user back to game page

# I will need:

const playerOne
const playerTwo
const deckOfCards
const cards
const playerOneScore
const playerTwoScore


-Create header in HTML
-Create P1 and P2 cards and give each one a class in HTML
-Create P1 Card Count and P2 Card Count and assign them 26 in HTML
-Create a draw button and a rematch button within the same div
-Create a discard pile for player one and two. 
-create a h3 for declaring whether player one or two wins



C