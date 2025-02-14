document.addEventListener("DOMContentLoaded", function() {
    showWelcome(); // Show welcome message initially
});

function hideWelcome() {
    document.getElementById("welcome").classList.add("hidden");
}

function showWelcome() {
    document.getElementById("welcome").classList.remove("hidden");
}
