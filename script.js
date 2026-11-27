
console.log("Welcome to my portfolio!");

const projectButton = document.querySelector(".btn");

projectButton.addEventListener("click", function() {
    console.log("You clicked View My Projects!");
});



// DARK MODE WITH LOCAL STORAGE

const themeButton = document.getElementById("themeButton");

// Function to update button text

function updateThemeButton() {

// DARK MODE WITH LOCAL STORAGE

const themeButton = document.getElementById("themeButton");

// Check saved theme

const savedTheme = localStorage.getItem("portfolioTheme");

// Apply saved theme

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

// Update button text

function updateThemeButton() {

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

}

// Show correct button text when website opens

updateThemeButton();

// Change theme when clicked

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Find current theme

    let currentTheme = "light";

    if (document.body.classList.contains("dark-mode")) {
        currentTheme = "dark";
    }

    // Save selected theme

    localStorage.setItem("portfolioTheme", currentTheme);

    // Update button

    updateThemeButton();

});


}

// Get saved theme from browser

const savedTheme = localStorage.getItem("portfolioTheme");

// Apply saved theme

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

} else {

    document.body.classList.remove("dark-mode");

}

// Update button text

updateThemeButton();

// Change theme when button is clicked

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Check current theme

    const currentTheme =
        document.body.classList.contains("dark-mode") ? "dark" : "light";

    // Save theme in browser

    localStorage.setItem("portfolioTheme", currentTheme);

    // Update button text

    updateThemeButton();

});

// Select menu button and navigation links

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");

// Detect button click

menuButton.addEventListener("click", function() {

    // Show or hide navigation links

    navLinks.classList.toggle("show-menu");

});

// Contact Form Validation

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing

    event.preventDefault();

    // Get values from input fields

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check name

    if (name === "") {

        formStatus.textContent = "Please enter your name.";
        formStatus.style.color = "red";
        return;

    }


    // Check email

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formStatus.textContent = "Please enter a valid email address.";
        formStatus.style.color = "red";
        return;

    }


    // Check subject

    if (subject === "") {

        formStatus.textContent = "Please enter a subject.";
        formStatus.style.color = "red";
        return;

    }


    // Check message

    if (message.length < 10) {

        formStatus.textContent = "Message must contain at least 10 characters.";
        formStatus.style.color = "red";
        return;

    }


    // All validations passed

    formStatus.textContent =
        "Thank you, " + name + "! Your form is valid.";

    formStatus.style.color = "green";


    // Clear the form

    contactForm.reset();

});
// TYPING ANIMATION

const typingElement = document.getElementById("typing");

const words = [
    "Computer Science Student",
    "Java Programmer",
    "Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingElement.textContent = currentWord.substring(0, letterIndex);

    if (!deleting && letterIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
// SCROLL TO TOP BUTTON

const topButton = document.getElementById("topButton");
console.log(topButton);

// Show button when scrolling

window.addEventListener("scroll", function() {

    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

// Scroll to top when clicked

topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});