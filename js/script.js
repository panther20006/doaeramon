
 // =====================================================
 // DORAEMON WORLD - MAIN JAVASCRIPT
 // DESKTOP + TABLET + MOBILE
 // NO STARTUP ANIMATION OR AUDIO
 // =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTS
    const menuButton = document.getElementById("menu");
    const navigation = document.getElementById("nav");

    const mobileMenuButton =
        document.querySelector(".mobile-menu-btn");

    const mobileMenuPanel =
        document.querySelector(".mobile-menu-panel");

    const buttons = document.querySelectorAll(".btn");

    const copyright =
        document.querySelector(".copyright");

    // =================================================
    // DORAEMON EFFECT ELEMENTS
    // =================================================

    const doraemonEffect =
        document.getElementById("doraemon-effect");

    const doraemonAudio =
        document.getElementById("doraemon-audio");

    const doraemonStartImage =
        document.getElementById("doraemon-start-image");


    // =================================================
    // DORAEMON 8 IMAGES
    //
    // 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08
    //
    // NO RANDOM
    // =================================================

    
    

    // =================================================
    // EFFECT SETTINGS
    // =================================================

    /*
        IMPORTANT:

        Pehle:
            let effectPlayed = false;

        Isse har naye page par effect dobara
        start ho jata tha.

        Ab sessionStorage use ho raha hai.

        Same browser tab/session mein:
        ek baar effect chalega.

        Example:

        Index
           ↓
        Movies
           ↓
        Episodes
           ↓
        Characters
           ↓
        Home

        Audio dobara nahi chalega.
    */

    let effectPlayed =
        sessionStorage.getItem(
            "doraemonEffectPlayed"
        ) === "true";


    let imageIndex = 0;

    let imageTimer = null;

    let fallbackTimer = null;

    let audioStarted = false;


    // =================================================
    // PRELOAD ALL 8 IMAGES
    // =================================================




    // =================================================

    // ============================================
    // 683c542 (update home page)
    // DESKTOP / TABLET MENU
    // ============================================

    if (menuButton && navigation) {

        menuButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const isOpen =
                navigation.classList.toggle("show");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("show");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    // ============================================
    // MOBILE MENU
    // ============================================

    if (mobileMenuButton && mobileMenuPanel) {

        mobileMenuButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const isOpen =
                mobileMenuPanel.classList.toggle("show");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        mobileMenuPanel.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuPanel.classList.remove("show");
                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
    }


    // ============================================
    // CLOSE MENUS ON OUTSIDE CLICK
    // ============================================

    document.addEventListener("click", (event) => {

        if (
            navigation &&
            menuButton &&
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            navigation.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");
        }

        if (
            mobileMenuPanel &&
            mobileMenuButton &&
            !mobileMenuPanel.contains(event.target) &&
            !mobileMenuButton.contains(event.target)
        ) {
            mobileMenuPanel.classList.remove("show");
            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });


    // ============================================
    // ESCAPE KEY - CLOSE MENU
    // ============================================

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        if (navigation) {
            navigation.classList.remove("show");
        }

        if (mobileMenuPanel) {
            mobileMenuPanel.classList.remove("show");
        }

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
        }

        if (mobileMenuButton) {
            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });


    // ============================================
    // BUTTON CLICK EFFECT
    // ============================================

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.97)";

            setTimeout(() => {
                button.style.transform = "";
            }, 120);
        });
    });


    // ============================================
    // CARD HOVER EFFECTS
    // ============================================

    [
        ".feature-card",
        ".gadget-card",
        ".favorite-card"
    ].forEach(selector => {

        document.querySelectorAll(selector).forEach(card => {

            card.addEventListener("mouseenter", () => {
                card.style.zIndex = "5";
            });

            card.addEventListener("mouseleave", () => {
                card.style.zIndex = "";
            });
        });
    });


    // ============================================
    // COPYRIGHT YEAR
    // ============================================

    if (copyright) {
        copyright.textContent =
            `© ${new Date().getFullYear()} Doraemon World`;
    }


    // ============================================
    // ALL NAVIGATION LINKS
    // ============================================

    const allNavLinks = document.querySelectorAll(
        "#nav a, .mobile-menu-panel a, .bottom-nav-item"
    );

    allNavLinks.forEach(link => {

        link.addEventListener("click", () => {

            allNavLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });


    // ============================================
    // CURRENT PAGE DETECTION
    // ============================================

    let currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (!currentPage) {
        currentPage = "index.html";
    }

    allNavLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        const cleanHref = href
            .split("#")[0]
            .split("?")[0]
            .split("/")
            .pop()
            .toLowerCase();

        if (cleanHref && cleanHref === currentPage) {
            link.classList.add("active");
        }
    });


    // ============================================
    // SMOOTH SCROLL
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target =
                document.getElementById(targetId.slice(1));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ============================================
    // MOBILE BOTTOM NAVIGATION
    // ============================================

    const bottomNavItems =
        document.querySelectorAll(".bottom-nav-item");

    bottomNavItems.forEach(item => {

        item.addEventListener("click", () => {

            bottomNavItems.forEach(nav => {
                nav.classList.remove("active");
            });

            item.classList.add("active");
        });
    });


    // ============================================
    // MOBILE HORIZONTAL SCROLL
    // ============================================

    [
        ".mobile-movie-row",
        ".mobile-gadget-row"
    ].forEach(selector => {

        document.querySelectorAll(selector).forEach(row => {

            row.addEventListener("wheel", (event) => {

                if (
                    window.innerWidth <= 700 &&
                    Math.abs(event.deltaY) > Math.abs(event.deltaX)
                ) {
                    event.preventDefault();
                    row.scrollLeft += event.deltaY;
                }

            }, { passive: false });
        });
    });


    // ============================================
    // WEBSITE LOADED
    // ============================================

    document.body.classList.add("page-loaded");

    console.log(
        "Doraemon World loaded successfully!"
    );

});
