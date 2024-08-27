const navLinks = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute("href").split("#")[1];
        const section = document.getElementById(sectionId);
        const headerHeight = document.querySelector("header").offsetHeight;

        // Remove active class from all nav links
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        // Add active class to the current nav link
        link.classList.add("active");

        window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: "smooth"
        });
    });
});

// Add IntersectionObserver to sections
sections.forEach((section) => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const sectionId = section.id;
            const navLink = document.querySelector(`[href="#${sectionId}"]`);
    
        // Remove active class from all nav links
        navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        });
    
        // Add active class to the corresponding nav link
        navLink.classList.add("active");
    }
    }, { threshold: 0.5 });

    observer.observe(section);
});
