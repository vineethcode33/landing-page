/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("section");
let navUl = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const handleNavClick = () => {
  console.log(event);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const addNav = () => {
  sections.forEach((element, index) => {
    let listItem = document.createElement("li");
    listItem.setAttribute("class", "menu__link");
    listItem.setAttribute("href", `index.html#section${index + 1}`);
    listItem.appendChild(document.createTextNode(`Section ${index + 1}`));
    navUl.appendChild(listItem);
  });
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
const scrollToLink = () => {
  navUl.addEventListener("click", handleNavClick);
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addNav();

// Scroll to section on link click
scrollToLink();
// Set sections as active
