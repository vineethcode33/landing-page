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

const handleScroll = () => {
  /**
   * If an element is in the view port, its top and left are
   * always greater than or equal to zero. Distance from bottom
   * should be less than or equal to viewport height
   *
   * Horizantally its distance from right should be less than
   * or equall to the width of the viewport
   *
   */

  let sectionInView;
  sections.forEach((section) => {
    let sectionDetails = section.getBoundingClientRect();
    let verticalPosition = sectionDetails.top + sectionDetails.height;

    if (verticalPosition >= 0 && verticalPosition <= window.innerHeight) {
      sectionInView = section.id;
    }
  });

  if (sectionInView) {
    setNewActiveSection(sectionInView);
  }
};

const handleNavClick = () => {
  let sectionClicked = event.target.dataset.nav;
  document
    .querySelector(`#${sectionClicked}`)
    .scrollIntoView({ behavior: "smooth", block: "start" });
  setNewActiveSection(sectionClicked);
};

const setNewActiveSection = (activeSection) => {
  let oldActiveSection = document.querySelector(".your-active-class");
  let newActiveSection = document.querySelector(`#${activeSection}`);

  oldActiveSection.classList.remove("your-active-class");
  newActiveSection.classList.add("your-active-class");
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
    listItem.className = "menu__link";
    listItem.dataset.nav = `section${index + 1}`;
    listItem.href = `index.html#section${index + 1}`;
    listItem.innerText = `Section ${index + 1}`;
    navUl.appendChild(listItem);
  });
};

// Add class 'active' to section when near top of viewport
const setActive = () => {
  document.addEventListener("scroll", handleScroll);
};

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
setActive();
