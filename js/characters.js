/* =====================================================
   DORAEMON WORLD
   CHARACTERS DATABASE
   SEARCH + FILTER + LOAD MORE
===================================================== */


/* =====================================================
   CHARACTER DATABASE
===================================================== */

const characters = [

    /* =================================================
       MAIN CHARACTERS
    ================================================= */

    {
        id: 1,
        name: "Doraemon",
        japanese: "ドラえもん",
        category: "main",
        role: "Robot Cat",
        image: "assets/images/characters/Doremon.ch.png",
        description: "A robotic cat from the 22nd century who helps Nobita.",
        featured: true
    },

    {
        id: 2,
        name: "Nobita Nobi",
        japanese: "野比のび太",
        category: "main",
        role: "Student",
        image: "assets/images/characters/nobita.png",
        description: "Nobita is Doraemon's best friend and owner.",
        featured: true
    },

    {
        id: 3,
        name: "Shizuka Minamoto",
        japanese: "源静香",
        category: "main",
        role: "Student",
        image: "assets/images/characters/shizuka.png",
        description: "Nobita's kind and intelligent friend.",
        featured: true
    },

    {
        id: 4,
        name: "Takeshi Goda",
        japanese: "剛田武",
        category: "main",
        role: "Student",
        image: "assets/images/characters/gian.png",
        description: "Gian is strong, loud and loves singing.",
        featured: true
    },

    {
        id: 5,
        name: "Suneo Honekawa",
        japanese: "骨川スネ夫",
        category: "main",
        role: "Student",
        image: "assets/images/characters/suneo.png",
        description: "Suneo is a clever and wealthy friend of Nobita.",
        featured: true
    },

    {
        id: 6,
        name: "Dorami",
        japanese: "ドラミ",
        category: "main",
        role: "Robot Cat",
        image: "assets/images/characters/dorami.png",
        description: "Doraemon's younger sister from the future.",
        featured: true
    },

    {
        id: 7,
        name: "Hidetoshi Dekisugi",
        japanese: "出木杉英才",
        category: "friends",
        role: "Student",
        image: "assets/images/characters/dekisugi.png",
        description: "A brilliant and talented student.",
        featured: true
    },


    /* =================================================
       NOBI FAMILY
    ================================================= */

    {
        id: 8,
        name: "Tamako Nobi",
        japanese: "野比玉子",
        category: "family",
        role: "Nobita's Mother",
        image: "assets/images/characters/tamako.png",
        description: "Nobita's mother who takes care of the family."
    },

    {
        id: 9,
        name: "Nobisuke Nobi",
        japanese: "野比のび助",
        category: "family",
        role: "Nobita's Father",
        image: "assets/images/characters/nobisuke.png",
        description: "Nobita's father and Tamako's husband."
    },

    {
        id: 10,
        name: "Sewashi Nobi",
        japanese: "野比セワシ",
        category: "family",
        role: "Future Descendant",
        image: "assets/images/characters/sewashi.png",
        description: "Nobita's descendant from the 22nd century."
    },

    {
        id: 11,
        name: "Nobita's Grandmother",
        japanese: "のび太の祖母",
        category: "family",
        role: "Grandmother",
        image: "assets/images/characters/nobita-grandmother.png",
        description: "Nobita's beloved grandmother."
    },

    {
        id: 12,
        name: "Nobita's Grandfather",
        japanese: "野比の祖父",
        category: "family",
        role: "Grandfather",
        image: "assets/images/characters/nobita-grandfather.png",
        description: "Nobita's grandfather."
    },

    {
        id: 13,
        name: "Nobita's Future Son",
        japanese: "野比ノビスケ",
        category: "family",
        role: "Future Family",
        image: "assets/images/characters/nobisuke-future.png",
        description: "Nobita's future son."
    },

    {
        id: 14,
        name: "Jaiko Goda",
        japanese: "剛田ジャイ子",
        category: "family",
        role: "Gian's Sister",
        image: "assets/images/characters/jaiko.png",
        description: "Gian's younger sister who loves drawing manga."
    },


    /* =================================================
       FRIENDS
    ================================================= */

    {
        id: 15,
        name: "Suneo's Mother",
        japanese: "骨川夫人",
        category: "friends",
        role: "Parent",
        image: "assets/images/characters/suneo-mother.png",
        description: "Suneo's fashionable mother."
    },

    {
        id: 16,
        name: "Gian's Mother",
        japanese: "剛田家の母",
        category: "friends",
        role: "Parent",
        image: "assets/images/characters/gian-mother.png",
        description: "Gian and Jaiko's mother."
    },

    {
        id: 17,
        name: "Kaminari",
        japanese: "神成さん",
        category: "friends",
        role: "Neighbour",
        image: "assets/images/characters/kaminari.png",
        description: "The strict neighbour who often gets annoyed."
    },

    {
        id: 18,
        name: "Nobita's Classmate",
        japanese: "クラスメート",
        category: "friends",
        role: "Student",
        image: "assets/images/characters/classmate.png",
        description: "One of Nobita's classmates."
    },


    /* =================================================
       SCHOOL
    ================================================= */

    {
        id: 19,
        name: "Nobita's Teacher",
        japanese: "先生",
        category: "school",
        role: "Teacher",
        image: "assets/images/characters/teacher.png",
        description: "Nobita's strict school teacher."
    },

    {
        id: 20,
        name: "School Principal",
        japanese: "校長先生",
        category: "school",
        role: "Principal",
        image: "assets/images/characters/principal.png",
        description: "The principal of Nobita's school."
    },


    /* =================================================
       FUTURE / ROBOTS
    ================================================= */

    {
        id: 21,
        name: "Mini-Dora",
        japanese: "ミニドラ",
        category: "robot",
        role: "Mini Robot",
        image: "assets/images/characters/mini-dora.png",
        description: "Tiny robot versions related to Doraemon."
    },

    {
        id: 22,
        name: "Dorami's Friend",
        japanese: "ロボット",
        category: "robot",
        role: "Robot",
        image: "assets/images/characters/robot-friend.png",
        description: "A robot character from the future."
    },

    {
        id: 23,
        name: "Time Patrol",
        japanese: "タイムパトロール",
        category: "robot",
        role: "Time Police",
        image: "assets/images/characters/time-patrol.png",
        description: "Future police responsible for protecting time."
    },


    /* =================================================
       MOVIE CHARACTERS
    ================================================= */

    {
        id: 24,
        name: "Pippo",
        japanese: "ピッポ",
        category: "movie",
        role: "Movie Character",
        image: "assets/images/characters/pippo.png",
        description: "A character from Doraemon movie adventures."
    },

    {
        id: 25,
        name: "Sofia",
        japanese: "ソフィア",
        category: "movie",
        role: "Movie Character",
        image: "assets/images/characters/sofia.png",
        description: "A character appearing in a Doraemon movie."
    },

    {
        id: 26,
        name: "Luka",
        japanese: "ルカ",
        category: "movie",
        role: "Movie Character",
        image: "assets/images/characters/luka.png",
        description: "A character from Doraemon's movie universe."
    },

    {
        id: 27,
        name: "Fuko",
        japanese: "フー子",
        category: "movie",
        role: "Movie Character",
        image: "assets/images/characters/fuko.png",
        description: "A memorable character from a Doraemon adventure."
    },


    /* =================================================
       OTHER CHARACTERS
    ================================================= */

    {
        id: 28,
        name: "Nobita's Friend",
        japanese: "友達",
        category: "minor",
        role: "Supporting",
        image: "assets/images/characters/friend.png",
        description: "A supporting character from the Doraemon universe."
    },

    {
        id: 29,
        name: "Future Citizen",
        japanese: "未来人",
        category: "minor",
        role: "Future Character",
        image: "assets/images/characters/future-citizen.png",
        description: "A citizen living in the future."
    },

    {
        id: 30,
        name: "Robot Shopkeeper",
        japanese: "ロボット店員",
        category: "minor",
        role: "Shopkeeper",
        image: "assets/images/characters/robot-shopkeeper.png",
        description: "A robot character from the future world."
    }

];


