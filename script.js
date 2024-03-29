// 3D Scroll

let zSpacing = -1000,                                              //параметр отвечает за расстояние по оси z
   lastPos = zSpacing / 5,                                         //стартовое позиция
   $frames = document.getElementsByClassName('frame'),
   frames = Array.from($frames),                                   //переобразует в массив
   zVals = []


window.onscroll = function() {                                     //скрип скролла
   
    let top = document.documentElement.scrollTop,                  //расстояние сверху до позиции
        delta = lastPos - top                                      //вычесление последней позиции и значение скроллтоп

    lastPos = top                                                  //обновление позиции

    frames.forEach(function(n, i) {                                //скролл
        zVals.push((i * zSpacing) + zSpacing)                      //массив
        zVals[i] += delta * -4.5                                   //управление скоростью пролистование
        let frame = frames[i],
           transform = `translateZ(${zVals[i]}px)`                 //прозрачность
           opacity = zVals[i] < Math.abs(zSpacing) / 1.2 ? 1 : 0   //плавное затухание 
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)     //атрибуты фреймов
    })
}

window.scrollTo(0, 1)                                              //триггер скролл



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


//якорь
  const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
