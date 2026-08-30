// =====================================================
// DORAEMON WORLD
// COMPLETE JAVASCRIPT
// Desktop + Tablet + Mobile
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // ELEMENTS
    // =================================================

    const menuButton = document.getElementById("menu");
    const navigation = document.getElementById("nav");

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
    // DESKTOP MENU
    // =================================================

    if (menuButton && navigation) {

        menuButton.addEventListener("click", (event) => {

            event.stopPropagation();

            navigation.classList.toggle("show");

        });


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

            // Change hamburger icon
            if (
                mobileMenuPanel.classList.contains("show")
            ) {

                mobileMenuButton.textContent = "✕";

            } else {

                mobileMenuButton.textContent = "☰";

            }

        });


        const mobileLinks =
            mobileMenuPanel.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenuPanel.classList.remove("show");

                mobileMenuButton.textContent = "☰";

            });

        });

    }


    // =================================================
    // CLOSE MENUS WHEN CLICKING OUTSIDE
    // =================================================

    document.addEventListener("click", (event) => {

        // Desktop navigation
        if (
            navigation &&
            menuButton &&
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            navigation.classList.remove("show");

        }


        // Mobile navigation
        if (
            mobileMenuPanel &&
            mobileMenuButton &&
            !mobileMenuPanel.contains(event.target) &&
            !mobileMenuButton.contains(event.target)
        ) {

            mobileMenuPanel.classList.remove("show");

            mobileMenuButton.textContent = "☰";

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

            if (mobileMenuButton) {

                mobileMenuButton.textContent = "☰";

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
    // SET ACTIVE PAGE AUTOMATICALLY
    // =================================================

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    if (currentPage === "") {

        setActiveLink("index.html");

    } else {

        setActiveLink(currentPage);

    }


    function setActiveLink(page) {

        allNavLinks.forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) return;

            const cleanHref =
                href.split("#")[0]
                    .split("?")[0]
                    .toLowerCase();

            if (
                cleanHref === page
            ) {

                link.classList.add("active");

            }

        });

    }


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
    // MOBILE BOTTOM NAVIGATION
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
            {
                passive: false
            }
        );

    });


    // =================================================
    // TOUCH DRAG FOR MOBILE MOVIE ROW
    // =================================================

    enableTouchScroll(".mobile-movie-row");

    enableTouchScroll(".mobile-gadget-row");


    function enableTouchScroll(selector) {

        const rows =
            document.querySelectorAll(selector);


        rows.forEach(row => {

            let startX = 0;

            let startScrollLeft = 0;


            row.addEventListener("touchstart", (event) => {

                startX =
                    event.touches[0].pageX;

                startScrollLeft =
                    row.scrollLeft;

            }, {
                passive: true
            });


            row.addEventListener("touchmove", (event) => {

                const currentX =
                    event.touches[0].pageX;

                const distance =
                    currentX - startX;

                row.scrollLeft =
                    startScrollLeft - distance;

            }, {
                passive: true
            });

        });

    }


    // =================================================
    // MOBILE SEARCH BUTTON
    // =================================================

    const searchButton =
        document.querySelector(
            ".mobile-search-btn"
        );


    if (searchButton) {

        searchButton.addEventListener("click", () => {

            // Simple search prompt
            const search =
                prompt(
                    "Doraemon World me kya search karna hai?"
                );


            if (
                search &&
                search.trim() !== ""
            ) {

                const query =
                    search.trim().toLowerCase();


                const searchableElements =
                    document.querySelectorAll(
                        "h1, h2, h3, p, strong"
                    );


                let found = false;


                searchableElements.forEach(element => {

                    if (
                        element.textContent
                            .toLowerCase()
                            .includes(query)
                    ) {

                        if (!found) {

                            element.scrollIntoView({

                                behavior: "smooth",

                                block: "center"

                            });

                            found = true;

                        }

                    }

                });


                if (!found) {

                    alert(
                        "Sorry 😅 '" +
                        search +
                        "' nahi mila."
                    );

                }

            }

        });

    }


    // =================================================
    // PREVENT BROKEN IMAGE DISPLAY
    // =================================================

    const allImages =
        document.querySelectorAll("img");


    allImages.forEach(image => {

        image.addEventListener("error", () => {

            console.warn(
                "Image not found:",
                image.getAttribute("src")
            );

            image.style.opacity = "0";

        });

    });


    // =================================================
    // PAGE LOADED
    // =================================================

    window.addEventListener("load", () => {

        document.body.classList.add(
            "page-loaded"
        );

    });


    // =================================================
    // RESIZE HANDLER
    // =================================================

    window.addEventListener("resize", () => {

        // Desktop
        if (window.innerWidth > 700) {

            if (mobileMenuPanel) {

                mobileMenuPanel.classList.remove(
                    "show"
                );

            }

            if (mobileMenuButton) {

                mobileMenuButton.textContent = "☰";

            }

        }

    });


    // =================================================
    // DORAEMON WORLD CONSOLE
    // =================================================

    console.log(
        "💙 Doraemon World loaded successfully!"
    );

    console.log(
        "🏠 Home | 🎬 Movies | 📺 Episodes | 👥 Characters | 🎵 Music"
    );

});