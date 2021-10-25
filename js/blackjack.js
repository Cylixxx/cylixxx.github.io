/*
  Author: 		Ryan Gilchrist
  File name: 	blackjack.js
  Date Created:	10/25/2021
  Date Updated: 10/25/2021
  Version: 		0.1

  Copyright:
      ***********************************************************************
      ***********************************************************************
      ***********************************************************************

  Description:
      JavaScript used for blackjack_game.html.
*/

/*
 * BlackJack Game
 */

// Defining the card values and suits
const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

//Creates the deck
function createDeck() {
    var cardDeck = new Array();

    for (var x = 0; x < values.length; x++) {
        for (var y = 0; y < suits.length; y++) {
            var card = { Value: values[x], Suit: suits[y] };

            cardDeck.push(card);
        }
    }
    return cardDeck;
}

//Shuffles the deck
function shuffle() {
    var deck = new createDeck();
    for (var x = 0; x < 1000; x++) {
        var firstIndex = deck[Math.floor(Math.random() * deck.length)];
        var secondIndex = deck[Math.floor(Math.random() * deck.length)];

        deck.splice(deck.indexOf(firstIndex), 1, secondIndex);
        deck.splice(deck.indexOf(secondIndex), 1, firstIndex);
    }
    return deck;
}

var playerHand = new Array();
var dealerHand = new Array();
//Deals the hands
function deal() {
    var newDeck = shuffle();
    for (var x = 0; x < 2; x++) {
        var card = newDeck[x];
        newDeck.splice(newDeck.indexOf(card), 1);
        playerHand.push(card);
    }
    for (var x = 0; x < 2; x++) {
        var card = newDeck[x];
        newDeck.splice(newDeck.indexOf(card), 1);
        dealerHand.push(card);
    }
    return {
        playerHand: playerHand,
        dealerHand: dealerHand,
        newDeck: newDeck
    };
}
//Grabs the hand arrays that were created in deal()
var test = deal();
var playerHand = test.playerHand;
var dealerHand = test.dealerHand;

//Prints player hand
console.log("player hand = ");
for (var x = 0; x < 2; x++) {
    console.log(playerHand[x]);
}
//Prints dealer hand
console.log("dealer hand = ");
for (var x = 0; x < 2; x++) {
    console.log(dealerHand[x]);
}


function playerHit() {
    var newDeck1 = test.newDeck;

    for (var x = 0; x < 1; x++) {
        var card = newDeck1[x];
        newDeck1.splice(newDeck1.indexOf(card), 1);
        playerHand.push(card);
    }
    return {
        playerHand: playerHand,
        newDeck1: newDeck1
    };
}
function dealerHit() {
    var newDeck1 = test.newDeck;
    for (var x = 0; x < 1; x++) {
        var card = newDeck1[x];
        newDeck1.splice(newDeck1.indexOf(card), 1);
        dealerHand.push(card);
    }
    return {
        dealerHand: dealerHand,
        newDeck1: newDeck1
    };
}

var test1 = playerHit();
playerHand = test1.playerHand;
var test2 = dealerHit();
dealerHand = test2.dealerHand;
//Prints player hand
console.log("player hand = ");
for (var x = 0; x < playerHand.length; x++) {
    console.log(playerHand[x]);
}
//Prints dealer hand
console.log("dealer hand = ");
for (var x = 0; x < dealerHand.length; x++) {
    console.log(dealerHand[x]);
}
