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
  <summary>Grayscale Image</summary>

```HTML
<img src="https://picsum.photos/id/69/200/150" class="grayscale" alt="Grayscale Image"/>
```

```CSS
.grayscale {
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

```CSS
/* .grid {
    display: grid;
    align-items: center;
    justify-items: center;
}
*/
.grid {
    display: grid;
    place-items: center;
}
```

```CSS
/* .padding-vertical {
    padding-top: 10px;
    padding-bottom: 10px
}

.padding-horizontal {
    padding-left: 10px;
    padding-right:10px;
}
*/
/* Depends on text orientation */
.padding-vertical {
    padding-block: 10px;
}

.padding-horizontal {
    padding-inline: 10px;
}
```

</details>

<details>
  <summary>Table Responsive</summary>

```HTML
<table class="table">
    <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Profession</th>
        <th>Dead/Alive</th>
        <th>Birthplace</th>
        <th>First Movie</th>
        <th>Last Movie</th>
    </thead>
    <tbody>
        <tr>
            <td data-label="First Name">Anakin</td>
            <td data-label="Last Name">Skywalker</td>
            <td data-label="Profession">Jedi Not Master</td>
            <td data-label="Dead/Alive">Dead</td>
            <td data-label="Birthplace">Tatooine</td>
            <td data-label="First Movie">The Phantom Menace</td>
            <td data-label="Last Movie">Revenge of the Sith</td>
        </tr>
        <tr>
            <td data-label="First Name">Luke</td>
            <td data-label="Last Name">Skywalker</td>
            <td data-label="Profession">Jedi Master</td>
            <td data-label="Dead/Alive">Alive</td>
            <td data-label="Birthplace">Tatooine</td>
            <td data-label="First Movie">A New Hope</td>
            <td data-label="Last Movie">Return of the Jedi</td>
        </tr>
    </tbody>
<table>
```

```CSS
@media screen and (max-width: 600px) {
    .table thead {
        position: absolute;
        clip: rect(0 0 0 0);
        margin: -1px;
        padding: 0px
        overflow: hidden;
        height: 1px;
        width: 1px;
    }
    .table tr {
        display: block;
        margin-bottom: 1rem;
    }

    .table td {
        display: block;
        text-align: right;
    }

    .table td::before {
        content: attr(data-label);
        float: left;
    }
}
```

</details>

<details>
  <summary>Focus Visible and Focus</summary>

```HTML
<button class="button">Tab me</button>
```

```CSS
.button:focus:not(:focus-visible) {
    outline: none;
}

.button:focus-visible {
    outline: 2px dashed orange;
    outline-offset: 0.2rem;
}
```

</details>

<details>
  <summary>CSS Only Dropdown Menu</summary>

```HTML
<nav aria-label="Dropdown Example">
    <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li class="dropdown">
            <button
                type="button"
                class="dropdown-title"
                aria-expanded="false"
                aria-controls="movies_dropdown"
            >
                Movies
            </button>
            <ul class="dropdown-menu" id="movies_dropdown">
                <li><a href="#">Return of the Jedi</a></li>
                <li><a href="#">Empire Strikes Back</a></li>
                <li><a href="#">A New Hope</a></li>
                <li><a href="#">Revenge of the Sith</a></li>
                <li><a href="#">Attack of the Clones</a></li>
                <li><a href="#">Phantom Menace</a></li>
            </ul>
        </li>
        <li><a href="#">About</a></li>
    </ul>
</nav>
```

```CSS
nav {
    display: grid;
    place-items: center;

    padding: 1.25rem 2rem;

    width: 100%;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;

    display: grid;
}

nav > ul {
    grid-auto-flow: column;
}

nav > ul > li {
    margin: 0 0.5rem;
}

nav > ul > li > a {
    display: inline-block;
}

.dropdown-title {
    font-family: inherit;

    background-color: transparent;

    border: none;

    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
}

.dropdown-title::after {
    content: "";

    border: 0.25rem solid transparent;
    border-top-color: var(--text);

    transform: translateY(0.15rem);
}

.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    left: 50%;

    background-color: white;

    box-shadow: 0px 3px 4px rgba(black, 0.2);

    padding: 0.5rem 0;

    min-width: 20ch;

    transform: rotateX(-90deg) translateX(-50%);
    transform-origin: top center;

    opacity: 0;
    visibility: hidden;

    transition: 0.3s all 120ms ease-out;
}

.dropdown:is(:hover, :focus-within) .dropdown-menu {
    opacity: 1;
    visibility: visible;

    transform: rotateX(0) translateX(-50%);
}

.dropdown-menu a {
    display: block;

    padding: 0.5rem;
}
```

</details>

<details>
  <summary>CSS Only Select</summary>

```HTML
 <div class="select">
    <select name="custom-select" id="custom_select">
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
    </select>
