/* =========================================================
   DORAEMON WORLD
   SECRET PAGE JAVASCRIPT
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
   EMAILJS
========================================================= */

/*
    Replace these three values with your EmailJS details.

    YOUR_PUBLIC_KEY
    YOUR_SERVICE_ID
    YOUR_TEMPLATE_ID
*/

emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});


const EMAIL_SERVICE_ID =
    "service_ojhk09k";

const EMAIL_TEMPLATE_ID =
    "template_n3gwhmm";


/* =========================================================
   DOM
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           LOCK
        ============================================= */

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


        /* =============================================
           YES / NO
        ============================================= */

        const yesButton =
            document.getElementById("yesButton");

        const noButton =
            document.getElementById("noButton");

        const answerMessage =
            document.getElementById("answerMessage");


        /* =============================================
           SEND EMAIL
        ============================================= */

        function sendAnswer(answer) {

            yesButton.disabled = true;
            noButton.disabled = true;


       


            const templateParams = {

                name: "Mausam",

                answer: answer,

                message:
                    "Mausam answered: " +
                    answer,

                time:
                    new Date().toLocaleString()

            };


            emailjs.send(

                EMAIL_SERVICE_ID,

                EMAIL_TEMPLATE_ID,

                templateParams

            )
            
                
            .catch(
                function (error) {

                    console.error(
                        "EmailJS Error:",
                        error
                    );


                    /*
                       Button selected but email failed.
                       We enable buttons again so the user
                       can try once more.
                    */

                    yesButton.disabled = false;
                    noButton.disabled = false;


                   

                }
            );

        }


        /* =============================================
           YES
        ============================================= */

        if (yesButton) {

            yesButton.addEventListener(
                "click",
                function () {

                    sendAnswer("YES 💙");

                }
            );

        }


        /* =============================================
           NO
        ============================================= */

        if (noButton) {

            noButton.addEventListener(
                "click",
                function () {

                    sendAnswer("NO 🌸");

                }
            );

        }

    }
);