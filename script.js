/* ========================================
   GUAA'S WEBSITE - JAVASCRIPT
   Simple interactive features and platypus facts
   ======================================== */

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

function showRandomPlatypusFact() {
    const randomIndex = Math.floor(Math.random() * platypusFacts.length);
    console.log('🦫 Platypus Fact: ' + platypusFacts[randomIndex]);
    alert('🦫 Fun Platypus Fact: ' + platypusFacts[randomIndex]);
}

// Add a fun message to the console
console.log('%c🦫 Welcome to Guaa\'s Website! 🦫', 'font-size: 20px; color: #4fb3d9; font-weight: bold;');
console.log('%cCool that you\'re checking out the code! Keep learning and building amazing things! 💙', 'font-size: 14px; color: #001f3f;');

// Display a welcome message when page loads
window.addEventListener('load', function() {
    console.log('%c🦫 Welcome, friend! 🦫', 'font-size: 16px; color: #4fb3d9; font-weight: bold;');
    console.log('Explore the website and have fun! 💙');
});

// Keyboard Easter egg: Press 'P' to get a random platypus fact!
document.addEventListener('keypress', function(event) {
    if (event.key.toLowerCase() === 'p') {
        showRandomPlatypusFact();
    }
});

// Add smooth scrolling to hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = this.getAttribute('href');
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add hover effects to cards
document.querySelectorAll('.interest-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ========================================
   EXTRA FEATURES YOU CAN MODIFY:
   
   1. Change platypusFacts array to add more facts
   2. Modify colors in the CSS file
   3. Add more sections to the HTML
   4. Create new functions for interactivity
   
   Happy coding! 🦫💻
   ======================================== */
