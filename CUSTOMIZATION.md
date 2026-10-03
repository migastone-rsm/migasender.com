# 🎨 Guida Personalizzazione - Migasender

Questa guida ti spiega come personalizzare il sito Migasender per adattarlo alle tue esigenze.

---

## 🎨 Colori e Brand

### Cambia Colori Principali

Apri `css/style.css` e modifica le variabili CSS (righe 7-17):

```css
:root {
    /* COLORI PRINCIPALI - MODIFICA QUI */
    --primary-blue: #1e3a5f;      /* Blu navy principale */
    --secondary-blue: #2c5282;    /* Blu secondario */
    --accent-blue: #3b82f6;       /* Blu per accenti */
    --whatsapp-green: #25D366;    /* Verde WhatsApp */
    --dark-green: #128C7E;        /* Verde scuro */
    
    /* COLORI SFONDO E TESTO */
    --light-bg: #f7fafc;          /* Sfondo chiaro */
    --white: #ffffff;             /* Bianco */
    --dark-text: #1a202c;         /* Testo scuro */
    --gray-text: #4a5568;         /* Testo grigio */
    --light-gray: #e2e8f0;        /* Grigio chiaro */
}
```

### Esempi Palette Alternative:

**Palette Verde-Blu:**
```css
--primary-blue: #0f4c75;
--whatsapp-green: #3282b8;
--accent-blue: #1b9cfc;
```

**Palette Arancione-Nero:**
```css
--primary-blue: #2d3436;
--whatsapp-green: #ff7675;
--accent-blue: #fd79a8;
```

**Palette Viola-Rosa:**
```css
--primary-blue: #6c5ce7;
--whatsapp-green: #a29bfe;
--accent-blue: #fd79a8;
```

---

## 🖼️ Logo e Immagini

### Sostituisci Logo

1. Prepara il tuo logo:
   - Formato: PNG con sfondo trasparente
   - Dimensioni: 200-300px larghezza, proporzioni originali
   - Peso: < 50KB
   - Nome file: `logo.png`

2. Sostituisci il file:
   ```
   images/logo.png  ← Sostituisci questo
   ```

3. Se il logo è troppo grande/piccolo, modifica in `css/style.css`:
   ```css
   .logo img {
       height: 50px;  /* Cambia altezza qui */
       width: auto;
   }
   ```

### Aggiungi Favicon

1. Crea favicon:
   - Usa: https://favicon.io/
   - Genera da logo o testo

2. Salva in root:
   ```
   favicon.ico
   favicon-16x16.png
   favicon-32x32.png
   apple-touch-icon.png
   ```

3. Aggiungi in `<head>` di index.html:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
   <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
   ```

---

## ✏️ Testi e Contenuti

### Modifica Titolo Principale

In `index.html` cerca (riga ~42):
```html
<h1 class="hero-title">
    Il Tool Definitivo<br>
    per la Gestione di WhatsApp:<br>
    <span class="highlight">Tutto in un'unica piattaforma</span>
</h1>
```

Cambia con il tuo testo!

### Modifica Sottotitolo

Cerca (riga ~47):
```html
<p class="hero-subtitle">
    Automatizza, comunica e personalizza...
</p>
```

### Modifica Prezzi

Cerca sezione `<section id="prezzi">` e modifica:

```html
<div class="pricing-price">
    <span class="price">14.90</span>  ← Cambia prezzo
    <span class="currency">€</span>
    <span class="period">/ 30 gg</span>
</div>
```

### Aggiungi/Rimuovi FAQ

In `index.html` cerca `<div class="faq-item">`:

**Aggiungi nuova FAQ:**
```html
<div class="faq-item">
    <div class="faq-question">
        <h4>La tua domanda?</h4>
        <i class="fas fa-chevron-down"></i>
    </div>
    <div class="faq-answer">
        <p>La tua risposta qui.</p>
    </div>
</div>
```

**Rimuovi FAQ:** Elimina tutto il blocco `<div class="faq-item">...</div>`

---

## 📱 Form di Contatto

### Modifica Campi Form

In `index.html` cerca `<form class="contact-form">`.

**Aggiungi campo select:**
```html
<div class="form-group">
    <select name="servizio" required>
        <option value="">Seleziona servizio...</option>
        <option value="basic">Basic Package</option>
        <option value="pro">Pro Package</option>
        <option value="ai">AI Module</option>
    </select>
</div>
```

**Aggiungi campo numero:**
```html
<div class="form-group">
    <input type="number" name="budget" placeholder="Budget mensile (€)" min="0">
