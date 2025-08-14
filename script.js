document.addEventListener("DOMContentLoaded", () => {
    let navLinks = document.querySelectorAll(".nav-link");
    
    let currentPath = window.location.pathname.split("/").pop();

   
    if (currentPath === "") {
        currentPath = "index1.html";
    }

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    
    let dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        let today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    
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