/* =====================================================
   IMPORTANT
   =====================================================

   More characters can be added here.

   Example:

   {
       id: 31,
       name: "Character Name",
       japanese: "Japanese Name",
       category: "movie",
       role: "Movie Character",
       image: "assets/images/characters/character-name.png",
       description: "Character description."
   }

===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const characterGrid =
    document.getElementById("characterGrid");

const featuredCharacters =
    document.getElementById("featuredCharacters");

const searchInput =
    document.getElementById("characterSearch");

const filterButtons =
    document.querySelectorAll(".character-filter");

const noCharacters =
    document.getElementById("noCharacters");

const loadMoreButton =
    document.getElementById("loadMoreCharacters");

const characterCount =
    document.getElementById("characterCount");


/* =====================================================
   SETTINGS
===================================================== */

let currentCategory = "all";

let currentSearch = "";

let visibleCharacters = 20;

const charactersPerLoad = 20;


/* =====================================================
   CHARACTER COUNT
===================================================== */

if (characterCount) {

    characterCount.textContent =
        characters.length + "+";

}


/* =====================================================
   CREATE CHARACTER CARD
===================================================== */

function createCharacterCard(character) {

    const card =
        document.createElement("a");

    card.href =
        "#";

    card.className =
        "character-card";


    card.innerHTML = `

        <div class="character-image-box">

            <img
                src="${character.image}"
                alt="${character.name}"
                loading="lazy"
                onerror="this.style.opacity='0.15';">

        </div>


        <div class="character-info">

            <h3>
                ${character.name}
            </h3>


            <div class="character-japanese">
                ${character.japanese || ""}
            </div>


            <p>
                ${character.description || ""}
            </p>


            <span class="character-category">
                ${character.category}
            </span>

        </div>

    `;


    return card;

}


