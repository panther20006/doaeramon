
// ===============================================
// DORAEMON WORLD
// SECOND PASSWORD PAGE - FOR MAUSAM
// ===============================================

// NOTE:
// This is client-side password checking.
// The password remains visible in browser
// Developer Tools / Sources.


// ===============================================
// PASSWORD
// ===============================================

const PASSWORD_2 = "2352006";


// ===============================================
// EMAILJS CONFIGURATION
// ===============================================

const EMAILJS_PUBLIC_KEY =
    "ItndrW1BubVRc_n0A";

const EMAILJS_SERVICE_ID =
    "service_27ulio7";

const EMAILJS_TEMPLATE_ID =
    "template_n3gwhmm";


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
// CHECK FIRST PASSWORD STEP
// ===============================================

if (
    sessionStorage.getItem("secretStep1")
    !== "true"
) {

    window.location.replace(
        "secret-login.html"
    );
}


// ===============================================
// INITIALIZE EMAILJS
// ===============================================

if (window.emailjs) {

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });

} else {

    console.warn(
        "EmailJS library was not loaded."
    );
}


// ===============================================
// SEND SUCCESS NOTIFICATION
// ===============================================

function sendSuccessEmail() {

    if (!window.emailjs) {

        return Promise.reject(
            new Error("EmailJS is unavailable.")
        );
    }

    const templateParams = {

        name: "Mausam",

        answer:
            "Second password entered correctly 💙",

        message:
            "Mausam entered the correct second password and unlocked the secret page.",

        time:
            new Date().toLocaleString()

    };

    return emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        templateParams

    );
}


// ===============================================
// OPEN SECRET PAGE
// ===============================================

function openSecretPage() {

    sessionStorage.setItem(
        "secretUnlocked",
        "true"
    );

    sessionStorage.removeItem(
        "secretStep1"
    );

    window.location.href =
        "secret.html";
}


// ===============================================
// CHECK SECOND PASSWORD
// ===============================================

function checkPassword() {

    if (enterBtn.disabled) {
        return;
    }

    const password =
        passwordInput.value.trim();

    errorMessage.style.color =
        "#e05b77";

    // WRONG PASSWORD

    if (password !== PASSWORD_2) {

        errorMessage.textContent =
            "Wrong password. Please try again.";

        passwordInput.value = "";

        passwordInput.focus();

        return;
    }

    // CORRECT PASSWORD

    enterBtn.disabled = true;

    enterBtn.textContent =
        "Opening... 💙";

    errorMessage.style.color =
        "#087dcc";

    errorMessage.textContent =
        "Password correct... 💙";

    // Send notification, then redirect.
    // Redirect still happens if email fails.

    sendSuccessEmail()

        .catch(function(error) {

            console.error(
                "EmailJS Error:",
                error
            );

        })

        .finally(function() {

            openSecretPage();

        });
}


// ===============================================
// ENTER BUTTON CLICK
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

            event.preventDefault();

            checkPassword();

        }

    }
);


// ===============================================
// AUTO FOCUS
// ===============================================

window.addEventListener(
    "load",
    function() {

        passwordInput.focus();

    }
);
