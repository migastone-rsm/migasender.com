# ⚡ Quick Start - Migasender

## 🚀 Deploy in 5 Minuti!

### Passo 1: Scarica i File
Assicurati di avere tutti questi file:
```
✅ index.html
✅ form-handler.php
✅ .htaccess
✅ README.md
✅ css/style.css
✅ js/main.js
✅ images/logo.png
```

---

### Passo 2: Connettiti al Tuo Hosting

**Opzione A - FileZilla (FTP):**
1. Apri FileZilla
2. Host: `ftp.tuosito.com`
3. Username: il tuo username
4. Password: la tua password
5. Porta: `21`
6. Connetti!

**Opzione B - cPanel:**
1. Login a cPanel
2. File Manager
3. Vai in `public_html`

---

### Passo 3: Carica i File

**Drag & Drop tutti i file** mantenendo la struttura:
```
public_html/
├── index.html
├── form-handler.php
├── .htaccess
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── logo.png
```

⚠️ **IMPORTANTE:** Mantieni le cartelle `css/`, `js/` e `images/`!

---

### Passo 4: Configura Email

Apri `form-handler.php` (riga 28-31) e modifica:

```php
define('MIGASENDER_ADMIN_EMAIL', 'support@migastone.com');  // ← TUA EMAIL
define('MIGASENDER_CC_EMAIL', 'o.dalvit@migastone.com');   // ← EMAIL CC (opzionale)
define('MIGASENDER_FROM_EMAIL', 'noreply@tuosito.com');    // ← Email mittente
```

**Salva e ricarica il file!**

---

### Passo 5: Testa il Sito! 🎉

1. Visita: `https://tuosito.com`
2. Compila il form di contatto
3. Controlla la tua email (anche spam!)

**✅ FATTO! Il sito è online!**

---

## 🔧 Problemi Comuni

### ❌ Email non arriva?

**Soluzione 1:** Controlla spam/junk  
**Soluzione 2:** Verifica email corretta in form-handler.php  
**Soluzione 3:** Testa PHP mail:
```php
<?php mail('test@email.com', 'Test', 'Funziona!'); ?>
```

### ❌ Stili non caricano?

**Soluzione:** Verifica path file (F12 console)  
**Fix:** Ctrl+F5 per refresh cache

### ❌ Menu mobile non funziona?

**Soluzione:** Verifica `js/main.js` caricato  
**Fix:** Controlla console errori (F12)

---

## 📝 Personalizzazioni Rapide

### Cambia Logo:
1. Sostituisci `images/logo.png`
2. Mantieni nome file uguale
3. Refresh browser

### Cambia Colori:
Apri `css/style.css` (riga 7):
```css
:root {
    --primary-blue: #TUO_COLORE;
    --whatsapp-green: #TUO_VERDE;
}
```

### Modifica Testi:
Apri `index.html` e cerca la sezione da modificare.

---

## 📊 Aggiungi Google Analytics

Incolla prima di `</head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Checklist Pre-Launch

- [ ] Tutti i file caricati
- [ ] Email configurata
- [ ] Form testato
- [ ] Mobile testato
- [ ] SSL attivo (https://)
- [ ] Analytics aggiunto (opzionale)

---

## 💬 Serve Aiuto?

📧 Email: support@migastone.com  
📞 Tel: +39 0541 1795006

**Buon lancio! 🚀**