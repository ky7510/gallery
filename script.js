const gallery = document.querySelector('.gallery');
const slides = document.querySelectorAll('.slide');

// Function to check and set the active slide
function updateSlides() {
    let centerX = window.innerWidth / 2;

    slides.forEach((slide) => {
        const slideCenterX = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(centerX - slideCenterX);

        if (distance < slide.offsetWidth / 2) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Run updateSlides on load and on scroll
gallery.addEventListener('scroll', updateSlides);
window.addEventListener('resize', updateSlides);

updateSlides(); // Initial run to set the active slide on page load
const ratings = document.querySelectorAll('.rating');

ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            rating.querySelectorAll('span').forEach(star => star.textContent = '⭐');
            const stars = Array.from(rating.children);
            const starIndex = stars.indexOf(e.target);
            stars.slice(0, starIndex + 1).forEach(star => star.textContent = '⭐');
            stars.slice(starIndex + 1).forEach(star => star.textContent = '☆');
        }
    });
});