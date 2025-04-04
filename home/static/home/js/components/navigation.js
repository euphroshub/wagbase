// Navigation Component
const Navigation = {
    init() {
        this.mobileMenu = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('nav ul');
        this.bindEvents();
    },

    bindEvents() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && this.navMenu.classList.contains('active')) {
                this.toggleMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.navMenu.classList.contains('active')) {
                this.toggleMobileMenu();
            }
        });
    },

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
}); 