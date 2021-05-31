const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secoundCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secoundCard =  this;
    hasFlippedCard = false;
    checkForMatch();
}
function checkForMatch() {
    if(firstCard.dataset.card === secoundCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secoundCard.removeEventListener('click', flipCard);
    resetboard();
}
function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
         secoundCard.classList.remove('flip');
         resetboard();
    }, 1500)
}
function resetboard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secoundCard] = [null, null];
    
}
(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
}){};
cards.forEach((card) => {
    card.addEventListener('click', flipcard)
})