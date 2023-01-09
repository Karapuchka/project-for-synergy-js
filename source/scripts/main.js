'use strict'

let detect = new MobileDetect(window.navigator.userAgent) //Для опрделения устройства пользователя

const sliderOne = document.querySelector('.slider-one');
const sliderTwo = document.querySelector('.slider-two');
const btn       = document.querySelector('.slider__btns');

// Анимация которая зависит от устройства пользователя
if(detect.mobile()){

    btn.onpointerdown = (event)=>{

        if(event.target.classList.contains('slider__btns__btn')){

            event.target.classList.add('slider__btns__btn--active');
        }

        setTimeout(()=>{

            event.target.classList.remove('slider__btns__btn--active');
            
        }, 700)
    }

    sliderTwo.children[1].onclick = (event)=>{

        if(event.target.classList.contains('slider__btns__btn--radio')){

            for (let i = 0; i < sliderTwo.children[1].children.length; i++) {
               
                if (sliderTwo.children[1].children[i].classList.contains('slider__btns__btn--active')) {

                    sliderTwo.children[1].children[i].classList.remove('slider__btns__btn--active')
                }
                
            }

            event.target.classList.add('slider__btns__btn--active');
        }
    }

} else{

    btn.onpointerover = (event)=>{

        if(event.target.classList.contains('slider__btns__btn')){
            
            event.target.classList.add('slider__btns__btn--active');
        }
    }

    btn.onpointerout = (event)=>{

        if(event.target.classList.contains('slider__btns__btn')){
            
            event.target.classList.remove('slider__btns__btn--active');
        }
    }

    sliderTwo.children[1].onclick = (event)=>{

        if(event.target.classList.contains('slider__btns__btn--radio')){

            for (let i = 0; i < sliderTwo.children[1].children.length; i++) {
               
                if (sliderTwo.children[1].children[i].classList.contains('slider__btns__btn--active')) {

                    sliderTwo.children[1].children[i].classList.remove('slider__btns__btn--active')
                }
                
            }

            event.target.classList.add('slider__btns__btn--active');
        }
    }
}

// Изменение размера элементов слайдеров

setStyleSliderItem(sliderOne); // Задает размер элементов после загрузки страницы 
setStyleSliderItem(sliderTwo); // Задает размер элементов после загрузки страницы

window.onresize = ()=>{ 
    
    setStyleSliderItem(sliderOne); // Задаёт размер элемента при изменении размера окна обраузера
    setStyleSliderItem(sliderTwo); // Задаёт размер элемента при изменении размера окна обраузера
}

