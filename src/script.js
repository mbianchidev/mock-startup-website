// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the cloud carousel
    initCloudCarousel();
    
    // Add animation to the icon cloud
    initIconCloudAnimation();
    
    // Add counter animation for stats numbers
    initStatsCounter();
    
    // Add scroll reveal animation
    initScrollReveal();
});

// Cloud carousel functionality
function initCloudCarousel() {
    const indicators = document.querySelectorAll('.indicator');
    const cloudSlide = document.querySelector('.cloud-slide');
    let currentSlide = 0;
    
    // For future slides
    const totalSlides = indicators.length;
    
    // Set up click events for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    function updateCarousel() {
        // Remove active class from all indicators
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // Add active class to current indicator
        indicators[currentSlide].classList.add('active');
        
        // Update the transform of the slide
        // This is a placeholder for future slides
        // cloudSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Auto rotation (can be enabled for future slides)
    /*
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);
    */
}

// Icon cloud hover animations
function initIconCloudAnimation() {
    const iconItems = document.querySelectorAll('.icon-item');
    
    iconItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add a slight random rotation for a more dynamic effect
            const randomRotation = Math.random() * 8 - 4; // between -4 and 4 degrees
            item.style.transform = `translateY(-10px) scale(1.05) rotate(${randomRotation}deg)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });
}

// Stats counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    // Only animate when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetText = target.textContent;
                
                // Extract the numeric part and the suffix
                const numericMatch = targetText.match(/^([\d,]+)(\+|k|\s*Billion|\s*Million|.*)?$/);
                if (numericMatch) {
                    let [_, numericPart, suffix] = numericMatch;
                    suffix = suffix || '';
                    
                    // Remove commas for parsing
                    numericPart = numericPart.replace(/,/g, '');
                    
                    // Determine the target number
                    let targetNum = parseInt(numericPart);
                    
                    // Handle different magnitudes
                    let magnitude = 1;
                    if (suffix.includes('Billion')) {
                        magnitude = 1000000000;
                    } else if (suffix.includes('Million')) {
                        magnitude = 1000000;
                    } else if (suffix.includes('k')) {
                        magnitude = 1000;
                    }
                    
                    // Determine a suitable duration and increment based on magnitude
                    const duration = 2000; // ms
                    const frameDuration = 1000 / 60; // 60fps
                    const totalFrames = Math.round(duration / frameDuration);
                    
                    // Set up animation
                    const easeOutQuad = t => t * (2 - t);
                    let frame = 0;
                    
                    // If the targetNum is small (like 20), we count slowly
                    const increment = targetNum < 100 ? 1 : Math.max(1, Math.floor(targetNum / totalFrames));
                    
                    // Start the animation
                    let currentCount = 0;
                    
                    const counter = setInterval(() => {
                        frame++;
                        
                        // Calculate the progress using easing function
                        const progress = easeOutQuad(frame / totalFrames);
                        currentCount = Math.round(progress * targetNum);
                        
                        // Ensure we don't exceed the target
                        if (currentCount > targetNum) currentCount = targetNum;
                        
                        // Update the display
                        if (magnitude > 1 && magnitude !== 1000) {
                            // For billion/million, show with decimals and the suffix
                            target.textContent = `${(currentCount / (magnitude / 1000)).toFixed(1)}+ ${suffix.trim()}`;
                        } else {
                            // For regular numbers or thousands
                            target.textContent = currentCount.toLocaleString() + suffix;
                        }
                        
                        // Check if we've reached the target
                        if (frame === totalFrames) {
                            clearInterval(counter);
                        }
                    }, frameDuration);
                }
                
                // Only observe once
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Observe each stat number
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// Scroll reveal animations
function initScrollReveal() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    sections.forEach(section => {
        section.classList.add('reveal-section');
        observer.observe(section);
    });
    
    // Also observe testimonial cards for individual animations
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay for cascading animation
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 150);
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    testimonialCards.forEach(card => {
        card.classList.add('reveal-item');
        cardObserver.observe(card);
    });
    
    // Add scroll reveal to the icon cloud items
    const iconItems = document.querySelectorAll('.icon-item');
    
    const iconObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay in a grid-like pattern
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, (index % 4) * 100 + Math.floor(index / 4) * 150);
                iconObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    iconItems.forEach(item => {
        item.classList.add('reveal-item');
        iconObserver.observe(item);
    });
}

// Add CSS for reveal animations programmatically
function addRevealStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .reveal-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .reveal-section.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .reveal-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .reveal-item.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Call the reveal styles function
addRevealStyles();

// Handle mobile menu toggle
const setupMobileMenu = () => {
    // Create mobile menu toggle button
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const ctaButton = document.querySelector('.cta-button');
    
    // Only create mobile menu for smaller screens
    if (window.innerWidth <= 768) {
        // Insert toggle button after logo
        nav.insertBefore(menuToggle, navLinks);
        
        // Move the original CTA button into the mobile menu for smaller screens instead of cloning
        if (ctaButton && navLinks) {
            const ctaListItem = document.createElement('li');
            ctaListItem.className = 'mobile-cta-item';
            // Use the original button instead of cloning it
            ctaListItem.appendChild(ctaButton);
            navLinks.appendChild(ctaListItem);
        }
        
        // Add click event to toggle menu
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Add/remove a class to prevent body scrolling when menu is open
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when a link is clicked
        const navLinkAnchors = navLinks.querySelectorAll('a');
        navLinkAnchors.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    } else {
        // For desktop view, ensure the CTA button is back in its original position
        const mobileCta = document.querySelector('.mobile-cta-item');
        if (mobileCta && ctaButton) {
            // If we previously moved the button to mobile menu, move it back to nav
            nav.appendChild(ctaButton);
            mobileCta.remove();
        }
    }
};

// Call mobile menu setup after DOM load
window.addEventListener('DOMContentLoaded', setupMobileMenu);

// Update on window resize
window.addEventListener('resize', () => {
    // Remove existing mobile menu
    const existingToggle = document.querySelector('.menu-toggle');
    if (existingToggle) {
        existingToggle.remove();
    }
    
    // Reset any menu-related classes
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
    document.body.classList.remove('menu-open');
    
    // Re-setup based on new size
    setupMobileMenu();
});