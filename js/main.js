// Light/Dark Button
const button = document.querySelector("#button-theme");

function getCurrentTheme() {
    // Get the system theme mode
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    //If have an localStorage for the theme use it, if not do nothing
    localStorage.getItem("csstricks.theme") ? (theme = localStorage.getItem("csstricks.theme")) : null;
    return theme;
}

function loadTheme(theme) {
    // Get The root element
    const root = document.querySelector(":root");

    // Change the color-scheme variable to dark or light
    root.setAttribute("color-scheme", `${theme}`);
}

// Button event to change the theme
button.addEventListener("click", () => {
    let theme = getCurrentTheme();

    if (theme === "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }
    // Save the theme in localStorage so even after reload the theme is the same.
    localStorage.setItem("csstricks.theme", `${theme}`);
    loadTheme(theme);
});

// Load the theme when the DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
    loadTheme(getCurrentTheme());
});
