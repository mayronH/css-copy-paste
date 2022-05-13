# CSS Tricks

Some **CSS only** easy tricks.
_All the explanation is on the files_

<hr>

<details>
  <summary>Typing Effect</summary>

```HTML
<div class="typing-demo">
    Hello World!
</div>
```

```CSS
.typing-demo {
    animation: typing 2s steps(12), blink 0.5s step-end infinite alternate;

    white-space: nowrap;
    overflow: hidden;

    border-right: 3px solid;

    font-family: monospace;
    font-size: 2rem;

    width: 12ch;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
```

</details>

<details>
  <summary>Drop Shadow</summary>

```HTML
<img
    src="images/git-icon-logo-png-transparent.png"
    loading="lazy"
    class="drop-shadow"
    alt="Image with drop-shadow"
    height="120"
/>
```

```CSS
.drop-shadow {
    filter: drop-shadow(0px 0px 8px rgba(238, 238, 238, 0.2));
}
```

</details>

<details>
  <summary>Custom Cursor</summary>

```HTML
<div class="cursor">
    Emoji Cursor
</div>
```

```CSS
.cursor {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>"), auto;
}
```

</details>

<details>
  <summary>Truncate Text</summary>

```HTML
<div class="overflow">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam debitis veritatis
    voluptatem voluptate dolorem quibusdam sequi exercitationem ad!
</div>
```

```CSS
.overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

</details>

<details>
  <summary>Truncate Text to the Specific Number of Lines</summary>

```HTML
<p class="line-clamp">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam debitis veritatis
    voluptatem voluptate dolorem quibusdam sequi exercitationem ad!
</p>
```

```CSS
.line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    overflow: hidden;
}
```

</details>

<details>
  <summary>Custom List</summary>

```HTML
<ul>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ul>
```

```CSS
ul {
    margin: 0 0 0 2em;
    padding: 0;

    display: grid;
    grid-gap: 1.25rem;
}
li {
    line-height: 1.25rem;

    padding-left: 0.5rem;
}
li::marker {
    content: "⯈";
    color: var(--accent);
    font-size: 1.25em;
}
```

</details>

<details>
  <summary>Custom Color Selection</summary>

```HTML
<div class="custom-selection">
    Custom Text Selection
</div>
```

```CSS
.custom-selection::selection {
    background-color: orange;
}
```

</details>

<details>
  <summary>Rezise</summary>

```HTML
<div class="resize">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis similique explicabo hic
        nostrum quia quas, libero eos deleniti quo ipsa iste illum alias reiciendis iusto quasi in
        aliquam accusantium. Dolorem?
    </p>
</div>
```

```CSS
.resize {
    resize: both;
    overflow: auto;
}
```

</details>

<details>
  <summary>CSS Modal</summary>

```HTML
<a href="#modal">Open Modal</a>

<div class="modal" id="modal">
    <div class="modal-content">
        <header>
            <h1>CSS Modal</h1>
            <a href="#" class="close">x</a>
        </header>
        <main>No need for Javascript</main>
    </div>
</div>
```

```CSS
/* The Modal */
.modal {
    visibility: hidden;
    opacity: 0;

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.5);

    transition: all 0.4s;
}

.modal:target {
    visibility: visible;
    opacity: 1;
}

/* The modal box */
.modal-content {
    position: relative;

    width: 480px;
    max-width: 90%;

    background: white;

    color: black;
}
```

</details>

<details>
  <summary>Empty Elements</summary>

```HTML
<div class="box"></div>
<div class="box">Hello there!</div>
```

```CSS
.box {
    background: #000;
}

.box:empty {
    background: #fff;
}
```

</details>

<details>
  <summary>Custom Scrollbar</summary>

```HTML
<div class="custom-scrollbar">
    <div class="content">custom scrollbar</div>
</div>
```

```CSS
.custom-scrollbar {
    overflow: auto;
    display: inline-block;

    height: 200px;
}

.content {
    height: 500px;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 12px;

    background-color: black;
}

.custom-scrollbar::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 5px;

    background-color: orange;

    border: 2px solid orange;
}
```

</details>

<details>
  <summary>Sticky</summary>

```HTML
<div class="sticky"></div>
```

```CSS
.sticky {
    position: sticky;

    /* Need a position to work: bottom, top, right, left */
    bottom: 0;
}
```

</details>

<details>
  <summary>HTML/CSS Tooltip</summary>

```HTML
<p>Hover <span class="tooltip" data-tooltip="Hello there!">here</span> to see the tooltip in action</p>
```

```CSS
p {
    position: relative;
}

/* Tooltip box */
.tooltip:before {
    content: attr(data-tooltip);

    position: absolute;
    bottom: 1.2rem;
    left: 10%;
    z-index: 1;

    visibility: hidden;
    opacity: 0;

    background-color: black;

    color: white;

    transition: opacity 0.6s;
}

.tooltip:hover:before {
    opacity: 1;
    visibility: visible;
}
```

</details>

<details>
  <summary>Custom Caret Color</summary>

```HTML
<input type="text" class="caret-color" placeholder="Insert anything" />
```

```CSS
.caret-color {
    caret-color: orange;
}
```

</details>

<details>
  <summary>::in-range and ::out-range</summary>

```HTML
<form class="form">
    <input type="number" name="first" id="first" min="1" max="10" />
</form>
```

```CSS
input:in-range {
    background-color: #37cc8e;
}

