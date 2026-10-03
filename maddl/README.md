# 🤝 Migasender x MADDL - Landing Page

## 📋 Descrizione

Landing page dedicata alla **partnership esclusiva** tra **Migasender** e **MADDL**.

**URL**: `www.migasender.com/maddl/`

---

## 🎯 Scopo della Pagina

Questa landing page è progettata specificamente per i clienti **MADDL** che desiderano acquistare:
1. **MIGASENDER BASIC** - Pacchetto entry-level per automazione WhatsApp
2. **AGENTE AI WHATSAPP** - Intelligenza Artificiale avanzata su WhatsApp

---

## 🛒 Prodotti & Link Checkout

### 1. MIGASENDER BASIC
- **Prezzo**: 14.90€ / 30 giorni
- **Caratteristiche**:
  - 1 WhatsApp automatizzato tramite API
  - 10.000 messaggi/mese inclusi
  - Academy gratuita con video tutorial
  - Tutorial: Invii Massivi, Recensioni Automatiche, Buoni Compleanno
  - Integrazione Facebook Ads, ChatGPT
  - Garanzia 30 giorni soddisfatto o rimborsato
- **Link Checkout**: `https://migastone.kartra.com/checkout/e8f3f4a01e5345d1ba693cbbe90b133b`

### 2. AGENTE AI WHATSAPP
- **Prezzo**: 349€ / anno
- **Caratteristiche**:
  - Agenti AI OpenAI con gestione intenti avanzata
  - TTS (Text-to-Speech) e STT (Speech-to-Text)
  - Interazioni vocali realistiche
  - Academy dedicata AI
  - WhatsApp GPT AI MODULE incluso
  - Costo AI: 0.01€/1000 parole + 100€ credito bonus
  - Garanzia 30 giorni soddisfatto o rimborsato
- **Link Checkout**: `https://migastone.kartra.com/checkout/03ca1ac0cf317c7bfe9ed3ca7f85fc97`
- **Demo AI**: WhatsApp +393382915378 (Sofia AI)

---

## 🎨 Design & Branding

### Loghi Partnership
- **Migasender Logo**: `/images/logo.png` (logo principale, 60px altezza)
- **MADDL Logo**: `/maddl/images/logo-maddl.png` (logo partner, 60px altezza)
- **Layout**: Logo Migasender | "in partnership con" | Logo MADDL

### Colori Brand
- **Blu Navy**: `#1e3a5f` (Migasender primary)
- **Blu Accent**: `#3b82f6` (highlight)
- **Verde WhatsApp**: `#25D366` (badges, icone)
- **Bianco**: `#ffffff` (background cards)
- **Grigio Chiaro**: `#f9fafb` (sezioni alternate)

### Tipografia
- **Font**: Inter (Google Fonts)
- **Pesi**: 300, 400, 500, 600, 700, 800

---

## 📐 Struttura della Pagina

### 1. Header
- Loghi in partnership (Migasender + MADDL)
- Sticky header con ombra
- Responsive con loghi più piccoli su mobile

### 2. Hero Section
- Titolo principale: "Entra nel mondo delle automazioni WhatsApp a condizioni uniche"
- Sottotitolo partnership
- 3 benefit chiave con icone (Academy, Supporto, Garanzia)
- Background con gradient e cerchio decorativo

### 3. Pricing Section (Card Prodotti)
- Layout: 2 card affiancate (desktop), stacking verticale (mobile)
- **Card BASIC**: Badge "Consigliato per Iniziare" verde
- **Card AGENTE AI**: Badge "Intelligenza Artificiale" blu
- Ogni card include:
  - Header con nome prodotto
  - Prezzo grande e visibile
  - Descrizione dettagliata con background chiaro
  - Lista features con checkmarks verdi
  - Rating con stelle
  - Bottone acquisto (ACQUISTA ORA)
  - Note aggiuntive

### 4. Trust Section
- 3 box con icone:
  - Garanzia 30 Giorni
  - Academy Inclusa
  - Supporto Dedicato

### 5. Footer
- Informazioni azienda (Migastone International SRL)
- Contatti (email, telefono)
- Link utili
- Disclaimer partnership

---

## 🔧 Funzionalità JavaScript

### Modal Controllo Linea Migasender
Per l'acquisto dell'**AGENTE AI WHATSAPP** è necessario verificare che l'utente abbia già una linea Migasender BASIC o PRO attiva.

**Flow**:
1. Click su "ACQUISTA ORA" (AGENTE AI)
2. Mostra modal: "Hai già una linea Migasender attiva?"
3. Opzioni:
   - **Sì, Procedi** → Apri checkout Kartra in nuova tab
   - **No, Torna Indietro** → Chiudi modal, torna alla pagina

**Funzioni**:
- `checkAgenteAI()` - Apre modal
- `closeAgenteAIModal()` - Chiude modal
- `proceedToCheckout()` - Apre checkout e chiude modal
- Chiusura con click fuori o tasto ESC

### Altre Funzionalità
- Smooth scroll per ancore interne
- Reveal on scroll per animazioni card
- Prevenzione double-click sui bottoni
- Tracking clicks per analytics (opzionale - tag MADDL)

---

## 📱 Responsive Design

