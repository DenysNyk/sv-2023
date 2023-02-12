const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('click', () =>{
        clearActiveClasses ()     /* удаляет класс АКТИВ*/
        slide.classList.add('activ') /* добавляет класс АКТИВ*/
    })
}

function clearActiveClasses() {       /* удаляет класс АКТИВ*/
    slides.forEach((slide) =>{
        slide.classList.remove('activ')
    })
}