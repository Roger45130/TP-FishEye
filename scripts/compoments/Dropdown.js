document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("trierPar");
    const dropdown = dropdownButton.parentElement;
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const icon = dropdownButton.querySelector("i");

    // Toggle dropdown rendre visible
    dropdownButton.addEventListener("click", () => {
        dropdown.classList.toggle("open");
        dropdownContent.style.display = dropdown.classList.contains("open") ? "block" : "none";
        icon.style.transform = dropdown.classList.contains("open") ? "rotate(180deg)" : "rotate(0deg)";
    });

    // Fermer dropdown qu'en on clique sur une option
    dropdownContent.addEventListener("click", (event) => {
        if (event.target.classList.contains("option")) {
            dropdown.classList.remove("open");
            dropdownContent.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    });

    // Fermer dropdown qu'en on clique en dehors du dropdown
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
            dropdownContent.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    });
});