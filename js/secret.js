/* =========================================================
   DORAEMON WORLD
   SECRET PAGE JAVASCRIPT
   YES / NO EMAIL SYSTEM
========================================================= */


/* =========================================================
   FINAL PASSWORD CHECK
========================================================= */

if (
    sessionStorage.getItem("secretUnlocked") !== "true"
) {

    window.location.replace("secret-login.html");

}


/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

/*
   IMPORTANT:
   Replace these 3 values with your actual EmailJS details.

   1. Public Key
   2. Service ID
   3. Template ID
*/

emailjs.init({
    publicKey: "ItndrW1BubVRc_n0A"
});


const EMAIL_SERVICE_ID =
    "service_ojhk09k";


const EMAIL_TEMPLATE_ID =
    "template_n3gwhmm";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           LOCK BUTTON
        ================================================= */

        const lockButton =
            document.getElementById("lockButton");


        if (lockButton) {

            lockButton.addEventListener(
                "click",
                function () {

                    sessionStorage.removeItem(
                        "secretUnlocked"
                    );

                    sessionStorage.removeItem(
                        "secretStep1"
                    );

                    window.location.href =
                        "secret-login.html";

                }
            );

        }


        /* =================================================
           YES / NO BUTTONS
        ================================================= */

        const yesButton =
            document.getElementById("yesButton");


        const noButton =
            document.getElementById("noButton");


        const answerMessage =
            document.getElementById("answerMessage");


        /* =================================================
           SEND ANSWER EMAIL
        ================================================= */

        function sendAnswer(answer) {

            /*
               Prevent double clicking
            */

            if (yesButton) {
                yesButton.disabled = true;
            }

            if (noButton) {
                noButton.disabled = true;
            }


            /*
               Show sending message
            */

            if (answerMessage) {

                answerMessage.textContent =
                    "Sending your answer... 💙";

            }


            /* =============================================
               EMAIL TEMPLATE DATA
            ============================================= */

            const templateParams = {

                name: "Mausam",

                answer: answer,

                message:
                    "Mausam answered: " +
                    answer,

                time:
                    new Date().toLocaleString()

            };


            console.log(
                "Sending EmailJS data:",
                templateParams
            );


            /* =============================================
               EMAILJS SEND
            ============================================= */

            emailjs.send(

                EMAIL_SERVICE_ID,

                EMAIL_TEMPLATE_ID,

                templateParams

            )

            .then(

                function (response) {

                    console.log(
                        "Email sent successfully!",
                        response.status,
                        response.text
                    );


                    /*
                       Show success message
                    */

                    if (answerMessage) {

                        answerMessage.textContent =
                            "Your answer has been sent successfully 💙";

                    }


                    /*
                       Keep buttons disabled
                       so answer cannot be submitted twice.
                    */

                    if (yesButton) {
                        yesButton.disabled = true;
                    }

                    if (noButton) {
                        noButton.disabled = true;
                    }

                }

            )

            .catch(

                function (error) {

                    console.error(
                        "EmailJS Error:",
                        error
                    );


                    /*
                       Show error message
                    */

                    if (answerMessage) {

                        answerMessage.textContent =
                            "Something went wrong while sending your answer. Please try again.";

                    }


                    /*
                       Enable buttons again
                       so user can retry.
                    */

                    if (yesButton) {
                        yesButton.disabled = false;
                    }

                    if (noButton) {
                        noButton.disabled = false;
                    }

                }

            );

        }


        /* =================================================
           YES BUTTON
        ================================================= */

        if (yesButton) {

            yesButton.addEventListener(
                "click",
                function () {

                    sendAnswer(
                        "YES 💙"
                    );

                }
            );

        }


        /* =================================================
           NO BUTTON
        ================================================= */

        if (noButton) {

            noButton.addEventListener(
                "click",
                function () {

                    sendAnswer(
                        "NO 🌸"
                    );

                }
            );

        }


    }
);