
// ===============================================
// DORAEMON WORLD
// SECRET LOGIN JAVASCRIPT
// ===============================================

// IMPORTANT:
// This password is still visible in browser Sources.
// Replace with backend authentication for security.

const PASSWORD_1 = "doaremon123";

// ===============================================
// ELEMENTS
// ===============================================

const passwordInput =
    document.getElementById("passwordInput");

const enterBtn =
    document.getElementById("enterBtn");

const errorMessage =
    document.getElementById("errorMessage");


// ===============================================
// PASSWORD CHECK
// ===============================================

function checkPassword() {

    const password =
        passwordInput.value.trim();

    if (password === PASSWORD_1) {

        sessionStorage.setItem(
            "secretStep1",
            "true"
        );

        window.location.href =
            "mausam-password.html";

    } else {

        errorMessage.textContent =
            "Wrong password.";

        passwordInput.value = "";

        passwordInput.focus();
    }
}


// ===============================================
// ENTER BUTTON
// ===============================================

enterBtn.addEventListener(
    "click",
    checkPassword
);


// ===============================================
// ENTER KEY
// ===============================================

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    }
);


// ===============================================
// INITIAL FOCUS
// ===============================================

window.addEventListener(
    "load",
    function() {
        passwordInput.focus();
    }
);

