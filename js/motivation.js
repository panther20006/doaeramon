/* =========================================================
   DORAEMON MOTIVATION REELS
   COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const container = document.getElementById("reelsContainer");

    const reels = Array.from(
        document.querySelectorAll(".reel")
    );

    const videos = Array.from(
        document.querySelectorAll(".reel-video")
    );

    const prevButton = document.getElementById("prevReel");
    const nextButton = document.getElementById("nextReel");

    const shareButtons = Array.from(
        document.querySelectorAll(".share-btn")
    );

    const shareMessage = document.getElementById("shareMessage");


    /* =====================================================
       CURRENT REEL
    ===================================================== */

    let currentReel = 0;


    /* =====================================================
       GO TO REEL
    ===================================================== */

    function goToReel(index) {

        if (reels.length === 0) return;

        // Keep index inside limits
        index = Math.max(
            0,
            Math.min(index, reels.length - 1)
        );

        currentReel = index;

        reels[currentReel].scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        playCurrentVideo();
    }


    /* =====================================================
       PLAY CURRENT VIDEO
    ===================================================== */

    function playCurrentVideo() {

        videos.forEach((video, index) => {

            if (index === currentReel) {

                video.play().catch(() => {
                    // Browser may block autoplay
                });

            } else {

                video.pause();

            }

        });

    }


    /* =====================================================
       DESKTOP UP BUTTON
    ===================================================== */

    if (prevButton) {

        prevButton.addEventListener("click", () => {

            goToReel(currentReel - 1);

        });

    }


    /* =====================================================
       DESKTOP DOWN BUTTON
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener("click", () => {

            goToReel(currentReel + 1);

        });

    }


    /* =====================================================
       KEYBOARD NAVIGATION
       ↑ Previous
       ↓ Next
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "ArrowUp") {

            event.preventDefault();

            goToReel(currentReel - 1);

        }

        if (event.key === "ArrowDown") {

            event.preventDefault();

            goToReel(currentReel + 1);

        }

    });


    /* =====================================================
       CREATE PLAY / PAUSE CENTER ICON
    ===================================================== */

    reels.forEach((reel, index) => {

        const video = reel.querySelector(".reel-video");

        if (!video) return;


        /* -----------------------------------------------
           CENTER STATUS ICON
        ------------------------------------------------ */

        const statusIcon = document.createElement("div");

        statusIcon.className = "video-status";

        statusIcon.innerHTML = "▶";

        reel.appendChild(statusIcon);


        /* -----------------------------------------------
           SHOW STATUS ICON
        ------------------------------------------------ */

        function showStatusIcon(icon) {

            statusIcon.innerHTML = icon;

            // Remove old animation
            statusIcon.classList.remove("show");

            // Force browser to restart animation
            void statusIcon.offsetWidth;

            // Show
            statusIcon.classList.add("show");


            // Hide after 1 second
            setTimeout(() => {

                statusIcon.classList.remove("show");

            }, 1000);

        }


        /* -----------------------------------------------
           VIDEO CLICK
        ------------------------------------------------ */

        video.addEventListener("click", () => {

            /* =============================================
               VIDEO IS PLAYING
               → PAUSE
            ============================================= */

            if (!video.paused) {

                video.pause();

                showStatusIcon("Ⅱ");

            }

            /* =============================================
               VIDEO IS PAUSED
               → PLAY
            ============================================= */

            else {

                video.play().catch(() => {});

                showStatusIcon("▶");

            }

        });


        /* -----------------------------------------------
           Prevent right click menu on video
        ------------------------------------------------ */

        video.addEventListener("contextmenu", (event) => {

            event.preventDefault();

        });

    });


    /* =====================================================
       INTERSECTION OBSERVER
       Automatically play visible reel
    ===================================================== */

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {

                        const reel = entry.target;

                        const index = reels.indexOf(reel);

                        if (index !== -1) {

                            currentReel = index;

                        }


                        /* ---------------------------------
                           Play visible video
                        ---------------------------------- */

                        videos.forEach((video, videoIndex) => {

                            if (videoIndex === currentReel) {

                                video.play().catch(() => {});

                            } else {

                                video.pause();

                            }

                        });

                    }

                });

            },
            {
                threshold: [0.65, 0.8, 1]
            }
        );


        reels.forEach((reel) => {

            observer.observe(reel);

        });

    }


    /* =====================================================
       SHARE REEL
    ===================================================== */

    shareButtons.forEach((button) => {

        button.addEventListener("click", async (event) => {

            event.preventDefault();
            event.stopPropagation();


            /* ---------------------------------------------
               Get video name
            ---------------------------------------------- */

            const videoName = button.dataset.video || "";


            /* ---------------------------------------------
               Create video URL
            ---------------------------------------------- */

            const videoPath =
                `assets/videos/${videoName}`;

            const videoURL =
                new URL(
                    videoPath,
                    window.location.href
                ).href;


            /* ---------------------------------------------
               Native Share
            ---------------------------------------------- */

            if (navigator.share) {

                try {

                    await navigator.share({

                        title: "Doraemon Motivation 💙",

                        text: "Watch this Doraemon Motivation Reel 💙",

                        url: videoURL

                    });

                    return;

                } catch (error) {

                    // User cancelled share
                    if (error.name === "AbortError") {

                        return;

                    }

                }

            }


            /* ---------------------------------------------
               Clipboard fallback
            ---------------------------------------------- */

            try {

                await navigator.clipboard.writeText(
                    videoURL
                );

                showShareMessage("Link copied!");

            } catch (error) {

                /* -----------------------------------------
                   Old browser fallback
                ------------------------------------------ */

                const tempInput =
                    document.createElement("input");

                tempInput.value = videoURL;

                document.body.appendChild(tempInput);

                tempInput.select();

                try {

                    document.execCommand("copy");

                    showShareMessage("Link copied!");

                } catch (copyError) {

                    showShareMessage(
                        "Copy failed!"
                    );

                }

                document.body.removeChild(tempInput);

            }

        });

    });


    /* =====================================================
       SHARE MESSAGE
    ===================================================== */

    function showShareMessage(message) {

        if (!shareMessage) return;

        shareMessage.textContent = message;

        shareMessage.classList.add("show");


        setTimeout(() => {

            shareMessage.classList.remove("show");

        }, 1800);

    }


    /* =====================================================
       DOWNLOAD BUTTON
    ===================================================== */

    document
        .querySelectorAll(".download-btn")
        .forEach((button) => {

            button.addEventListener("click", (event) => {

                event.stopPropagation();

            });

        });


    /* =====================================================
       START FIRST REEL
    ===================================================== */

    if (videos.length > 0) {

        currentReel = 0;

        // Small delay helps browser initialize video
        setTimeout(() => {

            videos[0].play().catch(() => {});

        }, 300);

    }


    /* =====================================================
       TOUCH / SWIPE SUPPORT
       Mobile:
       Swipe Up   → Next Reel
       Swipe Down → Previous Reel
    ===================================================== */

    let touchStartY = 0;
    let touchEndY = 0;


    container.addEventListener("touchstart", (event) => {

        if (!event.touches.length) return;

        touchStartY =
            event.touches[0].clientY;

    }, {
        passive: true
    });


    container.addEventListener("touchend", (event) => {

        if (!event.changedTouches.length) return;

        touchEndY =
            event.changedTouches[0].clientY;

        handleSwipe();

    }, {
        passive: true
    });


    function handleSwipe() {

        const distance =
            touchStartY - touchEndY;


        // Ignore small movement
        if (Math.abs(distance) < 50) {

            return;

        }


        /* ---------------------------------------------
           Swipe UP
           → Next reel
        ---------------------------------------------- */

        if (distance > 50) {

            goToReel(currentReel + 1);

        }


        /* ---------------------------------------------
           Swipe DOWN
           → Previous reel
        ---------------------------------------------- */

        else if (distance < -50) {

            goToReel(currentReel - 1);

        }

    }


    /* =====================================================
       MOUSE WHEEL DESKTOP
       Scroll down → Next
       Scroll up   → Previous
    ===================================================== */

    let wheelLocked = false;

    container.addEventListener(
        "wheel",
        (event) => {

            if (wheelLocked) return;

            if (Math.abs(event.deltaY) < 20) return;

            wheelLocked = true;


            if (event.deltaY > 0) {

                goToReel(currentReel + 1);

            } else {

                goToReel(currentReel - 1);

            }


            setTimeout(() => {

                wheelLocked = false;

            }, 700);

        },
        {
            passive: true
        }
    );


});