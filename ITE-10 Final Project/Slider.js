let currentIndex = 0;
const slideWidth = 300;
    function moveSlide(direction) {
        const container = document.querySelector('.embla__container');
        const slides = document.querySelectorAll('.embla__slide');
        const totalSlides = slides.length;

        if (direction === 'left') {
            if (currentIndex > 0) {currentIndex--;}
        } 
        else if (direction === 'right') {
            if (currentIndex < totalSlides - 1) {currentIndex++;}
        }
        container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
