// Responsive navigation menu toggle

const navBtn = document.querySelector(".nav-menu-btn")
const navBar = document.querySelector(".nav")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

navBtn.addEventListener("click", function () {
    navBtn.classList.toggle("close")
    navBar.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navBtn.classList.remove("close")
        navBar.classList.remove("active")
        navMenu.classList.remove("active")
    })
})

// Initial ScrollReveal

const revealConfigurations = [
    { selector: '.inner-title, .inner-second-title', config: { scale: 1.5, delay: 300 } },
    { selector: '.home-info h1, .about-img, .contact-card .title', config: { delay: 300, origin: "left" } },
    { selector: '.home-img, .description, .inner-info-link', config: { delay: 300, origin: "right" } },
    { selector: '.skills-description, .services-description', config: { delay: 300, origin: "top" } },
    { selector: '.media-icons a, .list-item', config: { delay: 300, origin: "top", interval: 200 } },
    { selector: '.education', config: { delay: 300, origin: "bottom", interval: 200 } },
    { selector: '.work-exp-title, .experience-card, .services-container, .portfolio-img-card', config: { delay: 300, origin: "bottom", interval: 200 } },
    { selector: '.home-info h3, .home-info p, .home-info-link', config: { delay: 600, origin: "left" } },
]

function InitialScrollReveal() {
    window.sr = ScrollReveal({
        reset: true,
        distance: "50px",
        duration: 1000,
        delay: 100
    })
    revealConfigurations.forEach(({ selector, config }) => {
        sr.reveal(selector, config)
    })
}

InitialScrollReveal()

// Off ScrollReveal

function disableScrollReveal() {
    sr.clean()
    document.documentElement.style.overflowY = "hidden"
    document.body.style.overflowY = "hidden"
    revealConfigurations.forEach(({ selector }) => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.transform = ""
            el.style.opacity = ""
            el.style.transition = ""
            el.style.visibility = ""
        })
    })
    console.log("function off")
}

// On ScrollReveal
function enableScrollReveal() {
    document.documentElement.style.overflowY = ""
    document.body.style.overflowY = ""
    InitialScrollReveal()
    console.log("function on")
}

// Services section - Modal

const serviceModal = document.querySelectorAll(".service-modal")
const learnMoreBtn = document.querySelectorAll(".learn-more-btn")
const modalCloseBtn = document.querySelectorAll(".modal-close-btn")

const modal = function (modalClick) {
    serviceModal[modalClick].classList.add("active")
    disableScrollReveal()
}

learnMoreBtn.forEach((button, i) => {
    button.addEventListener("click", function () {
        modal(i)
    })
})

modalCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        serviceModal.forEach(modal => {
            modal.classList.remove("active")
        })
        enableScrollReveal()
    })
})

// Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-model")
const imgCard = document.querySelectorAll(".img-card")
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn")

const portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active")
    disableScrollReveal()
}

imgCard.forEach((button, i) => {
    button.addEventListener("click", () => {
        portfolioModal(i)
    })
})

portfolioCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        portfolioModals.forEach(modalView => {
            modalView.classList.remove("active")
        })
        enableScrollReveal()
    })
})

// header effect scroll

const header = document.querySelector(".header")
window.addEventListener("scroll", function () {
    window.scrollY > 1
        ? header.classList.add("sticky")
        : header.classList.remove("sticky")
})

// Navigation menu items active

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    sections.forEach(function (current) {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50; // Исправлено на offsetTop
        let sectionId = current.getAttribute("id");
        let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`)

        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add("active");
            } else {
                navItem.classList.remove("active");
            }
        }
    })
})

// Scroll to top button

const scrollToTop = document.querySelector(".scrollToTop")

window.addEventListener("scroll", function () {
    scrollToTop.classList.toggle("active", this.window.scrollY > 500)
})

scrollToTop.addEventListener("click", function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

// scrollToTop.addEventListener("click", function (event) {
//     event.stopPropagation(); // Предотвращаем перехват события нижними элементами
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// });

// Initialize Swiper

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

