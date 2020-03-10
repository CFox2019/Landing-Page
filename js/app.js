/**
 * Determines if cta is active, highlights if active and changes back to default
 * color when not active.
 */
function ctaActiveSection() {
    const cta = document.getElementById("cta");
    const navCta = document.getElementById("nav-cta");
    const headerHeight = document.getElementById("header").offsetHeight;
    const ctaTop = cta.offsetTop - headerHeight;
    const ctaBottom = (cta.offsetTop + cta.offsetHeight) - headerHeight;
    if (window.scrollY >= ctaTop && window.scrollY < ctaBottom) {
        navCta.className = "nav-highlighted";
    } else {
        navCta.className = "nav-default";
    }
};

/**
 * Determines if about is active, highlights if active and changes back to default
 * color when not active.
 */
function aboutActiveSection() {
    const about = document.getElementById("about");
    const navAbout = document.getElementById("nav-about");
    const headerHeight = document.getElementById("header").offsetHeight;
    const aboutTop = about.offsetTop - headerHeight;
    const aboutBottom = (about.offsetTop + about.offsetHeight) - headerHeight;
    if (window.scrollY >= aboutTop && window.scrollY < aboutBottom) {
        navAbout.className = "nav-highlighted";
    } else {
        navAbout.className = "nav-default";
    }
};

/**
 * Determines if articles is active, highlights if active and changes back to default
 * color when not active.
 */
function articlesActiveSection() {
    const articles = document.getElementById("articles");
    const navArticles = document.getElementById("nav-articles");
    const headerHeight = document.getElementById("header").offsetHeight;
    const articlesTop = articles.offsetTop - headerHeight;
    const articlesBottom = (articles.offsetTop + articles.offsetHeight) - headerHeight;
    if (window.scrollY >= articlesTop && window.scrollY < articlesBottom) {
        navArticles.className = "nav-highlighted";
    } else {
        navArticles.className = "nav-default";
    }
};

/**
 * Determines if the social is active, highlights if active and changes back to default
 * color when not active.
 */
function socialActiveSection() {
    const social = document.getElementById("social");
    const navSocial = document.getElementById("nav-social");
    const headerHeight = document.getElementById("header").offsetHeight;
    const socialTop = social.offsetTop - headerHeight;
    const socialBottom = (social.offsetTop + social.offsetHeight) - headerHeight;
    if (window.scrollY >= socialTop && window.scrollY < socialBottom) {
        navSocial.className = "nav-highlighted";
    } else {
        navSocial.className = "nav-default";
    }
};

/**
 * This function should be used from a link click event handler to prevent it from
 * following the href, which would by default refresh the page, then scrolls to the
 * top of the provided element.
 *
 * @param {HTMLElement} elem The section to scroll to.
 * @param {Event} event The click event from click event listener.
 */
function scrollToSection(elem, event) {
    const headerHeight = document.getElementById("header").offsetHeight;
    event.preventDefault();
    window.scrollTo( {
        top: elem.offsetTop - headerHeight,
        behavior: 'smooth'
    });
}

function addScrollListeners() {
    window.addEventListener("scroll", function () {
        ctaActiveSection();
        aboutActiveSection();
        articlesActiveSection();
        socialActiveSection();
    });
}

function addClickListeners() {
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
}

function createMenu() {
    const ul = document.createElement('ul');

    const navLinks = [
        {id: 'nav-cta', name: 'Sign-up'},
        {id: 'nav-about', name: 'About'},
        {id: 'nav-articles', name: 'Articles'},
        {id: 'nav-social', name: 'Social'}
    ];

    document.getElementById('navigation').appendChild(ul);
    navLinks.forEach(function (obj, i, arr) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('id', obj.id);
        a.setAttribute('href', '');
        a.setAttribute('class', 'nav-default');
        a.innerHTML = obj.name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    addScrollListeners();
    addClickListeners();
}

createMenu();