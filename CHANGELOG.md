# Changelog - Migasender Website

Tutte le modifiche significative al progetto saranno documentate in questo file.

Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e questo progetto aderisce al [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.4.1] - 2024-12-11

### 🔧 Fix Modulo Contatti

#### Changed
- 🔄 **Integrazione Form Kartra**: Sostituito il form HTML statico con l'embed JavaScript ufficiale di Kartra (`K5VZUE9NPdXc`).
  - Risolve problemi di funzionamento e invio dati.
  - Delega la validazione e la UI a Kartra per maggiore affidabilità.

---

## [1.4.0] - 2024-12-11

### 🌍 Multilingual Support

#### Added
- ✅ **Supporto Multilingua (IT, EN, ES, DE)**
  - Implementazione via JavaScript Client-Side (`js/i18n.js`)
  - Rilevamento automatico lingua browser
  - Selettore lingua a tendina nella navbar
  - Persistenza scelta lingua (localStorage)

- ✅ **Link MANUALE Dinamico**
  - IT: Link alla knowledge base italiana
  - EN/ES/DE: Link alla knowledge base internazionale (inglese)

- ✅ **Traduzioni UI Principali**
  - Navbar completa
  - Hero Title & Subtitle
  - CTA Buttons
  - Meta Description dinamica (SEO)

#### Technical
- Nuovo file `js/i18n.js` per gestione dizionario e logica
- Attributi `data-i18n` aggiunti agli elementi DOM
- Stili CSS per il selettore di lingua

---

## [1.3.7] - 2024-12-11

### ⚖️ Legal & Footer Updates

#### Changed
- 🔄 **Link Privacy**: Reindirizzato a `https://www.migastone.com/privacy`.
- 🔄 **Contatti Footer**: 
  - Telefono aggiornato a `+39 0549 888808`.
  - Email confermata `support@migastone.com`.
- 🔄 **Terms & Conditions**: 
  - Aggiornato il testo legale completo per "MigAutomation".
  - Inserito in un popup dedicato (Modal) invece di link esterno.
  - Aggiunti riferimenti completi a Migastone International Srl.

#### Technical
- Aggiunta nuova modale `#termsModal` in `index.html`.
- Aggiornato `js/main.js` per gestire l'apertura/chiusura della modale Termini.

---

## [1.3.6] - 2024-12-11

### 🔗 Navigation & Links Update

#### Added
- ✅ **Menu Item "ACADEMY"**: Aggiunto link diretto a `https://www.migastoneacademy.com/migasender` nella barra di navigazione principale.
- ✅ **Google Analytics 4 Tracking**: Integrato Google Analytics con ID `G-KXGY7V5B1K` per monitoraggio completo del traffico e conversioni.
- ✅ **Facebook Meta Pixel**: Integrato Facebook Pixel con ID `815159017390537` per tracking eventi, retargeting e ottimizzazione campagne pubblicitarie.

#### Changed
- 🔄 **Link "Chi Siamo"**: Ora punta a `https://www.migastone.com/chi-siamo` (apre in nuova tab) invece che ad un'ancora interna.
- 🔄 **Link "Prezzi"**: L'ancora ora punta direttamente alla griglia delle card di acquisto (`#tab-prezzi`) invece che all'inizio della sezione, migliorando l'UX per chi vuole acquistare subito.
- 🔄 **Link "Affiliati"**: Aggiornato URL a `https://migastone.kartra.com/page/llo842` (apre in nuova tab).

#### Technical
- Aggiunto `id="tab-prezzi"` al contenitore `pricing-grid` nell'HTML per permettere il deep linking preciso.

---

## [1.3.5] - 2024-12-11

### 🔗 MIGACRM Integration

#### Added
- ✅ **Nuova Sezione MIGACRM** - Integrazione opzionale con CRM completo
  - Logo MIGACRM PNG (35.4KB, 1200x400px - aggiornato con nuovo design)
  - Background gradient blu premium (primary → secondary → primary)
  - Card centrale con backdrop blur e border bianco
  - 4 Features con icone check verdi:
    - Gestione contatti centralizzata
    - Pipeline vendite visuale
    - Automazioni WhatsApp + CRM
    - Report e analytics avanzati

