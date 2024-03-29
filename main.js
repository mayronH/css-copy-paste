import './css/accent.css'
import './css/animated-borders.css'
import './css/blend.css'
import './css/caret.css'
import './css/checkbox.css'
import './css/clamp.css'
import './css/container.css'
import './css/custom-cursor.css'
import './css/custom-label.css'
import './css/custom-scrollbar.css'
import './css/custom-selection.css'
import './css/drop-shadow.css'
import './css/dropdown-menu.css'
import './css/empty-element.css'
import './css/fancy.css'
import './css/focus.css'
import './css/gap.css'
import './css/gradient-border.css'
import './css/grayscale.css'
import './css/inherit.css'
import './css/list.css'
import './css/main.css'
import './css/mask.css'
import './css/modal.css'
import './css/no-selection.css'
import './css/outline.css'
import './css/overscroll.css'
import './css/radial.css'
import './css/range.css'
import './css/resize.css'
import './css/select.css'
import './css/shape.css'
import './css/sticky.css'
import './css/support.css'
import './css/table.css'
import './css/toggle.css'
import './css/tooltip.css'
import './css/transform.css'
import './css/truncate-text.css'
import './css/typing-effect.css'
import './css/video.css'
import './css/writing-mode.css'
import './css/dialog.css'

// Light/Dark Button
const button = document.querySelector('#button-theme')

function getCurrentTheme() {
  // Get the system theme mode
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  //If have an localStorage for the theme use it, if not do nothing
  localStorage.getItem('csstricks.theme') ? (theme = localStorage.getItem('csstricks.theme')) : null
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
  loadTheme(theme)
})

// The button to open the menu on mobile
const navBtn = document.querySelector('.btn-menu')

// Button event to change the aria-expanded attribute for accessibility
navBtn.addEventListener('click', () => {
  // the getAttribute return a string so we parse to get a boolean
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'))

  navBtn.setAttribute('aria-expanded', !isExpanded)
})

// With multiples pages, we can set aria-current page to indicate which page is loaded for accessibility
document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page')
  }
})

window.addEventListener('DOMContentLoaded', () => {
  // Load the theme when the DOM is loaded
  loadTheme(getCurrentTheme())
})

// tabindex to make the wrappers focusable
// value -1 to not interfere with the keyboard navigation
const divWrappers = [...document.querySelectorAll('.wrapper')]
divWrappers.forEach((div) => {
  div.setAttribute('tabindex', '-1')
})

const writingWrapper = document.querySelector('.writing-mode')
document.querySelector('#button-vr').addEventListener('click', () => {
  writingWrapper.classList.remove('vertical-left')
  writingWrapper.classList.remove('horizontal')

  writingWrapper.classList.add('vertical-right')
})
document.querySelector('#button-vl').addEventListener('click', () => {
  writingWrapper.classList.remove('vertical-right')
  writingWrapper.classList.remove('horizontal')

  writingWrapper.classList.add('vertical-left')
})
document.querySelector('#button-h').addEventListener('click', () => {
  writingWrapper.classList.remove('vertical-right')
  writingWrapper.classList.remove('vertical-left')

  writingWrapper.classList.add('horizontal')
})

// set the rx for glow svg, the rx is the border-radius for svg
const glowButtons = document.querySelectorAll('.glow-effect')

glowButtons.forEach((glowButton) => {
  const glowLines = glowButton.querySelectorAll('rect')
  const rx = getComputedStyle(glowButton).borderRadius

  glowLines.forEach((line) => {
    line.setAttribute('rx', rx)
  })
})
