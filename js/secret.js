/* =========================================================
   DORAEMON WORLD
   SECRET / PRIVATE PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   PASSWORD
========================================================= */

const CORRECT_PASSWORD = "2352006";


/* =========================================================
   ELEMENTS
========================================================= */

const lockScreen = document.getElementById("lockScreen");

const privatePage = document.getElementById("privatePage");

const passwordInput = document.getElementById("passwordInput");

const unlockBtn = document.getElementById("unlockBtn");

const errorMessage = document.getElementById("errorMessage");

const lockBtn = document.getElementById("lockBtn");


/* =========================================================
   UNLOCK PAGE
========================================================= */

function unlockPage() {

    const enteredPassword = passwordInput.value.trim();


    if (enteredPassword === CORRECT_PASSWORD) {

        lockScreen.classList.add("hidden");

        privatePage.classList.remove("hidden");

        errorMessage.textContent = "";

        passwordInput.value = "";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        errorMessage.textContent =
            "Wrong password. Please try again. 💙";

        passwordInput.value = "";

        passwordInput.focus();

        /* Shake effect */

        const card = document.querySelector(".lock-card");

        card.animate(
            [
                {
                    transform: "translateX(0)"
                },
                {
                    transform: "translateX(-8px)"
                },
                {
                    transform: "translateX(8px)"
                },
                {
                    transform: "translateX(-5px)"
                },
                {
                    transform: "translateX(5px)"
                },
                {
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 350
            }
        );

    }

}


/* =========================================================
   UNLOCK BUTTON
========================================================= */

unlockBtn.addEventListener(
    "click",
    unlockPage
);


/* =========================================================
   ENTER KEY
========================================================= */

passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            unlockPage();

        }

    }
);


/* =========================================================
   LOCK AGAIN
========================================================= */

lockBtn.addEventListener(
    "click",
    function () {

        privatePage.classList.add("hidden");

        lockScreen.classList.remove("hidden");

        passwordInput.value = "";

        errorMessage.textContent = "";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(
            function () {

                passwordInput.focus();

            },
            200
        );

    }
);


/* =========================================================
   PHOTO GALLERY
========================================================= */

const photoCards =
    document.querySelectorAll(".photo-card");

const imageViewer =
    document.getElementById("imageViewer");

const viewerImage =
    document.getElementById("viewerImage");

const closeViewer =
    document.getElementById("closeViewer");

const previousImage =
    document.getElementById("previousImage");

const nextImage =
    document.getElementById("nextImage");


/* =========================================================
   CREATE IMAGE LIST
========================================================= */

const images = [];

photoCards.forEach(
    function (card) {

        const image =
            card.querySelector("img");

        if (image) {

            images.push(image.src);

        }

    }
);


/* Current image */

let currentImageIndex = 0;


/* =========================================================
   OPEN IMAGE
========================================================= */

function openImage(index) {

    if (!images.length) {
        return;
    }

    currentImageIndex = index;

    viewerImage.src =
        images[currentImageIndex];

    imageViewer.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE IMAGE
========================================================= */

function closeImage() {

    imageViewer.classList.remove("active");

    viewerImage.src = "";

    document.body.style.overflow = "";

}


/* =========================================================
   NEXT IMAGE
========================================================= */

function showNextImage() {

    if (!images.length) {
        return;
    }

    currentImageIndex++;

    if (currentImageIndex >= images.length) {

        currentImageIndex = 0;

    }

    viewerImage.src =
        images[currentImageIndex];

}


/* =========================================================
   PREVIOUS IMAGE
========================================================= */

function showPreviousImage() {

    if (!images.length) {
        return;
    }

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            images.length - 1;

    }

    viewerImage.src =
        images[currentImageIndex];

}


/* =========================================================
   PHOTO CLICK
========================================================= */

photoCards.forEach(
    function (card, index) {

        card.addEventListener(
            "click",
            function () {

                openImage(index);

            }
        );

    }
);


/* =========================================================
   CLOSE BUTTON
========================================================= */

closeViewer.addEventListener(
    "click",
    closeImage
);


/* =========================================================
   NEXT BUTTON
========================================================= */

nextImage.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        showNextImage();

    }
);


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

previousImage.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        showPreviousImage();

    }
);


/* =========================================================
   CLICK OUTSIDE IMAGE
========================================================= */

imageViewer.addEventListener(
    "click",
    function (event) {

        if (event.target === imageViewer) {

            closeImage();

        }

    }
);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (!imageViewer.classList.contains("active")) {
            return;
        }


        /* ESC */

        if (event.key === "Escape") {

            closeImage();

        }


        /* RIGHT ARROW */

        if (event.key === "ArrowRight") {

            showNextImage();

        }


        /* LEFT ARROW */

        if (event.key === "ArrowLeft") {

            showPreviousImage();

        }

    }
);


/* =========================================================
   TOUCH / SWIPE SUPPORT
========================================================= */

let touchStartX = 0;

let touchEndX = 0;


imageViewer.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


imageViewer.addEventListener(
    "touchend",
    function (event) {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    /* Swipe left */

    if (difference > 50) {

        showNextImage();

    }


    /* Swipe right */

    if (difference < -50) {

        showPreviousImage();

    }

}