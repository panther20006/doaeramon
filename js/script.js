// =====================================================
// DORAEMON WORLD
// MAIN JAVASCRIPT
// =====================================================


// =====================================================
// MOBILE MENU
// =====================================================

const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });


    // Menu link click ke baad mobile menu close
    const navLinks = navigation.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

        });

    });

}


// =====================================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =====================================================

document.addEventListener("click", (event) => {

    if (!menuButton || !navigation) {
        return;
    }

    const clickedInsideMenu =
        navigation.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {

        navigation.classList.remove("show");

    }

});


// =====================================================
// ESCAPE KEY - CLOSE MENU
// =====================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (navigation) {
            navigation.classList.remove("show");
        }

    }

});


// =====================================================
// DORAEMON IMAGE ERROR HANDLER
// =====================================================

const doraemonImage =
    document.querySelector(".doraemon-face");

if (doraemonImage) {

    doraemonImage.addEventListener("error", () => {

        console.warn(
            "Doraemon image could not be loaded. Check the image path."
        );

        doraemonImage.style.display = "none";

    });

}


// =====================================================
// BUTTON CLICK EFFECT
// =====================================================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.97)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});


// =====================================================
// FEATURE CARD HOVER
// =====================================================

const featureCards =
    document.querySelectorAll(".feature-card");

featureCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "5";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "";

    });

});


// =====================================================
// GADGET CARD HOVER
// =====================================================

const gadgetCards =
    document.querySelectorAll(".gadget-card");

gadgetCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "5";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "";

    });

});


// =====================================================
// CURRENT YEAR
// =====================================================

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.textContent =
        `© ${year} Doraemon World`;

}


// =====================================================
// PAGE LOADED
// =====================================================

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});