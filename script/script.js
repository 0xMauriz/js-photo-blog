const body = document.getElementById("body");
const cardsContainer = document.getElementById("CardsContainerID");
const cardBackgroundImg = "https://www.color-hex.com/palettes/28997.png"

for (let index = 0; index < 6; index++) {

    
    
cardsContainer.innerHTML += 
            `<div class="card py-0 px-3">
                <img class="Pin shadow-lg" src="./img/pin.svg" alt="">
                <div class="CardImage d-flex align-items-center justify-content-center justify-content-center" style="background-image: url(${cardBackgroundImg});">
                    600x600
                </div>
                <div class="CardText py-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
            </div>`;
    
}

