/* =========================================================
   DORAEMON WORLD
   MOTIVATION / FUNNY REELS
   JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const reelsContainer =
    document.getElementById("reelsContainer");

const statusIcon =
    document.getElementById("statusIcon");

const shareMessage =
    document.getElementById("shareMessage");

const categoryButtons =
    document.querySelectorAll(".category-btn");


/* =========================================================
   VARIABLES
========================================================= */

let reels = [];

let currentReel = 0;

let touchStartY = 0;

let touchEndY = 0;

let wheelLocked = false;

let currentCategory = "motivation";


/* =========================================================
   GET REELS
========================================================= */

function getReels() {

    return Array.from(
        document.querySelectorAll(".reel")
    );

}


/* =========================================================
   GET CURRENT REEL
========================================================= */

function getCurrentReel() {

    return reels[currentReel] || null;

}


/* =========================================================
   SHOW PLAY / PAUSE ICON
========================================================= */

function showStatus(icon) {

    if (!statusIcon) return;

    statusIcon.textContent = icon;

    statusIcon.classList.remove("show");

    /*
     * Force animation restart
     */
    void statusIcon.offsetWidth;

    statusIcon.classList.add("show");

}


/* =========================================================
   PLAY CURRENT VIDEO
========================================================= */

function playCurrentVideo() {

    const current =
        getCurrentReel();

    if (!current) return;

    const video =
        current.querySelector(".reel-video");

    if (!video) return;


    /*
     * Pause every other video
     */

    document
        .querySelectorAll(".reel-video")
        .forEach(otherVideo => {

            if (otherVideo !== video) {

                otherVideo.pause();

            }

        });


    /*
     * Do NOT use muted.
     *
     * Browser autoplay policy can still block
     * sound until user interacts with page.
     */

    video.muted = false;


    const promise =
        video.play();


    if (promise !== undefined) {

        promise.catch(() => {

            /*
             * Browser blocked autoplay.
             * User can tap the video to start it.
             */

        });

    }

}


/* =========================================================
   PAUSE ALL VIDEOS
========================================================= */

function pauseAllVideos() {

    document
        .querySelectorAll(".reel-video")
        .forEach(video => {

            video.pause();

        });

}


/* =========================================================
   GO TO REEL
========================================================= */

function goToReel(index) {

    if (!reels.length) return;


    /*
     * Keep index inside available reels
     */

    if (index < 0) {

        index = 0;

    }

    if (index >= reels.length) {

        index = reels.length - 1;

    }


    currentReel = index;


    const reel =
        reels[currentReel];


    if (!reel) return;


    /*
     * Scroll to reel
     */

    reel.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });


    /*
     * Play after scroll
     */

    setTimeout(() => {

        playCurrentVideo();

    }, 350);

}


/* =========================================================
   NEXT REEL
========================================================= */

function nextReel() {

    if (currentReel < reels.length - 1) {

        goToReel(currentReel + 1);

    }

}


/* =========================================================
   PREVIOUS REEL
========================================================= */

function previousReel() {

    if (currentReel > 0) {

        goToReel(currentReel - 1);

    }

}


/* =========================================================
   INTERSECTION OBSERVER
   Detect which reel is currently visible
========================================================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio >= 0.65
                ) {

                    const index =
                        reels.indexOf(entry.target);


                    if (index !== -1) {

                        currentReel = index;

                    }


                    /*
                     * Pause all other videos
                     */

                    document
                        .querySelectorAll(".reel-video")
                        .forEach(video => {

                            const parent =
                                video.closest(".reel");

                            if (
                                parent !== entry.target
                            ) {

                                video.pause();

                            }

                        });


                    /*
                     * Current video
                     */

                    const video =
                        entry.target
                            .querySelector(".reel-video");


                    if (video) {

                        video.muted = false;

                        const promise =
                            video.play();


                        if (
                            promise !== undefined
                        ) {

                            promise.catch(() => {

                                /*
                                 * Autoplay with sound
                                 * may be blocked.
                                 */

                            });

                        }

                    }

                }

            });

        },

        {
            threshold: [
                0.65,
                0.8,
                0.95
            ]

        }

    );