</div>
```

```CSS
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    outline: none;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    padding: 0 1rem 0 0;
    margin: 0;

    width: 100%;

    cursor: inherit;
}

select::-ms-expand {
    display: none;
}

.select {
    width: 100%;

    border: 1px solid red;
    border-radius: 3px;

    padding: 0.5rem;

    cursor: pointer;

    background-color: white;

    display: grid;
    grid-template-areas: "select";
    align-items: center;
}

.select::after {
    content: "";

    width: 0.8rem;
    height: 0.5rem;

    background-color: black;

    clip-path: polygon(100% 0%, 0 0%, 50% 100%);

    justify-self: end;
}

select,
.select::after {
    grid-area: select;
}

select:focus-within {
    outline: 2px solid blue;
    outline-offset: 0.5rem;
}
```

</details>

<details>
  <summary>Custom Checkbox</summary>

```HTML
<label class="form-control">
    <input type="checkbox" name="checkbox" />
    Checkbox
</label>
```

```CSS
.form-control {
    display: grid;
    grid-template-columns: 1rem auto;
    gap: 0.5rem;
    align-items: center;
}

.form-control input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    margin: 0;
    padding: 0;

    font: inherit;
    color: currentColor;

    width: 1.15rem;
    height: 1.15rem;

    border: 0.15rem solid currentColor;
    border-radius: 3px;

    display: grid;
    place-content: center;
}

.form-control input::before {
    content: "";

    width: 0.65rem;
    height: 0.65rem;

    transform: scale(0);
    transition: 120ms transform ease-in-out;

    box-shadow: inset 1rem 1rem var(--accent);
}

.form-control input:checked::before {
    transform: scale(1);
}
```

</details>

<details>
  <summary>Reset input/button/textarea/select</summary>

```HTML
<input type="text" name="name-input" id="name_input">
<button>Button with the font used on the body</button>

```

```CSS
input,
button,
textarea,
select {
    font: inherit;
}
```

</details>

<details>
  <summary>Gradient Outline Text</summary>

```HTML
<h4 class="outline">Lorem ipsum dolor sit.</h4>

```

```CSS
.outline {
    position: relative;

    color: var(--body);

    text-shadow: -1px -1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}

