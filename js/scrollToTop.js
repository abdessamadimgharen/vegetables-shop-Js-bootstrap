document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn")
    function updateButtonDisplay() {
        if (window.innerWidth <= 600) {
            scrollToTopBtn.style.display = "none";
        } else {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
    }
    updateButtonDisplay();
    // Update the display property on window resize
    window.addEventListener("resize", updateButtonDisplay);

    // Add scroll event listener
    window.addEventListener("scroll", function () {
        updateButtonDisplay();
    });
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
})
