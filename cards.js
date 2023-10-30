// let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// axios.get(url)
//     .then(res => {
//         console.log("Succes X 1")
//         console.log(res.data)
//         const deckid = (res.data.deck_id)
//         console.log(deckid)
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`)
//     })
//     .then (res => {
//         const deckid = (res.data.deck_id)
//         console.log("success X 2")
//         console.log(res.data.cards[0])
//         let suit = (res.data.cards[0].suit)
//         let value = (res.data.cards[0].value)
//         let img = (res.data.cards[0].image)
//         console.log(`${value} OF ${suit}`)
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`)
//     })
//     .then (res => {
//         console.log("success X 3")
//         const deckid = (res.data.deck_id)
//         console.log(res.data.cards[0])
//         let suit = (res.data.cards[0].suit)
//         let value = (res.data.cards[0].value)
//         let img = (res.data.cards[0].image)
//         console.log(`${value} OF ${suit}`)
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`)
//     })
//     .catch(err => console.log ("did not work bozo"))

function getNewDeck(){
    return axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.data.deck_id);
}

let deckId;
getNewDeck()
    .then(id => {
        deckId = id;
})

function drawCard(deckId) {
    return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then (res => {
        const card = res.data.cards[0];
        console.log(`${card.value} OF ${card.suit}`);
        return card;
    })
}

getNewDeck().then(id => {
    deckId = id;

    // Enable the button after getting the deckId
    document.getElementById("drawCardButton").addEventListener("click", function() {
        drawCard(deckId).then(card => {
            const cardImage = document.createElement("img");
            cardImage.src = card.image;
            document.getElementById("cardDisplay").appendChild(cardImage);
            if(card.remaining === 0) {
                document.getElementById("drawCardButton").disabled = true;
            }
        });
    });
});
