// Kirk's Elite Karate Club v2: mobile nav + theme toggle. No dependencies.
(function () {
    'use strict';

    // --- Mobile menu -------------------------------------------------------
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', function () {
            var open = menu.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        });
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
                btn.setAttribute('aria-label', 'Open menu');
            });
        });
    }

    // --- Theme toggle (initial theme applied in <head> before paint) -------
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
        var syncLabel = function () {
            var dark = document.documentElement.getAttribute('data-theme') === 'dark';
            toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
        };
        syncLabel();
        toggle.addEventListener('click', function () {
            var dark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (dark) {
                document.documentElement.removeAttribute('data-theme');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
            try { localStorage.setItem('kekc-theme', dark ? 'light' : 'dark'); } catch (e) {}
            syncLabel();
        });
    }
})();
