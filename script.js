/* =========================================
   MODE JOUR / MODE NUIT
========================================= */

const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");

lightMode.addEventListener("click", () => {

    document.body.classList.remove("dark");

    localStorage.setItem("theme", "light");

});


darkMode.addEventListener("click", () => {

    document.body.classList.add("dark");

    localStorage.setItem("theme", "dark");

});


/* =========================================
   GARDER LE THÈME CHOISI
========================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


/* =========================================
   APPARITION DES SECTIONS AU SCROLL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================
   EFFET PARALLAX AU SOURIS
========================================= */

const auroras = document.querySelectorAll(".aurora");

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 30;
    const y = (event.clientY / window.innerHeight - 0.5) * 30;

    auroras.forEach((aurora, index) => {

        const multiplier = index + 1;

        aurora.style.transform =
            `translate(${x * multiplier}px, ${y * multiplier}px)`;

    });

});


/* =========================================
   NAVIGATION FLUIDE
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   EFFET LUMINEUX SUR LES CARTES
========================================= */

const cards = document.querySelectorAll(
    ".service-card, .project-card, .week-card"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.background =
            `radial-gradient(
                circle at ${x}px ${y}px,
                rgba(220, 160, 80, 0.12),
                var(--card)
            )`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.background = "";

    });

});