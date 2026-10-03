<?php
/**
 * MIGASENDER - Form Handler
 * 
 * Questo file gestisce le submission dei form di contatto.
 * Può essere usato standalone o integrato in WordPress.
 * 
 * IMPORTANTE: Questo è un esempio. Personalizza secondo le tue esigenze.
 * 
 * @package Migasender
 * @version 1.0.0
 */

// Prevenire accesso diretto
if (!defined('ABSPATH') && !isset($_POST['action'])) {
    // Se non siamo in WordPress e non è una POST, esci
    if (php_sapi_name() !== 'cli') {
        die('Accesso diretto non permesso');
    }
}

/**
 * Configurazione
 */
define('MIGASENDER_ADMIN_EMAIL', 'support@migastone.com');
define('MIGASENDER_CC_EMAIL', 'o.dalvit@migastone.com');
define('MIGASENDER_FROM_EMAIL', 'noreply@tuosito.com');
define('MIGASENDER_FROM_NAME', 'Migasender Website');

/**
 * Gestisce la submission del form
 */
function migasender_handle_form_submission() {
    // Verifica che sia una richiesta POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        return migasender_json_response(false, 'Metodo non valido');
    }
    
    // Verifica nonce per sicurezza (se WordPress)
    if (function_exists('wp_verify_nonce')) {
        if (!isset($_POST['migasender_nonce']) || 
            !wp_verify_nonce($_POST['migasender_nonce'], 'migasender_contact')) {
            return migasender_json_response(false, 'Verifica sicurezza fallita');
        }
    }
    
    // Validazione e sanitizzazione dati
    $errors = array();
    
    // Nome
    $name = migasender_sanitize_input($_POST['name'] ?? '');
    if (empty($name)) {
        $errors[] = 'Nome obbligatorio';
    }
    
    // Email
    $email = migasender_sanitize_email($_POST['email'] ?? '');
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email non valida';
    }
    
    // Telefono
    $country_code = migasender_sanitize_input($_POST['country_code'] ?? '+39');
    $phone = migasender_sanitize_input($_POST['phone'] ?? '');
    if (empty($phone)) {
        $errors[] = 'Numero di telefono obbligatorio';
    }
    $full_phone = $country_code . ' ' . $phone;
    
    // Messaggio (opzionale)
    $message = migasender_sanitize_input($_POST['message'] ?? '', true);
    
    // Consensi GDPR
    $consent_commercial = isset($_POST['consent_commercial']) ? 'Sì' : 'No';
    $consent_gdpr = isset($_POST['consent_gdpr']) ? 'Sì' : 'No';
    
    if (!isset($_POST['consent_gdpr'])) {
        $errors[] = 'Consenso GDPR obbligatorio';
    }
    
    // Se ci sono errori, ritorna
    if (!empty($errors)) {
        return migasender_json_response(false, implode(', ', $errors));
    }
    
    // Prepara dati per database (se necessario)
    $form_data = array(
        'name' => $name,
        'email' => $email,
        'phone' => $full_phone,
        'country_code' => $country_code,
        'message' => $message,
        'consent_commercial' => $consent_commercial,
        'consent_gdpr' => $consent_gdpr,
        'ip_address' => migasender_get_client_ip(),
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
        'submitted_at' => current_time('mysql'),
        'form_type' => $_POST['form_type'] ?? 'contact'
    );
    
    // Salva nel database (se WordPress)
    if (function_exists('wpdb')) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'migasender_contacts';
        
        $wpdb->insert($table_name, $form_data);
    }
    
    // Invia email
    $email_sent = migasender_send_email($form_data);
    
    if ($email_sent) {
        // Log submission (opzionale)
        migasender_log_submission($form_data);
        
        return migasender_json_response(
            true, 
            'Grazie! Il tuo messaggio è stato inviato con successo. Ti contatteremo a breve.'
        );
    } else {
        return migasender_json_response(
            false, 
            'Si è verificato un errore nell\'invio. Riprova o contattaci direttamente.'
        );
    }
}

/**
 * Invia email di notifica
 */
function migasender_send_email($data) {
    $to = MIGASENDER_ADMIN_EMAIL;
    $subject = 'Nuovo Contatto da Migasender - ' . $data['name'];
    
    // Costruisci corpo email HTML
    $body = migasender_build_email_html($data);
    
    // Headers
    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . MIGASENDER_FROM_NAME . ' <' . MIGASENDER_FROM_EMAIL . '>',
        'Reply-To: ' . $data['email'],
        'Cc: ' . MIGASENDER_CC_EMAIL
    );
    
    // Invia con wp_mail se WordPress, altrimenti mail()
    if (function_exists('wp_mail')) {
        return wp_mail($to, $subject, $body, $headers);
    } else {
        return mail($to, $subject, $body, implode("\r\n", $headers));
    }
}

/**
 * Costruisce HTML email
 */
