'use strict'

let detect = new MobileDetect(window.navigator.userAgent)

const sliderLine = document.querySelector('.slider__line');
const sliderBtn  = document.querySelector('.slider__btn');
const slider     = document.querySelector('.slider');

let moveSlider = 0; // Число, на которое прибавляется или отнимается положение линии слайдера по оси X
let itemWidth  = sliderLine.children[0].offsetWidth // Длина одного элемента слайдера
let lineStart  = 0; // Начальная точнка текущего слайда
let lineEnd    = itemWidth; // Конечная точка текущего слайда
let startX     = 0; // Стартовое положение на оски X при нажатии по экрану
let endX       = 0; // Конечное положение на оски X при отжатии от экрана

slider.ontouchstart = (event)=>{

    startX = event.touches[0].clientX; //Необходим на определения в какую сторону производится свайп
}

slider.ontouchmove = (event)=>{

    endX = event.touches[0].clientX;

    if(moveSlider > 0 && endX > startX){

        moveSlider -= 4;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        
    }

    if(moveSlider < sliderLine.offsetWidth - itemWidth && endX < startX) {

        moveSlider += 4;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
    }
}

slider.ontouchend = ()=>{

    if(startX > itemWidth / 2){

        if(endX < itemWidth / 2){

            moveSlider = lineEnd;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

            lineStart += sliderLine.children[0].offsetWidth;
            lineEnd   += sliderLine.children[0].offsetWidth;

        } else{

            moveSlider = lineStart;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        }
    }

    if(startX < itemWidth / 2){

        if(endX > itemWidth / 2){

            moveSlider = lineStart;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

            lineStart -= sliderLine.children[0].offsetWidth;
            lineEnd   -= sliderLine.children[0].offsetWidth;

        } else{

            moveSlider = lineEnd;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        }
    }
}

sliderBtn.onclick = (event)=>{

    if(event.target.closest('#prev') && moveSlider > 0){

        lineStart -= sliderLine.children[0].offsetWidth;
        lineEnd   -= sliderLine.children[0].offsetWidth;

        moveSlider -= sliderLine.children[0].offsetWidth;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        
    }

    if (event.target.closest('#next') && moveSlider < sliderLine.offsetWidth / 2) {

        lineStart += sliderLine.children[0].offsetWidth;
        lineEnd  += sliderLine.children[0].offsetWidth;

        moveSlider += sliderLine.children[0].offsetWidth;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
    }
}