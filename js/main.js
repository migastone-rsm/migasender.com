/**
 * MIGASENDER - Main JavaScript
 * Sito standalone - Gestione completa di tutte le funzionalità
 */

// Configurazione
const MIGASENDER_CONFIG = {
    formHandlerUrl: 'form-handler.php',
    messages: {
        success: 'Grazie! Il tuo messaggio è stato inviato con successo. Ti contatteremo a breve.',
        error: 'Si è verificato un errore. Riprova più tardi o contattaci direttamente al +39 0541 1795006',
        validationError: 'Per favore, correggi gli errori nel form.',
        sending: 'Invio in corso...'
    }
};

// ================================
// Funzione per controllo linea Migasender prima acquisto AGENTE AI
// ================================
function checkAgenteAI() {
    // Crea modal di conferma
    const modal = document.createElement('div');
    modal.id = 'agenteAIModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 16px;
        max-width: 500px;
        margin: 20px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <div style="margin-bottom: 20px;">
            <i class="fas fa-robot" style="font-size: 64px; color: #1e3a5f;"></i>
        </div>
        <h3 style="color: #1e3a5f; margin-bottom: 20px; font-size: 1.5rem;">${window.getTranslation('modal_ai_title')}</h3>
        <p style="margin-bottom: 30px; color: #666; line-height: 1.6;">
            ${window.getTranslation('modal_ai_text_1')}
        </p>
        <p style="margin-bottom: 30px; font-weight: 600; color: #1e3a5f; font-size: 1.1rem;">
            ${window.getTranslation('modal_ai_text_2')}
        </p>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <button onclick="proceedToAgenteAI()" style="background: linear-gradient(135deg, #1e3a5f 0%, #004aad 100%); color: white; padding: 12px 30px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s;">
                <i class="fas fa-check"></i> ${window.getTranslation('modal_ai_btn_yes')}
            </button>
            <button onclick="closeAgenteAIModal()" style="background: #e0e0e0; color: #333; padding: 12px 30px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s;">
                <i class="fas fa-times"></i> ${window.getTranslation('modal_ai_btn_no')}
            </button>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Previeni scroll del body
    document.body.style.overflow = 'hidden';
}

function proceedToAgenteAI() {
    window.open('https://migastone.kartra.com/checkout/5cf1eabdc1914980b12a91679cfebd5e', '_blank');
    closeAgenteAIModal();
}

