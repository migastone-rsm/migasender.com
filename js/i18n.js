/**
 * MIGASENDER - Internationalization Script
 * Handles multi-language support (IT, EN, ES, DE)
 * Full Site Coverage v2.6
 */

const translations = {
    it: {
        // --- Navbar ---
        nav_products: "Prodotti",
        nav_pricing: "Prezzi",
        nav_about: "Chi Siamo",
        nav_manual: "MANUALE",
        nav_manual_legacy: "Vecchia Interfaccia",
        nav_manual_new: "Nuova Interfaccia",
        nav_manual_api: "API Docs",
        nav_status: "Stato Server",
        nav_affiliates: "Affiliati",
        nav_buy: "Acquista",

        // --- Hero ---
        hero_title_1: "Il Tool Definitivo",
        hero_title_2: "per la Gestione di WhatsApp:",
        hero_highlight: "Tutto in un'unica piattaforma",
        hero_subtitle: "Automatizza, comunica e personalizza le tue conversazioni su WhatsApp con funzionalità avanzate pensate per il tuo business.",
        hero_cta_form: "Compila il modulo qui sotto per accedere ad un video che ti illustra le potenzialità del nostro sistema e ricevere maggiori informazioni in email.",
        hero_btn: "Voglio più info!",

        // --- Hero Features ---
        feat_hero_1: "Libertà massima senza alcuna limitazione di invio messaggi, link, video, Audio, Text to speech, Speech to Text e molto altro.",
        feat_hero_2: "Canone flat e prevedibile: 10.000 messaggi inclusi a 14,90 €/mese, senza costi a invio.",
        feat_hero_3: "Collega qualsiasi numero WhatsApp personale o aziendale, business o standard senza limitazioni.",
        feat_hero_4: "Implementa l'intelligenza artificiale e crea ChatBot potenti su WhatsApp con la tua conoscenza in pochi minuti.",
        feat_hero_5: "Pannello di controllo centralizzato con utenti illimitati su un solo numero, voce AI con TTS-STT integrato ElevenLabs e cronologia completa pronta per l'analisi AI.",

        // --- Tools Section ---
        tools_title: "Strumenti Essenziali per una Comunicazione Diretta, Sicura e Organizzata",
        tools_subtitle: "Automatizza, comunica e personalizza le tue conversazioni su WhatsApp con funzionalità avanzate pensate per il tuo business",
        tool_1_title: "Gestione Completa dei Messaggi",
        tool_1_desc: "Invia e ricevi messaggi di testo, vocali, foto, video e allegati in modo semplice e veloce. Mantieni tutte le conversazioni organizzate grazie alla Chat History.",
        tool_2_title: "Automazione AI e Voce Premium con ElevenLabs",
        tool_2_desc: "Sfrutta l'IA per automatizzare le risposte e usa il sistema TTS-STT con integrazione nativa ElevenLabs: testo trasformato in voce naturale e voci clonate per interazioni realistiche.",
        tool_3_title: "Affidabilità totale con Doppio Socket",
        tool_3_desc: "Collegamento Socket a doppia istanza per una gestione sicura e affidabile, garantendo disconnessioni minime.",
        tool_4_title: "Completo Supporto Agenti AI e Intenti",
        tool_4_desc: "Supporto nativo agenti OpenAI e gestione intenti. Intercetta richieste come prenotazioni e gestiscile con precisione.",
        tool_5_title: "Privacy e Sicurezza",
        tool_5_desc: "Conformità GDPR e pieno controllo privacy. Invito automatico alla lettura della privacy policy e consenso.",

        // --- Upcoming Features ---
        up_title: "Prossimi Aggiornamenti",
        up_1_title: "Invio e Ricezione di Messaggi",
        up_1_list_html: "<li>Invio di pulsanti interattivi</li><li>Invio di sondaggi e posizioni</li><li>Reazioni con emoji</li><li>Risposta a messaggi specifici</li><li>Stato di lettura</li>",
        up_2_title: "Gestione Canali (Newsletter)",
        up_2_list_html: "<li>Creazione, modifica e cancellazione canali</li><li>Iscrizione e gestione notifiche</li>",
        up_3_title: "Status (Stories)",
        up_3_list_html: "<li>Pubblicazione status multimediali</li><li>Eliminazione status</li>",
        up_4_title: "Gestione delle Chat",
        up_4_list_html: "<li>Lista chat, archiviazione, pin messaggi</li><li>Modifica messaggi inviati</li>",
        up_5_title: "Gestione Contatti",
        up_5_list_html: "<li>Recupero lista contatti, verifica registrazione</li><li>Blocco e sblocco</li>",
        up_6_title: "Gestione Gruppi",
        up_6_list_html: "<li>Creazione gruppi, gestione partecipanti</li><li>Codici di invito</li>",
        up_7_title: "Presenza e Stato Online",
        up_7_list_html: "<li>Monitoraggio stato online/offline</li><li>Iscrizione aggiornamenti presenza</li>",
        up_8_title: "Gestione Etichette (Business)",
        up_8_list_html: "<li>Creazione e assegnazione etichette</li>",

        // --- CTA Section (Top) ---
        cta_main_title: "Automatizza WhatsApp e Aumenta i Tuoi Guadagni!",
        cta_main_sub: "Migasender semplifica l'invio di messaggi WhatsApp con un'unica piattaforma: automazione, voce AI premium, pannello multi-utente illimitato e canone flat prevedibile.",
        cta_ben_1_title: "Canone Flat Prevedibile",
        cta_ben_1_desc: "10.000 messaggi inclusi a 14,90 €/mese, senza costi a invio. Pianifica la spesa e fai crescere il volume con tranquillità.",
        cta_ben_2_title: "AI su WhatsApp",
        cta_ben_2_desc: "Porta l'intelligenza artificiale su WhatsApp, raggiungi più clienti e massimizza i profitti.",
        cta_ben_3_title: "Investimento Irrisorio",
        cta_ben_3_desc: "Lascia che Migasender trasformi la tua comunicazione con un investimento minimo.",
        cta_ben_4_title: "Academy Inclusa",
        cta_ben_4_desc: "Accedi ai tutorial passo passo per implementare potenti automazioni.",
        cta_consult_title: "Richiedi una Consulenza Gratuita",
        cta_consult_desc: "Compila il form e indicaci l'orario preferito. Ti aiuteremo a personalizzare la tua esperienza WhatsApp Automation!",
        btn_callback: "RICHIAMATEMI!",
        // CTA Extra
        cta_button: "Contattaci Ora",
        cta_footer: "Richiedi una consulenza gratuita e scopri come automatizzare il tuo WhatsApp!",

        // --- Pricing Section ---
        pricing_title: "Scegli il Pacchetto Migasender Perfetto per il Tuo Business",
        pricing_subtitle: "Automazione WhatsApp su misura: dal pacchetto base alla soluzione White Label, scegli la migliore opzione per il tuo business.",
        pricing_basic_title: "BASIC PACKAGE",
        pricing_basic_desc: "1 numero WhatsApp con gestione automatizzata API. Academy gratuita inclusa.",
        pricing_pro_title: "PRO PACKAGE",
        pricing_pro_desc: "Fino a 5 numeri WhatsApp e 50.000 messaggi/mese. Academy inclusa.",
        pricing_ai_title: "AGENTE AI WHATSAPP",
        pricing_ai_desc: "Potenzia il tuo MIGASENDER con l'IA. Ottimizza le interazioni aziendali.",
        pricing_wl_title: "MIGASENDER WHITE LABEL PER AGENZIE",
        pricing_wl_desc: "Offri un sistema di automazione WhatsApp con il tuo brand, senza limiti.",
        pricing_guarantee: "La nostra garanzia Soddisfatto o Rimborsato",
        pricing_guarantee_text: "Garanzia 30 giorni soddisfatto o rimborsato sul primo acquisto: basta inviare una mail a support@migastone.com. Per evitare i rinnovi successivi è sufficiente disdire via mail almeno 15 giorni prima della scadenza; una volta avvenuto, il rinnovo non è rimborsabile. Per gli acquisti effettuati con partita IVA non si applica il Codice del Consumo.",
        
        card_basic_sub: "1 WA + 10k/msg/m + Academy Gratuita",
        card_pro_sub: "5 WA + 50k/msg/m + Academy Gratuita",
        card_ai_sub: "Intelligenza Artificiale con Supporto Agenti OpenAI",
        card_wl_sub: "Infrastruttura completa per Agenzie",
        btn_buy: "Acquista Ora",
        btn_contact: "Contattaci",
        badge_popular: "Più Popolare",
        
        // Pricing Notes
        pricing_note_basic: "1x WhatsApp<br>Prezzo per i primi 30 giorni (Garanzia). Poi rinnovo annuale non rimborsabile.",
        pricing_note_pro: "5x WhatsApp<br>Prezzo per i primi 30 giorni (Garanzia). Poi rinnovo annuale non rimborsabile.",
        pricing_note_ai: "Primo mese (Garanzia)<br>Poi rinnovo annuale non rimborsabile.",

        // --- Products Section ---
        prod_title: "Prodotti",
        prod_subtitle: "Dopo l'acquisto accedi ad una academy gratuita che ti insegna come automatizzare con make.com WhatsApp con tutte queste funzioni:",
        prod_1_title: "Recensioni Automatiche",
        prod_1_desc: "Automatizza le recensioni. +1000% recensioni in pochi mesi sui portali social con conseguente aumento fatturato.",
        prod_2_title: "Benvenuto al Lead Vocale",
        prod_2_desc: "Invia messaggi transazionali convertiti in vocali in automatico, anche con la tua voce.",
        // prod_3 Removed
        // prod_4 Removed
        prod_5_title: "ChatBot su Whatsapp",
        prod_5_desc: "Porta la potenza di ChatGPT su WhatsApp! Risposte smart 24/7.",
        prod_6_title: "Ricorda gli Appuntamenti",
        prod_6_desc: "Collega Google Calendar e invia promemoria WhatsApp automatici. Diminuisci del 30% i no-show up e i costi connessi.",
        prod_7_title: "Benvenuto al Lead",
        prod_7_desc: "Stupisci i tuoi potenziali clienti dando il benvenuto con messaggi vocali digitalizzati e personalizzati. Aumenta del 20% le tue conversioni.",
        prod_8_title: "Lead Scoring",
        prod_8_desc: "Usa l'AI per qualificare i lead con uno score da 1 a 5. Investi il tempo solo sui lead già caldi.",

        // --- MIGACRM ---
        crm_title: "Integrazione Opzionale con MIGACRM",
        crm_desc: "Potenzia Migasender con il CRM completo per la gestione clienti!",
        crm_feat_1: "Gestione contatti centralizzata",
        crm_feat_2: "Pipeline vendite visuale",
        crm_feat_3: "Automazioni WhatsApp + CRM",
        crm_feat_4: "Report e analytics avanzati",
        crm_btn: "Scopri MIGACRM",

        // --- MIGAFLOW ---
        migaflow_title: "Whatsapp Lead Generation con IA per Leader del Network Marketing",
        migaflow_desc: "Dalla Scansione alla Vendita, Automaticamente",
        migaflow_pre_btn: "Scopri tutto sul tool che velocizza duplicazione e vendite nel network marketing",
        migaflow_btn: "Vai su MIGAFLOW.COM",

        // --- FAQ ---
        faq_title: "Domande Frequenti",
        faq_header_title: "Hai bisogno di aiuto per capire meglio?",
        faq_header_subtitle: "DOMANDE FREQUENTI",
        faq_header_desc: "Capiamo che il sistema può sembrare complicato, ma ti stupirai usandolo di quanto invece è potente e versatile, ecco qui domande e risposte comuni...",
        faq_q1: "Cos'è esattamente Migasender?",
        faq_a1: "Migasender è una API che ti permette di comandare WhatsApp in modo completamente automatizzato.",
        faq_q2: "Riesco a configurare tutto da solo o è complicato?",
        faq_a2: "Sì! Una volta acquistato l'abbonamento avrai accesso all'academy con video tutorial.",
        faq_q3: "Voglio semplicemente poter inviare messaggi alla mia lista, quanto spendo?",
        faq_a3: "Puoi acquistare l'abbonamento a 14.90€/mese. Serve anche Make.com (gratis fino a 1000 op).",
        faq_q4: "Posso disdirre gli abbonamenti?",
        faq_a4: "Sì. Entro i primi 30 giorni puoi chiedere il rimborso totale. Trascorsi i 30 giorni l'abbonamento si rinnova automaticamente: per evitare il rinnovo invia disdetta via mail almeno 15 giorni prima della scadenza; una volta avvenuto, il canone non è rimborsabile. Per gli acquisti con partita IVA non si applica il Codice del Consumo.",
        faq_q5: "Il servizio può portare al BAN del mio numero?",
        faq_a5: "Se usato con prudenza e senza spam, il servizio è affidabile. Rispetta i limiti giornalieri, invia messaggi solo a contatti consenzienti e interagisci manualmente dal cellulare di tanto in tanto.",
        faq_q6: "Come posso avere una consulenza specifica con voi?",
        faq_a6: "Puoi richiedere una consulenza specialistica con il nostro esperto di Automation inviando una mail a support@migastone.com oppure compilando il form di contatto qui sotto.",
        faq_q7: "Migareminder, Migapipeline e Migareview includono la linea Whatsapp?",
        faq_a7: "No, devi acquistare MIGASENDER ovvero una linea whatsapp per automatizzare questi servizi. Inoltre è necessario un abbonamento a www.make.com di 10 euro al mese.",
        faq_q8: "Attivare l'intelligenza artificiale sul mio Whatsapp quanto costa?",
        faq_a8_html: "Ecco la lista:<br>1. BASIC PACKAGE (14,90 €/mese)<br>2. Make.com (10 €/mese)<br>3. AGENTE AI WHATSAPP (29 €/mese)<br>Totale 53,90 €/mese + consumo AI.",
        faq_q9: "I servizi di configurazione con il tecnico sono completi?",
        faq_a9: "Il servizio include la configurazione di uno scenario o di un'istanza AI, più un training di 1 ora registrato.",
        faq_q10: "La garanzia soddisfatto o rimborsato come funziona?",
        faq_a10: "Acquisti con abbonamento mensile: entro i primi 30 giorni puoi chiedere il rimborso totale a support@migastone.com. Dopo i 30 giorni il rinnovo è automatico; per evitarlo basta inviare disdetta via mail almeno 15 giorni prima della scadenza, dopodiché non è rimborsabile. Per gli acquisti con partita IVA non si applica il Codice del Consumo.",
        faq_q11: "Il servizio DONE FOR YOU cosa include?",
        faq_a11: "Tutto quello che è necessario per rendere operativo il servizio e trasferirti le info per gestirlo in autonomia.",

        // --- Highlights ---
        hl_title: "Cosa rende MIGASENDER unico",
        hl_subtitle: "Tutto ciò che serve per portare il tuo WhatsApp a livello aziendale, in un'unica piattaforma.",
        hl_1_title: "Voce AI Premium con ElevenLabs",
        hl_1_desc: "Text-to-Speech e Speech-to-Text di livello studio, con integrazione nativa ElevenLabs e supporto al voice cloning. Trasforma in vocale qualsiasi messaggio, anche con la tua stessa voce.",
        hl_2_title: "Pannello Multi-Utente Illimitato",
        hl_2_desc: "Nuovo pannello di controllo con invio e ricezione centralizzata: utenti illimitati possono leggere e scrivere sullo stesso numero, senza il limite tipico di WhatsApp Web.",
        hl_3_title: "Cronologia Completa per Analisi AI",
        hl_3_desc: "Accedi all'intera cronologia delle conversazioni in modo strutturato e usala per analisi AI, training di chatbot, scoring lead, reportistica e auditing.",
        hl_4_title: "10.000 Messaggi a 14,90 €",
        hl_4_desc: "Un canone mensile flat e prevedibile: 10.000 messaggi inclusi a soli 14,90 €/mese, 1 numero WhatsApp e Academy gratuita per costruire automazioni con Make.com.",

        // --- Footer ---
        footer_desc_1: "Gli esempi riportati da Migastone Academy, Migastone International Srl e dagli individui menzionati come casi studio sono il risultato di un duro lavoro sul campo, applicando meticolosamente gli insegnamenti che troverai in questa Academy. Se cerchi \"guadagni facili\", non sei nel posto giusto. Diffida di tali promesse. Qui ci sarà da lavorare sodo prima di vedere i risultati che ti aspetti.",
        footer_desc_2: "Migastone Academy è di proprietà di <strong>MIGASTONE INTERNATIONAL SRL</strong>, con sede in Via 28 Luglio, 212, 47893 Borgo Maggiore, San Marino, COE SM28583. Autorizzazione N. 696 per attività di e-commerce con Licenza N. 6507.",
        footer_terms: "Termini & Condizioni",
        footer_privacy: "Privacy & Cookies",
        footer_contact: "Contattaci",

        // --- Modals ---
        modal_ai_title: "Attenzione",
        modal_ai_text_1: "Per usare AGENTE AI WHATSAPP devi avere una linea Migasender attiva (BASIC o PRO).",
        modal_ai_text_2: "Hai già una linea Migasender attiva?",
        modal_ai_btn_yes: "Sì, Procedi",
        modal_ai_btn_no: "No, Torna Indietro"
    },
    en: {
        // ... (previous EN keys)
        nav_products: "Products",
        nav_pricing: "Pricing",
        nav_about: "About Us",
        nav_manual: "MANUAL",
        nav_manual_legacy: "Legacy Interface",
        nav_manual_new: "New Interface",
        nav_manual_api: "API Docs",
        nav_status: "Server Status",
        nav_affiliates: "Affiliates",
        nav_buy: "Buy Now",
        hero_title_1: "The Ultimate Tool",
        hero_title_2: "for WhatsApp Management:",
        hero_highlight: "Everything in one platform",
        hero_subtitle: "Automate, communicate, and personalize your WhatsApp conversations with advanced features designed for your business.",
        hero_cta_form: "Fill out the form below to access a video illustrating our system's potential and receive more info via email.",
        hero_btn: "I want more info!",
        feat_hero_1: "Maximum freedom with no limits on sending messages, links, video, audio, and AI.",
        feat_hero_2: "Predictable flat fee: 10,000 messages included for €14.90/month, with no per-send cost.",
        feat_hero_3: "Connect any WhatsApp number, personal or business.",
        feat_hero_4: "Artificial Intelligence and powerful ChatBots in minutes.",
        feat_hero_5: "Centralized control panel with unlimited users on a single number, premium AI voice with TTS-STT powered by ElevenLabs, and full conversation history ready for AI analysis.",
        
        tools_title: "Essential Tools for Direct, Secure, and Organized Communication",
        tools_subtitle: "Automate, communicate, and personalize your WhatsApp conversations with advanced features designed for your business.",
        tool_1_title: "Complete Message Management",
        tool_1_desc: "Send and receive text, voice, photo, video, and attachments easily and quickly. Keep all conversations organized with Chat History.",
        tool_2_title: "AI Automation and Premium Voice with ElevenLabs",
        tool_2_desc: "Leverage AI to automate replies and use TTS-STT with native ElevenLabs integration: turn text into natural speech and clone voices for realistic, human-grade interactions.",
        tool_3_title: "Total Reliability with Double Socket",
        tool_3_desc: "Double instance Socket connection allows secure, reliable, and flexible management, ensuring minimal disconnections.",
        tool_4_title: "Full AI Agent and Intent Support",
        tool_4_desc: "Native support for OpenAI agents and intent management. Intercept requests like bookings and manage them precisely.",
        tool_5_title: "Privacy and Security",
        tool_5_desc: "Total GDPR compliance and full privacy control. Automatic invitation to read privacy policy and consent.",

        up_title: "Upcoming Updates",
        up_1_title: "Message Sending & Receiving",
        up_1_list_html: "<li>Interactive buttons</li><li>Polls and location sharing</li><li>Emoji reactions</li><li>Reply to specific messages</li><li>Read receipts</li>",
        up_2_title: "Channel Management",
        up_2_list_html: "<li>Create, edit, delete channels</li><li>Subscribe/unsubscribe notifications</li>",
        up_3_title: "Status (Stories)",
        up_3_list_html: "<li>Post text/media status</li><li>Delete status</li>",
        up_4_title: "Chat Management",
        up_4_list_html: "<li>Chat list, archive, pin messages</li><li>Edit sent messages</li>",
        up_5_title: "Contact Management",
        up_5_list_html: "<li>Contact list, check registration</li><li>Block/unblock</li>",
        up_6_title: "Group Management",
        up_6_list_html: "<li>Create groups, manage participants</li><li>Invite codes</li>",
        up_7_title: "Presence & Online Status",
        up_7_list_html: "<li>Monitor online status</li><li>Subscribe to presence updates</li>",
        up_8_title: "Label Management",
        up_8_list_html: "<li>Create and assign labels</li>",

        cta_main_title: "Automate WhatsApp and Increase Your Profits!",
        cta_main_sub: "Migasender simplifies WhatsApp messaging in a single platform: automation, premium AI voice, unlimited multi-user panel, and a predictable flat fee.",
        cta_ben_1_title: "Predictable Flat Fee",
        cta_ben_1_desc: "10,000 messages included for €14.90/month, with no per-send cost. Plan your spend and grow your volume with peace of mind.",
        cta_ben_2_title: "AI on WhatsApp",
        cta_ben_2_desc: "Bring Artificial Intelligence to WhatsApp, reach more clients and maximize profits.",
        cta_ben_3_title: "Minimal Investment",
        cta_ben_3_desc: "Boost your company today with a negligible investment.",
        cta_ben_4_title: "Academy Included",
        cta_ben_4_desc: "Access step-by-step tutorials to implement powerful automations.",
        cta_consult_title: "Request a Free Consultation",
        cta_consult_desc: "Fill out the form below and tell us your preferred time to be contacted.",
        btn_callback: "CALL ME BACK!",
        cta_button: "Contact Us Now",
        cta_footer: "Request a free consultation and discover how to automate your WhatsApp!",

        contact_title: "Automate WhatsApp and Increase Your Profits!",
        contact_sub: "Migasender simplifies WhatsApp messaging in a single platform: automation, premium AI voice, unlimited multi-user panel, and a predictable flat fee.",
        ben_1_title: "Predictable Flat Fee",
        ben_1_desc: "10,000 messages included for €14.90/month, with no per-send cost. Plan your spend and grow your volume with peace of mind.",
        ben_2_title: "AI on WhatsApp",
        ben_2_desc: "Bring Artificial Intelligence to WhatsApp, reach more clients and maximize profits.",
        ben_3_title: "Minimal Investment",
        ben_3_desc: "Boost your company today with a negligible investment.",
        ben_4_title: "Academy Included",
        ben_4_desc: "Access step-by-step tutorials to implement powerful automations.",

        pricing_title: "Choose the Perfect Migasender Package for Your Business",
        pricing_subtitle: "Tailored WhatsApp automation: from basic package to White Label solution.",
        pricing_basic_title: "BASIC PACKAGE",
        pricing_basic_desc: "1 WhatsApp number with automated API management. Includes free Academy.",
        pricing_pro_title: "PRO PACKAGE",
        pricing_pro_desc: "Up to 5 WhatsApp numbers and 50,000 messages/month. Academy included.",
        pricing_ai_title: "WHATSAPP AI AGENT",
        pricing_ai_desc: "Boost your MIGASENDER with AI. Optimize business interactions.",
        pricing_wl_title: "WHITE LABEL FOR AGENCIES",
        pricing_wl_desc: "Offer a WhatsApp automation system with your brand, without limits.",
        pricing_guarantee: "Our Satisfaction or Refund Guarantee",
        pricing_guarantee_text: "30-day money-back guarantee on your first purchase: just email support@migastone.com. To stop future renewals, send a cancellation by email at least 15 days before the renewal date; once renewed, the fee is non-refundable. Italian Consumer Code rules do not apply to purchases made by VAT-registered businesses.",
        
        card_basic_sub: "1 WA + 10k/msg/m + Free Academy",
        card_pro_sub: "5 WA + 50k/msg/m + Free Academy",
        card_ai_sub: "Artificial Intelligence with OpenAI Agents Support",
        card_wl_sub: "Complete Infrastructure for Agencies",
        btn_buy: "Buy Now",
        btn_contact: "Contact Us",
        badge_popular: "Most Popular",
        
        // Pricing Notes - UPDATED
        pricing_note_basic: "1x WhatsApp<br>Price for first 30 days (Guarantee). Then annual non-refundable renewal.",
        pricing_note_pro: "5x WhatsApp<br>Price for first 30 days (Guarantee). Then annual non-refundable renewal.",
        pricing_note_ai: "First month (Guarantee)<br>Then annual non-refundable renewal.",

        prod_title: "Products",
        prod_subtitle: "After purchase, access a free academy teaching you how to automate WhatsApp with these functions:",
        prod_1_title: "Automatic Reviews",
        prod_1_desc: "Automate reviews. +1000% reviews in a few months on social portals with consequent turnover increase.",
        prod_2_title: "Voice Lead Welcome",
        prod_2_desc: "Send transactional messages converted to voice automatically, even with your own voice.",
        prod_5_title: "ChatBot on Whatsapp",
        prod_5_desc: "Bring ChatGPT power to WhatsApp! Smart 24/7 responses.",
        prod_6_title: "Appointment Reminders",
        prod_6_desc: "Connect Google Calendar and send automatic WhatsApp reminders. Reduce no-shows and connected costs by 30%.",
        prod_7_title: "Lead Welcome",
        prod_7_desc: "Impress your potential clients by welcoming them with digitized and personalized voice messages. Increase your conversions by 20%.",
        prod_8_title: "Lead Scoring",
        prod_8_desc: "Use AI to qualify leads with a score from 1 to 5. Invest time only on hot leads.",

        crm_title: "Optional Integration with MIGACRM",
        crm_desc: "Boost Migasender with the complete CRM for client management!",
        crm_feat_1: "Centralized contact management",
        crm_feat_2: "Visual sales pipeline",
        crm_feat_3: "WhatsApp + CRM Automations",
        crm_feat_4: "Advanced reports and analytics",
        crm_btn: "Discover MIGACRM",

        // MigaFlow
        migaflow_title: "AI Whatsapp Lead Generation for Network Marketing Leaders",
        migaflow_desc: "From Scan to Sale, Automatically",
        migaflow_pre_btn: "Discover everything about the tool that speeds up duplication and sales in network marketing",
        migaflow_btn: "Go to MIGAFLOW.COM",

        faq_title: "Frequently Asked Questions",
        faq_header_title: "Need help understanding better?",
        faq_header_subtitle: "FREQUENTLY ASKED QUESTIONS",
        faq_header_desc: "We understand the system might seem complicated, but you'll be amazed at how powerful and versatile it is. Here are some common Q&As...",
        faq_q1: "What exactly is Migasender?",
        faq_a1: "Migasender is an API that allows you to command WhatsApp completely automatically.",
        faq_q2: "Can I configure it all myself?",
        faq_a2: "Yes! Once purchased, you'll have access to the academy with step-by-step video tutorials.",
        faq_q3: "How much does it cost to send messages?",
        faq_a3: "You just pay the subscription (€14.90/month). You also need a Make.com account.",
        faq_q4: "Can I cancel subscriptions?",
        faq_a4: "Yes. Within the first 30 days you can request a full refund. After 30 days the subscription auto-renews: to avoid renewal, send a cancellation by email at least 15 days before the renewal date; once renewed, the fee is non-refundable. The Italian Consumer Code does not apply to VAT-registered businesses.",
        faq_q5: "Can the service lead to a BAN?",
        faq_a5: "Used responsibly and without spam, the service is reliable. Respect daily limits, only message contacts who consented, and interact manually from your phone every now and then.",
        faq_q6: "How can I get specific consultation with you?",
        faq_a6: "You can request specialized consultation with our Automation expert by emailing support@migastone.com or filling out the contact form below.",
        faq_q7: "Do Migareminder, Migapipeline and Migareview include the Whatsapp line?",
        faq_a7: "No, you must buy MIGASENDER (a whatsapp line) to automate these services. You also need a www.make.com subscription of 10 euros per month.",
        faq_q8: "How much does enabling AI on my Whatsapp cost?",
        faq_a8_html: "Here is the list:<br>1. BASIC PACKAGE (€14.90/mo)<br>2. Make.com (€10/mo)<br>3. WHATSAPP AI AGENT (€29/mo)<br>Total €53.90/mo + AI usage.",
        faq_q9: "Are the configuration services with the technician complete?",
        faq_a9: "The service includes configuration of one automation scenario or one AI instance, plus a 1-hour recorded training.",
        faq_q10: "How does the satisfaction guarantee work?",
        faq_a10: "Buy with the monthly subscription: within 30 days, if you're not satisfied, email support@migastone.com for a full refund. After 30 days the subscription auto-renews; to avoid renewal, send cancellation by email at least 15 days before the renewal date — once renewed, it is non-refundable. The Italian Consumer Code does not apply to VAT-registered businesses.",
        faq_q11: "What does the DONE FOR YOU service include?",
        faq_a11: "Everything needed to make the service operational and transfer knowledge to manage it autonomously.",

        footer_desc_1: "The examples from Migastone Academy, Migastone International Srl, and the individuals mentioned as case studies are the result of hard work in the field, meticulously applying the teachings you will find in this Academy. If you are looking for \"easy gains,\" you are not in the right place. Beware of such promises. There will be hard work involved here before you see the results you expect.",
        footer_desc_2: "Migastone Academy is owned by <strong>MIGASTONE INTERNATIONAL SRL</strong>, located at Via 28 Luglio, 212, 47893 Borgo Maggiore, San Marino, COE SM28583. Authorization No. 696 for e-commerce activities under License No. 6507.",
        footer_terms: "Terms & Conditions",
        footer_privacy: "Privacy & Cookies",
        footer_contact: "Contact Us",

        modal_ai_title: "Attention",
        modal_ai_text_1: "To use WHATSAPP AI AGENT you must have an active Migasender line (BASIC or PRO).",
        modal_ai_text_2: "Do you already have an active Migasender line?",
        modal_ai_btn_yes: "Yes, Proceed",
        modal_ai_btn_no: "No, Go Back",

        // SEO
        seo_title: "Migasender - WhatsApp Automation for Your Business | AI Voice & Multi-User Panel",
        seo_description: "Migasender - The Ultimate Tool for WhatsApp Management. Automate, communicate, and personalize your WhatsApp conversations with premium AI voice and an unlimited multi-user panel.",
        seo_keywords: "whatsapp automation, whatsapp business, whatsapp chatbot, whatsapp ai voice, elevenlabs whatsapp, multi user whatsapp panel, migasender",
        og_title: "Migasender - WhatsApp Automation for Your Business",
        og_description: "Automate WhatsApp with AI, smart ChatBots, premium ElevenLabs voice and an unlimited multi-user panel. 10,000 messages included for €14.90/month.",

        // --- Highlights ---
        hl_title: "What makes MIGASENDER unique",
        hl_subtitle: "Everything you need to bring your WhatsApp to enterprise-grade, in a single platform.",
        hl_1_title: "Premium AI Voice with ElevenLabs",
        hl_1_desc: "Studio-grade Text-to-Speech and Speech-to-Text with native ElevenLabs integration and voice cloning support. Turn any message into voice — even with your own voice.",
        hl_2_title: "Unlimited Multi-User Panel",
        hl_2_desc: "A new control panel with centralized send/receive: unlimited users can read and write on the same number, far beyond the typical WhatsApp Web limit.",
        hl_3_title: "Full History for AI Analysis",
        hl_3_desc: "Access the entire conversation history in a structured form and use it for AI analysis, chatbot training, lead scoring, reporting, and auditing.",
        hl_4_title: "10,000 Messages for €14.90",
        hl_4_desc: "A predictable monthly flat fee: 10,000 messages included for just €14.90/month, 1 WhatsApp number and free Academy to build automations with Make.com."
    },
    es: {
        // ... (previous ES keys)
        nav_products: "Productos",
        nav_pricing: "Precios",
        nav_about: "Quiénes Somos",
        nav_manual: "MANUAL",
        nav_manual_legacy: "Interfaz Antigua",
        nav_manual_new: "Interfaz Nueva",
        nav_manual_api: "API Docs",
        nav_status: "Estado Servidor",
        nav_affiliates: "Afiliados",
        nav_buy: "Comprar",
        hero_title_1: "La Herramienta Definitiva",
        hero_title_2: "para la Gestión de WhatsApp:",
        hero_highlight: "Todo en una sola plataforma",
        hero_subtitle: "Automatiza, comunica y personaliza tus conversaciones de WhatsApp con funciones avanzadas diseñadas para tu negocio.",
        hero_cta_form: "Completa el formulario para acceder a un video sobre el potencial de nuestro sistema y recibir más información.",
        hero_btn: "¡Quiero más info!",
        feat_hero_1: "Máxima libertad sin límites de envío, enlaces, video, audio e IA.",
        feat_hero_2: "Tarifa plana predecible: 10.000 mensajes incluidos por 14,90 €/mes, sin coste por envío.",
        feat_hero_3: "Conecta cualquier número de WhatsApp, personal o empresarial.",
        feat_hero_4: "Inteligencia artificial y potentes ChatBots en minutos.",
        feat_hero_5: "Panel de control centralizado con usuarios ilimitados sobre un único número, voz IA premium con TTS-STT integrado ElevenLabs e historial completo listo para análisis de IA.",
        
        tools_title: "Herramientas Esenciales para una Comunicación Directa, Segura y Organizada",
        tools_subtitle: "Automatiza, comunica y personaliza tus conversaciones de WhatsApp con funciones avanzadas diseñadas para tu negocio",
        tool_1_title: "Gestión Completa de Mensajes",
        tool_1_desc: "Envía y recibe mensajes, fotos, videos y adjuntos fácil y rápido. Mantén todo organizado con el Historial de Chat.",
        tool_2_title: "Automatización IA y Voz Premium con ElevenLabs",
        tool_2_desc: "Usa la IA para automatizar respuestas y aprovecha el sistema TTS-STT con integración nativa ElevenLabs: convierte texto en voz natural y clona voces para interacciones realistas.",
        tool_3_title: "Fiabilidad total con Doble Socket",
        tool_3_desc: "Conexión Socket de doble instancia para una gestión segura y fiable.",
        tool_4_title: "Soporte Completo Agentes IA e Intenciones",
        tool_4_desc: "Soporte nativo de agentes OpenAI y gestión de intenciones. Intercepta y gestiona solicitudes con precisión.",
        tool_5_title: "Privacidad y Seguridad",
        tool_5_desc: "Cumplimiento total GDPR y control de privacidad. Invitación automática a leer la política de privacidad.",

        up_title: "Próximas Actualizaciones",
        up_1_title: "Envío y Recepción de Mensajes",
        up_1_list_html: "<li>Botones interactivos</li><li>Encuestas y ubicación</li><li>Reacciones emoji</li><li>Responder a mensajes</li><li>Estado de lectura</li>",
        up_2_title: "Gestión de Canales",
        up_2_list_html: "<li>Crear/editar canales</li><li>Gestión de notificaciones</li>",
        up_3_title: "Estados (Stories)",
        up_3_list_html: "<li>Publicar estados multimedia</li><li>Eliminar estados</li>",
        up_4_title: "Gestión de Chats",
        up_4_list_html: "<li>Lista, archivo, fijar mensajes</li><li>Editar mensajes</li>",
        up_5_title: "Gestión de Contactos",
        up_5_list_html: "<li>Lista contactos, verificar registro</li><li>Bloquear/desbloquear</li>",
        up_6_title: "Gestión de Grupos",
        up_6_list_html: "<li>Crear grupos, gestionar participantes</li><li>Códigos de invitación</li>",
        up_7_title: "Presencia y Estado",
        up_7_list_html: "<li>Monitor estado online</li><li>Suscripción actualizaciones</li>",
        up_8_title: "Gestión Etiquetas",
        up_8_list_html: "<li>Crear y asignar etiquetas</li>",

        cta_main_title: "¡Automatiza WhatsApp y Aumenta tus Ganancias!",
        cta_main_sub: "Migasender simplifica el envío de mensajes WhatsApp en una sola plataforma: automatización, voz IA premium, panel multi-usuario ilimitado y tarifa plana predecible.",
        cta_ben_1_title: "Tarifa Plana Predecible",
        cta_ben_1_desc: "10.000 mensajes incluidos por 14,90 €/mes, sin coste por envío. Planifica el gasto y haz crecer el volumen con tranquilidad.",
        cta_ben_2_title: "IA en WhatsApp",
        cta_ben_2_desc: "Lleva la IA a WhatsApp, llega a más clientes y maximiza beneficios.",
        cta_ben_3_title: "Inversión Mínima",
        cta_ben_3_desc: "Potencia tu empresa con una inversión irrisoria.",
        cta_ben_4_title: "Academia Incluida",
        cta_ben_4_desc: "Accede a tutoriales paso a paso para implementar automatizaciones.",
        cta_consult_title: "Solicita Consulta Gratuita",
        cta_consult_desc: "Completa el formulario y dinos tu horario preferido para ser contactado.",
        btn_callback: "¡LLÁMENME!",
        cta_button: "Contáctanos Ahora",
        cta_footer: "¡Solicita una consulta gratuita y descubre cómo automatizar tu WhatsApp!",

        contact_title: "¡Automatiza WhatsApp y Aumenta tus Ganancias!",
        contact_sub: "Migasender simplifica el envío de mensajes WhatsApp en una sola plataforma: automatización, voz IA premium, panel multi-usuario ilimitado y tarifa plana predecible.",
        ben_1_title: "Tarifa Plana Predecible",
        ben_1_desc: "10.000 mensajes incluidos por 14,90 €/mes, sin coste por envío. Planifica el gasto y haz crecer el volumen con tranquilidad.",
        ben_2_title: "IA en WhatsApp",
        ben_2_desc: "Lleva la IA a WhatsApp, llega a más clientes y maximiza beneficios.",
        ben_3_title: "Inversión Mínima",
        ben_3_desc: "Potencia tu empresa con una inversión irrisoria.",
        ben_4_title: "Academia Incluida",
        ben_4_desc: "Accede a tutoriales paso a paso para implementar automatizaciones.",

        pricing_title: "Elige el Paquete Migasender Perfecto",
        pricing_subtitle: "Automatización a medida: desde básico hasta marca blanca.",
        pricing_basic_title: "PAQUETE BÁSICO",
        pricing_basic_desc: "1 número WhatsApp, gestión automatizada. Academia gratuita.",
        pricing_pro_title: "PAQUETE PRO",
        pricing_pro_desc: "Hasta 5 números, 50.000 msgs/mes. Academia incluida.",
        pricing_ai_title: "AGENTE IA WHATSAPP",
        pricing_ai_desc: "Potencia tu MIGASENDER con IA. Optimiza interacciones.",
        pricing_wl_title: "MARCA BLANCA PARA AGENCIAS",
        pricing_wl_desc: "Ofrece automatización WhatsApp con tu marca, sin límites.",
        pricing_guarantee: "Nuestra Garantía de Satisfacción o Reembolso",
        pricing_guarantee_text: "Garantía de satisfacción o reembolso de 30 días en la primera compra: basta enviar un email a support@migastone.com. Para evitar las renovaciones futuras, envía la baja por email al menos 15 días antes del vencimiento; una vez renovado, el importe no es reembolsable. Para las compras realizadas con NIF/IVA empresarial no se aplica el Código de Consumo italiano.",
        
        card_basic_sub: "1 WA + 10k/msg/m + Academia Gratis",
        card_pro_sub: "5 WA + 50k/msg/m + Academia Gratis",
        card_ai_sub: "Inteligencia Artificial con Agentes OpenAI",
        card_wl_sub: "Infraestructura completa para Agencias",
        btn_buy: "Comprar Ahora",
        btn_contact: "Contáctanos",
        badge_popular: "Más Popular",
        
        // Pricing Notes - UPDATED
        pricing_note_basic: "1x WhatsApp<br>Precio por los primeros 30 días (Garantía). Luego renovación anual no reembolsable.",
        pricing_note_pro: "5x WhatsApp<br>precio por los primeros 30 días (Garantía). Luego renovación anual no reembolsable.",
        pricing_note_ai: "Primer mes (Garantía)<br>luego renovación anual no reembolsable.",

        prod_title: "Productos",
        prod_subtitle: "Tras la compra accedes a una academia gratuita que te enseña a automatizar WhatsApp:",
        prod_1_title: "Reseñas Automáticas",
        prod_1_desc: "Automatiza reseñas. +1000% reseñas en pocos meses en portales sociales con el consiguiente aumento de facturación.",
        prod_2_title: "Bienvenida de Voz al Lead",
        prod_2_desc: "Envía mensajes transaccionales convertidos a voz automáticamente, incluso con tu propia voz.",
        prod_5_title: "ChatBot en Whatsapp",
        prod_5_desc: "¡Poder de ChatGPT en WhatsApp! Respuestas 24/7.",
        prod_6_title: "Recordatorio Citas",
        prod_6_desc: "Conecta Google Calendar y envía recordatorios. Reduce un 30% las ausencias y costes asociados.",
        prod_7_title: "Bienvenida al Lead",
        prod_7_desc: "Sorprende a tus clientes potenciales dándoles la bienvenida con mensajes de voz digitalizados y personalizados. Aumenta tus conversiones en un 20%.",
        prod_8_title: "Lead Scoring",
        prod_8_desc: "Usa la IA para calificar leads con una puntuación de 1 a 5. Invierte tiempo solo en leads calientes.",

        crm_title: "Integración Opcional con MIGACRM",
        crm_desc: "¡Potencia Migasender con el CRM completo!",
        crm_feat_1: "Gestión contactos centralizada",
        crm_feat_2: "Pipeline ventas visual",
        crm_feat_3: "Automatizaciones WhatsApp + CRM",
        crm_feat_4: "Informes avanzados",
        crm_btn: "Descubre MIGACRM",

        // MigaFlow
        migaflow_title: "Generación de Leads en Whatsapp con IA para Líderes de Network Marketing",
        migaflow_desc: "Del Escaneo a la Venta, Automáticamente",
        migaflow_pre_btn: "Descubre todo sobre la herramienta que acelera la duplicación y las ventas en el network marketing",
        migaflow_btn: "Ir a MIGAFLOW.COM",

        faq_title: "Preguntas Frecuentes",
        faq_header_title: "¿Necesitas ayuda para entender mejor?",
        faq_header_subtitle: "PREGUNTAS FRECUENTES",
        faq_header_desc: "Entendemos que el sistema puede parecer complicado, pero te sorprenderá lo potente y versátil que es. Aquí tienes preguntas y respuestas comunes...",
        faq_q1: "¿Qué es Migasender?",
        faq_a1: "Una API para comandar WhatsApp automáticamente.",
        faq_q2: "¿Es difícil de configurar?",
        faq_a2: "¡No! Incluye academia con tutoriales paso a paso.",
        faq_q3: "¿Cuánto cuesta enviar mensajes?",
        faq_a3: "Solo pagas la suscripción mensual. Necesitas cuenta Make.com.",
        faq_q4: "¿Puedo cancelar?",
        faq_a4: "Sí. Dentro de los primeros 30 días puedes pedir el reembolso total. Pasados los 30 días la suscripción se renueva automáticamente: para evitar la renovación, envía la baja por email al menos 15 días antes del vencimiento; una vez renovada, el importe no es reembolsable. Para las compras con NIF/IVA empresarial no se aplica el Código de Consumo italiano.",
        faq_q5: "¿Riesgo de BAN?",
        faq_a5: "Si se usa con prudencia y sin spam, el servicio es fiable. Respeta los límites diarios, envía mensajes solo a contactos consentidos e interactúa manualmente desde el móvil de vez en cuando.",
        faq_q6: "¿Cómo puedo obtener una consulta específica con ustedes?",
        faq_a6: "Puedes solicitar una consulta especializada enviando un correo a support@migastone.com o completando el formulario de contacto.",
        faq_q7: "¿Migareminder, Migapipeline y Migareview incluyen la línea de Whatsapp?",
        faq_a7: "No, debes comprar MIGASENDER para automatizar estos servicios. También necesitas una suscripción a www.make.com de 10 euros al mes.",
        faq_q8: "¿Cuánto cuesta activar la inteligencia artificial en mi Whatsapp?",
        faq_a8_html: "Aquí está la lista:<br>1. PAQUETE BÁSICO (14,90 €/mes)<br>2. Make.com (10 €/mes)<br>3. AGENTE IA WHATSAPP (29 €/mes)<br>Total 53,90 €/mes + consumo de IA.",
        faq_q9: "¿Son completos los servicios de configuración con el técnico?",
        faq_a9: "El servicio incluye la configuración de un escenario de automatización o una instancia de IA, más 1 hora de capacitación grabada.",
        faq_q10: "¿Cómo funciona la garantía de satisfacción?",
        faq_a10: "Compras con suscripción mensual: dentro de los primeros 30 días puedes pedir el reembolso total a support@migastone.com. Pasados los 30 días la renovación es automática; para evitarla envía la baja por email al menos 15 días antes del vencimiento, después no es reembolsable. Para las compras con NIF/IVA empresarial no se aplica el Código de Consumo italiano.",
        faq_q11: "¿Qué incluye el servicio DONE FOR YOU?",
        faq_a11: "Todo lo necesario para que el servicio sea operativo y transferirte la información para gestionarlo de forma autónoma.",

        footer_desc_1: "Los resultados varían. Migastone Academy pertenece a Migastone International SRL.",
        footer_desc_2: "Migastone Academy es propiedad de <strong>MIGASTONE INTERNATIONAL SRL</strong>, ubicada en Via 28 Luglio, 212, 47893 Borgo Maggiore, San Marino, COE SM28583. Autorización N. 696 para comercio electrónico bajo Licencia N. 6507.",
        footer_terms: "Términos y Condiciones",
        footer_privacy: "Privacidad y Cookies",
        footer_contact: "Contáctanos",

        modal_ai_title: "Atención",
        modal_ai_text_1: "Para usar AGENTE IA necesitas una línea activa.",
        modal_ai_text_2: "¿Ya tienes una línea activa?",
        modal_ai_btn_yes: "Sí, Proceder",
        modal_ai_btn_no: "No, Volver",

        // SEO
        seo_title: "Migasender - Automatización de WhatsApp para tu Negocio | Voz IA y Panel Multi-Usuario",
        seo_description: "Migasender - La Herramienta Definitiva para la Gestión de WhatsApp. Automatiza, comunica y personaliza tus conversaciones con voz IA premium y panel multi-usuario ilimitado.",
        seo_keywords: "automatización whatsapp, whatsapp business, chatbot whatsapp, voz ia whatsapp, elevenlabs whatsapp, panel multi usuario whatsapp, migasender",
        og_title: "Migasender - Automatización de WhatsApp para tu Negocio",
        og_description: "Automatiza WhatsApp con IA, ChatBots inteligentes, voz premium ElevenLabs y panel multi-usuario ilimitado. 10.000 mensajes incluidos por 14,90 €/mes.",

        // --- Highlights ---
        hl_title: "Lo que hace único a MIGASENDER",
        hl_subtitle: "Todo lo necesario para llevar tu WhatsApp a nivel empresarial, en una sola plataforma.",
        hl_1_title: "Voz IA Premium con ElevenLabs",
        hl_1_desc: "Text-to-Speech y Speech-to-Text de nivel estudio, con integración nativa ElevenLabs y soporte de clonación de voz. Convierte cualquier mensaje en voz, incluso con tu propia voz.",
        hl_2_title: "Panel Multi-Usuario Ilimitado",
        hl_2_desc: "Nuevo panel de control con envío y recepción centralizada: usuarios ilimitados pueden leer y escribir sobre el mismo número, mucho más allá del límite típico de WhatsApp Web.",
        hl_3_title: "Historial Completo para Análisis IA",
        hl_3_desc: "Accede al historial completo de conversaciones de forma estructurada y úsalo para análisis IA, entrenamiento de chatbots, scoring de leads, reporting y auditoría.",
        hl_4_title: "10.000 Mensajes por 14,90 €",
        hl_4_desc: "Una tarifa plana mensual y predecible: 10.000 mensajes incluidos por solo 14,90 €/mes, 1 número de WhatsApp y Academy gratuita para construir automatizaciones con Make.com."
    },
    de: {
        // ... (previous DE keys)
        nav_products: "Produkte",
        nav_pricing: "Preise",
        nav_about: "Über Uns",
        nav_manual: "HANDBUCH",
        nav_manual_legacy: "Alte Oberfläche",
        nav_manual_new: "Neue Oberfläche",
        nav_manual_api: "API Docs",
        nav_status: "Serverstatus",
        nav_affiliates: "Partner",
        nav_buy: "Kaufen",
        hero_title_1: "Das ultimative Tool",
        hero_title_2: "für WhatsApp-Management:",
        hero_highlight: "Alles auf einer Plattform",
        hero_subtitle: "Automatisieren, kommunizieren und personalisieren Sie Ihre WhatsApp-Konversationen mit fortschrittlichen Funktionen für Ihr Unternehmen.",
        hero_cta_form: "Füllen Sie das Formular aus, um Zugang zu einem Video über das Potenzial unseres Systems zu erhalten und weitere Infos zu bekommen.",
        hero_btn: "Ich will mehr Infos!",
        feat_hero_1: "Maximale Freiheit ohne Limits beim Senden von Nachrichten, Links, Videos, Audio und KI.",
        feat_hero_2: "Vorhersehbare Flatrate: 10.000 Nachrichten inklusive für 14,90 €/Monat, ohne Kosten pro Versand.",
        feat_hero_3: "Verbinden Sie jede WhatsApp-Nummer, privat oder geschäftlich.",
        feat_hero_4: "Künstliche Intelligenz und leistungsstarke ChatBots in Minuten.",
        feat_hero_5: "Zentrales Control Panel mit unbegrenzten Nutzern auf einer einzigen Nummer, Premium-KI-Stimme mit TTS-STT auf Basis von ElevenLabs und vollständige Konversationshistorie für KI-Analysen.",
        
        tools_title: "Wesentliche Werkzeuge für direkte, sichere und organisierte Kommunikation",
        tools_subtitle: "Automatisieren Sie Ihre WhatsApp-Konversationen mit fortschrittlichen Funktionen.",
        tool_1_title: "Komplettes Nachrichtenmanagement",
        tool_1_desc: "Senden und empfangen Sie Nachrichten, Medien und Anhänge einfach. Chat-Verlauf inklusive.",
        tool_2_title: "KI-Automatisierung und Premium-Stimme mit ElevenLabs",
        tool_2_desc: "Nutzen Sie KI zur Automatisierung der Antworten und das TTS-STT-System mit nativer ElevenLabs-Integration: Text in natürliche Sprache umwandeln und Stimmen klonen für realistische Interaktionen.",
        tool_3_title: "Totale Zuverlässigkeit (Double Socket)",
        tool_3_desc: "Doppelte Socket-Verbindung für sicheres und stabiles Management.",
        tool_4_title: "Voller KI-Agenten & Intent Support",
        tool_4_desc: "Native Unterstützung für OpenAI-Agenten. Fangen Sie Anfragen präzise ab.",
        tool_5_title: "Datenschutz & Sicherheit",
        tool_5_desc: "DSGVO-konform. Automatische Datenschutzabfrage bei neuen Kontakten.",

        up_title: "Kommende Updates",
        up_1_title: "Nachrichten senden & empfangen",
        up_1_list_html: "<li>Interaktive Buttons</li><li>Umfragen & Standort</li><li>Emoji-Reaktionen</li><li>Auf Nachrichten antworten</li><li>Lesestatus</li>",
        up_2_title: "Kanalmanagement",
        up_2_list_html: "<li>Kanäle erstellen/bearbeiten</li><li>Benachrichtigungen verwalten</li>",
        up_3_title: "Status (Stories)",
        up_3_list_html: "<li>Medien-Status posten</li><li>Status löschen</li>",
        up_4_title: "Chat-Management",
        up_4_list_html: "<li>Chatliste, Archiv, Pinnen</li><li>Nachrichten bearbeiten</li>",
        up_5_title: "Kontaktmanagement",
        up_5_list_html: "<li>Kontaktliste, Registrierung prüfen</li><li>Blockieren/Entblocken</li>",
        up_6_title: "Gruppenmanagement",
        up_6_list_html: "<li>Gruppen erstellen, Teilnehmer</li><li>Einladungscodes</li>",
        up_7_title: "Presenza & Online-Status",
        up_7_list_html: "<li>Monitor online status</li><li>Subscribe to presence updates</li>",
        up_8_title: "Label-Management",
        up_8_list_html: "<li>Labels erstellen und zuweisen</li>",

        cta_main_title: "WhatsApp automatisieren und Gewinne steigern!",
        cta_main_sub: "Migasender vereinfacht WhatsApp-Messaging in einer einzigen Plattform: Automatisierung, Premium-KI-Stimme, Multi-User-Panel ohne Limits und vorhersehbare Flatrate.",
        cta_ben_1_title: "Vorhersehbare Flatrate",
        cta_ben_1_desc: "10.000 Nachrichten inklusive für 14,90 €/Monat, ohne Kosten pro Versand. Planen Sie Ihre Ausgaben und skalieren Sie das Volumen entspannt.",
        cta_ben_2_title: "KI auf WhatsApp",
        cta_ben_2_desc: "Bringen Sie KI zu WhatsApp und maximieren Sie Gewinne.",
        cta_ben_3_title: "Minimale Investition",
        cta_ben_3_desc: "Boosten Sie Ihr Unternehmen günstig.",
        cta_ben_4_title: "Academy Inklusive",
        cta_ben_4_desc: "Schritt-für-Schritt-Tutorials für Automatisierungen.",
        cta_consult_title: "Kostenlose Beratung anfordern",
        cta_consult_desc: "Füllen Sie das Formular aus für einen Rückruf.",
        btn_callback: "RÜCKRUF ANFORDERN!",
        // CTA Extra
        cta_button: "Jetzt Kontaktieren",
        cta_footer: "Fordern Sie eine kostenlose Beratung an und entdecken Sie WhatsApp-Automatisierung!",

        contact_title: "WhatsApp automatisieren und Gewinne steigern!",
        contact_sub: "Migasender vereinfacht WhatsApp-Messaging in einer einzigen Plattform: Automatisierung, Premium-KI-Stimme, Multi-User-Panel ohne Limits und vorhersehbare Flatrate.",
        ben_1_title: "Vorhersehbare Flatrate",
        ben_1_desc: "10.000 Nachrichten inklusive für 14,90 €/Monat, ohne Kosten pro Versand. Planen Sie Ihre Ausgaben und skalieren Sie das Volumen entspannt.",
        ben_2_title: "KI auf WhatsApp",
        ben_2_desc: "Bringen Sie KI zu WhatsApp und maximieren Sie Gewinne.",
        ben_3_title: "Minimale Investition",
        ben_3_desc: "Boosten Sie Ihr Unternehmen günstig.",
        ben_4_title: "Academy Inklusive",
        ben_4_desc: "Schritt-für-Schritt-Tutorials für Automatisierungen.",

        pricing_title: "Wählen Sie das perfekte Migasender-Paket",
        pricing_subtitle: "WhatsApp-Automatisierung nach Maß: Basis bis White Label.",
        pricing_basic_title: "BASIC PAKET",
        pricing_basic_desc: "1 Nummer, automatisches Management. Inklusive Academy.",
        pricing_pro_title: "PRO PAKET",
        pricing_pro_desc: "Bis zu 5 Nummern, 50.000 Nachrichten/Monat. Inklusive Academy.",
        pricing_ai_title: "WHATSAPP KI AGENT",
        pricing_ai_desc: "Boosten Sie Migasender mit KI. Optimieren Sie Interaktionen.",
        pricing_wl_title: "WHITE LABEL FÜR AGENTUREN",
        pricing_wl_desc: "Verkaufen Sie Automatisierung unter Ihrer Marke.",
        pricing_guarantee: "Unsere Zufriedenheitsgarantie",
        pricing_guarantee_text: "30 Tage Geld-zurück-Garantie auf den ersten Kauf: einfach per E-Mail an support@migastone.com schreiben. Um künftige Verlängerungen zu vermeiden, kündigen Sie per E-Mail mindestens 15 Tage vor dem Verlängerungsdatum; nach erfolgter Verlängerung ist die Gebühr nicht erstattungsfähig. Für Käufe von Unternehmen mit Umsatzsteuer-ID gelten die Regeln des italienischen Verbraucherschutzgesetzes nicht.",
        
        card_basic_sub: "1 WA + 10k/Nachr./M + Academy",
        card_pro_sub: "5 WA + 50k/Nachr./M + Academy",
        card_ai_sub: "KI mit OpenAI Agenten",
        card_wl_sub: "Komplette Infrastruktur für Agenturen",
        btn_buy: "Jetzt Kaufen",
        btn_contact: "Kontakt",
        badge_popular: "Beliebtestes",
        
        // Pricing Notes - UPDATED
        pricing_note_basic: "1x WhatsApp<br>Preis für die ersten 30 Tage (Garantie). Danach jährliche, nicht erstattungsfähige Verlängerung.",
        pricing_note_pro: "5x WhatsApp<br>Preis für die ersten 30 Tage (Garantie). Danach jährliche, nicht erstattungsfähige Verlängerung.",
        pricing_note_ai: "Erster Monat (Garantie)<br>Danach jährliche, nicht erstattungsfähige Verlängerung.",

        prod_title: "Produkte",
        prod_subtitle: "Zugang zur kostenlosen Academy für WhatsApp-Automatisierung:",
        prod_1_title: "Automatische Bewertungen",
        prod_1_desc: "Bewertungen automatisieren. +1000% Bewertungen in wenigen Monaten auf sozialen Portalen mit entsprechender Umsatzsteigerung.",
        prod_2_title: "Sprach-Lead-Begrüßung",
        prod_2_desc: "Senden Sie automatisch in Sprache umgewandelte Transaktionsnachrichten, auch mit Ihrer eigenen Stimme.",
        prod_5_title: "ChatBot",
        prod_5_desc: "Smarte 24/7 Antworten.",
        prod_6_title: "Terminerinnerungen",
        prod_6_desc: "Google Calendar verbinden, No-Shows und Kosten um 30% reduzieren.",
        prod_7_title: "Lead-Begrüßung",
        prod_7_desc: "Beeindrucken Sie potenzielle Kunden mit digitalisierten und personalisierten Sprachnachrichten zur Begrüßung. Steigern Sie Ihre Konversionen um 20%.",
        prod_8_title: "Lead Scoring",
        prod_8_desc: "Nutzen Sie KI, um Leads mit einem Score von 1 bis 5 zu qualifizieren. Investieren Sie Zeit nur in heiße Leads.",

        crm_title: "Optionale Integration mit MIGACRM",
        crm_desc: "Boosten Sie Migasender mit komplettem CRM!",
        crm_feat_1: "Zentrales Kontaktmanagement",
        crm_feat_2: "Visuelle Pipeline",
        crm_feat_3: "WhatsApp + CRM Automatisierung",
        crm_feat_4: "Erweiterte Berichte",
        crm_btn: "Entdecken Sie MIGACRM",

        // MigaFlow
        migaflow_title: "KI-Whatsapp-Lead-Generierung für Network-Marketing-Leader",
        migaflow_desc: "Vom Scan zum Verkauf, Automatisch",
        migaflow_pre_btn: "Entdecken Sie alles über das Tool, das Duplikation und Verkäufe im Network Marketing beschleunigt",
        migaflow_btn: "Gehen Sie zu MIGAFLOW.COM",

        faq_title: "Häufig gestellte Fragen",
        faq_header_title: "Brauchen Sie Hilfe zum Verständnis?",
        faq_header_subtitle: "HÄUFIG GESTELLTE FRAGEN",
        faq_header_desc: "Wir verstehen, dass das System kompliziert wirken kann, aber Sie werden erstaunt sein, wie leistungsfähig es ist. Hier sind häufige Fragen und Antworten...",
        faq_q1: "Was ist Migasender?",
        faq_a1: "Eine API zur WhatsApp-Automatisierung.",
        faq_q2: "Ist es schwer?",
        faq_a2: "Nein! Video-Tutorials inklusive.",
        faq_q3: "Kosten pro Nachricht?",
        faq_a3: "Nur das Abo. Keine Kosten pro Nachricht.",
        faq_q4: "Kündbar?",
        faq_a4: "Ja. Innerhalb der ersten 30 Tage können Sie eine vollständige Rückerstattung anfordern. Nach 30 Tagen verlängert sich das Abo automatisch: Um die Verlängerung zu vermeiden, kündigen Sie per E-Mail mindestens 15 Tage vor dem Verlängerungsdatum; nach erfolgter Verlängerung ist die Gebühr nicht erstattungsfähig. Für Käufe von Unternehmen mit Umsatzsteuer-ID gilt das italienische Verbraucherschutzgesetz nicht.",
        faq_q5: "Bann-Risiko?",
        faq_a5: "Bei verantwortungsvoller Nutzung ohne Spam ist der Dienst zuverlässig. Beachten Sie tägliche Limits, schreiben Sie nur an Kontakte mit Einwilligung und interagieren Sie ab und zu manuell vom Smartphone aus.",
        faq_q6: "Wie kann ich eine spezifische Beratung erhalten?",
        faq_a6: "Sie können eine spezialisierte Beratung bei unserem Automation-Experten anfordern, indem Sie eine E-Mail an support@migastone.com senden oder das Kontaktformular unten ausfüllen.",
        faq_q7: "Beinhalten Migareminder, Migapipeline und Migareview die Whatsapp-Linie?",
        faq_a7: "Nein, Sie müssen MIGASENDER (eine Whatsapp-Linie) kaufen, um diese Dienste zu automatisieren. Außerdem benötigen Sie ein Abonnement für www.make.com von 10 Euro pro Monat.",
        faq_q8: "Wie viel kostet die Aktivierung von KI auf meinem Whatsapp?",
        faq_a8_html: "Hier ist die Liste:<br>1. BASIC PAKET (14,90 €/Monat)<br>2. Make.com (10 €/Monat)<br>3. WHATSAPP KI AGENT (29 €/Monat)<br>Gesamt 53,90 €/Monat + KI-Nutzung.",
        faq_q9: "Sind die Konfigurationsdienste mit dem Techniker vollständig?",
        faq_a9: "Der Service beinhaltet die Konfiguration eines Automatisierungsszenarios oder einer KI-Instanz sowie eine 1-stündige aufgezeichnete Schulung.",
        faq_q10: "Wie funktioniert die Zufriedenheitsgarantie?",
        faq_a10: "Kauf mit Monatsabo: Innerhalb der ersten 30 Tage können Sie unter support@migastone.com die volle Rückerstattung anfordern. Nach 30 Tagen verlängert sich das Abo automatisch; um dies zu vermeiden, kündigen Sie per E-Mail mindestens 15 Tage vor dem Verlängerungsdatum, danach ist es nicht mehr erstattungsfähig. Für Käufe von Unternehmen mit Umsatzsteuer-ID gilt das italienische Verbraucherschutzgesetz nicht.",
        faq_q11: "Was beinhaltet der DONE FOR YOU Service?",
        faq_a11: "Alles Notwendige, um den Service betriebsbereit zu machen und Ihnen das Wissen zu vermitteln, ihn selbstständig zu verwalten.",

        footer_desc_1: "Ergebnisse variieren. Migastone Academy gehört Migastone International SRL.",
        footer_desc_2: "Migastone Academy ist Eigentum von <strong>MIGASTONE INTERNATIONAL SRL</strong>, mit Sitz in Via 28 Luglio, 212, 47893 Borgo Maggiore, San Marino, COE SM28583. Autorisierung Nr. 696 für E-Commerce unter Lizenz Nr. 6507.",
        footer_terms: "Geschäftsbedingungen",
        footer_privacy: "Datenschutz",
        footer_contact: "Kontakt",

        modal_ai_title: "Achtung",
        modal_ai_text_1: "Für KI-AGENT benötigen Sie eine aktive Linie.",
        modal_ai_text_2: "Haben Sie bereits eine Linie?",
        modal_ai_btn_yes: "Ja, Weiter",
        modal_ai_btn_no: "Nein, Zurück",

        // SEO
        seo_title: "Migasender - WhatsApp-Automatisierung für Ihr Unternehmen | KI-Stimme & Multi-User-Panel",
        seo_description: "Migasender - Das ultimative Tool für WhatsApp-Management. Automatisieren, kommunizieren und personalisieren Sie Ihre WhatsApp-Konversationen mit Premium-KI-Stimme und unbegrenztem Multi-User-Panel.",
        seo_keywords: "whatsapp automatisierung, whatsapp business, whatsapp chatbot, whatsapp ki stimme, elevenlabs whatsapp, multi user whatsapp panel, migasender",
        og_title: "Migasender - WhatsApp-Automatisierung für Ihr Unternehmen",
        og_description: "Automatisieren Sie WhatsApp mit KI, smarten ChatBots, Premium-ElevenLabs-Stimme und unbegrenztem Multi-User-Panel. 10.000 Nachrichten inklusive für 14,90 €/Monat.",

        // --- Highlights ---
        hl_title: "Was MIGASENDER einzigartig macht",
        hl_subtitle: "Alles, was Sie brauchen, um Ihr WhatsApp auf Enterprise-Niveau zu heben — in einer einzigen Plattform.",
        hl_1_title: "Premium-KI-Stimme mit ElevenLabs",
        hl_1_desc: "Studio-Niveau Text-to-Speech und Speech-to-Text mit nativer ElevenLabs-Integration und Voice-Cloning. Verwandeln Sie jede Nachricht in Sprache, sogar mit Ihrer eigenen Stimme.",
        hl_2_title: "Unbegrenztes Multi-User-Panel",
        hl_2_desc: "Neues Control Panel mit zentralisiertem Senden und Empfangen: Unbegrenzte Nutzer können auf derselben Nummer lesen und schreiben, weit über das übliche WhatsApp Web-Limit hinaus.",
        hl_3_title: "Vollständiger Verlauf für KI-Analysen",
        hl_3_desc: "Greifen Sie strukturiert auf den gesamten Konversationsverlauf zu und nutzen Sie ihn für KI-Analysen, Chatbot-Training, Lead Scoring, Reporting und Auditing.",
        hl_4_title: "10.000 Nachrichten für 14,90 €",
        hl_4_desc: "Eine vorhersehbare monatliche Flatrate: 10.000 Nachrichten inklusive für nur 14,90 €/Monat, 1 WhatsApp-Nummer und kostenlose Academy für Automatisierungen mit Make.com."
    }
};

