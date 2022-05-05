import brands from './brands.js';
const arrowBtns = document.querySelectorAll('.arrowBtn');
const description = document.querySelector('.description');
const carouselTabs = [...document.querySelector('.carousel-tabs').children];
const images = document.querySelectorAll('.logotype');

const maxSteps = 5;
let step = 1;

const renderPage = (step) => {
    const currentStep = (Math.abs(step));
    
    description.innerHTML = brands[currentStep].text;
    
    carouselTabs.forEach((child,index) => {
        if(index === currentStep){
            child.classList.remove('opacity-50');
            child.classList.add('opacity-100');
        } else if(child.classList.contains('opacity-100')) {
            child.classList.remove('opacity-100');
            child.classList.add('opacity-50');
        }
    });

    images.forEach(image => image.src = brands[currentStep].img)
}

carouselTabs.forEach((child, index) => {
    child.addEventListener('click', () => {
        step = index;
        renderPage(step)
    })
})

arrowBtns.forEach(arrowBtn => {
    arrowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switch(e.target.parentNode.id){
            case 'left': step = (step-1)%maxSteps; break;
            case 'right': step = (step+1)%maxSteps; break;
            default: step; break;
        }
        renderPage(step)
    
    })
})

