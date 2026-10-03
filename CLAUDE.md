# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Standalone marketing site for Migasender (WhatsApp automation API) built by Migastone International SRL. Pure static HTML/CSS/Vanilla JS, hosted on Worldstream (LiteSpeed, honours `.htaccess`). There is no build system, no package manager and no framework.

## Common tasks

- **Run locally**: open `index.html` directly in a browser, or serve the folder (`python3 -m http.server 8000`). PHP form submission requires a PHP-capable server (`php -S localhost:8000`).
- **Deploy**: push to `main` on `github.com/migastone-rsm/migasender.com`. `.github/workflows/deploy.yml` uploads the repo via FTP (SamKirkland/FTP-Deploy-Action, only changed files) excluding `*.md`, `.git*`, `.github/`, `.claude/`. Secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`; target folder: repo variable `FTP_SERVER_DIR` (deploy is skipped if it is unset). Pushes touching only `*.md` don't trigger a deploy; use "Run workflow" (workflow_dispatch) to force one.
- **No tests, no linter, no build step.** "Validation" is browser DevTools plus a manual click-through.

## Architecture

The site is one main HTML page plus three independent partner landing pages. They share assets only by convention; treat each landing page as its own micro-site.

```
index.html              Main site (Italian default, 4-language switching)
css/style.css           Primary styles (~2k lines, brand variables at the top)
css/custom.css          Override layer loaded AFTER style.css
js/main.js              MIGASENDER_CONFIG at the top; nav, FAQ accordion, GDPR/Terms modals, AGENTE AI confirmation modal, native form AJAX, toasts
js/i18n.js              Translation dictionaries (it/en/es/de) + language switcher
form-handler.php        PHP endpoint for native form submissions (sends email)
mg/    maddl/  valerio/ Self-contained partnership landing pages (own HTML/CSS/JS, no i18n, own Kartra checkout IDs)
```

### Forms: two coexisting systems
The live hero and contact forms are **Kartra-hosted** (their `<form>` elements get class `js_kartra_trackable_object` injected by Kartra's loader). The JS submit handler in `js/main.js` deliberately skips them via `document.querySelectorAll('.contact-form:not(.js_kartra_trackable_object)')`; Kartra owns submission and analytics for those.

`form-handler.php` and the native AJAX flow (posting to `MIGASENDER_CONFIG.formHandlerUrl`) remain as a fallback for any plain `.contact-form` you add. The fallback is **not usable as shipped**:
- `.htaccess` tries to deny `form-handler.php` (the `FilesMatch` block at the top, Apache 2.2 `Order`/`Deny` syntax), but on the live LiteSpeed server it has no effect: `form-handler.php` and `README.md` answer 200 (checked 2026-10-03). Don't rely on that block for protection; if it is ever fixed, the native form's POST will start getting 403.
- `MIGASENDER_FROM_EMAIL` at the top of `form-handler.php` is still the placeholder `noreply@tuosito.com`; set it (and check the other `MIGASENDER_*` constants) before relying on it.

### i18n
Translations are keyed via `data-i18n="key"` (text content) and `data-i18n-html="key"` (innerHTML). The HTML always carries the Italian default text inside the element; JS swaps it on language change. Language is persisted in `localStorage` under `migasender_lang` and falls back to browser language, then `it`.

When adding/editing copy:
1. Update the visible text in `index.html` (the IT default).
2. Add/update the matching key in **all four** language objects in `js/i18n.js` (`it`, `en`, `es`, `de`). Missing keys leave stale text in the other languages.
3. For strings built dynamically in JS (e.g. the AGENTE AI modal in `js/main.js`), use `window.getTranslation('key')`.

### Pricing / checkout flow
Pricing card buttons are direct links to Kartra checkout URLs (e.g. `https://migastone.kartra.com/checkout/<id>`). The **AGENTE AI** card is special: its button calls `checkAgenteAI()` (`js/main.js`), which renders an inline confirmation modal asking the user to confirm they already have an active Migasender line before opening the Kartra checkout in a new tab. Don't replace this with a direct link: it's the prerequisite gate.

Each partner landing page (`mg/`, `maddl/`, `valerio/`) has its **own** Kartra checkout IDs distinct from the main site's; don't cross-wire them.

### Tracking & SEO
Both Google Analytics 4 (`G-KXGY7V5B1K`) and the Facebook/Meta Pixel (`815159017390537`) are inlined in `<head>` **before** the stylesheets so they fire as early as possible. Keep them at the top when reorganising `<head>`.

Schema.org JSON-LD lives in three `<script type="application/ld+json">` blocks in `index.html`: one `@graph` in `<head>` (`Organization` + `SoftwareApplication` with its `Offer`s), and `BreadcrumbList` and `FAQPage` blocks in the body, near the FAQ section. **These mirror on-page content**: when you change pricing, FAQ items, or the company description on the page, also update the matching JSON-LD, otherwise the structured data goes stale.

`sitemap.xml` references the main page (plus `#prodotti`, `#prezzi`, `#contatto` anchors) and `/mg/`, `/maddl/`, but not `/valerio/`. `robots.txt` is permissive.

### Apache / .htaccess
`.htaccess` enables GZIP, sets long Cache-Control headers per asset type, tries to block `.git`, `README.md` and `form-handler.php` (ineffective on LiteSpeed, see Forms above), and disables directory listing. The HTTPS-redirect and www-canonicalization blocks are commented out: uncomment per environment, and don't enable both `force www` and `strip www`.

## Conventions

- Brand colors live as CSS custom properties at the top of `css/style.css` (`--primary-blue: #1e3a5f`, `--whatsapp-green: #25D366`, etc.). Use them rather than hex literals.
- `css/custom.css` is loaded after `style.css`: use it for late overrides; don't duplicate selectors back into `style.css`.
- External links to partner/third-party sites use `target="_blank"`; add `rel="noopener noreferrer"` for ones to untrusted origins.
- The repo carries many `*.md` files (CHANGELOG, SEO-AUDIT, TEST-*, INTEGRAZIONE-KARTRA, MIGACRM-INTEGRATION-SUMMARY, ...) used as deploy/handoff notes. They are not source of truth for behavior; the code is. Don't rewrite them as part of code changes unless asked.
