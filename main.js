// Light/Dark Button
const button = document.querySelector('#button-theme')

function getCurrentTheme() {
    // Get the system theme mode
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    //If have an localStorage for the theme use it, if not do nothing
    localStorage.getItem('csstricks.theme') ? (theme = localStorage.getItem('csstricks.theme')) : null;
    return theme
}

function loadTheme(theme) {
    // Get The root element
    const root = document.querySelector(':root')

    // Change the color-scheme variable to dark or light
    root.setAttribute('color-scheme', `${theme}`)
}

// Button event to change the theme
button.addEventListener('click', () => {
    let theme = getCurrentTheme()

    if (theme === 'dark') {
        theme = 'light'
    } else {
        theme = 'dark'
    }
    // Save the theme in localStorage so even after reload the theme is the same.
    localStorage.setItem('csstricks.theme', `${theme}`)
    loadTheme(theme);
});

// The button to open the menu on mobile
const navBtn = document.querySelector('.btn-menu')

// Button event to change the aria-expanded attribute for accessibility
navBtn.addEventListener('click', () => {
    // the getAttribute return a string so we parse to get a boolean
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'))

    navBtn.setAttribute('aria-expanded', !isExpanded)
})

// With multiples pages, we can set aria-current page to indicate which page is loaded for accessibility
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    }
})

window.addEventListener('DOMContentLoaded', () => {
    // Load the theme when the DOM is loaded
    loadTheme(getCurrentTheme())
})
