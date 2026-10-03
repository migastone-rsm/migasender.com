/**
 * Migasender x Valerio.it
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
    // Apri checkout Kartra per Agente AI in nuova finestra (Link specifico Valerio.it)
    window.open('https://migastone.kartra.com/checkout/82d3128ef49220a1f53c23b856619c90', '_blank');
    closeAgenteAIModal();
}

// Chiudi modal cliccando fuori dal contenuto
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('agenteAIModal');
    
    if (modal) {
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
    }
});

// Smooth Scroll
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
}

// Track click su bottoni acquisto
document.addEventListener('DOMContentLoaded', function() {
    // Basic Button Valerio ID
    const basicButton = document.querySelector('a[href*="275c01a13b8eaa2d7a983a640173da43"]');
    const aiButton = document.querySelector('button[onclick*="checkAgenteAI"]');

    if (basicButton) {
        basicButton.addEventListener('click', function() {
            trackPurchaseClick('MIGASENDER BASIC (Valerio)');
        });
    }

    if (aiButton) {
        aiButton.addEventListener('click', function() {
            trackPurchaseClick('AGENTE AI WHATSAPP (Valerio)');
        });
    }
});

// Animation on Scroll
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

console.log('Migasender x Valerio.it - Landing Page Loaded');