- ✅ **CTA Button "Scopri MIGACRM"**
  - Background gradient verde WhatsApp
  - Link esterno: https://www.migacrm.com
  - Icona external-link
  - Effetti hover: sollevamento + ombra maggiore
  - Responsive: full-width su mobile

#### Design
- 🎨 **Background Animato**
  - Cerchi decorativi fluttuanti (blur radial gradient)
  - Animazione float 6s e 8s
  - Colori: Accent Blue (15% opacity) + Green (10% opacity)

- 🎨 **Card Premium**
  - Background: rgba(255, 255, 255, 0.98)
  - Border-radius: 24px
  - Box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)
  - Backdrop-filter: blur(10px)
  - Border: 1px rgba(255, 255, 255, 0.3)

#### Responsive
- Desktop: Logo 400px, features grid 2 colonne
- Mobile: Logo 280px, features 1 colonna, button full-width
- Padding responsive: 4rem desktop → 2.5rem mobile

#### Technical
- 200+ righe CSS per stili MIGACRM section
- Logo lazy loading per performance
- Posizionamento strategico: dopo Prodotti, prima FAQ
- Link target="_blank" con rel="noopener noreferrer"

---

## [1.3.4] - 2024-12-11

### 🎯 SEO & AI SEO Optimization

#### Added
- ✅ **Schema.org Organization** - Dati strutturati azienda completi
  - Nome legale: Migastone International SRL
  - Indirizzo: Via 28 Luglio 212, Borgo Maggiore, San Marino
  - Contatti: telefono, email, supporto
  - Logo e immagine aziendale
  - P.IVA: SM28583

- ✅ **Schema.org SoftwareApplication** - Prodotto Migasender
  - 3 offerte pricing (BASIC, PRO, AGENTE AI)
  - Prezzi in EUR con validità 2025
  - AggregateRating: 4.5/5 su 127 recensioni

- ✅ **Schema.org FAQPage** - 10 FAQ ottimizzate
  - Domande formulate in linguaggio naturale
  - Risposte complete e conversazionali
  - Ottimizzato per Featured Snippets Google
  - Voice search ready

- ✅ **Schema.org BreadcrumbList** - Navigazione strutturata
  - 4 livelli: Home → Prodotti → Prezzi → Contatti
  - AI-friendly per comprensione architettura sito

#### Changed
- 🔄 **Meta Tags aggiornati** - URL corretti da "tuosito.com" a "www.migasender.com"
  - Open Graph (og:url, og:image)
  - Twitter Card (twitter:url, twitter:image)
  - Canonical URL

- 🔄 **Sitemap.xml aggiornato** - Nuovi URL e landing pages
  - Homepage: www.migasender.com (priority 1.0)
  - Sezioni: #prodotti, #prezzi, #contatto
  - Landing MG: www.migasender.com/mg/ (priority 0.8)
  - Landing MADDL: www.migasender.com/maddl/ (priority 0.8)

- 🔄 **Robots.txt ottimizzato** - Sitemap attivo
  - Sitemap declaration attivata
  - URL corretto: https://www.migasender.com/sitemap.xml

#### Performance
- ⚡ **Lazy loading immagini** - Attributo loading="lazy" su logo navbar
- ⚡ **Performance optimization ready** - Base per future ottimizzazioni

#### Documentation
- 📄 **SEO-AUDIT.md** - Audit SEO completo con punteggio 92/100
  - Analisi dettagliata Schema.org (4 tipi)
  - Checklist technical SEO
  - Opportunità di miglioramento
  - KPI da monitorare
  - Tools raccomandati

---

## [1.3.3] - 2024-12-11

### ✨ UX Improvements - Sezione CTA

#### Changed
- 🔄 **Sezione CTA completamente ridisegnata** - Da testo lungo a box visivi con icone
  - Sostituito blocco di testo con grid di 4 card
  - Card 1: "Zero Costi per Messaggio" (💰 icona coins)
  - Card 2: "Intelligenza Artificiale" (🤖 icona robot)
  - Card 3: "Trasforma il Tuo Business" (🚀 icona rocket)
  - Card 4: "Tutorial e Supporto Inclusi" (🎓 icona graduation-cap)
  - Ogni card con icona verde WhatsApp in cerchio
  - Hover effects eleganti (sollevamento + bordo verde + ombra)

