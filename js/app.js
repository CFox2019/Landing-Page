const cta = document.getElementById("cta");
const navCta = document.getElementById("nav-cta");
const about = document.getElementById("about");
const navAbout = document.getElementById("nav-about");
const headerHeight = document.getElementById("header").offsetHeight;
const articles = document.getElementById("articles");
const navArticles = document.getElementById("nav-articles");
const social = document.getElementById("social");
const navSocial = document.getElementById("nav-social");
const activeColor = "#b51496";
const defaultColor = "#9b59b6";

window.addEventListener("scroll", function () {
    ctaActiveSection();
    aboutActiveSection();
    articlesActiveSection();
    socialActiveSection();
});

/**
 * Determines if cta is active, highlights if active and changes back to default
 * color when not active.
 */
function ctaActiveSection() {
    const ctaTop = cta.offsetTop - headerHeight;
    const ctaBottom = (cta.offsetTop + cta.offsetHeight) - headerHeight;
    if (window.scrollY >= ctaTop && window.scrollY < ctaBottom) {
        navCta.style.backgroundColor = activeColor;
    } else {
        navCta.style.backgroundColor = defaultColor;
    }
};

/**
 * Determines if about is active, highlights if active and changes back to default
 * color when not active.
 */
function aboutActiveSection() {
    const aboutTop = about.offsetTop - headerHeight;
    const aboutBottom = (about.offsetTop + about.offsetHeight) - headerHeight;
    if (window.scrollY >= aboutTop && window.scrollY < aboutBottom) {
        navAbout.style.backgroundColor = activeColor;
    } else {
        navAbout.style.backgroundColor = defaultColor;
    }
};

/**
 * Determines if articles is active, highlights if active and changes back to default
 * color when not active.
 */
function articlesActiveSection() {
    const articlesTop = articles.offsetTop - headerHeight;
    const articlesBottom = (articles.offsetTop + articles.offsetHeight) - headerHeight;
    if (window.scrollY >= articlesTop && window.scrollY < articlesBottom) {
        navArticles.style.backgroundColor = activeColor;
    } else {
        navArticles.style.backgroundColor = defaultColor;
    }
};

/**
 * Determines if the social is active, highlights if active and changes back to default
 * color when not active.
 */
function socialActiveSection() {
    const socialTop = social.offsetTop - headerHeight;
    const socialBottom = (social.offsetTop + social.offsetHeight) - headerHeight;
    if (window.scrollY >= socialTop && window.scrollY < socialBottom) {
        navSocial.style.backgroundColor = activeColor;
    } else {
        navSocial.style.backgroundColor = defaultColor;
    }
};

/**
 * Scrolls to cta when clicked
 */
document.getElementById("nav-cta").addEventListener("click", function(event) {
    var elem = document.getElementById("cta");
    scrollToSection(elem, event);
});

/**
 * Scrolls to about when clicked
 */
document.getElementById("nav-about").addEventListener("click", function(event) {
    var elem = document.getElementById("about");
    scrollToSection(elem, event);
});

/**
 * Scrolls to articles when clicked
 */
document.getElementById("nav-articles").addEventListener("click", function(event) {
    var elem = document.getElementById("articles");
    scrollToSection(elem, event);
});

/**
 * Scrolls to social when clicked
 */
document.getElementById("nav-social").addEventListener("click", function(event) {
    var elem = document.getElementById("social");
    scrollToSection(elem, event);
});

/**
 * This function should be used from a link click event handler to prevent it from
 * following the href, which would by default refresh the page, then scrolls to the
 * top of the provided element.
 * 
 * @param {HTMLElement} elem The section to scroll to.
 * @param {Event} event The click event from click event listener.
 */
function scrollToSection(elem, event) {
    event.preventDefault();
    window.scrollTo( {
        top: elem.offsetTop - headerHeight,
        behavior: 'smooth'
    });
}