// =====================================================
// DORAEMON WORLD
// COMPLETE JAVASCRIPT
// DESKTOP + TABLET + MOBILE
//
// DORAEMON START EFFECT
// 8 IMAGES - LINE BY LINE
// ONE CLICK ONLY PER SESSION
// AUDIO = 7 SECONDS
//
// IMPORTANT FIX:
// sessionStorage is used so that after
// Index → Movies → Episodes → Home
// Doraemon audio/effect does NOT play again.
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

    const favoriteCards =
        document.querySelectorAll(".favorite-card");

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

    const doraemonImages = [

        "./assets/images/doraemon/doraemon-01.png",

        "./assets/images/doraemon/doraemon-02.png",

        "./assets/images/doraemon/doraemon-03.png",

        "./assets/images/doraemon/doraemon-04.png",

        "./assets/images/doraemon/doraemon-05.png",

        "./assets/images/doraemon/doraemon-06.png",

        "./assets/images/doraemon/doraemon-07.png",

        "./assets/images/doraemon/doraemon-08.png"

    ];


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

    doraemonImages.forEach((src, index) => {

        const img = new Image();

        img.onload = () => {

            console.log(
                `Doraemon image ${index + 1} loaded`
            );

        };

        img.onerror = () => {

            console.error(
                `Doraemon image ${index + 1} NOT FOUND:`,
                src
            );

        };

        img.src = src;

    });


    // =================================================
    // DESKTOP / TABLET MENU
    // =================================================

    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                navigation.classList.toggle(
                    "show"
                );

            }
        );


        const navLinks =
            navigation.querySelectorAll("a");


        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "show"
                    );

                }
            );

        });

    }


    // =================================================
    // MOBILE MENU
    // =================================================

    if (
        mobileMenuButton &&
        mobileMenuPanel
    ) {

        mobileMenuButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                mobileMenuPanel.classList.toggle(
                    "show"
                );

            }
        );


        const mobileLinks =
            mobileMenuPanel.querySelectorAll("a");


        mobileLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenuPanel.classList.remove(
                        "show"
                    );

                }
            );

        });

    }


    // =================================================
    // CLOSE MENUS OUTSIDE
    // =================================================

    document.addEventListener(
        "click",
        (event) => {

            // -----------------------------------------
            // DESKTOP MENU
            // -----------------------------------------

            if (
                navigation &&
                menuButton &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                navigation.classList.remove(
                    "show"
                );

            }


            // -----------------------------------------
            // MOBILE MENU
            // -----------------------------------------

            if (
                mobileMenuPanel &&
                mobileMenuButton &&
                !mobileMenuPanel.contains(event.target) &&
                !mobileMenuButton.contains(event.target)
            ) {

                mobileMenuPanel.classList.remove(
                    "show"
                );

            }

        }
    );


    // =================================================
    // ESC KEY
    // =================================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (navigation) {

                    navigation.classList.remove(
                        "show"
                    );

                }


                if (mobileMenuPanel) {

                    mobileMenuPanel.classList.remove(
                        "show"
                    );

                }

            }

        }
    );


    // =================================================
    // BUTTON CLICK EFFECT
    // =================================================

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.style.transform =
                    "scale(0.97)";


                setTimeout(() => {

                    button.style.transform = "";

                }, 120);

            }
        );

    });


    // =================================================
    // FEATURE CARD
    // =================================================

    featureCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.zIndex = "5";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.zIndex = "";

            }
        );

    });


    // =================================================
    // GADGET CARD
    // =================================================

    gadgetCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.zIndex = "5";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.zIndex = "";

            }
        );

    });


    // =================================================
    // FAVORITE CARD
    // =================================================

    favoriteCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.zIndex = "5";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.zIndex = "";

            }
        );

    });


    // =================================================
    // IMAGE ERROR CHECK
    // =================================================

    if (doraemonStartImage) {

        doraemonStartImage.addEventListener(
            "error",
            () => {

                console.error(
                    "Doraemon start image could not be loaded:",
                    doraemonStartImage.src
                );

            }
        );

    }


    // =================================================
    // SET DORAEMON IMAGE
    // =================================================

    function setDoraemonImage(index) {

        if (!doraemonStartImage) {

            return;

        }


        if (
            index < 0 ||
            index >= doraemonImages.length
        ) {

            return;

        }


        imageIndex = index;


        doraemonStartImage.src =
            doraemonImages[index];


        console.log(
            `Doraemon Image ${index + 1}/8`
        );

    }


    // =================================================
    // STOP IMAGE TIMER
    // =================================================

    function stopImageTimer() {

        if (imageTimer !== null) {

            clearInterval(imageTimer);

            imageTimer = null;

        }

    }


    // =================================================
    // STOP FALLBACK TIMER
    // =================================================

    function stopFallbackTimer() {

        if (fallbackTimer !== null) {

            clearTimeout(fallbackTimer);

            fallbackTimer = null;

        }

    }


    // =================================================
    // STOP DORAEMON EFFECT
    // =================================================

    function stopDoraemonEffect() {

        console.log(
            "Doraemon effect finished 💙"
        );


        // ---------------------------------------------
        // STOP IMAGE TIMER
        // ---------------------------------------------

        stopImageTimer();


        // ---------------------------------------------
        // STOP FALLBACK TIMER
        // ---------------------------------------------

        stopFallbackTimer();


        // ---------------------------------------------
        // HIDE EFFECT
        // ---------------------------------------------

        if (doraemonEffect) {

            doraemonEffect.classList.remove(
                "show"
            );

        }


        // ---------------------------------------------
        // STOP AUDIO
        // ---------------------------------------------

        if (doraemonAudio) {

            doraemonAudio.pause();

            try {

                doraemonAudio.currentTime = 0;

            }
            catch (error) {

                console.log(
                    "Audio reset error"
                );

            }

        }


        audioStarted = false;

        /*
            IMPORTANT:

            Yaha effectPlayed ko false NAHI karna.

            Agar yaha:

                effectPlayed = false;

            likh diya to page reload/navigation ke
            baad effect dobara play ho sakta hai.

            sessionStorage state maintain karega.
        */

    }


    // =================================================
    // START IMAGE ANIMATION
    //
    // 7 SECOND AUDIO
    // 8 IMAGES
    //
    // 7000 / 8 = 875ms
    //
    // 01 = 0ms
    // 02 = 875ms
    // 03 = 1750ms
    // 04 = 2625ms
    // 05 = 3500ms
    // 06 = 4375ms
    // 07 = 5250ms
    // 08 = 6125ms
    //
    // IMAGE 08 REMAINS UNTIL AUDIO ENDS
    // =================================================

    function startImageAnimation() {

        // ---------------------------------------------
        // STOP OLD TIMER
        // ---------------------------------------------

        stopImageTimer();


        // ---------------------------------------------
        // START FROM IMAGE 01
        // ---------------------------------------------

        imageIndex = 0;

        setDoraemonImage(0);


        // ---------------------------------------------
        // CHANGE EVERY 875ms
        // ---------------------------------------------

        imageTimer = setInterval(
            () => {

                // -------------------------------------
                // NEXT IMAGE
                // -------------------------------------

                if (
                    imageIndex <
                    doraemonImages.length - 1
                ) {

                    imageIndex++;

                    setDoraemonImage(
                        imageIndex
                    );

                }

                else {

                    /*
                        Image 08 par ruk jao.

                        Image 01 par wapas nahi jayega.
                    */

                    stopImageTimer();

                }

            },
            875
        );

    }


    // =================================================
    // START DORAEMON EFFECT
    // =================================================

    function playDoraemonEffect() {

        // =================================================
        // ONLY FIRST CLICK PER SESSION
        // =================================================

        if (effectPlayed) {

            console.log(
                "Doraemon effect already played in this session."
            );

            return;

        }


        // =================================================
        // REQUIRED ELEMENT CHECK
        // =================================================

        if (!doraemonEffect) {

            console.error(
                "ERROR: #doraemon-effect not found."
            );

            return;

        }


        if (!doraemonStartImage) {

            console.error(
                "ERROR: #doraemon-start-image not found."
            );

            return;

        }


        if (!doraemonAudio) {

            console.error(
                "ERROR: #doraemon-audio not found."
            );

            return;

        }


        // =================================================
        // MARK AS PLAYED
        //
        // VERY IMPORTANT
        // =================================================

        effectPlayed = true;


        /*
            Browser/page navigation ke baad bhi
            ye value true rahegi.
        */

        sessionStorage.setItem(
            "doraemonEffectPlayed",
            "true"
        );


        console.log(
            "Doraemon effect started 💙"
        );


        // =================================================
        // STOP OLD TIMERS
        // =================================================

        stopImageTimer();

        stopFallbackTimer();


        // =================================================
        // RESET AUDIO
        // =================================================

        doraemonAudio.pause();

        try {

            doraemonAudio.currentTime = 0;

        }
        catch (error) {

            console.log(
                "Audio currentTime reset error."
            );

        }


        // =================================================
        // SHOW EFFECT FIRST
        // =================================================

        doraemonEffect.classList.remove(
            "show"
        );


        // Force browser reflow

        void doraemonEffect.offsetWidth;


        // Show effect

        doraemonEffect.classList.add(
            "show"
        );


        // =================================================
        // FIRST IMAGE
        // =================================================

        setDoraemonImage(0);


        // =================================================
        // START 8 IMAGE ANIMATION
        // =================================================

        startImageAnimation();


        // =================================================
        // AUDIO ENDED
        // =================================================

        doraemonAudio.onended = () => {

            console.log(
                "Doraemon audio ended 🔊"
            );


            stopDoraemonEffect();

        };


        // =================================================
        // AUDIO ERROR
        // =================================================

        doraemonAudio.onerror = () => {

            console.error(
                "Doraemon audio could not be loaded."
            );


            /*
                Audio error hone par bhi
                7 second fallback animation chalegi.
            */

        };


        // =================================================
        // PLAY AUDIO
        // =================================================

        try {

            const playPromise =
                doraemonAudio.play();


            if (
                playPromise !== undefined
            ) {

                playPromise
                    .then(() => {

                        audioStarted = true;


                        console.log(
                            "Doraemon audio started 🔊"
                        );

                    })
                    .catch(error => {

                        console.error(
                            "Doraemon audio blocked:",
                            error
                        );

                    });

            }

        }
        catch (error) {

            console.error(
                "Doraemon audio play error:",
                error
            );

        }


        // =================================================
        // 7 SECOND FALLBACK
        // =================================================

        fallbackTimer =
            setTimeout(
                () => {

                    stopDoraemonEffect();

                },
                7000
            );

    }


    // =================================================
    // FIRST CLICK ONLY
    //
    // Audio browser autoplay restriction se bachne ke
    // liye playDoraemonEffect() direct click ke andar
    // call ho raha hai.
    // =================================================

    document.addEventListener(
        "click",
        (event) => {

            // =================================================
            // ALREADY PLAYED
            // =================================================

            if (effectPlayed) {

                return;

            }


            // =================================================
            // IGNORE DESKTOP MENU
            // =================================================

            if (
                event.target.closest(
                    "#menu, #nav"
                )
            ) {

                return;

            }


            // =================================================
            // IGNORE MOBILE MENU
            // =================================================

            if (
                event.target.closest(
                    ".mobile-menu-btn, .mobile-menu-panel"
                )
            ) {

                return;

            }


            // =================================================
            // IGNORE BUTTON
            // =================================================

            if (
                event.target.closest(
                    "button"
                )
            ) {

                return;

            }


            // =================================================
            // IGNORE AUDIO
            // =================================================

            if (
                event.target.closest(
                    "audio"
                )
            ) {

                return;

            }


            // =================================================
            // START
            // =================================================

            playDoraemonEffect();

        }
    );


    // =================================================
    // EFFECT CLICK
    //
    // Effect ke andar click karne par
    // second click trigger nahi hoga.
    // =================================================

    if (doraemonEffect) {

        doraemonEffect.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

            }
        );

    }


    // =================================================
    // CURRENT YEAR
    // =================================================

    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} Doraemon World`;

    }


    // =================================================
    // ALL NAVIGATION LINKS
    // =================================================

    const allNavLinks =
        document.querySelectorAll(
            "#nav a, .mobile-menu-panel a, .bottom-nav-item"
        );


    // =================================================
    // ACTIVE NAVIGATION
    // =================================================

    allNavLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                allNavLinks.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                link.classList.add(
                    "active"
                );

            }
        );

    });


    // =================================================
    // ACTIVE PAGE DETECTION
    // =================================================

    let currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    // GitHub Pages / empty path

    if (!currentPage) {

        currentPage = "index.html";

    }


    allNavLinks.forEach(link => {

        const href =
            link.getAttribute("href");


        if (!href) {

            return;

        }


        const cleanHref =
            href
                .split("#")[0]
                .split("?")[0]
                .split("/")
                .pop()
                .toLowerCase();


        if (
            cleanHref &&
            cleanHref === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });


    // =================================================
    // SMOOTH SCROLL
    // =================================================

    const scrollLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    scrollLinks.forEach(link => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


    // =================================================
    // MOBILE BOTTOM NAV
    // =================================================

    const bottomNavItems =
        document.querySelectorAll(
            ".bottom-nav-item"
        );


    bottomNavItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                bottomNavItems.forEach(nav => {

                    nav.classList.remove(
                        "active"
                    );

                });


                item.classList.add(
                    "active"
                );

            }
        );

    });


    // =================================================
    // MOBILE MOVIE HORIZONTAL SCROLL
    // =================================================

    const movieRows =
        document.querySelectorAll(
            ".mobile-movie-row"
        );


    movieRows.forEach(row => {

        row.addEventListener(
            "wheel",
            (event) => {

                if (
                    window.innerWidth <= 700
                ) {

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
            {
                passive: false
            }
        );

    });


    // =================================================
    // MOBILE GADGET HORIZONTAL SCROLL
    // =================================================

    const gadgetRows =
        document.querySelectorAll(
            ".mobile-gadget-row"
        );


    gadgetRows.forEach(row => {

        row.addEventListener(
            "wheel",
            (event) => {

                if (
                    window.innerWidth <= 700
                ) {

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
            {
                passive: false
            }
        );

    });


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

    console.log(
        "Doraemon effect: ONE CLICK ONLY PER SESSION"
    );

    console.log(
        "Images: 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08"
    );

    console.log(
        "Effect state:",
        effectPlayed
            ? "ALREADY PLAYED"
            : "READY TO PLAY"
    );

});