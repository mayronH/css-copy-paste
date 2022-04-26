# CSS Tricks

Some **CSS only** easy tricks. 
*All the explanation is on the .css files*

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