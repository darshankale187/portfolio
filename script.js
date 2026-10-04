// Smooth reveal animation

const elements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .about-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});
