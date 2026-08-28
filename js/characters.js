/* =====================================================
   DORAEMON WORLD
   CHARACTERS DATABASE
===================================================== */

const characters = [

    {
        id: 1,
        name: "Nobita Nobi",
        role: "Doraemon's Best Friend",
        category: "main",
        image: "assets/images/characters/nobita.png"
    },

    {
        id: 2,
        name: "Doraemon",
        role: "Robot Cat from 22nd Century",
        category: "main",
        image: "assets/images/characters/Doremon.ch.png"
    },

    {
        id: 3,
        name: "Suneo Honekawa",
        role: "Nobita's Friend",
        category: "main",
        image: "assets/images/characters/suneo.png"
    },

    {
        id: 4,
        name: "Gian (Takeshi Gouda)",
        role: "Nobita's Friend",
        category: "main",
        image: "assets/images/characters/gian.png"
    },

    {
        id: 5,
        name: "Shizuka Minamoto",
        role: "Nobita's Friend",
        category: "main",
        image: "assets/images/characters/shizuka.png"
    },

    {
        id: 6,
        name: "Dorami",
        role: "Doraemon's Sister",
        category: "family",
        image: "assets/images/characters/dorami.png"
    },

    {
        id: 7,
        name: "Dekisugi",
        role: "Brilliant Student",
        category: "school",
        image: "assets/images/characters/dekisugi.png"
    },

    {
        id: 8,
        name: "Sewashi",
        role: "Nobita's Descendant",
        category: "family",
        image: "assets/images/characters/sewashi.png"
    },

    {
        id: 9,
        name: "Pippo",
        role: "Doraemon Universe Character",
        category: "minor",
        image: "assets/images/characters/pippo.png"
    },

    {
        id: 10,
        name: "Sunekichi",
        role: "Suneo's Family",
        category: "family",
        image: "assets/images/characters/sunekichi.png"
    },

    {
        id: 11,
        name: "Peko",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/peko.png"
    },

    {
        id: 12,
        name: "Sofia",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/sofia.png"
    },

    {
        id: 13,
        name: "Fuko",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/fuko.png"
    },

    {
        id: 14,
        name: "Kukku",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/kukku.png"
    },

    {
        id: 15,
        name: "Paruparu",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/paruparu.png"
    },

    {
        id: 16,
        name: "Chamocha",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/chamocha.png"
    },

    {
        id: 17,
        name: "Riruru",
        role: "Robot Girl",
        category: "robot",
        image: "assets/images/characters/riruru.png"
    },

    {
        id: 18,
        name: "Professor Mangetsu",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/professor-mangetsu.png"
    },

    {
        id: 19,
        name: "Dr. Kos",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/dr-kos.png"
    },

    {
        id: 20,
        name: "Miyoko",
        role: "Movie Character",
        category: "movie",
        image: "assets/images/characters/miyoko.png"
    },

    {
        id: 21,
        name: "Bunta",
        role: "Doraemon Universe Character",
        category: "minor",
        image: "assets/images/characters/bunta.png"
    },

    {
        id: 22,
        name: "Honeko",
        role: "Doraemon Universe Character",
        category: "minor",
        image: "assets/images/characters/honeko.png"
    }

];


/* =====================================================
   VARIABLES
===================================================== */

const characterGrid =
    document.getElementById("characterGrid");

const characterSearch =
    document.getElementById("characterSearch");

const noCharacters =
    document.getElementById("noCharacters");

const characterCount =
    document.getElementById("characterCount");

const charactersHeading =
    document.getElementById("charactersHeading");

const charactersDescription =
    document.getElementById("charactersDescription");

let currentCategory = "all";


/* =====================================================
   CATEGORY NAMES
===================================================== */

const categoryNames = {

    all: "All Characters",

    main: "Main Characters",

    family: "Family Characters",

    friends: "Friends",

    school: "School Characters",

    robot: "Robot Characters",

    movie: "Movie Characters",

    minor: "Other Characters"

};


/* =====================================================
   CATEGORY DESCRIPTION
===================================================== */

