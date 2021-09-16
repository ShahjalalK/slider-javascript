const sliderContainer = document.querySelector('.slider-container')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')

const upButton = document.querySelector('.up-button')
const douwnButton = document.querySelector('.douwn-button')

const slideLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0
leftSlide.style.top = `-${(slideLength - 1) * 100}vh`


upButton.addEventListener('click', () => changeSlide('up'))
douwnButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (diraction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(diraction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slideLength - 1){
            activeSlideIndex = 0
        }
    }
    if(diraction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength - 1
        }
    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}