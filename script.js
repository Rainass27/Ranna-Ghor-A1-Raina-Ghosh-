// Highlight active navbar link
document.addEventListener("DOMContentLoaded", () => {
    let navLinks = document.querySelectorAll(".nav-link");
    // Get the page name from the URL (e.g., "menu.html")
    let currentPath = window.location.pathname.split("/").pop();

    // If on the root domain, set the path to index.html
    if (currentPath === "") {
        currentPath = "index1.html";
    }

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // Prevent past dates in reservation form
    let dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        let today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    // Simple feedback form validation
    let feedbackForm = document.querySelector("#feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (e) => {
            let name = document.querySelector("#name").value.trim();
            let email = document.querySelector("#email").value.trim();
            let message = document.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                e.preventDefault();
            }
        });
    }
});