function closeAgenteAIModal() {
    const modal = document.getElementById('agenteAIModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // Mobile Menu Toggle
    // ================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link (skip dropdown trigger — only real nav targets close)
        const navLinks = document.querySelectorAll('.nav-menu a:not(.nav-dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Dropdown toggle: prevent navigation, toggle open state on click (used for keyboard / touch)
        const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = toggle.parentElement;
                const wasOpen = parent.classList.toggle('open');
                toggle.setAttribute('aria-expanded', wasOpen ? 'true' : 'false');
                document.querySelectorAll('.nav-dropdown.open').forEach(other => {
                    if (other !== parent) {
                        other.classList.remove('open');
                        const otherToggle = other.querySelector('.nav-dropdown-toggle');
                        if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }

            if (!isClickInsideNav) {
                document.querySelectorAll('.nav-dropdown.open').forEach(d => {
                    d.classList.remove('open');
                    const t = d.querySelector('.nav-dropdown-toggle');
                    if (t) t.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }
    
    // ================================
    // FAQ Accordion
    // ================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // ================================
    // GDPR Modal
    // ================================
    const gdprLinks = document.querySelectorAll('.gdpr-link');
    const gdprModal = document.getElementById('gdprModal');
    const modalClose = document.querySelector('.modal-close');
    
    gdprLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            gdprModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            gdprModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (gdprModal) {
        gdprModal.addEventListener('click', function(e) {
            if (e.target === gdprModal) {
                gdprModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && gdprModal && gdprModal.classList.contains('active')) {
            gdprModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // ================================
    // Terms Modal
    // ================================
    const termsLinks = document.querySelectorAll('.terms-link');
    const termsModal = document.getElementById('termsModal');
    const termsModalClose = document.querySelector('.modal-close-terms');
    
    termsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            termsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (termsModalClose) {
        termsModalClose.addEventListener('click', function() {
            termsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (termsModal) {
        termsModal.addEventListener('click', function(e) {
            if (e.target === termsModal) {
                termsModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && termsModal && termsModal.classList.contains('active')) {
            termsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // ================================
    // Form Validation & AJAX Submission
    // ================================
    // Seleziona solo i form che NON sono di Kartra (escludi js_kartra_trackable_object)
    const forms = document.querySelectorAll('.contact-form:not(.js_kartra_trackable_object)');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validazione client-side
            if (!validateForm(form)) {
                showNotification(MIGASENDER_CONFIG.messages.validationError, 'error');
                return false;
            }
            
            // Get submit button
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            // Disabilita button e mostra loading
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + MIGASENDER_CONFIG.messages.sending;
            
            // Prepara dati form
            const formData = new FormData(form);
            
            // Aggiungi tipo form
            const formId = form.id;
            formData.append('form_type', formId === 'heroForm' ? 'hero' : 'contact');
            
            // Invia via AJAX
            fetch(MIGASENDER_CONFIG.formHandlerUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Ripristina button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                if (data.success) {
                    // Successo
                    showNotification(data.message || MIGASENDER_CONFIG.messages.success, 'success');
                    
                    // Reset form
                    form.reset();
                    
                    // Rimuovi errori
                    clearFormErrors(form);
                    
                    // Tracking (opzionale)
                    trackFormSubmission(formData.get('form_type'));
                    
                } else {
                    // Errore
                    showNotification(data.message || MIGASENDER_CONFIG.messages.error, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                
                // Ripristina button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                // Mostra messaggio di errore generico
                showNotification(MIGASENDER_CONFIG.messages.error, 'error');
            });
            
            return false;
        });
    });
    
    /**
     * Validazione form
     */
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        // Rimuovi errori precedenti
        clearFormErrors(form);
        
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (!input.checked) {
                    showFieldError(input, 'Questo campo è obbligatorio');
                    isValid = false;
                }
            } else if (input.type === 'email') {
                if (!input.value.trim() || !isValidEmail(input.value)) {
                    showFieldError(input, 'Inserisci un indirizzo email valido');
                    isValid = false;
                }
            } else if (input.type === 'tel') {
                if (!input.value.trim() || !isValidPhone(input.value)) {
                    showFieldError(input, 'Inserisci un numero di telefono valido');
                    isValid = false;
                }
            } else {
                if (!input.value.trim()) {
                    showFieldError(input, 'Questo campo è obbligatorio');
                    isValid = false;
                }
            }
        });
        
        return isValid;
    }
    
    /**
     * Mostra errore campo
     */
    function showFieldError(input, message) {
        const formGroup = input.closest('.form-group');
        if (!formGroup) return;
        
        // Aggiungi classe errore
        input.classList.add('field-error');
        input.style.borderColor = '#ef4444';
        
        // Crea messaggio errore
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        formGroup.appendChild(errorDiv);
        
        // Aggiungi listener per rimuovere errore
        input.addEventListener('input', function() {
            removeFieldError(input);
        }, { once: true });
    }
    
    /**
     * Rimuovi errore campo
     */
    function removeFieldError(input) {
        const formGroup = input.closest('.form-group');
        if (!formGroup) return;
        
        input.classList.remove('field-error');
        input.style.borderColor = '';
        
        const errorMsg = formGroup.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
    
    /**
     * Rimuovi tutti gli errori
     */
    function clearFormErrors(form) {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        
        const errorFields = form.querySelectorAll('.field-error');
        errorFields.forEach(field => {
            field.classList.remove('field-error');
            field.style.borderColor = '';
        });
    }
    
    /**
     * Valida email
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    /**
     * Valida telefono
     */
    function isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]{6,}$/;
        return phoneRegex.test(phone);
    }
    
    /**
     * Sistema di notifiche
     */
    function showNotification(message, type = 'info') {
        let container = document.querySelector('.notification-container');
        
        if (!container) {
            container = document.createElement('div');
            container.className = 'notification-container';
            Object.assign(container.style, {
                position: 'fixed',
                top: '100px',
                right: '20px',
                zIndex: '9999',
                maxWidth: '400px'
            });
            document.body.appendChild(container);
        }
        
        // Crea notifica
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const bgColors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6',
            warning: '#f59e0b'
        };
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle'
        };
        
        Object.assign(notification.style, {
            background: bgColors[type] || bgColors.info,
            color: '#ffffff',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            animation: 'slideInRight 0.3s ease-out',
            cursor: 'pointer'
        });
        
        notification.innerHTML = `
            <i class="fas ${icons[type] || icons.info}"></i>
            <span>${message}</span>
        `;
        
        // Click per chiudere
        notification.addEventListener('click', function() {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });
        
        container.appendChild(notification);
        
        // Auto-remove dopo 7 secondi
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => {
                    notification.remove();
                    if (container.children.length === 0) {
                        container.remove();
                    }
                }, 300);
            }
        }, 7000);
    }
    
    /**
     * Tracking conversioni (opzionale - integra con Google Analytics, etc.)
     */
    function trackFormSubmission(formType) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'event_category': 'engagement',
                'event_label': formType
            });
        }
        
        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: formType
            });
        }
        
        console.log('Form submitted:', formType);
    }
    
    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or modal trigger
            if (href === '#' || href === '#gdpr-modal' || href === '#gdpr-info') {
                return;
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ================================
    // Navbar Scroll Effect
    // ================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // ================================
    // Scroll Reveal Animation
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .pricing-card, .faq-item, .upcoming-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ================================
    // Pricing Card Hover Effect
    // ================================
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            pricingCards.forEach(otherCard => {
                if (otherCard !== card && !otherCard.classList.contains('featured')) {
                    otherCard.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            pricingCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });
    
    // ================================
    // Console Welcome Message
    // ================================
    console.log('%c🚀 Migasender Website ', 'background: #1e3a5f; color: #fff; font-size: 20px; padding: 10px;');
    console.log('%c✨ Powered by Migastone International SRL', 'background: #25D366; color: #fff; font-size: 14px; padding: 5px;');
    
});

// ================================
// Add notification animations styles
// ================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-container {
        pointer-events: none;
    }
    
    .notification {
        pointer-events: all;
    }
    
    @media (max-width: 640px) {
        .notification-container {
            left: 20px !important;
            right: 20px !important;
            max-width: none !important;
        }
    }
`;
document.head.appendChild(style);

// ================================
// Page Load Performance
// ================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('⚡ Page loaded in ' + pageLoadTime + 'ms');
    }
});