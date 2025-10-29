const THEME_KEY = 'theme';

// ensure a persistent default theme and apply it on load
let theme = localStorage.getItem(THEME_KEY) || 'light';
applyTheme(theme);
localStorage.setItem(THEME_KEY, theme);

function applyTheme(t) {
    if (t === 'light') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}

function toggleTheme() {
    const current = localStorage.getItem(THEME_KEY) || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
}
