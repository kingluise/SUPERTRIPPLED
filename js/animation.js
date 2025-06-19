// js/scroll-animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all sections (excluding the hero slider) and the footer for general reveal animation
    const sectionsToAnimate = document.querySelectorAll('section:not(.hero-slider), footer');
    // Select all service cards for their specific reveal animation
    const serviceCards = document.querySelectorAll('.service-card');

    // Options for the Intersection Observer
    // root: null means the viewport
    // rootMargin: '0px' means no extra margin around the root
    // threshold: 0.1 means the callback fires when 10% of the target is visible
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Callback function executed when observed elements intersect with the root
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is now visible in the viewport
                entry.target.classList.add('reveal'); // Add the 'reveal' class to trigger animation
            } else {
                // If the element is no longer visible (scrolled out)
                entry.target.classList.remove('reveal'); // Remove the 'reveal' class to reset for next time
            }
        });
    };

    // Create a new Intersection Observer instance with the defined callback and options
    const observer = new IntersectionObserver(callback, options);

    // Loop through each section and tell the observer to watch it
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Loop through each service card and tell the observer to watch it
    serviceCards.forEach(card => {
        observer.observe(card);
    });
});
