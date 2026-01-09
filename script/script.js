const body = document.getElementById("body");
const cardsContainer = document.getElementById("CardsContainerID");
const cardBackgroundEndpoint = "https://lanciweb.github.io/demo/api/pictures/";



for (let i = 0; i < 6; i++) {


    axios.get(cardBackgroundEndpoint)
        .then(response => {

            let responseOne = response.data;

            

            cardsContainer.innerHTML +=
                `<div class="card py-0 px-3">
                <img class="Pin shadow" src="./img/pin.svg" alt="">
                <div class="CardImage d-flex align-items-center justify-content-center justify-content-center" style="background-image: url(${responseOne[i].url})">
                </div>
                <div class="CardTitle py-2">${responseOne[i].title}</div>
                <div class="CardDate py-2">${responseOne[i].date}</div>
            </div>`;

        
    })

    .catch (error => {
    console.error(error.message)
})
}