// Funzione globale per ottenere traduzioni (usata da main.js)
window.getTranslation = function(key) {
    const lang = localStorage.getItem('migasender_lang') || 'it';
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    // Fallback italiano
    return translations['it'][key] || key;
};

document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('language-switch');

    // 1. Rileva lingua browser o usa salvataggio precedente
    let currentLang = localStorage.getItem('migasender_lang');
    
    if (!currentLang) {
        const browserLang = navigator.language.slice(0, 2); // 'it-IT' -> 'it'
        if (['it', 'en', 'es', 'de'].includes(browserLang)) {
            currentLang = browserLang;
        } else {
            currentLang = 'it'; // Default fallback
        }
    }

    // 2. Applica lingua iniziale
    setLanguage(currentLang);
    if(langSwitch) {
        langSwitch.value = currentLang;
    }

    // 3. Event Listener cambio lingua
    if(langSwitch) {
        langSwitch.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // Funzione principale
    function setLanguage(lang) {
        // Salva preferenza
        localStorage.setItem('migasender_lang', lang);
        document.documentElement.lang = lang; 

        // Update SEO Metadata
        updateMetaTags(lang);

        // Aggiorna testi standard
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', translations[lang][key]);
                    }
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Aggiorna HTML (liste e note con <br>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    // Funzione Aggiornamento SEO Dinamico
    function updateMetaTags(lang) {
        const data = translations[lang];
        if (!data) return;

        // 1. Document Title
        if (data.seo_title) {
            document.title = data.seo_title;
        }

        // 2. Meta Description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && data.seo_description) {
            metaDesc.setAttribute('content', data.seo_description);
        }

        // 3. Meta Keywords
        const metaKeys = document.querySelector('meta[name="keywords"]');
        if (metaKeys && data.seo_keywords) {
            metaKeys.setAttribute('content', data.seo_keywords);
        }

        // 4. Open Graph Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && data.og_title) {
            ogTitle.setAttribute('content', data.og_title);
        }

        // 5. Open Graph Description
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && data.og_description) {
            ogDesc.setAttribute('content', data.og_description);
        }
    }
});