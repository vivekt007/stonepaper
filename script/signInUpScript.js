function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const type =
        passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
}

//slide in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

// Slide-in animation Change the var and class name for new element in both
const leftHiddenElements = document.querySelectorAll(".leftHidden");
leftHiddenElements.forEach((el) => observer.observe(el));

const rightHiddenElements = document.querySelectorAll(".rightHidden");
rightHiddenElements.forEach((el) => observer.observe(el));