.outline:after {
    content: "";

    position: absolute;
    inset: 0;
    z-index: 1;

    background: linear-gradient(315deg, #fc5296 0%, #f67062 74%);

    mix-blend-mode: darken;
}
```

</details>

<details>
  <summary>Image Mask</summary>

```HTML
<img src="https://picsum.photos/id/666/300/300" alt="Image With SVG Mask" />

```

```CSS
img {
    aspect-ratio: 1;
    object-fit: cover;

    mask-image: url(yin-yang-bold.svg);
    mask-repeat: no-repeat;
    mask-size: cover;
}
```

</details>

<details>
  <summary>Disable User Selection</summary>

```HTML
<div class="no-selection">No selection with user-select CSS property</div>

```

```CSS
.no-selection {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

</details>

<details>
  <summary>Toggle Button</summary>

```HTML
<div class="toggle-container">
    <label for="toggle" class="label">
        <span class="toggle-text">On</span>
        <input type="checkbox" name="" id="toggle" />
        <span class="toggle-btn"></span>
        <span class="toggle-text">Off</span>
    </label>
</div>

```

```CSS
.label {
  position: relative;

  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: 1rem;

  padding: 0.5rem 1.25rem;

  border-radius: 100vw;
}

.toggle-text {
  z-index: 2;

  user-select: none;
}

.label input {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  cursor: pointer;

  border-radius: 100vw;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.label input:focus-visible {
  outline: 4px solid grey;
  outline-offset: 4px;
}

.toggle-btn {
  position: relative;

  pointer-events: none;

  width: 5.5rem;
  height: 3rem;

  border-radius: 100vw;

  box-shadow: inset 0px -1px 5px rgba(190, 190, 190, 0.2);
}

.toggle-btn::after {
  content: '';

  position: absolute;
  top: 50%;
  left: 0.3rem;

  transform: translate3d(0, -50%, 0);

  transition: transform 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035);

  height: 2.5rem;
  width: 2.5rem;

  background-color: red;

  border-radius: 50%;

  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.6);
}

.label input:checked ~ .toggle-btn::after {
  transform: translate3d(2.4rem, -50%, 0);
}
```

</details>

<details>
  <summary>Custom Label</summary>

```HTML
<form>
    <div class="input-wrapper">
        <input type="text" class="form-input" id="first_name" placeholder="First Name" autocomplete="given-name" />
        <label for="first_name" class="form-label">First Name</label>
    </div>
</form>

```

```CSS
.input-wrapper {
  position: relative;

  display: grid;
  gap: 0.2em;

  margin-block: 0.6em;
}

.form-label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.05em;

  margin-inline: 0.45em;
  padding: 0.1em 0.35em;

  background-color: grey;

  transition: transform 150ms cubic-bezier(0.86, -0.1, 0.27, 1.15),
    background-color 150ms cubic-bezier(0.86, -0.1, 0.27, 1.15);
}

.form-input {
  background-color: grey;

  box-shadow: 0 0 0 -0.1em black, 0 0 0 -0.2em red;

  transition: box-shadow 400ms cubic-bezier(0.86, -0.1, 0.27, 1.15);
}

.form-input:focus {
  outline: none;

  box-shadow: 0 0 0 0.2em black, 0 0 0 0.4em red;
}

.form-input:focus ~ .form-label,
.form-input:not(:placeholder-shown) ~ .form-label {
  /* translate top depends on the label font-size and the padding of the input */
  transform: translate3d(0, -2.55em, 0);

  background-color: black;
  color: red;
}

.form-input::placeholder {
  opacity: 0;
}
```

</details>

<details>
  <summary>Writing Mode</summary>

```HTML
 <div class="writing-mode">Lorem ipsum dolor sit amet.</div>

```

```CSS
.writing-mode{
    /* default */
    /* writing-mode: horizontal-tb; */

    /* writing-mode: vertical-rl; */
    writing-mode: vertical-lr;
}
```

</details>

<details>
  <summary>Accent Color</summary>

```HTML
 <input type="checkbox" />

```

```CSS
input{
  accent-color: red;
}
```

</details>

<details>
  <summary>Overscroll Behavior</summary>

```HTML
<div class="box outside">
    <div class="box inside">
        <div class="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In recusandae, doloremque, repellendus corrupti neque illum, similique odit atque expedita omnis optio!
        </div>
    </div>
    <div class="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In recusandae, doloremque, repellendus corrupti neque illum, similique odit atque expedita omnis optio!
    </div>
</div>

```

```CSS
.inside{
  /* auto is the default value, when the scroll on the inside box get to the end, automatically the scroll motion is passed to the outside box */
  /* contain disable this functionality, the scroll is kept on the inside box */
  /* none disable any overscroll, in iOS disable the bounce effect */
  overscroll-behavior: contain;
}
```

</details>

<details>
  <summary>Individual CSS Transform</summary>

```HTML
 <button>Wah!</button>
```

```CSS
:root {
  --ty: 20%;
  --scale: 1;
  --deg: 0deg;
}
button{
  transform: translateY(var(--ty)) scale(var(--scale)) rotate(var(--deg));
  will-change: transform;
}
button:hover {
  --scale: 0.8;
}
button:active{
  --deg: 180deg;
}

```

</details>

<details>
  <summary>Radial Gradient</summary>

```HTML
<div class="radial-gradient pattern"></div>
<div class="radial-gradient repeating"></div>
```

```CSS
:root {
  --size: 100px;
}

.pattern {
  background: radial-gradient(10% 10%, white 90%, transparent),
    radial-gradient(54% 54%, transparent 98%, red) calc(var(--size)/2) calc(var(--size)/2);
  background-size: var(--size) var(--size);
}

.repeating{
  background-image: repeating-radial-gradient(transparent 0% 12%, red 13% 26% );
  background-size: var(--size) var(--size);
}
```

</details>

<details>
  <summary>Blend Effect CSS</summary>

```HTML
<div class="canvas">
    <img src="https://picsum.photos/id/433/640/360" alt="" />
</div>
```

```CSS
:root {
  --photo-brightness: 90%;
  --photo-contrast: 110%;
  --photo-blur: 2px;
}

.canvas {
  position: relative;

  filter: contrast(2000%);
  
  overflow: hidden;
}

.canvas::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  bottom: -50%;
  right: -50%;

  background: radial-gradient(circle at center, #333, #fff);
  background-size: 0.25em 0.25em;

  transform: rotate(20deg);
}

.canvas img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  mix-blend-mode: hard-light;

  filter: grayscale(1) brightness(var(--photo-brightness)) contrast(var(--photo-contrast)) blur(var(--photo-blur));
}

```

</details>

<details>
  <summary>Constant Shapes</summary>

```HTML
<div class="shapes">
    <div class="circle">
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, nisi?</div>
    </div>
    <div class="pill"></div>
</div>
```

```CSS
.shapes {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  width: 100%;
}

.circle {
  background-color: blue;

  aspect-ratio: 1/1;

  height: 100%;
  width: max-content;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  border-radius: 50%;
}

.pill {
  width: 80px;
  height: 50px;

  background-color: green;

  border-radius: 100vw;
}
```

</details>
