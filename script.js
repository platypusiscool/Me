/* ========================================
   GUAA'S WEBSITE - JAVASCRIPT
   Interactive features and section navigation
   ======================================== */

// Hide all sections except hero on page load
function initializeSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.classList.add('hidden');
            section.classList.remove('visible');
        } else {
            section.classList.remove('hidden');
            section.classList.add('visible');
        }
    });
}

// Show a specific section and hide all others
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            section.classList.add('visible');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            section.classList.add('hidden');
            section.classList.remove('visible');
        }
    });
}

// Add navigation link event listeners
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showSection(target);
        }
    });
});

// Make logo go back to home
document.querySelector('.logo')?.addEventListener('click', function() {
    showSection('home');
});

// Make CTA button show message
document.querySelector('.cta-button')?.addEventListener('click', function() {
    alert('🌟 Use the navigation buttons above to explore each section! 🌟');
});

// Make contact buttons show a message
document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.href === '#' || (!this.href.includes('mailto') && !this.href.includes('http'))) {
            e.preventDefault();
            alert('🌟 Feature coming soon! Check back later for more ways to connect! 🌟');
        }
    });
});

// Add a fun message to the console
console.log('%c🌟 Welcome to Guaa\'s Website! 🌟', 'font-size: 20px; color: #4fb3d9; font-weight: bold;');
console.log('%cClick navigation buttons to explore sections! Only sections you click are visible. 💙', 'font-size: 14px; color: #001f3f;');

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
    console.log('🌟 Platypus Fact: ' + platypusFacts[randomIndex]);
    alert('🌟 Fun Platypus Fact: ' + platypusFacts[randomIndex]);
}

// Add hover effects to interest cards
document.querySelectorAll('.interest-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
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

// Display a welcome message when page loads
window.addEventListener('load', function() {
    console.log('%c🌟 Welcome, friend! 🌟', 'font-size: 16px; color: #4fb3d9; font-weight: bold;');
    console.log('Explore the website! Use the navigation buttons to view each section. 💙');
});

// Keyboard Easter egg: Press 'P' to get a random platypus fact!
document.addEventListener('keypress', function(event) {
    if (event.key.toLowerCase() === 'p') {
        showRandomPlatypusFact();
    }
});

// Initialize sections on page load
window.addEventListener('DOMContentLoaded', initializeSections);
