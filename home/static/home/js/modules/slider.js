// Slider Module
const Slider = {
    init(selector) {
        this.slider = document.querySelector(selector);
        if (!this.slider) return;

        this.slides = this.slider.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.slideCount = this.slides.length;

        // Create navigation
        this.createNavigation();
        
        // Initialize first slide
        this.showSlide(0);
        
        // Start autoplay
        this.startAutoplay();
        
        // Bind events
        this.bindEvents();
    },

    createNavigation() {
        // Create dots
        const dots = document.createElement('div');
        dots.className = 'slider-dots';
        
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.setAttribute('data-slide', i);
            dots.appendChild(dot);
        }
        
        this.slider.appendChild(dots);
        this.dots = dots.querySelectorAll('.slider-dot');
    },

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('active');
        });
        
        // Show current slide
        this.slides[index].style.display = 'block';
        this.slides[index].classList.add('active');
        
        // Update dots
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    },

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slideCount;
        this.showSlide(next);
    },

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.showSlide(prev);
    },

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
    },

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    },

    bindEvents() {
        // Dot navigation
        this.dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-slide'));
                this.showSlide(index);
            });
        });

        // Pause autoplay on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }
};

// Export for use in other files
window.Slider = Slider; 