</div>
```

### Cambia Email Destinazione

In `form-handler.php` (riga 28):
```php
define('MIGASENDER_ADMIN_EMAIL', 'tuaemail@example.com');  // ← QUI
define('MIGASENDER_CC_EMAIL', 'email-copia@example.com');  // ← E QUI
```

### Aggiungi Campo al Database

Se vuoi salvare i dati, in `form-handler.php` cerca la funzione `migasender_create_db_table()` e aggiungi campo:

```php
budget decimal(10,2),  // Esempio nuovo campo budget
```

---

## 🎯 Call to Action (CTA)

### Cambia Testo Bottoni

Cerca i bottoni in `index.html`:

```html
<a href="#prezzi" class="btn btn-primary">Acquista</a>
```

Cambia "Acquista" con:
- "Inizia Ora"
- "Prova Gratis"
- "Richiedi Demo"
- "Contattaci"

### Cambia Stile Bottoni

In `css/style.css` cerca `.btn-primary`:

```css
.btn-primary {
    background: linear-gradient(135deg, #TUO_COLORE1, #TUO_COLORE2);
    padding: 15px 40px;  /* Cambia dimensione */
    font-size: 1.1rem;   /* Cambia testo */
    border-radius: 25px; /* Più arrotondato */
}
```

---

## 🔤 Font e Tipografia

### Cambia Font

Attuale: **Inter** da Google Fonts

**Per cambiare:**

1. Scegli font su [Google Fonts](https://fonts.google.com/)

2. In `index.html` sostituisci (riga ~10):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=TUO_FONT:wght@300;400;600;700&display=swap" rel="stylesheet">
   ```

3. In `css/style.css` cambia (riga ~33):
   ```css
   body {
       font-family: 'TUO_FONT', sans-serif;
   }
   ```

**Font popolari:**
- Roboto (moderno, leggibile)
- Poppins (arrotondato, friendly)
- Montserrat (elegante, geometrico)
- Open Sans (professionale, neutro)

### Dimensioni Testo

In `css/style.css`:

```css
h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);  /* Min, preferred, max */
}

body {
    font-size: 16px;  /* Base size */
    line-height: 1.6; /* Spaziatura righe */
}
```

---

## 📊 Analytics e Tracking

### Google Analytics 4

1. Crea property su [Google Analytics](https://analytics.google.com/)

2. Copia ID (es: G-XXXXXXXXXX)

3. Aggiungi prima di `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

1. Crea Pixel su [Facebook Business](https://business.facebook.com/)

2. Aggiungi prima di `</head>`:

```html
<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

### Hotjar (Heatmaps)

```html
<!-- Hotjar -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## 🌐 SEO Ottimizzazione

### Meta Tags

In `index.html` modifica:

```html
<meta name="description" content="TUA DESCRIZIONE (max 160 caratteri)">
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Open Graph -->
<meta property="og:title" content="TUO TITOLO">
<meta property="og:description" content="TUA DESCRIZIONE">
<meta property="og:image" content="https://tuosito.com/images/og-image.jpg">
<meta property="og:url" content="https://tuosito.com/">
```

### Sitemap.xml

Aggiorna `sitemap.xml` con il tuo dominio:

```xml
<loc>https://tuosito.com/</loc>
<lastmod>2024-12-11</lastmod>
```

### Robots.txt

Aggiorna `robots.txt`:

```
Sitemap: https://tuosito.com/sitemap.xml
```

---

## 🔔 Notifiche Personalizzate

### Cambia Messaggi

In `js/main.js` cerca `MIGASENDER_CONFIG`:

```javascript
const MIGASENDER_CONFIG = {
    messages: {
        success: 'Il tuo messaggio personalizzato!',
        error: 'Errore personalizzato!',
        validationError: 'Correggi i campi!',
        sending: 'Caricamento...'
    }
};
```

### Cambia Stile Notifiche

In `js/main.js` cerca `showNotification()`:

```javascript
const bgColors = {
    success: '#10b981',  // Verde
    error: '#ef4444',    // Rosso
    info: '#3b82f6',     // Blu
    warning: '#f59e0b'   // Arancione
};
```

---

## 🎬 Animazioni

### Disabilita Animazioni

In `css/style.css` commenta:

```css
/* .fade-in-up {
    animation: fadeInUp 0.6s ease-out;
} */
```

### Cambia Velocità Animazioni

```css
:root {
    --transition: all 0.3s ease;  /* Cambia durata qui */
}
```

### Aggiungi Nuove Animazioni

```css
@keyframes tua-animazione {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
}

.tuo-elemento {
    animation: tua-animazione 0.5s ease-out;
}
```

---

## 📱 Responsive Breakpoints

### Cambia Breakpoints

In `css/style.css`:

```css
/* Mobile */
@media (max-width: 640px) {
    /* Stili mobile */
}

/* Tablet */
@media (max-width: 968px) {
    /* Stili tablet */
}

/* Desktop Large */
@media (min-width: 1440px) {
    /* Stili desktop grande */
}
```

---

## 💬 Chat Widget

### Aggiungi Tawk.to

Prima di `</body>`:

```html
<!-- Tawk.to Live Chat -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

### Aggiungi Crisp

```html
<!-- Crisp Chat -->
<script type="text/javascript">
window.$crisp=[];
window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";
(function(){
d=document;s=d.createElement("script");
s.src="https://client.crisp.chat/l.js";
s.async=1;d.getElementsByTagName("head")[0].appendChild(s);
})();
</script>
```

---

## 🎓 Tips e Best Practices

### ✅ DO (Fai):
- Testa sempre su mobile dopo modifiche
- Fai backup prima di modifiche importanti
- Usa variabili CSS per colori
- Mantieni codice leggibile e commentato
- Testa form dopo modifiche

### ❌ DON'T (Non fare):
- Non modificare struttura HTML se non necessario
- Non dimenticare di aggiornare sitemap.xml
- Non usare immagini troppo grandi (max 200KB)
- Non rimuovere consensi GDPR
- Non modificare form-handler.php senza conoscere PHP

---

## 🆘 Serve Aiuto?

📧 Email: support@migastone.com  
📞 Tel: +39 0541 1795006

**Buona personalizzazione! 🎨**