### Desktop (>968px)
- 2 card pricing affiancate
- Loghi partnership full-size (60px)
- Hover effects attivi su card e bottoni
- Footer 3 colonne

### Tablet (768px - 968px)
- 1 card per riga (stacking)
- Loghi partnership ridimensionati
- Trust section 1 colonna
- Footer 1 colonna

### Mobile (<640px)
- Layout completamente verticale
- Loghi più piccoli (45px)
- Font-size ridotti per leggibilità
- Padding ridotti nelle card
- Bottoni touch-friendly (min 44px altezza)

---

## 📊 File Structure

```
maddl/
├── index.html          (12.7 KB) - Pagina principale
├── style.css           (12.8 KB) - Stili CSS completi
├── script.js           (4.1 KB)  - JavaScript funzionalità
├── README.md           (questo file)
└── images/
    └── logo-maddl.png  (3.5 KB)  - Logo MADDL
```

**Totale peso landing page**: ~33 KB (HTML+CSS+JS+Logo)

---

## 🚀 Deploy & URL

### URL Produzione
- **Landing Page**: `https://www.migasender.com/maddl/`
- **Sito Principale**: `https://www.migasender.com`

### Deploy
La cartella `/maddl/` deve essere caricata nella root del sito Migasender:
```
www.migasender.com/
├── index.html          (homepage principale)
├── css/
├── js/
├── images/
├── mg/                 (landing page Marketing Genius)
└── maddl/              (landing page MADDL)
    ├── index.html
    ├── style.css
    ├── script.js
    └── images/
```

### Verifica Deploy
1. Accedi a `www.migasender.com/maddl/`
2. Verifica loghi partnership visibili
3. Test bottoni acquisto:
   - BASIC → Apre checkout `e8f3f4a01e5345d1ba693cbbe90b133b`
   - AGENTE AI → Mostra modal, poi apre checkout `03ca1ac0cf317c7bfe9ed3ca7f85fc97`
4. Test responsive su mobile

---

## 🧪 Test Checklist

### Visibilità
- [ ] Loghi Migasender e MADDL visibili in header
- [ ] Divider "in partnership con" tra i loghi
- [ ] Hero section con titolo e 3 benefits
- [ ] 2 card pricing (BASIC + AGENTE AI)
- [ ] Badge colorati su entrambe le card
- [ ] Trust section con 3 box
- [ ] Footer completo con info azienda

### Funzionalità
- [ ] Click "ACQUISTA ORA" BASIC → Apre checkout Kartra (new tab)
- [ ] Click "ACQUISTA ORA" AGENTE AI → Apre modal
- [ ] Modal: "Sì, Procedi" → Apre checkout + chiude modal
- [ ] Modal: "No, Torna Indietro" → Chiude modal
- [ ] Modal: Click fuori → Chiude modal
- [ ] Modal: Tasto ESC → Chiude modal

### Responsive
- [ ] Desktop: 2 card affiancate, loghi full-size
- [ ] Mobile: 1 card per riga, loghi piccoli
- [ ] Tutti i testi leggibili su mobile
- [ ] Bottoni touch-friendly (non troppo piccoli)

### Link
- [ ] Link checkout BASIC corretto (`e8f3f4a01e5345d1ba693cbbe90b133b`)
- [ ] Link checkout AGENTE AI corretto (`03ca1ac0cf317c7bfe9ed3ca7f85fc97`)
- [ ] Link footer "Sito Principale" → migasender.com
- [ ] Link email e telefono funzionanti

---

## 📞 Contatti & Supporto

**Migastone International SRL**
- **Indirizzo**: Via 28 Luglio 212, 47893 Borgo Maggiore, San Marino
- **P.IVA**: COE SM28583
- **Email**: support@migastone.com
- **Tel**: +39 0541 1795006

**Demo AI WhatsApp**
- **Sofia AI**: +393382915378 (testa l'intelligenza artificiale)

---

## 📈 Differenze con Landing Marketing Genius

### Link Checkout Diversi
- **BASIC PACKAGE MADDL**: `e8f3f4a01e5345d1ba693cbbe90b133b`
- **BASIC PACKAGE MG**: `3c70e74ddd209f8a5f556b87591236fd`
- **AGENTE AI**: Stesso link per entrambi (`03ca1ac0cf317c7bfe9ed3ca7f85fc97`)

### Branding
- Logo MADDL diverso da logo Marketing Genius
- Testo footer: "Partnership esclusiva tra Migasender e MADDL"
- Tracking analytics con tag "MADDL"

### Struttura Identica
- Layout pagina identico
- Funzionalità JavaScript identiche
- Responsive design identico
- Trust elements identici

---

## 🎉 Conclusione

Landing page **completa e funzionale** per la partnership Migasender x MADDL.

**Caratteristiche principali**:
- ✅ Design moderno e professionale
- ✅ Branding partnership con 2 loghi
- ✅ 2 prodotti con checkout Kartra dedicati (link MADDL)
- ✅ Modal controllo prerequisiti AGENTE AI
- ✅ Responsive su tutti i dispositivi
- ✅ Garanzia 30 giorni evidenziata
- ✅ Trust elements (Academy, Supporto, Garanzia)

**La landing page è pronta per generare conversioni per i clienti MADDL! 🚀**
