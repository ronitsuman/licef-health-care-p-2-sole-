// app.js

document.addEventListener('DOMContentLoaded', function () {
    // Add the 'fade-in' class to elements with the 'animated' class when they come into view
    const animatedElements = document.querySelectorAll('.animated');
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });

    animatedElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});
