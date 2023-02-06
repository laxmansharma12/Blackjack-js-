let cards=[]
let sum=0
let message=" "
// let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
// let cardEl=document.getElementById("card-el")
let messageEl=document.querySelector("#message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")
let hasBlackjack= false
let isAlive= false

let playerNameEl=document.querySelector("#playerName-el")
// let playerNAme="Lax"
// let playerChips=144
let player={
    Name:"Lax",
     Chips:144
}
playerNameEl.textContent=player.Name +": $"+player.Chips

function getRandomCard(){
let values=Math.floor(Math.random()*13)+1
if(values === 1){
    const imageEl=document.getElementById("img1")
    imageEl.style.visibility="visible"
    return 11
}else if(values=== 2){
    const imageEl=document.getElementById("img2")
    imageEl.style.visibility="visible"
    return 2
}
else if(values=== 3){
    const imageEl=document.getElementById("img3")
    imageEl.style.visibility="visible"
    return 3
}
else if(values=== 4){
    const imageEl=document.getElementById("img4")
    imageEl.style.visibility="visible"
    return 4
}
else if(values=== 5){
    const imageEl=document.getElementById("img5")
    imageEl.style.visibility="visible"
    return 5
}
else if(values=== 6){
    const imageEl=document.getElementById("img6")
    imageEl.style.visibility="visible"
    return 6
}
else if(values=== 7){
    const imageEl=document.getElementById("img7")
    imageEl.style.visibility="visible"
    return 7
}
else if(values=== 8){
    const imageEl=document.getElementById("img8")
    imageEl.style.visibility="visible"
    return 8
}
else if(values=== 9){
    const imageEl=document.getElementById("img9")
    imageEl.style.visibility="visible"
    return 9
}
else if(values=== 10){
    const imageEl=document.getElementById("img10")
    imageEl.style.visibility="visible"
    return 10
}
else if(values > 10 && values=== 11 ){
    const imageEl=document.getElementById("img11")
    imageEl.style.visibility="visible"
    return 10
}
else if(values > 10 && values=== 12 ){
    const imageEl=document.getElementById("img12")
    imageEl.style.visibility="visible"
    return 10
}
else if(values > 10 && values=== 13 ){
    const imageEl=document.getElementById("img13")
    imageEl.style.visibility="visible"
    return 10
}
else{
    return values
}
}

const startBtn=document.querySelector("#start-btn")
startBtn.addEventListener("click", function(){
// function startGame(){
        isAlive= true
        let firstCard=getRandomCard()
        let secondCard=getRandomCard()
         cards=[firstCard,secondCard]
         sum= firstCard + secondCard
        renderGame()
    })
function renderGame() {
    if(hasBlackjack === false && isAlive === true){
    cardEl.textContent ="Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent +=cards[i]+" "
    }

    sumEl.textContent ="Sum: "+ sum
        if(sum < 21){
     message="Do you want to draw a new card?🙂"   
    }else if(sum === 21){
        message="Wohooo! You've got blackjack!🥳"
        hasBlackjack=true
    }else{
        message="you're out of the game!😭"
        isAlive=false
    }
    messageEl.textContent=message
   }
}



function newCard(){
   
    if(hasBlackjack === false && isAlive === true){
        let  card=getRandomCard()
        sum +=card
        cards.push(card)
        renderGame()
    }
    
}


