const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secoundCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard) return;
    
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
}
function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
         secoundCard.classList.remove('flip');
    }, 1500)
}
cards.forEach((card) => {
    card.addEventListener('click', flipcard)
})