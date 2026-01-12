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


        const allCards = document.querySelectorAll('.card');
        const closeButton = document.getElementById('CloseButton');
        const overlayImg = document.getElementById('OverlayImg');
        const imageContainer = document.getElementById('Image-Container');

        allCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                overlayImg.src = responseOne[index].url;
                imageContainer.classList.remove("d-none");
                imageContainer.classList.add("d-flex");
            });
        });

        closeButton.addEventListener('click', () => {
            imageContainer.classList.add("d-none");
            imageContainer.classList.remove("d-flex");
        });

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
        });

    })

    .catch(error => {
        console.error(error.message)
    })
