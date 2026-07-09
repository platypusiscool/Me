/* ========================================
   GUAA'S WEBSITE - JAVASCRIPT
   Interactive features and smooth scrolling
   ======================================== */

// Function to smoothly scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default for hash links
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = this.getAttribute('href');
            scrollToSection(target.substring(1));
        }
    });
});

// Make CTA button in hero section work
document.querySelector('.cta-button')?.addEventListener('click', function() {
    scrollToSection('about');
});

// Make contact buttons show a message
document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.href === '#' || !this.href.includes('mailto') && !this.href.includes('http')) {
            e.preventDefault();
            alert('🌟 Feature coming soon! Check back later for more ways to connect! 🌟');
        }
    });
});

// Add a fun message to the console for people who inspect the code!
console.log('%c🌟 Welcome to Guaa\'s Website! 🌟', 'font-size: 20px; color: #4fb3d9; font-weight: bold;');
console.log('%cCool that you\'re checking out the code! Keep learning and building amazing things! 💙', 'font-size: 14px; color: #001f3f;');

// Random platypus fact function
const platypusFacts = [
    "Platypuses lay eggs instead of giving birth!",
    "Platypuses have venomous spurs (males only)!",
    "Platypuses have a duck-like bill and beaver-like tail!",
    "Platypuses are one of only two egg-laying mammals!",
    "Platypuses have 10 sex chromosomes (most animals have 2)!",
    "Platypuses are found only in Australia!",
    "Baby platypuses are called puggles!",
    "Platypuses have no stomach - their esophagus goes straight to their intestines!",
    "Platypuses glow under ultraviolet light!",
    "Platypuses have electroreceptors to find food!",
];

// Function to display a random platypus fact (can be called anytime!)
function showRandomPlatypusFact() {
    const randomIndex = Math.floor(Math.random() * platypusFacts.length);
    console.log('🌟 Platypus Fact: ' + platypusFacts[randomIndex]);
    alert('🌟 Fun Platypus Fact: ' + platypusFacts[randomIndex]);
}

// Add animation when sections come into view (fade-in effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effects to interest cards
document.querySelectorAll('.interest-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.08)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Track page scroll for fun effects
let scrollPosition = 0;
window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
});

// Display a welcome message when page loads
window.addEventListener('load', function() {
    console.log('%c🌟 Welcome, friend! 🌟', 'font-size: 16px; color: #4fb3d9; font-weight: bold;');
    console.log('Explore the website and have fun! 💙');
});

// Optional: Add a fun keyboard Easter egg
// Press 'P' to get a random platypus fact!
document.addEventListener('keypress', function(event) {
    if (event.key.toLowerCase() === 'p') {
        showRandomPlatypusFact();
    }
});

/* ========================================
   EXTRA FEATURES YOU CAN MODIFY:
   
   1. Change platypusFacts array to add more facts
   2. Modify colors in the CSS file
   3. Add more sections to the HTML
   4. Create new functions for interactivity
   5. Press 'P' for a random platypus fact!
   
   Happy coding! 🌟💻
   ======================================== */
