/**
 * Migasender x MADDL
 * Landing Page JavaScript
 */

// Modal Controllo Agente AI
function checkAgenteAI() {
    const modal = document.getElementById('agenteAIModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previeni scroll body
}

function closeAgenteAIModal() {
    const modal = document.getElementById('agenteAIModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Ripristina scroll
}

function proceedToCheckout() {
    // Apri checkout Kartra per Agente AI in nuova finestra (link MADDL specifico)
    window.open('https://migastone.kartra.com/checkout/03ca1ac0cf317c7bfe9ed3ca7f85fc97', '_blank');
    closeAgenteAIModal();
}

// Chiudi modal cliccando fuori dal contenuto
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('agenteAIModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeAgenteAIModal();
        }
    });

    // Chiudi modal con tasto ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeAgenteAIModal();
        }
    });
});

// Smooth Scroll (se necessario)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Analytics / Tracking (opzionale)
function trackPurchaseClick(productName) {
    console.log('Purchase click:', productName);
    // Qui puoi aggiungere tracking Google Analytics, Facebook Pixel, etc.
    
    // Esempio Google Analytics (se implementato):
    // gtag('event', 'click', {
    //     'event_category': 'Purchase Button',
    //     'event_label': productName,
    //     'event_value': 'MADDL'
    // });
}

// Track click su bottoni acquisto
document.addEventListener('DOMContentLoaded', function() {
    const basicButton = document.querySelector('a[href*="e8f3f4a01e5345d1ba693cbbe90b133b"]');
    const aiButton = document.querySelector('button[onclick*="checkAgenteAI"]');

    if (basicButton) {
        basicButton.addEventListener('click', function() {
            trackPurchaseClick('MIGASENDER BASIC - MADDL');
        });
    }

    if (aiButton) {
        aiButton.addEventListener('click', function() {
            trackPurchaseClick('AGENTE AI WHATSAPP - MADDL');
        });
    }
});

// Animation on Scroll (opzionale)
function revealOnScroll() {
    const cards = document.querySelectorAll('.pricing-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.85) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Inizializza animazioni
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});

// Prevent double-click on purchase buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('processing')) {
                return false;
            }
            this.classList.add('processing');
            setTimeout(() => {
                this.classList.remove('processing');
            }, 2000);
        });
    });
});

console.log('Migasender x MADDL - Landing Page Loaded');