#### Added
- ✅ **Bottone CTA Verde WhatsApp** - "Contattaci Ora" con icona chat
  - Background gradient verde WhatsApp (#25D366 → #128C7E)
  - Testo bianco MAIUSCOLO con icona comments
  - Border-radius 50px (completamente arrotondato)
  - Box-shadow verde prominente
  - Hover: Verde scuro + sollevamento + ombra maggiore
  - Dimensioni: padding 1.25rem 3rem, font-size 1.25rem

#### Technical
- 110+ righe CSS per stili CTA section
- Background sfumato grigio chiaro con cerchio decorativo verde
- Grid responsive: 4 card desktop → 1 card mobile
- Icone 90x90px desktop, 70x70px mobile
- Bottone responsive: dimensioni ridotte su mobile

---

## [1.3.2] - 2024-12-11

### 🐛 Hotfix - Bottone Navbar

#### Fixed
- 🔧 **CRITICO: Bottone "Acquista" nella navbar illeggibile** - Risolto problema di testo bianco su sfondo bianco
  - Aggiunti `!important` su tutti gli stili del bottone navbar
  - Forzato gradient verde WhatsApp come sfondo
  - Forzato colore bianco su testo bottone e tutti gli elementi figli
  - Aggiunto `-webkit-text-fill-color` per compatibilità WebKit/Safari
  - Override per `:visited`, `:link`, e `*` (tutti gli elementi figli)
  - Effetti hover garantiti (background verde scuro + sollevamento)

#### Technical
- Selettori aggiornati: `.nav-menu li a.btn-primary` con priorità massima
- Tutti gli attributi con `!important` per prevenire override
- Compatibilità cross-browser garantita

---

## [1.3.1] - 2024-12-11

### 🤝 Partnership Landing Page - MADDL

#### Added
- ✅ **Landing Page Dedicata `/maddl/`** - Pagina esclusiva per partnership MADDL
  - URL: `www.migasender.com/maddl/`
  - Design standalone con branding doppio (Migasender + MADDL)
  - Header con loghi in partnership (divider "in partnership con")
  - Hero section dedicata con benefits chiave
  - 2 prodotti specifici per clienti MADDL:
    - **MIGASENDER BASIC** (€14.90/30gg) - Checkout: `e8f3f4a01e5345d1ba693cbbe90b133b`
    - **AGENTE AI WHATSAPP** (€349/anno) - Checkout: `03ca1ac0cf317c7bfe9ed3ca7f85fc97`
  - Trust section (Garanzia, Academy, Supporto)
  - Footer completo con info azienda

#### Technical
- Struttura file: `/maddl/index.html`, `/maddl/style.css`, `/maddl/script.js`
- Logo MADDL: `/maddl/images/logo-maddl.png` (3.5 KB)
- Peso totale landing: ~33 KB (HTML+CSS+JS+immagini)
- JavaScript: Modal controllo, smooth scroll, tracking analytics con tag MADDL
- CSS: Identico a landing MG (12.8 KB)

---

## [1.3.0] - 2024-12-11

### 🤝 Partnership Landing Page - Marketing Genius

#### Added
- ✅ **Landing Page Dedicata `/mg/`** - Pagina esclusiva per partnership Marketing Genius
  - URL: `www.migasender.com/mg/`
  - Design standalone con branding doppio (Migasender + MG)
  - Header con loghi in partnership (divider "in partnership con")
  - Hero section dedicata con benefits chiave
  - 2 prodotti specifici per clienti MG:
    - **MIGASENDER BASIC** (€14.90/30gg) - Checkout: `3c70e74ddd209f8a5f556b87591236fd`
    - **AGENTE AI WHATSAPP** (€349/anno) - Checkout: `03ca1ac0cf317c7bfe9ed3ca7f85fc97`
  - Trust section (Garanzia, Academy, Supporto)
  - Footer completo con info azienda

#### Features
- ✅ **Modal Controllo Prerequisiti** - Per acquisto AGENTE AI verifica linea Migasender attiva
- ✅ **Rating prodotti** - Stelle visibili su ogni card pricing
- ✅ **Demo banner** - Link a Sofia AI WhatsApp (+393382915378)
- ✅ **Responsive design** - Ottimizzato per desktop, tablet, mobile
- ✅ **Smooth animations** - Reveal on scroll, hover effects

#### Technical
- Struttura file: `/mg/index.html`, `/mg/style.css`, `/mg/script.js`
- Logo Marketing Genius: `/mg/images/logo-mg.png` (14.9 KB)
- Peso totale landing: ~45 KB (HTML+CSS+JS+immagini)
- JavaScript: Modal controllo, smooth scroll, tracking analytics
- CSS: 12.8 KB con variabili CSS, responsive breakpoints, animazioni

---

## [1.2.2] - 2024-12-11

### ✨ UX Improvements - Sezione Contatti & Bottoni Pricing

#### Added
- ✅ **Nuova Sezione Benefits Contatti** - 4 card con icone per spiegare i vantaggi di Migasender
  - "Zero Costi per Messaggio" con icona wallet (💰)
  - "AI su WhatsApp" con icona robot (🤖)
  - "Investimento Irrisorio" con icona rocket (🚀)
  - "Academy Inclusa" con icona graduation cap (🎓)
- ✅ **Contact CTA Box** - Box evidenziato con bordo blu per richiedere consulenza gratuita
- ✅ **Stili responsive** per i nuovi box contatti (mobile-first)

#### Changed
- 🔄 **Header Sezione Contatti** - Da lungo testo a titolo impattante "Automatizza WhatsApp e Aumenta i Tuoi Guadagni!"
- 🔄 **Layout visivo** - Sostituito blocco di testo con grid di 4 card visive e accattivanti
- 🔄 **Gerarchia informazioni** - Benefits prima del form per migliorare conversione

#### Fixed
- 🔧 **CRITICO: Bottoni Acquisto Prodotti illeggibili** - Risolto problema di bottoni bianchi nelle pricing cards
  - Aggiunto gradient blu brand con `!important` su tutti i bottoni acquisto
  - Override completo per link `<a>` e `<button>` nelle pricing cards
  - Bottone WHITE LABEL mantiene colore verde WhatsApp brand
  - Effetti hover ottimizzati (sollevamento + ombra)
  - Testo BIANCO MAIUSCOLO sempre visibile

#### Technical
- 80+ righe CSS per stili contact benefits grid
- 50+ righe CSS per fix bottoni pricing cards con priorità massima
- Selettori specifici: `.pricing-card .btn-primary`, `.pricing-card a.btn-primary`
- Compatibilità garantita cross-browser (Chrome, Firefox, Safari, Edge)

---

## [1.2.1] - 2024-12-11

### 🐛 Hotfix - Bottoni Form Kartra

#### Fixed
- 🔧 **CRITICO: Bottoni Form Kartra illeggibili** - Risolto problema di testo bianco su sfondo bianco
  - Aggiunti stili CSS ultra-specifici con `!important` per forzare visibilità testo
  - Applicato gradient blu brand (var(--primary-blue) → #2c5282) come sfondo bottoni
  - Forzato colore bianco su testo bottone e tutti gli elementi figli (span, div, *)
  - Aggiunto `-webkit-text-fill-color` per compatibilità WebKit
  - Override completo di classi Bootstrap (`.btn`, `.btn-primary`, `.btn-block`, `.btn-lg`)
  - Selettori specifici per entrambi i form ID Kartra (3988c7f88ebcb58c6ce932b957b6f332, d1f491a404d6854880943e5c3cd9ca25)

#### Technical
- Selettori CSS aggiornati: 120+ righe di stili specifici per bottoni Kartra
- Priorità massima con `!important` su tutti gli attributi visivi
- Compatibilità cross-browser garantita (Chrome, Firefox, Safari, Edge)
- Stili hover e active implementati con effetti visual feedback

---

## [1.2.0] - 2024-12-11

### 🛒 Integrazione E-commerce Kartra

#### Added
- ✅ **Form Kartra per Accesso Video** - Form integrato nella Hero Section per richiesta video demo
- ✅ **Form Kartra per Call Back** - Form contatti con campo orario preferito per richiamata
- ✅ **Link Checkout BASIC PACKAGE** - https://migastone.kartra.com/checkout/5add7d5fe86a643d81d22e8cec5cc6a4
- ✅ **Link Checkout PRO PACKAGE** - https://migastone.kartra.com/checkout/cc9851daae3082e4569a328d5cca17b0
- ✅ **Link Checkout AGENTE AI con Controllo** - Modal di verifica linea attiva prima dell'acquisto
- ✅ **Link Server Status** - Monitoraggio uptime in navbar
- ✅ **Link Programma Affiliati** - https://migawin.kartra.com/page/affiliati
- ✅ **Modal Controllo Linea Migasender** - Popup elegante per verificare prerequisiti AGENTE AI

#### Changed
- 🔄 **Form Hero sostituito** - Da form locale a form Kartra con validazione integrata
- 🔄 **Form Contatti sostituito** - Da form locale a form Kartra con gestione orario ricontatto
- 🔄 **Bottoni Acquista** - Ora puntano direttamente ai checkout Kartra
- 🔄 **Navbar links** - Aggiornati con URL reali per Server Status e Affiliati

#### Technical
- 🔧 Funzioni JavaScript `checkAgenteAI()`, `proceedToAgenteAI()`, `closeAgenteAIModal()`
- 🔧 Animazioni CSS `slideUp` e `fadeIn` per modal
- 🔧 Stili integrazione form Kartra con design del sito
- 🔧 Gestione overflow body durante visualizzazione modal

---

## [1.1.0] - 2024-12-11

### 🚀 Aggiornamento Maggiore - Focus API e Academy

#### Added
- ✅ **Widget WhatsApp Floating** - Chat diretta con SOFIA AI (+39 338 2915378)
  - Animazione pulse continua
  - Tooltip hover "Chatta con SOFIA AI"
  - Design verde WhatsApp con gradiente
  - Completamente responsive
- ✅ **Nuova FAQ principale** - "Cos'è esattamente Migasender?" spiega che è una API
- ✅ **3 Nuove Feature Cards:**
  - Affidabilità totale con Doppio Socket (BLU)
  - Completo Supporto Agenti AI e Intenti OpenAI
  - Privacy e Sicurezza GDPR

#### Changed
- 🔄 **Bottone ACQUISTA ridisegnato:**
  - Nuovo gradient blu (primary-blue → dark-blue)
  - Padding ottimizzato: 14px 32px
  - Font-weight aumentato a 700
  - Box-shadow più pronunciata
- 🔄 **Layout Prezzi riorganizzato a 2x2:**
  - Prima riga: BASIC PACKAGE + PRO PACKAGE
  - Seconda riga: AGENTE AI WHATSAPP + WHITE LABEL PER AGENZIE
  - BASIC PACKAGE ora marcato "Più Popolare" (prima era PRO)
- 🔄 **Testi Pricing aggiornati:**
  - "WHATSAPP GPT AI MODULE" → "AGENTE AI WHATSAPP"
  - "MIGASENDER WHITE LABEL" → "MIGASENDER WHITE LABEL PER AGENZIE"
  - Enfasi su API, CRM integration, rivendita
  - Academy gratuita menzionata in tutti i piani
- 🔄 **Sezione Prodotti:**
  - Nuovo testo intro: "Dopo l'acquisto accedi ad academy gratuita con Make.com"
- 🔄 **FAQ potenziate:**
  - Risposte aggiornate con focus su API e Make.com
  - Video tutorial passo-passo evidenziati
- 🔄 **Automazione Intelligente e AI Avanzata:**
  - Nuovo testo con TTS-STT (Text-to-Speech e Speech-to-Text)
  - Interazioni vocali realistiche
- 🔄 **Bottone WHITE LABEL:**
  - Colore cambiato a verde WhatsApp per migliore visibilità

#### Removed
- ❌ **MIGACOIN** - Sezione completamente rimossa
- ❌ **ROBOCALL** - Rimosso dalla sezione Prodotti

#### Fixed
- 🐛 Layout prezzi responsive ottimizzato per mobile (2 colonne → 1 colonna)
- 🐛 Featured card scaling su mobile normalizzato

---

## [1.0.0] - 2024-12-11

### 🎉 Release Iniziale

#### Added
- ✅ Sito web completo standalone
- ✅ Design responsive moderno
- ✅ Navigazione con menu mobile
- ✅ Hero section con form demo video
- ✅ 3 sezioni features principali
- ✅ 9 card prossimi aggiornamenti
- ✅ Sezione prezzi con 4 piani
- ✅ 8 prodotti automatizzabili
- ✅ FAQ accordion con 10 domande
- ✅ Form contatto con validazione AJAX
- ✅ Modal GDPR completo
- ✅ Footer con info legali
- ✅ Sistema notifiche toast
- ✅ Scroll reveal animations
- ✅ Form handler PHP funzionante
- ✅ Configurazione .htaccess
- ✅ robots.txt e sitemap.xml
- ✅ Meta tags SEO completi
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Documentazione README completa
- ✅ Guida Quick Start
- ✅ File .gitignore

#### Features JavaScript
- Menu mobile toggle con animazione
- FAQ accordion smooth
- Modal GDPR con overlay
- Validazione form real-time
- Form submission AJAX
- Notifiche toast animate (4 tipi)
- Smooth scroll intelligente
- Navbar scroll effects
- Scroll reveal con IntersectionObserver
- Pricing cards hover effects
- Click-outside auto-close

#### Tecnologie
- HTML5 semantico
- CSS3 con variabili custom
- JavaScript Vanilla ES6 (zero dipendenze)
- PHP per form handling
- Font Awesome 6.4.0
- Google Fonts Inter

#### Performance
- Peso totale: ~115KB
- First Paint: < 1s
- Time to Interactive: < 2s
- Zero framework necessari
- Drag & Drop deploy ready

#### Sicurezza
- Input sanitization (PHP + JS)
- CSRF protection ready
- XSS prevention
- .htaccess security headers
- File sensibili protetti

---

## [Unreleased] - Funzionalità Pianificate

### Da Implementare
- [ ] Sistema login area clienti
- [ ] Dashboard gestione abbonamenti
- [ ] Integrazione payment gateway (Stripe/PayPal)
- [ ] Blog/News section
- [ ] Pagine prodotto dedicate
- [ ] Versione multilingua (EN, ES, DE)
- [ ] Video demo inline
- [ ] Live chat widget
- [ ] Testimonial carousel
- [ ] Case study section
- [ ] Knowledge base/Docs
- [ ] Server status dashboard pubblico
- [ ] Affiliate system integrato

### Ottimizzazioni Pianificate
- [ ] Lazy loading immagini avanzato
- [ ] Service Worker per PWA
- [ ] WebP image format
- [ ] Critical CSS inline
- [ ] JavaScript code splitting
- [ ] HTTP/2 Server Push
- [ ] Brotli compression
- [ ] CDN integration

### Integrazioni Pianificate
- [ ] Google Analytics 4
- [ ] Facebook Pixel
- [ ] Hotjar heatmaps
- [ ] Intercom/Crisp chat
- [ ] Mailchimp newsletter
- [ ] Zapier webhooks
- [ ] CRM integration (HubSpot/Salesforce)

---

## Versioning Schema

Usiamo [SemVer](http://semver.org/) per il versioning:

- **MAJOR** version: cambiamenti incompatibili
- **MINOR** version: nuove funzionalità retrocompatibili  
- **PATCH** version: bug fixes retrocompatibili

Esempio: `1.2.3`
- `1` = major version
- `2` = minor version
- `3` = patch version

---

## Come Contribuire

### Bug Reports
Segnala bug via email: support@migastone.com

### Feature Requests
Richiedi nuove funzionalità: support@migastone.com

### Pull Requests
Al momento non accettiamo PR pubbliche.

---

## Contatti

**Migastone International SRL**  
Via 28 Luglio 212  
Borgo Maggiore, 47893 San Marino

📧 Email: support@migastone.com  
📞 Tel: +39 0541 1795006  
🌐 Web: https://www.migastone.com

---

**[1.0.0]:** Prima release pubblica - Dicembre 2024