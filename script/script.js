const body = document.getElementById("body");
const cardsContainer = document.getElementById("CardsContainerID");
const cardBackgroundEndpoint = "https://lanciweb.github.io/demo/api/pictures/";






axios.get(cardBackgroundEndpoint)
    .then(response => {

        let responseOne = response.data;



        for (let i = 0; i < 6; i++) {
            cardsContainer.innerHTML +=
                `<div class="card py-0 px-3">
                <img class="Pin shadow" src="./img/pin.svg" alt="">
                <div class="CardImage d-flex align-items-center justify-content-center justify-content-center" style="background-image: url(${responseOne[i].url})">
                </div>
                <div class="CardTitle py-2">${responseOne[i].title}</div>
                <div class="CardDate py-2">${responseOne[i].date}</div>
            </div>`;


        }


        body.innerHTML += `<div id="Image-Container" class="d-flex position-absolute flex-wrap z-Index-First vh-100 vw-100 Transparency-70 justify-content-center align-items-center">
        <div class="w-50 h-50"><div class="d-flex py-5 align-content-center justify-content-center"><button id="CloseButton">Chiudi</button></div>
        <img class="Image-Temp h-90 w-100 Center-Img" src="${responseOne[2].url}" alt=""></div></div>`

        const imgContainer = document.getElementById("Image-Container");
        const closeButton = document.getElementById("CloseButton");
        const container0 = document.querySelector(".container0");

        closeButton.addEventListener('click', function () {
            imgContainer.classList.remove("d-flex");
            imgContainer.classList.add("d-none");
        })

    })





    .then(response => {


        const allCards = document.querySelectorAll('.card');

        console.log(allCards);

        allCards.forEach(card => {

            const pin = card.querySelector(".Pin");

            card.addEventListener('mouseenter', function () {

                    pin.classList.add("d-none");
                    card.classList.add("rotate-10deg");

            });

            
            card.addEventListener('mouseleave', function () {

                    pin.classList.remove("d-none");
                    card.classList.remove("rotate-10deg");

            });

            card.addEventListener('click', function () {
                imgContainer.classList.remove("d-none");
                imgContainer.classList.add("d-flex");
            })
        });

    })

    .catch(error => {
        console.error(error.message)
    })
