/* =====================================================
   DORAEMON WORLD
   MAGIC GADGETS JAVASCRIPT
===================================================== */


/* =====================================================
   GADGET DATA
===================================================== */

const gadgets = [

    {
        id: 1,
        name: "Anywhere Door",
        category: "travel",
        tag: "Travel",
        description: "Kahin bhi instantly travel karne wala magical door.",
        image: "assets/images/gadgets/anywhere-door.jpg"
    },

    {
        id: 2,
        name: "Time Machine",
        category: "time",
        tag: "Time",
        description: "Past aur future mein travel karne ke liye.",
        image: "assets/images/gadgets/time-machine.jpg"
    },

    {
        id: 3,
        name: "Take-copter",
        category: "travel",
        tag: "Travel",
        description: "Head par lagao aur sky mein fly karo.",
        image: "assets/images/gadgets/take-copter.jpg"
    },

    {
        id: 4,
        name: "Small Light",
        category: "famous",
        tag: "Famous",
        description: "Objects ko chhota karne wala amazing gadget.",
        image: "assets/images/gadgets/small-light.jpg"
    },

    {
        id: 5,
        name: "Big Light",
        category: "famous",
        tag: "Famous",
        description: "Objects ko bada karne wala magic gadget.",
        image: "assets/images/gadgets/big-light.jpg"
    },

    {
        id: 6,
        name: "Translation Jelly",
        category: "communication",
        tag: "Communication",
        description: "Different languages ko samajhne mein help karta hai.",
        image: "assets/images/gadgets/translation-jelly.jpg"
    },

    {
        id: 7,
        name: "What-if Phone Booth",
        category: "science",
        tag: "Science",
        description: "Imagine ki hui duniya ko reality jaisa bana sakta hai.",
        image: "assets/images/gadgets/what-if-phone-booth.jpg"
    },

    {
        id: 8,
        name: "Time Furoshiki",
        category: "time",
        tag: "Time",
        description: "Objects ki age ko change karne mein useful gadget.",
        image: "assets/images/gadgets/time-furoshiki.jpg"
    },

    {
        id: 9,
        name: "Memory Bread",
        category: "famous",
        tag: "Famous",
        description: "Book ke words ko bread se yaad karne ka gadget.",
        image: "assets/images/gadgets/memory-bread.jpg"
    },

    {
        id: 10,
        name: "Invisible Cape",
        category: "fun",
        tag: "Fun",
        description: "Wear karne ke baad invisible hone mein help karta hai.",
        image: "assets/images/gadgets/invisible-cape.jpg"
    },

    {
        id: 11,
        name: "Air Cannon",
        category: "famous",
        tag: "Famous",
        description: "Haath se powerful air blast shoot karta hai.",
        image: "assets/images/gadgets/air-cannon.jpg"
    },

    {
        id: 12,
        name: "Mood-changing Orchestra",
        category: "fun",
        tag: "Fun",
        description: "Music aur mood ko funny way mein change karne wala gadget.",
        image: "assets/images/gadgets/mood-orchestra.jpg"
    },

    {
        id: 13,
        name: "Teleportation Tool",
        category: "travel",
        tag: "Travel",
        description: "Instant location change ke liye useful gadget.",
        image: "assets/images/gadgets/teleportation-tool.jpg"
    },

    {
        id: 14,
        name: "Dream Machine",
        category: "fun",
        tag: "Fun",
        description: "Dream world ko experience karne ke liye.",
        image: "assets/images/gadgets/dream-machine.jpg"
    },

    {
        id: 15,
        name: "Time Furoshiki",
        category: "time",
        tag: "Time",
        description: "Time-related changes ke liye famous gadget.",
        image: "assets/images/gadgets/time-furoshiki.jpg"
    },

    {
        id: 16,
        name: "Caller Catcher",
        category: "communication",
        tag: "Communication",
        description: "Communication aur calls ke liye futuristic gadget.",
        image: "assets/images/gadgets/caller-catcher.jpg"
    },

    {
        id: 17,
        name: "Instant Robot",
        category: "science",
        tag: "Science",
        description: "Future technology based robotic gadget.",
        image: "assets/images/gadgets/instant-robot.jpg"
    },

    {
        id: 18,
        name: "Copying Toast",
        category: "famous",
        tag: "Famous",
        description: "Object ki copy create karne ke liye.",
        image: "assets/images/gadgets/copying-toast.jpg"
    },

    {
        id: 19,
        name: "Time TV",
        category: "time",
        tag: "Time",
        description: "Past aur future ki events dekhne ke liye.",
        image: "assets/images/gadgets/time-tv.jpg"
    },

    {
        id: 20,
        name: "Magic Camera",
        category: "fun",
        tag: "Fun",
        description: "Amazing images aur effects create karne wala gadget.",
        image: "assets/images/gadgets/magic-camera.jpg"
    }

];


