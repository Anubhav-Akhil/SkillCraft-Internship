document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("main-header");

    window.addEventListener("scroll", function() {
        // Check the vertical scroll position
        if (window.scrollY > 50) { // Change this value to adjust when the color change happens
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});