/* =========================================================
   OBSERVE REELS
========================================================= */

function observeReels() {

    reels.forEach(reel => {

        observer.observe(reel);

    });

}


/* =========================================================
   VIDEO CLICK
   PLAY / PAUSE
========================================================= */

function setupVideoControls() {

    reels.forEach(reel => {

        const video =
            reel.querySelector(".reel-video");


        if (!video) return;


        video.addEventListener(
            "click",
            function () {

                /*
                 * User interaction enables sound
                 */

                video.muted = false;


                if (video.paused) {

                    video.play()
                        .then(() => {

                            showStatus("▶");

                        })
                        .catch(() => {

                            showStatus("▶");

                        });

                } else {

                    video.pause();

                    showStatus("Ⅱ");

                }

            }
        );


        /*
         * Prevent browser context menu
         * on long press/right click
         */

        video.addEventListener(
            "contextmenu",
            function (event) {

                event.preventDefault();

            }
        );

    });

}


/* =========================================================
   MOUSE WHEEL NAVIGATION
   ⬆️⬇️ WORKS
   BUT NO ARROW BUTTON IS DISPLAYED
========================================================= */

reelsContainer.addEventListener(
    "wheel",
    function (event) {

        /*
         * Prevent too-fast reel switching
         */

        if (wheelLocked) {

            event.preventDefault();

            return;

        }


        if (Math.abs(event.deltaY) < 25) {

            return;

        }


        event.preventDefault();


        wheelLocked = true;


        if (event.deltaY > 0) {

            nextReel();

        } else {

            previousReel();

        }


        /*
         * Small delay so one wheel gesture
         * doesn't skip multiple reels.
         */

        setTimeout(() => {

            wheelLocked = false;

        }, 650);

    },
    {
        passive: false
    }
);


/* =========================================================
   KEYBOARD NAVIGATION
   ARROW KEYS WORK
   BUTTONS ARE NOT VISIBLE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
         * Arrow Down
         */

        if (
            event.key === "ArrowDown" ||
            event.key === "PageDown"
        ) {

            event.preventDefault();

            nextReel();

        }


        /*
         * Arrow Up
         */

        if (
            event.key === "ArrowUp" ||
            event.key === "PageUp"
        ) {

            event.preventDefault();

            previousReel();

        }

    }
);


/* =========================================================
   TOUCH / SWIPE
   MOBILE INSTAGRAM STYLE
========================================================= */

reelsContainer.addEventListener(
    "touchstart",
    function (event) {

        if (!event.touches.length) return;

        touchStartY =
            event.touches[0].clientY;

    },
    {
        passive: true
    }
);


reelsContainer.addEventListener(
    "touchend",
    function (event) {

        if (!event.changedTouches.length) return;

        touchEndY =
            event.changedTouches[0].clientY;


        handleSwipe();

    },
    {
        passive: true
    }
);


/* =========================================================
   HANDLE SWIPE
========================================================= */

function handleSwipe() {

    const difference =
        touchStartY - touchEndY;


    /*
     * Ignore very small movement
     */

    if (Math.abs(difference) < 60) {

        return;

    }


    /*
     * Swipe UP
     * Next reel
     */

    if (difference > 0) {

        nextReel();

    }


    /*
     * Swipe DOWN
     * Previous reel
     */

    else {

        previousReel();

    }

}


/* =========================================================
   SHARE
   INSTAGRAM-LIKE SHARE BEHAVIOUR
========================================================= */