function migasender_build_email_html($data) {
    ob_start();
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e3a5f; color: white; padding: 20px; text-align: center; }
            .content { background: #f7fafc; padding: 30px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #1e3a5f; }
            .field-value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #25D366; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📧 Nuovo Contatto Migasender</h1>
            </div>
            <div class="content">
                <p>Hai ricevuto un nuovo messaggio dal sito Migasender:</p>
                
                <div class="field">
                    <div class="field-label">👤 Nome:</div>
                    <div class="field-value"><?php echo esc_html($data['name']); ?></div>
                </div>
                
                <div class="field">
                    <div class="field-label">📧 Email:</div>
                    <div class="field-value">
                        <a href="mailto:<?php echo esc_attr($data['email']); ?>">
                            <?php echo esc_html($data['email']); ?>
                        </a>
                    </div>
                </div>
                
                <div class="field">
                    <div class="field-label">📱 Telefono:</div>
                    <div class="field-value">
                        <a href="tel:<?php echo esc_attr($data['phone']); ?>">
                            <?php echo esc_html($data['phone']); ?>
                        </a>
                    </div>
                </div>
                
                <?php if (!empty($data['message'])): ?>
                <div class="field">
                    <div class="field-label">💬 Messaggio:</div>
                    <div class="field-value"><?php echo nl2br(esc_html($data['message'])); ?></div>
                </div>
                <?php endif; ?>
                
                <div class="field">
                    <div class="field-label">✅ Consenso Commerciale:</div>
                    <div class="field-value"><?php echo $data['consent_commercial']; ?></div>
                </div>
                
                <div class="field">
                    <div class="field-label">🔒 Consenso GDPR:</div>
                    <div class="field-value"><?php echo $data['consent_gdpr']; ?></div>
                </div>
                
                <div class="field">
                    <div class="field-label">🌐 IP Address:</div>
                    <div class="field-value"><?php echo esc_html($data['ip_address']); ?></div>
                </div>
                
                <div class="field">
                    <div class="field-label">📅 Data:</div>
                    <div class="field-value"><?php echo date('d/m/Y H:i:s'); ?></div>
                </div>
            </div>
            <div class="footer">
                <p>Questa email è stata generata automaticamente dal sito Migasender.</p>
                <p>© <?php echo date('Y'); ?> Migastone International SRL</p>
            </div>
        </div>
    </body>
    </html>
    <?php
    return ob_get_clean();
}

/**
 * Sanitizza input
 */
function migasender_sanitize_input($input, $multiline = false) {
    if (function_exists('sanitize_text_field') && !$multiline) {
        return sanitize_text_field($input);
    } elseif (function_exists('sanitize_textarea_field') && $multiline) {
        return sanitize_textarea_field($input);
    } else {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
        return $input;
    }
}

/**
 * Sanitizza email
 */
function migasender_sanitize_email($email) {
    if (function_exists('sanitize_email')) {
        return sanitize_email($email);
    } else {
        return filter_var($email, FILTER_SANITIZE_EMAIL);
    }
}

/**
 * Ottieni IP cliente
 */
function migasender_get_client_ip() {
    $ip = '';
    
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    }
    
    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : '';
}

/**
 * Risposta JSON
 */
function migasender_json_response($success, $message, $data = array()) {
    $response = array(
        'success' => $success,
        'message' => $message,
        'data' => $data
    );
    
    if (function_exists('wp_send_json')) {
        wp_send_json($response);
    } else {
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }
}

/**
 * Log submission (opzionale)
 */
function migasender_log_submission($data) {
    $log_file = __DIR__ . '/logs/submissions.log';
    $log_dir = dirname($log_file);
    
    // Crea directory se non esiste
    if (!file_exists($log_dir)) {
        mkdir($log_dir, 0755, true);
    }
    
    $log_entry = sprintf(
        "[%s] New submission from %s (%s) - Phone: %s\n",
        date('Y-m-d H:i:s'),
        $data['name'],
        $data['email'],
        $data['phone']
    );
    
    file_put_contents($log_file, $log_entry, FILE_APPEND);
}

/**
 * Crea tabella database WordPress (se necessario)
 */
function migasender_create_db_table() {
    global $wpdb;
    
    $table_name = $wpdb->prefix . 'migasender_contacts';
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        phone varchar(50) NOT NULL,
        country_code varchar(10) NOT NULL,
        message text,
        consent_commercial varchar(3) NOT NULL,
        consent_gdpr varchar(3) NOT NULL,
        ip_address varchar(50),
        user_agent text,
        form_type varchar(50),
        submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY  (id),
        KEY email (email),
        KEY submitted_at (submitted_at)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}

/**
 * Hook WordPress (se applicabile)
 */
if (function_exists('add_action')) {
    // AJAX per utenti loggati
    add_action('wp_ajax_migasender_contact', 'migasender_handle_form_submission');
    
    // AJAX per utenti non loggati
    add_action('wp_ajax_nopriv_migasender_contact', 'migasender_handle_form_submission');
    
    // Crea tabella all'attivazione
    register_activation_hook(__FILE__, 'migasender_create_db_table');
}

/**
 * Uso Standalone (senza WordPress)
 */
if (!function_exists('add_action') && isset($_POST['action'])) {
    // Gestisci direttamente la richiesta
    migasender_handle_form_submission();
}