/* =====================================================
   ELEMENTS
===================================================== */

const gadgetGrid =
    document.getElementById("gadgetGrid");

const gadgetSearch =
    document.getElementById("gadgetSearch");

const gadgetCount =
    document.getElementById("gadgetCount");

const noGadgets =
    document.getElementById("noGadgets");

const filters =
    document.querySelectorAll(".gadget-filter");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuPanel =
    document.getElementById("mobileMenuPanel");

const mobileSearch =
    document.getElementById("mobileSearch");


/* =====================================================
   LIGHTBOX ELEMENTS
===================================================== */

const lightbox =
    document.getElementById("gadgetLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxClose =
    document.getElementById("lightboxClose");


/* =====================================================
   STATE
===================================================== */

let currentCategory = "all";

let currentSearch = "";


/* =====================================================
   RENDER GADGETS
===================================================== */

function renderGadgets() {

    gadgetGrid.innerHTML = "";

    const filteredGadgets =
        gadgets.filter(gadget => {

            const matchesCategory =
                currentCategory === "all" ||
                gadget.category === currentCategory;

            const searchText =
                currentSearch.toLowerCase();

            const matchesSearch =
                gadget.name
                    .toLowerCase()
                    .includes(searchText) ||

                gadget.description
                    .toLowerCase()
                    .includes(searchText);

            return (
                matchesCategory &&
                matchesSearch
            );
        });


    gadgetCount.textContent =
        filteredGadgets.length;


    if (filteredGadgets.length === 0) {

        noGadgets.hidden = false;

        return;
    }


    noGadgets.hidden = true;


    filteredGadgets.forEach((gadget, index) => {

        const card =
            document.createElement("article");

        card.className =
            "gadget-card";

        card.style.animationDelay =
            `${index * 0.04}s`;


        card.innerHTML = `

            <div
                class="gadget-image"
                data-image="${gadget.image}"
                data-title="${gadget.name}"
            >

                <img
                    src="${gadget.image}"
                    alt="${gadget.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

            </div>


            <div class="gadget-info">

                <span class="gadget-tag">
                    ${gadget.tag}
                </span>

                <h3>
                    ${gadget.name}
                </h3>

                <p>
                    ${gadget.description}
                </p>

                <a
                    href="${gadget.image}"
                    download
                    class="gadget-download-btn">

                    ⬇️ Download

                </a>

            </div>

        `;


        gadgetGrid.appendChild(card);

    });


    attachLightboxEvents();
}


/* =====================================================
   FILTER
===================================================== */

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        currentCategory =
            filter.dataset.category;


        renderGadgets();

    });

});


/* =====================================================
   SEARCH
===================================================== */

gadgetSearch.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value.trim();

        renderGadgets();

    }
);


/* =====================================================
   LIGHTBOX EVENTS
===================================================== */

function attachLightboxEvents() {

    const images =
        document.querySelectorAll(".gadget-image");


    images.forEach(imageBox => {

        imageBox.addEventListener(
            "click",
            () => {

                const image =
                    imageBox.dataset.image;

                const title =
                    imageBox.dataset.title;


                lightboxImage.src =
                    image;

                lightboxTitle.textContent =
                    title;


                lightbox.classList.add("show");

                document.body.style.overflow =
                    "hidden";
            }
        );

    });

}


/* =====================================================
   CLOSE LIGHTBOX
===================================================== */

function closeLightbox() {

    lightbox.classList.remove("show");

    lightboxImage.src = "";

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    event => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

mobileMenu.addEventListener(
    "click",
    () => {

        mobileMenuPanel.classList.toggle("show");

    }
);


/* =====================================================
   CLOSE MOBILE MENU ON LINK CLICK
===================================================== */

mobileMenuPanel
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenuPanel
                    .classList.remove("show");

            }
        );

    });


/* =====================================================
   MOBILE SEARCH
===================================================== */

mobileSearch.addEventListener(
    "click",
    () => {

        gadgetSearch.focus();

        window.scrollTo({

            top:
                gadgetSearch
                    .getBoundingClientRect()
                    .top
                +
                window.scrollY
                -
                100,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

renderGadgets();