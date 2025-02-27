document.addEventListener('DOMContentLoaded', function() {
    // Initialize the carousel with custom options
    const heroSlider = document.querySelector('#heroSlider');
    const carousel = new bootstrap.Carousel(heroSlider, {
        interval: 3000, // Change slides every 3 seconds
        wrap: true, // Continuous loop
        keyboard: true // Allow keyboard navigation
    });
});