function setupShareButtons() {

    const shareButtons =
        document.querySelectorAll(".share-btn");


    shareButtons.forEach(button => {

        button.addEventListener(
            "click",
            async function (event) {

                event.preventDefault();

                event.stopPropagation();


                const reel =
                    button.closest(".reel");


                if (!reel) return;


                const video =
                    reel.querySelector(".reel-video");


                if (!video) return;


                /*
                 * Get video URL
                 */

                const videoURL =
                    new URL(
                        video.getAttribute("src"),
                        window.location.href
                    ).href;


                const title =
                    reel.querySelector(".reel-info h2")
                    ?.textContent
                    ?.trim()
                    || "Doraemon Reel";


                /*
                 * Native Share
                 * Works on supported mobile browsers.
                 */

                if (
                    navigator.share &&
                    window.isSecureContext
                ) {

                    try {

                        await navigator.share({

                            title:
                                "Doraemon Reels",

                            text:
                                title,

                            url:
                                videoURL

                        });

                        return;

                    }

                    catch (error) {

                        /*
                         * User cancelled share.
                         */

                        if (
                            error.name ===
                            "AbortError"
                        ) {

                            return;

                        }

                    }

                }


                /*
                 * Fallback:
                 * Copy video URL
                 */

                try {

                    await navigator.clipboard.writeText(
                        videoURL
                    );

                    showShareMessage(
                        "Reel link copied!"
                    );

                }

                catch (error) {

                    /*
                     * Old browser fallback
                     */

                    const textArea =
                        document.createElement(
                            "textarea"
                        );

                    textArea.value =
                        videoURL;

                    document.body.appendChild(
                        textArea
                    );

                    textArea.select();

                    document.execCommand(
                        "copy"
                    );

                    textArea.remove();

                    showShareMessage(
                        "Reel link copied!"
                    );

                }

            }
        );

    });

}


/* =========================================================
   DOWNLOAD BUTTONS
========================================================= */

function setupDownloadButtons() {

    const downloadButtons =
        document.querySelectorAll(
            ".download-btn"
        );


    downloadButtons.forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                /*
                 * Browser will use the download
                 * attribute from the HTML.
                 */

            }
        );

    });

}


/* =========================================================
   SHARE MESSAGE
========================================================= */

function showShareMessage(message) {

    if (!shareMessage) return;

    shareMessage.textContent =
        message;

    shareMessage.classList.add(
        "show"
    );


    setTimeout(() => {

        shareMessage.classList.remove(
            "show"
        );

    }, 1800);

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const category =
                button.dataset.category;


            if (!category) return;


            currentCategory =
                category;


            /*
             * Active button
             */

            categoryButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            /*
             * Find first reel of selected category
             */

            const firstReel =
                reels.find(reel => {

                    return (
                        reel.dataset.category ===
                        category
                    );

                });


            if (firstReel) {

                const index =
                    reels.indexOf(
                        firstReel
                    );

                goToReel(index);

            }

        }
    );

});


/* =========================================================
   BLOCK DOUBLE TAP SELECTION
========================================================= */

reelsContainer.addEventListener(
    "dblclick",
    function (event) {

        if (
            event.target.closest(
                ".reel-action"
            )
        ) {

            return;

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeReels() {

    reels =
        getReels();


    if (!reels.length) {

        return;

    }


    /*
     * Observe all reels
     */

    observeReels();


    /*
     * Setup video controls
     */

    setupVideoControls();


    /*
     * Setup Share
     */

    setupShareButtons();


    /*
     * Setup Download
     */

    setupDownloadButtons();


    /*
     * Start from first reel
     */

    currentReel = 0;


    /*
     * Don't force sound autoplay aggressively.
     * Browser may block it.
     * First tap will enable sound.
     */

    const firstVideo =
        reels[0]
            .querySelector(".reel-video");


    if (firstVideo) {

        firstVideo.muted = false;

        const promise =
            firstVideo.play();


        if (promise !== undefined) {

            promise.catch(() => {

                /*
                 * Waiting for user interaction.
                 */

            });

        }

    }

}


/* =========================================================
   START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeReels
    );

} else {

    initializeReels();

}