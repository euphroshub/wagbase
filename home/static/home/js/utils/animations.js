// Animation Utilities
const Animations = {
    // Fade in element
    fadeIn(element, duration = 300) {
        element.style.opacity = 0;
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },

    // Fade out element
    fadeOut(element, duration = 300) {
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(1 - (progress / duration), 0);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    },

    // Slide down element
    slideDown(element, duration = 300) {
        element.style.display = 'block';
        const height = element.scrollHeight;
        element.style.height = '0px';
        element.style.transition = `height ${duration}ms ease-in-out`;
        
        // Force reflow
        element.offsetHeight;
        
        element.style.height = height + 'px';
    },

    // Slide up element
    slideUp(element, duration = 300) {
        element.style.height = element.scrollHeight + 'px';
        element.style.transition = `height ${duration}ms ease-in-out`;
        
        // Force reflow
        element.offsetHeight;
        
        element.style.height = '0px';
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }
};

// Export for use in other files
window.Animations = Animations; 