input:out-of-range {
    background-color: #cc3737;
}
```

</details>

<details>
  <summary>Fancy Text With Background Clip</summary>

```HTML
<h4>Background Clipping</h4>
```

```CSS
h4 {
    color: transparent;

    background: orange url('https://picsum.photos/seed/picsum/500/300');
    background-clip: text;
    -webkit-background-clip: text;
}
```

</details>

<details>
  <summary>Flex Gap</summary>

```HTML
<div class="boxes">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```

```CSS
.box {
    background-color: black;
}

.boxes {
    display: flex;
    justify-content: center;
    gap: 15px;
}
```

</details>

<details>
  <summary>Greyscale Image</summary>

```HTML
<img src="https://picsum.photos/id/69/200/150" class="greyscale" alt="Greyscale Image"/>
```

```CSS
.greyscale {
    filter: grayscale(100%);
}
```

</details>

<details>
  <summary>Gradient Border</summary>

```HTML
<div class="gradient-border">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
</div>
```

```CSS
.gradient-border {
    padding: 25px 30px;

    border-radius: 10px;
    border: 5px solid transparent;

    position: relative;
    box-sizing: border-box;

    background: white;
    background-clip: padding-box;
}

.gradient-border::before {
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    margin: -5px;

    border-radius: inherit;

    background: linear-gradient(315deg, #fc5296 0%, #f67062 74%);
}
```

</details>

<details>
  <summary>Embed Video Lazy Loading</summary>

```HTML
<div class="container-video">
    <div class="video-wrapper">
        <iframe
            loading="lazy"
            srcdoc="<style>
            * {
            padding: 0;
            margin: 0;
            overflow: hidden;
            }
            body, html {
                height: 100%;
            }
            img, svg {
                position: absolute;
                width: 100%;
                top: 0;
                bottom: 0;
                margin: auto;
            }
            svg {
                filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                transition: all 250ms ease-in-out;
            }
            body:hover svg {
                filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
                transform: scale(1.2);
            }
            </style>
            <a href='https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1'>
            <img src='https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg' alt='Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film'>
            <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
            </a>
            "
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        >
        </iframe>
    </div>
</div>
```

```CSS
.container-video {
    width: 100%;
    max-width: 960px;
}

.video-wrapper {
    position: relative;
    padding-bottom: 56.15%;
    height: 0;
    overflow: hidden;
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
```

</details>

<details>
  <summary>Light/Dark Mode</summary>

```CSS
:root {
    /* Dark Mode Colors */
    --text-dark: #fff;
    --body-dark: #3c3c3c;
    --header-dark: #333;
    --footer-dark: #4f4f4f;
    --shadow-dark: rgba(238, 238, 238, 0.2);

    /* Light Mode Colors */
    --text-light: #3c3c3c;
    --body-light: #fff;
    --header-light: #f4f4f5;
    --footer-light: #e0ecf3;
    --shadow-light: rgba(49, 49, 49, 0.2);
}

/* Load the light/dark mode colors based on the system */
@media (prefers-color-scheme: dark) {
    :root {
        --text: var(--text-dark);
        --body: var(--body-dark);
        --header: var(--header-dark);
        --footer: var(--footer-dark);
        --shadow: var(--shadow-dark);
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --text: var(--text-light);
        --body: var(--body-light);
        --header: var(--header-light);
        --footer: var(--footer-light);
        --shadow: var(--shadow-light);
    }
}

[color-scheme="dark"] {
    --text: var(--text-dark);
    --body: var(--body-dark);
    --header: var(--header-dark);
    --footer: var(--footer-dark);
    --shadow: var(--shadow-dark);
}

[color-scheme="light"] {
    --text: var(--text-light);
    --body: var(--body-light);
    --header: var(--header-light);
    --footer: var(--footer-light);
    --shadow: var(--shadow-light);
}
```

```JS
function getCurrentTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    localStorage.getItem("csstricks.theme") ? (theme = localStorage.getItem("csstricks.theme")) : null;

    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(":root");
    root.setAttribute("color-scheme", `${theme}`);
}

button.addEventListener("click", () => {
    let theme = getCurrentTheme();

    if (theme === "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }

    localStorage.setItem("csstricks.theme", `${theme}`);
    loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
    loadTheme(getCurrentTheme());
});
```

</details>

<details>
  <summary>@supports</summary>

```HTML
<div class="background-image">
    <div class="box blur">
        <p>Support to all browsers</p>
    </div>
</div>
```

```CSS
.blur {
    background: rgba(49, 49, 49, 0.2);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

@supports (not (backdrop-filter: blur())) and (not (-webkit-backdrop-filter: blur())) {
    .blur {
        background: rgba(255, 255, 255, 0.5);
    }
}
```

</details>

<details>
  <summary>CSS One Liner</summary>

```CSS
/* .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
} */

.modal{
    position: fixed;
    inset: 0;
}
```

```CSS
/* .video-wrapper {
    position: relative;
    padding-bottom: 56.15%;
    height: 0;
    overflow: hidden;
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
} */

.video-wrapper{
    aspect-ratio: 16/9;
}
```

```CSS
/* .button:hover,
.button:focus,
.button:focus-visible {
    background: black;
} */

.button:is(:hover, :focus, :focus-visible) {
    background: black;
}
```

```CSS
/* .title{
    font-size: 1rem
}

@media only screen and (min-width: 600px) {
    .title{
        font-size: 1rem
    }
}

@media only screen and (min-width: 1000px) {
    .title{
        font-size: 6rem
    }
}

@media only screen and (min-width: 1500px) {
    .title{
        font-size: 8rem
    }
} */

.title{
    font-size: 1rem;
    font-size: clamp(1rem, 10vh + 1rem, 8rem);
}
```

</details>
