const products = ["Breads", "Pastries", "Cakes"];
let favorites = JSON.parse(localStorage.getItem("bakeryFavorites")) || [];
function saveFavorites() {
    localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
}
const favoriteButtons = document.querySelectorAll(".favorite-btn");
const favoritesMessage = document.getElementById("favorites-message");

function renderFavorites() {
    if (!favoritesMessage) {
        return;
    }

    if (favorites.length === 0) {
        favoritesMessage.textContent = "You haven't selected any favorites yet.";
    } else {
        favoritesMessage.textContent = "Saved favorites: " + favorites.join(", ");
    }
}
function toggleFavorite(productName) {
    if (favorites.includes(productName)) {
        favorites = favorites.filter(item => item !== productName);
    } else {
        favorites.push(productName);
    }

    saveFavorites();
    renderFavorites();
}
favoriteButtons.forEach(button => {
    button.addEventListener("click", function () {
        toggleFavorite(button.dataset.product);
    });
});
if (favoritesMessage) {
    renderFavorites();
}
const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const itemDetailsInput = document.getElementById("item-details");
const emailError = document.getElementById("email-error");
const detailsError = document.getElementById("details-error");

function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "Please enter your email address.";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }

    emailError.textContent = "";
    return true;
}
function validateDetails() {
    const details = itemDetailsInput.value.trim();

    if (details === "") {
        detailsError.textContent = "Please enter the item details.";
        return false;
    }

    if (details.length < 10) {
        detailsError.textContent = "Please provide at least 10 characters of item details.";
        return false;
    }

    detailsError.textContent = "";
    return true;
}
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        const emailIsValid = validateEmail();
        const detailsAreValid = validateDetails();

        if (!emailIsValid || !detailsAreValid) {
            event.preventDefault();
        }
    });
}

const nameInput = document.getElementById("name");

if (nameInput) {
    const savedName = localStorage.getItem("customerName");

    if (savedName) {
        nameInput.value = savedName;
    }

    nameInput.addEventListener("input", function () {
        localStorage.setItem("customerName", nameInput.value);
    });
}