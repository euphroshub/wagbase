import Navigation from './components/navigation.js';

// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    console.log('Main: DOM Content Loaded, initializing components...');
    
    try {
        // Initialize navigation
        if (typeof Navigation !== 'undefined') {
            Navigation.init();
        } else {
            console.error('Main: Navigation component not found!');
        }
        
        // Initialize sliders if they exist
        const sliders = document.querySelectorAll('.c-Slider');
        if (sliders.length > 0) {
            console.log('Main: Found sliders, initializing...');
            // Initialize your slider component here
        }
        
        // Initialize form validation if forms exist
        const forms = document.querySelectorAll('form');
        if (forms.length > 0) {
            console.log('Main: Found forms, initializing validation...');
            // Initialize your form validation here
        }
        
        // Add active class to current navigation item
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.c-Nav__link');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('is-active');
                console.log('Main: Added active class to:', linkPath);
            }
        });
        
        console.log('Main: All components initialized successfully');
    } catch (error) {
        console.error('Main: Error during initialization:', error);
    }
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Navigation();
    });
} else {
    new Navigation();
} 