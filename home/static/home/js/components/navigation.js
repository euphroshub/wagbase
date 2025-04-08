// Navigation Module
const Navigation = (() => {
    // Private variables
    let navToggle;
    let navMenu;
    let body;

    // Private methods
    const init = () => {
        // Cache DOM elements
        navToggle = document.querySelector('.nav__toggle');
        navMenu = document.querySelector('.nav__menu');
        body = document.body;

        // Check if required elements exist
        if (!navToggle || !navMenu) {
            console.error('Navigation: Required elements not found!');
            return;
        }

        // Bind events
        bindEvents();
    };

    const bindEvents = () => {
        // Toggle button click
        navToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking outside
        document.addEventListener('click', handleClickOutside);

        // Close menu on window resize above mobile breakpoint
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 768) {
                    closeMenu();
                }
            }, 250);
        });
    };

    const toggleMenu = () => {
        if (navMenu.classList.contains('is-active')) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const openMenu = () => {
        navMenu.classList.add('is-active');
        navToggle.classList.add('is-active');
        body.classList.add('is-nav-open');
    };

    const closeMenu = () => {
        navMenu.classList.remove('is-active');
        navToggle.classList.remove('is-active');
        body.classList.remove('is-nav-open');
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.nav')) {
            closeMenu();
        }
    };

    // Public API
    return {
        init
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Navigation.init);
} else {
    Navigation.init();
} 