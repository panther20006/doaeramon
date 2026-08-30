// =====================================================
// DORAEMON WORLD
// COMPLETE JAVASCRIPT
// Desktop + Tablet + Mobile
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // ELEMENTS
    // =================================================

    const menuButton =
        document.getElementById("menu");

    const navigation =
        document.getElementById("nav");

    const mobileMenuButton =
        document.querySelector(".mobile-menu-btn");

    const mobileMenuPanel =
        document.querySelector(".mobile-menu-panel");

    const buttons =
        document.querySelectorAll(".btn");

    const featureCards =
        document.querySelectorAll(".feature-card");

    const gadgetCards =
        document.querySelectorAll(".gadget-card");

    const doraemonImages =
        document.querySelectorAll(
            ".desktop-doraemon, .mobile-doraemon, .doraemon-face"
        );

    const copyright =
        document.querySelector(".copyright");


    // =================================================
    // DESKTOP / TABLET MENU
    // =================================================

    if (menuButton && navigation) {

        menuButton.addEventListener("click", (event) => {

            event.stopPropagation();

            navigation.classList.toggle("show");

        });


        // Navigation links
        const navLinks =
            navigation.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("show");

            });

        });

    }


    // =================================================
    // MOBILE MENU
    // =================================================

    if (mobileMenuButton && mobileMenuPanel) {

        mobileMenuButton.addEventListener("click", (event) => {

            event.stopPropagation();

            mobileMenuPanel.classList.toggle("show");

        });


        const mobileLinks =
            mobileMenuPanel.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenuPanel.classList.remove("show");

            });

        });

    }


    // =================================================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // =================================================

    document.addEventListener("click", (event) => {

        // Desktop menu

        if (
            navigation &&
            menuButton &&
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            navigation.classList.remove("show");

        }


        // Mobile menu

        if (
            mobileMenuPanel &&
            mobileMenuButton &&
            !mobileMenuPanel.contains(event.target) &&
            !mobileMenuButton.contains(event.target)
        ) {

            mobileMenuPanel.classList.remove("show");

        }

    });


    // =================================================
    // ESC KEY
    // =================================================

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (navigation) {

                navigation.classList.remove("show");

            }

            if (mobileMenuPanel) {

                mobileMenuPanel.classList.remove("show");

            }

        }

    });


    // =================================================
    // BUTTON CLICK EFFECT
    // =================================================

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform =
                "scale(0.97)";


            setTimeout(() => {

                button.style.transform = "";

            }, 120);

        });

    });


    // =================================================
    // FEATURE CARD
    // =================================================

    featureCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.zIndex = "5";

        });


        card.addEventListener("mouseleave", () => {

            card.style.zIndex = "";

        });

    });


    // =================================================
    // GADGET CARD
    // =================================================

    gadgetCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.zIndex = "5";

        });


        card.addEventListener("mouseleave", () => {

            card.style.zIndex = "";

        });

    });


    // =================================================
    // DORAEMON IMAGE ERROR HANDLER
    // =================================================

    doraemonImages.forEach(image => {

        image.addEventListener("error", () => {

            console.warn(
                "Doraemon image could not be loaded. Check image path."
            );

            image.style.visibility = "hidden";

        });

    });


    // =================================================
    // CURRENT YEAR
    // =================================================

    if (copyright) {

        const year =
            new Date().getFullYear();

        copyright.textContent =
            `© ${year} Doraemon World`;

    }


    // =================================================
    // ACTIVE NAVIGATION
    // =================================================

    const allNavLinks =
        document.querySelectorAll(
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


    // =================================================
    // SMOOTH SCROLL
    // =================================================

    const scrollLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    scrollLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


    // =================================================
    // MOBILE BOTTOM NAV
    // =================================================

    const bottomNavItems =
        document.querySelectorAll(
            ".bottom-nav-item"
        );


    bottomNavItems.forEach(item => {

        item.addEventListener("click", () => {

            bottomNavItems.forEach(nav => {

                nav.classList.remove("active");

            });


            item.classList.add("active");

        });

    });


    // =================================================
    // MOVIE HORIZONTAL SCROLL
    // =================================================

    const movieRows =
        document.querySelectorAll(
            ".mobile-movie-row"
        );


    movieRows.forEach(row => {

        row.addEventListener(
            "wheel",
            (event) => {

                if (window.innerWidth <= 700) {

                    if (
                        Math.abs(event.deltaY) >
                        Math.abs(event.deltaX)
                    ) {

                        event.preventDefault();


                        row.scrollLeft +=
                            event.deltaY;

                    }

                }

            },
            { passive: false }
        );

    });


    // =================================================
    // GADGET HORIZONTAL SCROLL
    // =================================================

    const gadgetRows =
        document.querySelectorAll(
            ".mobile-gadget-row"
        );


    gadgetRows.forEach(row => {

        row.addEventListener(
            "wheel",
            (event) => {

                if (window.innerWidth <= 700) {

                    if (
                        Math.abs(event.deltaY) >
                        Math.abs(event.deltaX)
                    ) {

                        event.preventDefault();


                        row.scrollLeft +=
                            event.deltaY;

                    }

                }

            },
            { passive: false }
        );

    });


    // =================================================
    // DORAEMON CLICK EFFECT
    // =================================================

    const doraemonEffect =
        document.getElementById(
            "doraemon-effect"
        );


    const doraemonAudio =
        document.getElementById(
            "doraemon-audio"
        );


    if (
        doraemonEffect &&
        doraemonAudio
    ) {

        document.addEventListener(
            "click",
            (event) => {

                // Effect ke andar click ignore
                if (
                    doraemonEffect.contains(
                        event.target
                    )
                ) {

                    return;

                }


                // =================================================
                // PLAY DORAEMON SOUND
                // =================================================

                doraemonAudio.pause();

                doraemonAudio.currentTime = 0;


                const playAudio =
                    doraemonAudio.play();


                if (playAudio !== undefined) {

                    playAudio.catch(() => {

                        console.log(
                            "Doraemon audio playback blocked."
                        );

                    });

                }


                // =================================================
                // SHOW DORAEMON
                // =================================================

                doraemonEffect.classList.remove(
                    "show"
                );


                // Animation restart
                void doraemonEffect.offsetWidth;


                doraemonEffect.classList.add(
                    "show"
                );


                // =================================================
                // REMOVE EFFECT
                // =================================================

                setTimeout(() => {

                    doraemonEffect.classList.remove(
                        "show"
                    );

                }, 1700);

            }
        );

    }


    // =================================================
    // PAGE LOADED
    // =================================================

    document.body.classList.add(
        "page-loaded"
    );


    // =================================================
    // CONSOLE
    // =================================================

    console.log(
        "Doraemon World loaded successfully! 💙"
    );

});