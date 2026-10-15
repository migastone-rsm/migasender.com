# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Standalone marketing site for Migasender (WhatsApp automation API) built by Migastone International SRL. Pure static HTML/CSS/Vanilla JS, hosted on Worldstream (LiteSpeed). There is no build system, no package manager and no framework. Repo: `github.com/migastone-rsm/migasender.com` (public), worked on by Oscar and Ivan.

## Common tasks

- **Run locally**: open `index.html` directly in a browser, or serve the folder (`python3 -m http.server 8000`). PHP form submission requires a PHP-capable server (`php -S localhost:8000`).
- **Deploy**: push to `main`. See "Deploy" below.
- **No tests, no linter, no build step.** "Validation" is browser DevTools plus a manual click-through.

## Deploy

Every push to `main` deploys the live site automatically; there is no manual upload step any more.

**How it works**
- `.github/workflows/deploy.yml` (GitHub Actions) checks out the repo, verifies a few required files exist, then uploads the repo root to the Worldstream FTP with `SamKirkland/FTP-Deploy-Action`. A run takes about 40 seconds.
- Target: `/public_html/` on the FTP, which is the web root of https://www.migasender.com.
- Credentials live in GitHub, never in the repo: secrets `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, and the repo **variable** `FTP_SERVER_DIR` (`/public_html/`, trailing slash required). If `FTP_SERVER_DIR` is empty the workflow succeeds but skips the upload (with a notice).
- Only `main` deploys. Other branches never touch the server, so use a branch when you want to work without publishing.
- Not uploaded: `*.md`, `.git*`, `.github/`, `.claude/`, `.env*`, `node_modules/`, `.DS_Store`. So CLAUDE.md and the handoff notes never reach the server.
- A push that changes only `*.md`, `.gitignore` or `LICENSE` does not start a deploy. To deploy anyway: GitHub > Actions > "Deploy to Worldstream FTP" > Run workflow, or `gh workflow run deploy.yml --repo migastone-rsm/migasender.com`.
- Two pushes close together queue up (concurrency group), they don't overlap.

**Incremental sync, and what that implies**
- The action keeps `/public_html/.ftp-deploy-sync-state.json` on the server: the list of files and hashes from the last deploy. It uploads only what changed since then. **Don't delete it**: without it the next run re-uploads everything (slower, not harmful).
- A file **deleted from the repo is deleted from the server** on the next deploy (if it was deployed before). Removing something from git is removing it from the live site.
- The repo is the source of truth. Don't edit files on the server via FTP: the change is invisible to the sync state and gets overwritten the next time that file changes in git. Files that exist only on the server (never in git) are left alone.
- Rollback: `git revert <commit>` and push; the revert deploys like any other change.

**Checking a deploy**
- `gh run list --repo migastone-rsm/migasender.com --limit 3` and `gh run watch <id> --repo migastone-rsm/migasender.com --exit-status`. The log line "replacing ..." lists what was uploaded.
- Then verify the live file, bypassing caches: `curl -s "https://www.migasender.com/index.html?x=$RANDOM" | cmp - index.html`.
- HTML is revalidated on each visit (ETag), but the server sends CSS with a 7-day cache, so a CSS change may need a hard refresh to show in a browser that already visited the site. If a CSS change must reach every visitor at once, add a version query to its `<link>` (e.g. `css/style.css?v=2`).

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
academy/                Customer academy (static, noindex, not linked from the site)
```

### academy/
Customer academy for Migasender, moved off Kartra (was `migastoneacademy.com/migasender`). Static pages built from the Kartra export: own `style.css`, images and downloads in `academy/media/`, videos embedded from Vimeo (one from YouTube). Open access by design, but every page carries `noindex, nofollow`, it is not in `sitemap.xml` and nothing on the main site links to it: customers get the link after purchase.
- Buttons that used to open a Kartra checkout or a dead product page carry `data-checkout="<key>"` and point to `/#contatto` as a placeholder. When the MIGAMATCH shop links arrive, replace the `href` of each `data-checkout` element (`grep -rn data-checkout academy/`).
- Vimeo embeds work only if the videos are not restricted to the old Kartra domains in Vimeo's privacy settings.

### Forms: two coexisting systems
The live hero and contact forms are **Kartra-hosted** (their `<form>` elements get class `js_kartra_trackable_object` injected by Kartra's loader). The JS submit handler in `js/main.js` deliberately skips them via `document.querySelectorAll('.contact-form:not(.js_kartra_trackable_object)')`; Kartra owns submission and analytics for those.

`form-handler.php` and the native AJAX flow (posting to `MIGASENDER_CONFIG.formHandlerUrl`) remain as a fallback for any plain `.contact-form` you add. The fallback is **not usable as shipped**:
- `.htaccess` contains a `RewriteRule` that blocks `form-handler.php` (403). It is not active on the live server today (see .htaccess below), but if it starts working a native form's POST will fail: remove that rule if you activate one.
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

### Server / .htaccess
As of 2026-10-03 the live LiteSpeed server **does not apply `.htaccess` at all** as far as can be tested: the `FilesMatch`/`Deny` blocks, the cache/GZIP blocks, and the `RewriteRule ... - [F]` blocks added in the rewrite section (hidden files except `.well-known/`, `*.md`, `form-handler.php`) all have no effect, even though the deployed file matches the repo. Likely OpenLiteSpeed (re-reads `.htaccess` only after a server restart) or `.htaccess` disabled for the vhost; pending a check with Worldstream. Until then: don't rely on `.htaccess` for access control, and test any change to it against the live site after deploy. GZIP and cache headers come from the server defaults. The HTTPS-redirect and www-canonicalization blocks are commented out: uncomment per environment, and don't enable both `force www` and `strip www`.

## Conventions

- Brand colors live as CSS custom properties at the top of `css/style.css` (`--primary-blue: #1e3a5f`, `--whatsapp-green: #25D366`, etc.). Use them rather than hex literals.
- `css/custom.css` is loaded after `style.css`: use it for late overrides; don't duplicate selectors back into `style.css`.
- External links to partner/third-party sites use `target="_blank"`; add `rel="noopener noreferrer"` for ones to untrusted origins.
- The repo carries many `*.md` files (CHANGELOG, SEO-AUDIT, TEST-*, INTEGRAZIONE-KARTRA, MIGACRM-INTEGRATION-SUMMARY, ...) used as deploy/handoff notes. They are not source of truth for behavior; the code is. Don't rewrite them as part of code changes unless asked.
