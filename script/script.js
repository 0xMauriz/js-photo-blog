const body = document.getElementById("body");
const cardsContainer = document.getElementById("CardsContainerID");
const cardBackgroundEndpoint = "https://lanciweb.github.io/demo/api/pictures/";






axios.get(cardBackgroundEndpoint)
    .then(response => {

        let responseOne = response.data;

        
        body.innerHTML = `<div id="Image-Container" class="d-flex flex-wrap vh-100 vw-100 Transparency-50 justify-content-center align-items-center">
        <div class="w-50 h-50"><button id="CloseButton" class="">Chiudi</button>
        <img class="Image-Temp h-100 w-100 Center-Img" src="${responseOne[2].url}" alt=""></div></div>`



        for (let i = 0; i < 6; i++) {
            cardsContainer.innerHTML +=
                `<div class="card py-0 px-3">
                <img class="Pin shadow" src="./img/pin.svg" alt="">
                <div class="CardImage d-flex align-items-center justify-content-center justify-content-center" style="background-image: url(${responseOne[i].url})">
                </div>
                <div class="CardTitle py-2">${responseOne[i].title}</div>
                <div class="CardDate py-2">${responseOne[i].date}</div>
            </div>`;


        const imgContainer = document.getElementById("Image-Container");
        const closeButton = document.getElementById("CloseButton");

        closeButton.addEventListener('click', function () {
            imgContainer.classList.remove("d-flex");
            imgContainer.classList.add("d-none");
        })

        }
    })

    .then(response => {

        const pin = document.querySelectorAll(".Pin");

        const allCards = document.querySelectorAll('.card');

        console.log(allCards);

        allCards.forEach(card => {

                card.addEventListener('mouseenter', function () {

                    pin.forEach(element => element.classList.add("d-none"))

                });
        });

        allCards.forEach(card => {

                card.addEventListener('mouseleave', function () {

                    
                    pin.forEach(element => element.classList.remove("d-none"))

                });
        })

    })

    .catch(error => {
        console.error(error.message)
    })
