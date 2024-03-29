// Audio

let soundBTN = document.querySelector('.soundBTN'),
     audio = document.querySelector('.audio')

soundBTN.addEventListener('click', e => {         //при нажатии останавливает звук и включает звук
    soundBTN.classList.toggle('paused')    
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {                  //при активной стр
    soundBTN.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {                  //если покидаем стр
    audio.pause()
}



// Filter

let products = {
    data:[
    {
        category: "Интерьер",
        image: "img/3д/3Ds Max/Мастер-класс/1.jpg"
    },
    {
        category: "Объекты",
        image: "img/3д/3Ds Max/робот/1.jpg"
    },
    {
        category: "Экстерьер",
        image: "img/3д/3Ds Max/Мастер-класс/3.jpg"
    },
    {
        category: "Объекты",
        image: "img/3д/3Ds Max/робот/2.jpg"
    },
    {
        category: "Интерьер",
        image: "img/3д/3Ds Max/скандинавский стиль/1.png"
    },
    {
        category: "Объекты",
        image: "img/3д/3Ds Max/робот/3.jpg"
    },
    {
        category: "Интерьер",
        image: "img/3д/3Ds Max/Мастер-класс/6.jpg"
    },
    {
        category: "Интерьер",
        image: "img/3д/3Ds Max/скандинавский стиль/2.png"
    },
    {
        category: "Интерьер",
        image: "img/3д/3Ds Max/Мастер-класс/2.jpg"
    },
    {
        category: "Объекты",
        image: "img/3д/3Ds Max/Мастер-класс/7.jpg"
    },
    {
        category: "Интерьер",
        image: "img/3д/3Ds Max/скандинавский стиль/5.png"
    },
  ],
};

for(let i of products.data){
    //создание карты
    let card = document.createElement("div")
    //card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
            
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class
    let menu = document.querySelectorAll(".button-value");
    menu.forEach(button => {
        //check if value equals inner
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all card on 'all' button click
        if(value == "all") {
            element.classList.remove("hide");
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Initially display
window.onload = () => {
    filterProduct("all")
};

//анимация фона
VANTA.WAVES({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0,
    shininess: 19.00,
    waveHeight: 22.00,
    waveSpeed: 0.70
  })