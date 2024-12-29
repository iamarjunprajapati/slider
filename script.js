const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');
let slides = 1;
let translate = 0;

rightArrow.addEventListener('click', () => {
    if (slides < 4) {
        slides += 1;
        translate -= 800;
        slider.style.transform = `translateX(${translate}px)`;
    }
    else {
        slides = 1;
        translate = 0;
        slider.style.transform = `translateX(${translate}px)`;
    }
})
leftArrow.addEventListener('click', () => {
    if (slides == 1) {
        slides = 4;
        translate = -2400;
        slider.style.transform = `translateX(${translate}px)`;
    }
    else {
        slides -= 1;
        translate+= 800;
        slider.style.transform = `translateX(${translate}px)`;
    }
})