/* =====================================================
   CREATE FEATURED CARD
===================================================== */

function createFeaturedCard(character) {

    const card =
        document.createElement("a");

    card.href =
        "#";

    card.className =
        "featured-character-card";


    card.innerHTML = `

        <img
            src="${character.image}"
            alt="${character.name}"
            loading="lazy"
            onerror="this.style.opacity='0.15';">


        <div class="featured-character-info">

            <h3>
                ${character.name}
            </h3>


            <p>
                ${character.role || ""}
            </p>


            <span class="character-category">
                ${character.category}
            </span>

        </div>

    `;


    return card;

}


/* =====================================================
   GET FILTERED CHARACTERS
===================================================== */

function getFilteredCharacters() {

    return characters.filter(character => {

        const categoryMatch =
            currentCategory === "all" ||
            character.category === currentCategory;


        const searchText =
            currentSearch.toLowerCase();


        const searchMatch =
            character.name
                .toLowerCase()
                .includes(searchText)
            ||
            (character.japanese || "")
                .toLowerCase()
                .includes(searchText)
            ||
            (character.role || "")
                .toLowerCase()
                .includes(searchText);


        return categoryMatch && searchMatch;

    });

}


/* =====================================================
   RENDER CHARACTERS
===================================================== */

function renderCharacters() {

    if (!characterGrid) {
        return;
    }


    const filtered =
        getFilteredCharacters();


    characterGrid.innerHTML = "";


    const visible =
        filtered.slice(
            0,
            visibleCharacters
        );


    visible.forEach(character => {

        characterGrid.appendChild(
            createCharacterCard(character)
        );

    });


    /* NO RESULTS */

    if (noCharacters) {

        noCharacters.hidden =
            filtered.length !== 0;

    }


    /* LOAD MORE */

    if (loadMoreButton) {

        if (visibleCharacters >= filtered.length) {

            loadMoreButton.style.display =
                "none";

        } else {

            loadMoreButton.style.display =
                "block";

        }

    }

}


/* =====================================================
   RENDER FEATURED
===================================================== */

function renderFeaturedCharacters() {

    if (!featuredCharacters) {
        return;
    }


    featuredCharacters.innerHTML = "";


    const featured =
        characters
            .filter(character => character.featured)
            .slice(0, 5);


    featured.forEach(character => {

        featuredCharacters.appendChild(
            createFeaturedCard(character)
        );

    });

}


/* =====================================================
   SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            currentSearch =
                event.target.value.trim();

            visibleCharacters =
                charactersPerLoad;

            renderCharacters();

        }
    );

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            visibleCharacters =
                charactersPerLoad;


            renderCharacters();

        }
    );

});


/* =====================================================
   LOAD MORE
===================================================== */

if (loadMoreButton) {

    loadMoreButton.addEventListener(
        "click",
        () => {

            visibleCharacters +=
                charactersPerLoad;

            renderCharacters();

        }
    );

}


/* =====================================================
   INITIAL LOAD
===================================================== */

renderFeaturedCharacters();

renderCharacters();


/* =====================================================
   IMAGE FALLBACK
===================================================== */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.style.opacity =
                "0.15";

        }

    },
    true
);