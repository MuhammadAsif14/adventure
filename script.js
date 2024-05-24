let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

// Slider
let slideIndex = 0;
let intervalId;

const showSlides = () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
};

const nextSlide = () => {
    const totalSlides = document.querySelectorAll('.slide').length;
    slideIndex = (slideIndex < totalSlides - 1) ? slideIndex + 1 : 0;
    showSlides();
};

const prevSlide = () => {
    const totalSlides = document.querySelectorAll('.slide').length;
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
    showSlides();
};

const startSlideshow = () => {
    intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
};

const stopSlideshow = () => {
    clearInterval(intervalId);
};

// Event listeners for next and previous buttons
document.querySelector('.next').onclick = () => {
    nextSlide();
    stopSlideshow();
    startSlideshow();
};

document.querySelector('.prev').onclick = () => {
    prevSlide();
    stopSlideshow();
    startSlideshow();
};

// Start automatic slideshow when page loads
startSlideshow();

// Show and hide buttons on hover
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.style.opacity = 0;
prevButton.style.opacity = 0;

nextButton.addEventListener('mouseover', () => {
    nextButton.style.opacity = 1;
});
nextButton.addEventListener('mouseout', () => {
    nextButton.style.opacity = 0;
});

prevButton.addEventListener('mouseover', () => {
    prevButton.style.opacity = 1;
});
prevButton.addEventListener('mouseout', () => {
    prevButton.style.opacity = 0;
});
