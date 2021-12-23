const gameSpace = document.getElementById(".gameSpace");

const opponentSide = document.getElementById(".opponentSide");

const middleSide = document.getElementById(".middleSide");

const reserveDeck = document.getElementById(".reserveDeck");
const fourPlayingCards = document.getElementById(".fourPlayingCards");
const resetCards = document.getElementById(".resetCards");

const firstcard = document.getElementById(".firstcard");
const secondcard = document.getElementById(".secondcard");
const thirdcard = document.getElementById(".thirdcard");
const fourthcard = document.getElementById(".fourthcard");

const playerSide = document.getElementById(".playerSide");


class Card {
    constructor(options) {
        this.suit = options.suit;
        this.number = options.number;
        this.name = options.name;
    }
}