const categoryDescriptions = {

    all:
        "Doraemon ke saare characters ek hi jagah.",

    main:
        "Doraemon aur uske closest main characters.",

    family:
        "Doraemon universe ke family characters.",

    friends:
        "Nobita aur Doraemon ke friends.",

    school:
        "School ke important characters.",

    robot:
        "Doraemon universe ke robots.",

    movie:
        "Doraemon movies ke special characters.",

    minor:
        "Doraemon universe ke other characters."

};


/* =====================================================
   RENDER CHARACTERS
===================================================== */

function renderCharacters() {

    const searchText =
        characterSearch.value
        .toLowerCase()
        .trim();


    characterGrid.innerHTML = "";


    const filteredCharacters =
        characters.filter(character => {

            const categoryMatch =
                currentCategory === "all" ||
                character.category === currentCategory;

            const text =
                (
                    character.name +
                    " " +
                    character.role
                ).toLowerCase();

            const searchMatch =
                text.includes(searchText);

            return categoryMatch && searchMatch;

        });


    /* =================================================
       COUNT
    ================================================= */

    characterCount.textContent =
        filteredCharacters.length;


    /* =================================================
       HEADING
    ================================================= */

    charactersHeading.textContent =
        categoryNames[currentCategory];


    charactersDescription.textContent =
        categoryDescriptions[currentCategory];


    /* =================================================
       NO RESULTS
    ================================================= */

    if (filteredCharacters.length === 0) {

        noCharacters.hidden = false;

        return;

    }


    noCharacters.hidden = true;


    /* =================================================
       CREATE CARDS
    ================================================= */

    filteredCharacters.forEach(character => {

        const card =
            document.createElement("article");


        card.className =
            "character-card";


        card.dataset.id =
            character.id;


        card.innerHTML = `

            <div class="character-image">

                <div class="character-number">

                    ${String(character.id).padStart(2, "0")}

                </div>


                <img
                    src="${character.image}"
                    alt="${character.name}"
                    loading="lazy"
                    onerror="this.src='assets/images/characters/doraemon.png';">

            </div>


            <div class="character-info">

                <h3>
                    ${character.name}
                </h3>

                <div class="character-role">
                    👤 ${character.role}
                </div>

                <span class="character-category">
                    ${getCategoryLabel(character.category)}
                </span>

            </div>

        `;


        characterGrid.appendChild(card);

    });

}


/* =====================================================
   CATEGORY LABEL
===================================================== */

function getCategoryLabel(category) {

    const labels = {

        main: "⭐ Main",

        family: "👨‍👩‍👧 Family",

        friends: "👥 Friends",

        school: "🏫 School",

        robot: "🤖 Robot",

        movie: "🎬 Movie",

        minor: "🌍 Others"

    };


    return labels[category] || "Character";

}


/* =====================================================
   FILTER BUTTONS
===================================================== */

document
    .querySelectorAll(".character-filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                currentCategory =
                    this.dataset.category;


                document
                    .querySelectorAll(".character-filter")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                this.classList.add("active");


                renderCharacters();


                document
                    .querySelector(".all-characters")
                    .scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

            }
        );

    });


/* =====================================================
   SEARCH
===================================================== */

characterSearch.addEventListener(
    "input",
    renderCharacters
);


/* =====================================================
   MOBILE SEARCH BUTTON
===================================================== */

const mobileSearch =
    document.getElementById("mobileSearch");


if (mobileSearch) {

    mobileSearch.addEventListener(
        "click",
        function() {

            characterSearch.focus();

            characterSearch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuPanel =
    document.getElementById("mobileMenuPanel");


if (mobileMenu && mobileMenuPanel) {

    mobileMenu.addEventListener(
        "click",
        function() {

            mobileMenuPanel.classList.toggle(
                "show"
            );

        }
    );


    document
        .addEventListener(
            "click",
            function(event) {

                if (
                    !mobileMenu.contains(event.target) &&
                    !mobileMenuPanel.contains(event.target)
                ) {

                    mobileMenuPanel.classList.remove(
                        "show"
                    );

                }

            }
        );

}


/* =====================================================
   INITIAL LOAD
===================================================== */

renderCharacters();
