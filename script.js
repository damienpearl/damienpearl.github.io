document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio loaded");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Apply styles for dark mode
    const darkModeStyles = document.createElement("style");
    darkModeStyles.textContent = `
        .dark-mode {
            background-color: #222;
            color: white;
        }
        .dark-mode .entry {
            background: #333;
            color: white;
        }
    `;
    document.head.appendChild(darkModeStyles);
});
