(function () {
    'use strict';

    const measurementId = 'G-298WY4DDKX';
    const storageKey = 'fetonte_analytics_consent';

    function loadAnalytics() {
        if (window.fetonteAnalyticsLoaded) return;
        window.fetonteAnalyticsLoaded = true;
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
        });
        window.gtag('config', measurementId, {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
        });

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
        document.head.appendChild(script);
    }

    function saveChoice(value) {
        try { localStorage.setItem(storageKey, value); } catch (error) { /* scelta valida per la sessione */ }
    }

    function closeBanner() {
        const banner = document.getElementById('cookie-consent');
        if (banner) banner.remove();
    }

    function showPreferencesButton() {
        if (document.getElementById('cookie-preferences')) return;
        const button = document.createElement('button');
        button.id = 'cookie-preferences';
        button.type = 'button';
        button.textContent = 'Preferenze cookie';
        button.addEventListener('click', function () {
            try { localStorage.removeItem(storageKey); } catch (error) { /* niente da rimuovere */ }
            button.remove();
            showBanner();
        });
        document.body.appendChild(button);
    }

    function choose(value) {
        saveChoice(value);
        if (value === 'granted') loadAnalytics();
        closeBanner();
        showPreferencesButton();
    }

    function showBanner() {
        if (document.getElementById('cookie-consent')) return;
        const banner = document.createElement('aside');
        banner.id = 'cookie-consent';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-modal', 'true');
        banner.setAttribute('aria-labelledby', 'cookie-consent-title');
        banner.innerHTML =
            '<div><strong id="cookie-consent-title">Misurazione facoltativa delle visite</strong>' +
            '<p>Fetonte.it usa Google Analytics soltanto se lo autorizzi. Il rifiuto non limita il sito. ' +
            '<a href="/privacy-cookie.html">Informativa privacy e cookie</a>.</p></div>' +
            '<div class="cookie-actions"><button type="button" data-choice="denied">Rifiuta</button>' +
            '<button type="button" class="cookie-accept" data-choice="granted">Accetta</button></div>';
        banner.querySelectorAll('[data-choice]').forEach(function (button) {
            button.addEventListener('click', function () { choose(button.dataset.choice); });
        });
        document.body.appendChild(banner);
        banner.querySelector('[data-choice="denied"]').focus();
    }

    function initialise() {
        let choice = null;
        try { choice = localStorage.getItem(storageKey); } catch (error) { /* storage non disponibile */ }
        if (choice === 'granted') {
            loadAnalytics();
            showPreferencesButton();
        } else if (choice === 'denied') {
            showPreferencesButton();
        } else {
            showBanner();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialise);
    } else {
        initialise();
    }
}());
