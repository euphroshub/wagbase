// Import components
import './components/navigation.js';
import './utils/animations.js';
import './modules/slider.js';

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    if (typeof Navigation !== 'undefined') {
        Navigation.init();
    }

    // Initialize sliders
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        if (typeof Slider !== 'undefined') {
            Slider.init(slider);
        }
    });

    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });
}); 