function setStyleSliderItem(slider){ // Функция для изменения размера и цвета элементов
    
    for (let i = 0; i < slider.children[0].children.length; i++) {
        
        slider.children[0].children[i].style.width = `${slider.offsetWidth}px`;
    }

    for(let j = 0; j < slider.children[0].children.length; j++){

        slider.children[0].children[j].style.backgroundColor = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`;
    }

    slider.children[0].style.width = `${slider.offsetWidth * slider.children[0].children.length}px`
}

// Функция для получения случайного числа
function randomNumber(min, max){

    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

// Движения первого слайдера

let countSliderOne = 0;

sliderOne.children[1].onpointerdown = (event)=>{

    if(event.target.id == 'slider-one-prev'){

        if(countSliderOne < sliderOne.children.length - 1){

            countSliderOne++;

            moveSlider(sliderOne.children[0], countSliderOne, sliderOne.offsetWidth);
        }

    }

    if(event.target.id == 'slider-one-next'){

        if(countSliderOne >= 0){

            countSliderOne--;

            moveSlider(sliderOne.children[0], countSliderOne, sliderOne.offsetWidth);
        }
    }
}

let xStartSliderOne = 0;
let xEndSliderOne = 0;
let moveTouchSliderOne = 0;

sliderOne.children[0].ontouchstart = (event)=>{

    xStartSliderOne = event.touches[0].clientX;
    console.log('xStartSliderOne: ' + xStartSliderOne);
}

sliderOne.children[0].ontouchmove = (event)=>{

    xEndSliderOne = event.touches[0].clientX;

    if(xEndSliderOne < xStartSliderOne){

        moveTouchSliderOne -= 4;

        moveSlider(sliderOne.children[0], 1, moveTouchSliderOne);
    }

    if(xEndSliderOne > xStartSliderOne){

        moveTouchSliderOne += 4;

        moveSlider(sliderOne.children[0], 1, moveTouchSliderOne);
    }
}

sliderOne.children[0].ontouchend = ()=>{
    
    if (xEndSliderOne < sliderOne.offsetWidth / 2 && xStartSliderOne > sliderOne.offsetWidth / 2 && countSliderOne >= 0){

        countSliderOne--;

        moveSlider(sliderOne.children[0], countSliderOne, sliderOne.offsetWidth);

    } else if (xEndSliderOne > sliderOne.offsetWidth / 2 && xStartSliderOne < sliderOne.offsetWidth / 2 && countSliderOne < sliderOne.children.length - 1){

        countSliderOne++;

        moveSlider(sliderOne.children[0], countSliderOne, sliderOne.offsetWidth);

    } else {
        moveSlider(sliderOne.children[0], countSliderOne, sliderOne.offsetWidth);
    }

    moveTouchSliderOne = 0;
}

// Движение второго слайдера 
let countSliderTwo = 0;

sliderTwo.children[1].onpointerdown = (event)=>{

    if(event.target.id == 'slider-two-btn-one'){

        for (let i = 0; i < sliderTwo.children[1].children.length; i++) {
               
            if (sliderTwo.children[1].children[i].classList.contains('slider__btns__btn--active')) {

                sliderTwo.children[1].children[i].classList.remove('slider__btns__btn--active')
            }         
        }

        event.target.classList.add('slider__btns__btn--active');

        countSliderTwo = 1;

        moveSlider(sliderTwo.children[0], countSliderTwo, sliderOne.offsetWidth);
    }

    if(event.target.id == 'slider-two-btn-two'){
        
        for (let i = 0; i < sliderTwo.children[1].children.length; i++) {
               
            if (sliderTwo.children[1].children[i].classList.contains('slider__btns__btn--active')) {

                sliderTwo.children[1].children[i].classList.remove('slider__btns__btn--active')
            }       
        }

        event.target.classList.add('slider__btns__btn--active');

        countSliderTwo = 0;

        moveSlider(sliderTwo.children[0], countSliderTwo, sliderOne.offsetWidth);
    }

    if(event.target.id == 'slider-two-btn-three'){
        
        for (let i = 0; i < sliderTwo.children[1].children.length; i++) {
               
            if (sliderTwo.children[1].children[i].classList.contains('slider__btns__btn--active')) {

                sliderTwo.children[1].children[i].classList.remove('slider__btns__btn--active')
            }
            
        }

        event.target.classList.add('slider__btns__btn--active');

        countSliderTwo = -1;

        moveSlider(sliderTwo.children[0], countSliderTwo, sliderOne.offsetWidth);
    }
}

let xStartSliderTwo = 0;
let xEndSliderTwo = 0;
let moveTouchSliderTwo = 0;

sliderTwo.children[0].ontouchstart = (event)=>{

    xStartSliderTwo = event.touches[0].clientX;
}

sliderTwo.children[0].ontouchmove = (event)=>{

    xEndSliderTwo = event.touches[0].clientX;

    if(xEndSliderTwo < xStartSliderTwo){

        moveTouchSliderTwo -= 4;

        moveSlider(sliderTwo.children[0], 1, moveTouchSliderTwo);
    }

    if(xEndSliderTwo > xStartSliderTwo){

        moveTouchSliderTwo += 4;

        moveSlider(sliderTwo.children[0], 1, moveTouchSliderTwo);
    }
}

sliderTwo.children[0].ontouchend = ()=>{
    
    if (xEndSliderTwo < sliderTwo.offsetWidth / 2 && xStartSliderTwo > sliderTwo.offsetWidth / 2 && countSliderTwo >= 0){

        countSliderTwo--;

        moveSlider(sliderTwo.children[0], countSliderTwo, sliderTwo.offsetWidth);

    } else if (xEndSliderTwo > sliderTwo.offsetWidth / 2 && xStartSliderTwo < sliderTwo.offsetWidth / 2 && countSliderTwo < sliderTwo.children.length - 1){

        countSliderTwo++;

        moveSlider(sliderTwo.children[0], countSliderTwo, sliderTwo.offsetWidth);
        
    } else {
        moveSlider(sliderTwo.children[0], countSliderTwo, sliderTwo.offsetWidth);
    }

    moveTouchSliderTwo = 0;
}

function moveSlider(slider, count, width){

    let move = count * width;

    slider.style.transform = `translateX(${move}px)`;
}