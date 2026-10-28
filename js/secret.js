/* =========================================================
   DORAEMON WORLD — SECRET PAGE
   YES / NO EMAIL SYSTEM
========================================================= */

(() => {
    "use strict";

    // CHECK ACCESS
    if (sessionStorage.getItem("secretUnlocked") !== "true") {
        window.location.replace("secret-login.html");
        return;
    }

    // EMAILJS CONFIGURATION
    const EMAIL_PUBLIC_KEY = "jpJhoKy2LTqinM6ui";
    const EMAIL_SERVICE_ID = "service_wtiylx9";
    const EMAIL_TEMPLATE_ID = "template_8yqr0qk";

    function setupSecretPage() {
        const lockButton = document.getElementById("lockButton");
        const yesButton = document.getElementById("yesButton");
        const noButton = document.getElementById("noButton");
        const answerMessage = document.getElementById("answerMessage");

        let sending = false;
        let answerSent = false;

        // NO VISIBLE EMAIL STATUS
        if (answerMessage) {
            answerMessage.textContent = "";
            answerMessage.hidden = true;
        }

        // LOCK PAGE
        if (lockButton) {
            lockButton.addEventListener("click", () => {
                sessionStorage.removeItem("secretUnlocked");
                sessionStorage.removeItem("secretStep1");

                window.location.replace("secret-login.html");
            });
        }

        function setButtonsDisabled(disabled) {
            if (yesButton) {
                yesButton.disabled = disabled;
            }

            if (noButton) {
                noButton.disabled = disabled;
            }
        }

        // SEND ANSWER
        async function sendAnswer(answer) {
            if (sending || answerSent) {
                return;
            }

            if (!window.emailjs) {
                console.error(
                    "EmailJS library load nahi hui. secret.html ka EmailJS script check karo."
                );
                return;
            }

            sending = true;
            setButtonsDisabled(true);

            try {
                window.emailjs.init({
                    publicKey: EMAIL_PUBLIC_KEY
                });

                const templateParams = {
                    name: "Mausam",
                    answer: answer,
                    message: "Mausam answered: " + answer,
                    time: new Date().toLocaleString()
                };

                const response = await window.emailjs.send(
                    EMAIL_SERVICE_ID,
                    EMAIL_TEMPLATE_ID,
                    templateParams
                );

                answerSent = true;

                console.log(
                    "EmailJS request successful:",
                    response.status,
                    response.text
                );
            } catch (error) {
                console.error(
                    "EmailJS Error:",
                    error?.status ?? "No status",
                    error?.text ?? error?.message ?? error
                );
            } finally {
                sending = false;

                // Allow retry after failure.
                setButtonsDisabled(answerSent);
            }
        }

        // YES BUTTON
        if (yesButton) {
            yesButton.addEventListener("click", () => {
                sendAnswer("YES 💙");
            });
        }

        // NO BUTTON
        if (noButton) {
            noButton.addEventListener("click", () => {
                sendAnswer("NO 🌸");
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            setupSecretPage,
            { once: true }
        );
    } else {
        setupSecretPage();
    }
})();