
// Animation when category cards appear
const categories = document.querySelectorAll(".category");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

categories.forEach((category) => {
    category.classList.add("hidden");
    observer.observe(category);
});

// Welcome message
console.log("Bienvenue chez nBOOKSTORE !");
