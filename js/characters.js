/* =========================================================
   DORAEMON WORLD
   CHARACTER SYSTEM
   UNIQUE CHARACTER DATABASE
   MAIN + FAMILY + FRIENDS + SCHOOL + ROBOT + MOVIE + OTHERS
========================================================= */


/* =========================================================
   CHARACTER DATABASE
   IMPORTANT:
   - Every character appears only ONCE
   - Main characters are NOT repeated in Movie category
   - Movie category contains movie-exclusive characters
========================================================= */

const characters = [

    /* =====================================================
       MAIN CHARACTERS
    ===================================================== */

    {
        id: 1,
        name: "Doraemon",
        japanese: "ドラえもん",
        category: "main",
        image: "assets/images/characters/Doremon.ch.png",
        dob: "September 3, 2112",
        age: "Robot Cat",
        gender: "Male",
        live: "Nobita's House",
        school: "Robot Academy",
        occupation: "Future Robot / Helper",
        family: "Dorami",
        friends: "Nobita, Shizuka, Gian, Suneo",
        personality: "Kind, helpful, emotional and clever",
        firstAppearance: "1969",
        description:
            "Doraemon is a robotic cat from the 22nd century who travels back in time to help Nobita."
    },

    {
        id: 2,
        name: "Nobita Nobi",
        japanese: "野比 のび太",
        category: "main",
        image: "assets/images/characters/nobita.png",
        dob: "August 7",
        age: "10",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's School",
        occupation: "Student",
        family: "Tamako Nobi, Nobisuke Nobi",
        friends: "Doraemon, Shizuka, Gian, Suneo",
        personality: "Kind, lazy, emotional and imaginative",
        firstAppearance: "1969",
        description:
            "Nobita is Doraemon's best friend and the main human character of the series."
    },

    {
        id: 3,
        name: "Shizuka Minamoto",
        japanese: "源 静香",
        category: "main",
        image: "assets/images/characters/shizuka.png",
        dob: "May 8",
        age: "10",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Nobita's School",
        occupation: "Student",
        family: "Shizuka's Mother, Shizuka's Father",
        friends: "Nobita, Doraemon, Gian, Suneo",
        personality: "Kind, intelligent, polite and caring",
        firstAppearance: "1969",
        description:
            "Shizuka is Nobita's close friend and one of the central characters in Doraemon."
    },

    {
        id: 4,
        name: "Takeshi Goda",
        japanese: "剛田 武",
        category: "main",
        image: "assets/images/characters/gian.png",
        dob: "June 15",
        age: "10",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's School",
        occupation: "Student / Singer",
        family: "Jaiko, Gian's Mother",
        friends: "Nobita, Suneo, Doraemon",
        personality: "Strong, loud, confident and sometimes caring",
        firstAppearance: "1969",
        description:
            "Gian is Nobita's classmate. He is known for his strength and his love of singing."
    },

    {
        id: 5,
        name: "Suneo Honekawa",
        japanese: "骨川 スネ夫",
        category: "main",
        image: "assets/images/characters/suneo.png",
        dob: "February 29",
        age: "10",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's School",
        occupation: "Student",
        family: "Suneo's Mother, Suneo's Father",
        friends: "Gian, Nobita, Doraemon",
        personality: "Proud, clever, stylish and sometimes selfish",
        firstAppearance: "1969",
        description:
            "Suneo is a wealthy classmate of Nobita who often shows off his possessions."
    },


    /* =====================================================
       ROBOT CHARACTERS
    ===================================================== */

    {
        id: 6,
        name: "Dorami",
        japanese: "ドラミ",
        category: "robot",
        image: "assets/images/characters/dorami.png",
        dob: "December 2, 2114",
        age: "Robot Cat",
        gender: "Female",
        live: "22nd Century",
        school: "Robot Academy",
        occupation: "Future Robot",
        family: "Doraemon",
        friends: "Doraemon, Sewashi",
        personality: "Smart, responsible and caring",
        firstAppearance: "1973",
        description:
            "Dorami is Doraemon's younger sister and is known for being responsible and capable."
    },

    {
        id: 7,
        name: "Mini-Dora",
        japanese: "ミニドラ",
        category: "robot",
        image: "assets/images/characters/minidora.png",
        dob: "Unknown",
        age: "Robot",
        gender: "Unknown",
        live: "22nd Century",
        school: "Robot World",
        occupation: "Mini Robot",
        family: "Doraemon",
        friends: "Doraemon and Dorami",
        personality: "Cute, energetic and playful",
        firstAppearance: "Manga / Anime",
        description:
            "Mini-Dora are tiny robotic characters based on Doraemon that appear in different adventures."
    },

    {
        id: 8,
        name: "Sewashi Nobi",
        japanese: "野比 セワシ",
        category: "robot",
        image: "assets/images/characters/sewashi.png",
        dob: "Unknown",
        age: "Child",
        gender: "Male",
        live: "22nd Century",
        school: "Future School",
        occupation: "Student",
        family: "Nobi Family",
        friends: "Doraemon",
        personality: "Responsible, intelligent and friendly",
        firstAppearance: "1969",
        description:
            "Sewashi is a boy from the future who sends Doraemon to help Nobita."
    },


    /* =====================================================
       NOBITA FAMILY
    ===================================================== */

    {
        id: 9,
        name: "Tamako Nobi",
        japanese: "野比 玉子",
        category: "family",
        image: "assets/images/characters/tamako.png",
        dob: "Unknown",
        age: "Adult",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "N/A",
        occupation: "Housewife",
        family: "Nobita, Nobisuke",
        friends: "Neighbors",
        personality: "Caring, strict and emotional",
        firstAppearance: "1969",
        description:
            "Tamako Nobi is Nobita's mother and takes care of the Nobi household."
    },

    {
        id: 10,
        name: "Nobisuke Nobi",
        japanese: "野比 のび助",
        category: "family",
        image: "assets/images/characters/nobisuke.png",
        dob: "Unknown",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "N/A",
        occupation: "Office Worker",
        family: "Nobita, Tamako",
        friends: "Office colleagues",
        personality: "Kind, relaxed and hardworking",
        firstAppearance: "1969",
        description:
            "Nobisuke Nobi is Nobita's father and works as an office employee."
    },

    {
        id: 11,
        name: "Nobita's Grandmother",
        japanese: "のび太の祖母",
        category: "family",
        image: "assets/images/characters/grandmother.png",
        dob: "Unknown",
        age: "Elderly",
        gender: "Female",
        live: "Japan",
        school: "N/A",
        occupation: "Homemaker",
        family: "Nobita and Nobi Family",
        friends: "Family",
        personality: "Gentle, loving and caring",
        firstAppearance: "Manga",
        description:
            "Nobita's grandmother is remembered for her warm relationship with Nobita."
    },

    {
        id: 12,
        name: "Jaiko Goda",
        japanese: "剛田 ジャイ子",
        category: "family",
        image: "assets/images/characters/jaiko.png",
        dob: "Unknown",
        age: "Young",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "School",
        occupation: "Student / Manga Artist",
        family: "Gian, Gian's Mother",
        friends: "Nobita and classmates",
        personality: "Creative, kind and determined",
        firstAppearance: "1970",
        description:
            "Jaiko is Gian's younger sister and dreams of becoming a manga artist."
    },

    {
        id: 13,
        name: "Suneo's Mother",
        japanese: "骨川 スネ夫の母",
        category: "family",
        image: "assets/images/characters/suneo-mother.png",
        dob: "Unknown",
        age: "Adult",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "N/A",
        occupation: "Housewife",
        family: "Suneo, Suneo's Father",
        friends: "Neighbors",
        personality: "Proud, fashionable and caring",
        firstAppearance: "Manga",
        description:
            "Suneo's mother is known for her stylish appearance and wealthy lifestyle."
    },

    {
        id: 14,
        name: "Gian's Mother",
        japanese: "剛田家の母",
        category: "family",
        image: "assets/images/characters/gian-mother.png",
        dob: "Unknown",
        age: "Adult",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "N/A",
        occupation: "Shopkeeper",
        family: "Gian, Jaiko",
        friends: "Neighbors",
        personality: "Strict, hardworking and caring",
        firstAppearance: "Manga",
        description:
            "Gian's mother runs the family shop and is known for her strict personality."
    },

    {
        id: 15,
        name: "Suneo's Father",
        japanese: "骨川 スネ夫の父",
        category: "family",
        image: "assets/images/characters/suneo-father.png",
        dob: "Unknown",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "N/A",
        occupation: "Businessman",
        family: "Suneo, Suneo's Mother",
        friends: "Business contacts",
        personality: "Wealthy, busy and confident",
        firstAppearance: "Manga",
        description:
            "Suneo's father is a successful businessman and member of Suneo's family."
    },


    /* =====================================================
       FRIENDS
    ===================================================== */

    {
        id: 16,
        name: "Mii-chan",
        japanese: "ミイちゃん",
        category: "friends",
        image: "assets/images/characters/miichan.png",
        dob: "Unknown",
        age: "Cat",
        gender: "Female",
        live: "Tokyo",
        school: "N/A",
        occupation: "Pet Cat",
        family: "Unknown",
        friends: "Doraemon",
        personality: "Cute, calm and friendly",
        firstAppearance: "Manga",
        description:
            "Mii-chan is a cat Doraemon is fond of and appears in several stories."
    },


    /* =====================================================
       SCHOOL CHARACTERS
    ===================================================== */

    {
        id: 17,
        name: "Nobita's Teacher",
        japanese: "先生",
        category: "school",
        image: "assets/images/characters/teacher.png",
        dob: "Unknown",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's School",
        occupation: "Teacher",
        family: "Unknown",
        friends: "Other teachers",
        personality: "Strict, serious and responsible",
        firstAppearance: "Manga",
        description:
            "Nobita's teacher teaches his class and frequently scolds Nobita for being late or unprepared."
    },

    {
        id: 18,
        name: "Dekisugi Hidetoshi",
        japanese: "出木杉 英才",
        category: "school",
        image: "assets/images/characters/dekisugi.png",
        dob: "Unknown",
        age: "10",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's School",
        occupation: "Student",
        family: "Dekisugi Family",
        friends: "Shizuka and classmates",
        personality: "Intelligent, polite and hardworking",
        firstAppearance: "1970",
        description:
            "Dekisugi is an exceptionally intelligent and talented student in Nobita's class."
    },


    /* =====================================================
       OTHER CHARACTERS
    ===================================================== */

    {
        id: 19,
        name: "Kaminari-san",
        japanese: "神成さん",
        category: "minor",
        image: "assets/images/characters/kaminari.png",
        dob: "Unknown",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "N/A",
        occupation: "Neighbor",
        family: "Unknown",
        friends: "Neighborhood residents",
        personality: "Short-tempered but ordinary",
        firstAppearance: "Manga",
        description:
            "Kaminari-san is a neighborhood character who appears in various Doraemon stories."
    },

    {
        id: 20,
        name: "Haruo",
        japanese: "はる夫",
        category: "minor",
        image: "assets/images/characters/haruo.png",
        dob: "Unknown",
        age: "Child",
        gender: "Male",
        live: "Tokyo",
        school: "Nobita's School",
        occupation: "Student",
        family: "Unknown",
        friends: "Classmates",
        personality: "Friendly and playful",
        firstAppearance: "Manga",
        description:
            "Haruo is a supporting child who occasionally appears around Nobita's school and neighborhood."
    },


    /* =====================================================
       MOVIE-EXCLUSIVE CHARACTERS

       IMPORTANT:
       These are separate characters.
       Doraemon / Nobita / Gian / Suneo / Shizuka
       are NOT repeated here.
    ===================================================== */

    {
        id: 21,
        name: "Papi",
        japanese: "パピ",
        category: "movie",
        image: "assets/images/characters/papi.png",
        movieTitle: "Nobita's Little Space War",
        dob: "Unknown",
        age: "Child",
        gender: "Male",
        live: "Planet Pirika",
        school: "Pirika School",
        occupation: "Prince",
        family: "Pirika Royal Family",
        friends: "Doraemon and Nobita",
        personality: "Brave, kind and responsible",
        firstAppearance: "Nobita's Little Space War",
        description:
            "Papi is a small space prince who becomes involved in an adventure with Doraemon and Nobita."
    },

    {
        id: 22,
        name: "Riruru",
        japanese: "リルル",
        category: "movie",
        image: "assets/images/characters/riruru.png",
        movieTitle: "Nobita and the Steel Troops",
        dob: "Unknown",
        age: "Robot",
        gender: "Female",
        live: "Robot World",
        school: "N/A",
        occupation: "Robot",
        family: "Robot World",
        friends: "Nobita and Doraemon",
        personality: "Calm, intelligent and caring",
        firstAppearance: "Nobita and the Steel Troops",
        description:
            "Riruru is a major robot character from the Steel Troops movie adventure."
    },

    {
        id: 23,
        name: "Pippo",
        japanese: "ピッポ",
        category: "movie",
        image: "assets/images/characters/pippo.png",
        movieTitle: "Nobita and the New Steel Troops",
        dob: "Unknown",
        age: "Robot",
        gender: "Male",
        live: "Robot World",
        school: "N/A",
        occupation: "Robot",
        family: "Robot World",
        friends: "Nobita and Doraemon",
        personality: "Brave, loyal and friendly",
        firstAppearance: "Nobita and the New Steel Troops",
        description:
            "Pippo is a friendly robot character associated with the New Steel Troops movie."
    },

    {
        id: 24,
        name: "Kibo",
        japanese: "キー坊",
        category: "movie",
        image: "assets/images/characters/kibo.png",
        movieTitle: "Nobita and the Green Giant Legend",
        dob: "Unknown",
        age: "Young",
        gender: "Unknown",
        live: "Green Planet",
        school: "N/A",
        occupation: "Plant Creature",
        family: "Green Planet",
        friends: "Nobita and Doraemon",
        personality: "Cute, innocent and caring",
        firstAppearance: "Nobita and the Green Giant Legend",
        description:
            "Kibo is a plant-like character who becomes an important friend during Nobita's adventure."
    },

    {
        id: 25,
        name: "Fuko",
        japanese: "フー子",
        category: "movie",
        image: "assets/images/characters/fuko.png",
        movieTitle: "Nobita and the Windmasters",
        dob: "Unknown",
        age: "Young",
        gender: "Unknown",
        live: "Wind Village",
        school: "N/A",
        occupation: "Wind Creature",
        family: "Unknown",
        friends: "Nobita and Doraemon",
        personality: "Gentle, loyal and brave",
        firstAppearance: "Nobita and the Windmasters",
        description:
            "Fuko is a special character connected with the wind and Nobita's movie adventure."
    },

    {
        id: 26,
        name: "Kukuru",
        japanese: "ククル",
        category: "movie",
        image: "assets/images/characters/kukuru.png",
        movieTitle: "New Great Adventure into the Underworld",
        dob: "Unknown",
        age: "Young",
        gender: "Male",
        live: "Magic World",
        school: "Magic School",
        occupation: "Adventurer",
        family: "Magic World Family",
        friends: "Nobita and Doraemon",
        personality: "Brave, curious and friendly",
        firstAppearance: "New Great Adventure into the Underworld",
        description:
            "Kukuru is a young character who joins Nobita and Doraemon during their magical adventure."
    },

    {
        id: 27,
        name: "Sofia",
        japanese: "ソフィア",
        category: "movie",
        image: "assets/images/characters/sofia.png",
        movieTitle: "Nobita's Great Battle of the Mermaid King",
        dob: "Unknown",
        age: "Young",
        gender: "Female",
        live: "Underwater Kingdom",
        school: "Royal School",
        occupation: "Princess",
        family: "Underwater Royal Family",
        friends: "Nobita and Doraemon",
        personality: "Brave, kind and intelligent",
        firstAppearance: "Nobita's Great Battle of the Mermaid King",
        description:
            "Sofia is an important character from Doraemon's underwater kingdom adventure."
    },

    {
        id: 28,
        name: "Peko",
        japanese: "ペコ",
        category: "movie",
        image: "assets/images/characters/peko.png",
        movieTitle: "New Nobita's Great Demon",
        dob: "Unknown",
        age: "Young",
        gender: "Male",
        live: "Dog Kingdom",
        school: "N/A",
        occupation: "Prince / Adventurer",
        family: "Dog Kingdom Royal Family",
        friends: "Nobita and Doraemon",
        personality: "Brave, loyal and kind",
        firstAppearance: "New Nobita's Great Demon",
        description:
            "Peko is a major character from the Great Demon movie adventure."
    },

    {
        id: 29,
        name: "Chammy",
        japanese: "チャミー",
        category: "movie",
        image: "assets/images/characters/chammy.png",
        movieTitle: "Nobita's Little Space War",
        dob: "Unknown",
        age: "Unknown",
        gender: "Female",
        live: "Planet Pirika",
        school: "N/A",
        occupation: "Space Companion",
        family: "Unknown",
        friends: "Papi, Doraemon and Nobita",
        personality: "Cute, helpful and friendly",
        firstAppearance: "Nobita's Little Space War",
        description:
            "Chammy is a small companion connected with the Little Space War adventure."
    },

    {
        id: 30,
        name: "Roppuru",
        japanese: "ロップル",
        category: "movie",
        image: "assets/images/characters/roppuru.png",
        movieTitle: "Nobita's Space Heroes",
        dob: "Unknown",
        age: "Young",
        gender: "Male",
        live: "Space World",
        school: "N/A",
        occupation: "Space Adventurer",
        family: "Unknown",
        friends: "Doraemon and Nobita",
        personality: "Brave, energetic and friendly",
        firstAppearance: "Doraemon Movie Adventure",
        description:
            "Roppuru is a supporting space-adventure character included in the movie collection."
    },

    {
        id: 31,
        name: "Demaon",
        japanese: "デマオン",
        category: "movie",
        image: "assets/images/characters/demaon.png",
        movieTitle: "New Great Adventure into the Underworld",
        dob: "Unknown",
        age: "Unknown",
        gender: "Male",
        live: "Magic World",
        school: "N/A",
        occupation: "Demon Leader",
        family: "Unknown",
        friends: "Demon Army",
        personality: "Powerful, threatening and ambitious",
        firstAppearance: "New Great Adventure into the Underworld",
        description:
            "Demaon is a major antagonist connected with the magical world adventure."
    },

    {
        id: 32,
        name: "Gigazombie",
        japanese: "ギガゾンビ",
        category: "movie",
        image: "assets/images/characters/gigazombie.png",
        movieTitle: "Nobita and the Birth of Japan",
        dob: "Unknown",
        age: "Unknown",
        gender: "Male",
        live: "Ancient Japan",
        school: "N/A",
        occupation: "Antagonist",
        family: "Unknown",
        friends: "Followers",
        personality: "Ambitious, powerful and mysterious",
        firstAppearance: "Nobita and the Birth of Japan",
        description:
            "Gigazombie is a major antagonist associated with the Birth of Japan movie adventure."
    }

];


/* =========================================================
   REMOVE ACCIDENTAL DUPLICATES
   ---------------------------------------------------------
   This protects the page even if the database accidentally
   contains the same character twice.
========================================================= */

function normalizeCharacterName(name) {

    return String(name)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}


const uniqueCharacters = [];

const seenCharacters = new Set();


characters.forEach(character => {

    const key = normalizeCharacterName(character.name);

    if (!seenCharacters.has(key)) {

        seenCharacters.add(key);

        uniqueCharacters.push(character);

    }

});


/*
   Use only the cleaned unique database from this point.
*/
const characterDatabase = uniqueCharacters;


/* =========================================================
   DOM ELEMENTS
========================================================= */

const characterGrid =
    document.getElementById("characterGrid");

const characterSearch =
    document.getElementById("characterSearch");

const characterCount =
    document.getElementById("characterCount");

const charactersHeading =
    document.getElementById("charactersHeading");

const charactersDescription =
    document.getElementById("charactersDescription");

const noCharacters =
    document.getElementById("noCharacters");


/* =========================================================
   CURRENT CATEGORY
========================================================= */

let currentCategory = "all";


/* =========================================================
   CATEGORY NAMES
========================================================= */

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


/* =========================================================
   ESCAPE HTML
   Prevents broken HTML if character data contains
   special characters.
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   SEARCH TEXT
========================================================= */

function getSearchText(character) {

    return [

        character.name,

        character.japanese,

        character.description,

        character.occupation,

        character.personality,

        character.movieTitle || "",

        character.firstAppearance

    ]
        .join(" ")
        .toLowerCase();

}


/* =========================================================
   RENDER CHARACTERS
========================================================= */

function renderCharacters() {

    const searchText = characterSearch
        ? characterSearch.value.trim().toLowerCase()
        : "";


    const filteredCharacters =
        characterDatabase.filter(character => {

            const categoryMatch =
                currentCategory === "all" ||
                character.category === currentCategory;


            const searchMatch =
                getSearchText(character)
                    .includes(searchText);


            return categoryMatch && searchMatch;

        });


    /* =====================================================
       UPDATE COUNT
    ===================================================== */

    if (characterCount) {

        characterCount.textContent =
            filteredCharacters.length;

    }


    /* =====================================================
       UPDATE HEADING
    ===================================================== */

    if (charactersHeading) {

        charactersHeading.textContent =
            categoryNames[currentCategory];

    }


    /* =====================================================
       UPDATE DESCRIPTION
    ===================================================== */

    if (charactersDescription) {

        charactersDescription.textContent =
            searchText
                ? `Search results for "${characterSearch.value}"`
                : "Doraemon ke saare unique characters ek hi jagah.";

    }


    /* =====================================================
       CLEAR GRID
    ===================================================== */

    if (!characterGrid) return;

    characterGrid.innerHTML = "";


    /* =====================================================
       NO RESULT
    ===================================================== */

    if (filteredCharacters.length === 0) {

        if (noCharacters) {

            noCharacters.hidden = false;

        }

        return;

    }


    if (noCharacters) {

        noCharacters.hidden = true;

    }


    /* =====================================================
       CREATE CARDS
    ===================================================== */

    filteredCharacters.forEach((character, index) => {

        const card =
            document.createElement("article");

        card.className =
            "character-card";

        card.style.animationDelay =
            `${index * 0.04}s`;


        card.innerHTML = `

            <div class="character-image">

                <img
                    src="${escapeHTML(character.image)}"
                    alt="${escapeHTML(character.name)}"
                    loading="lazy"
                >

                <div class="image-fallback" hidden>
                    👤
                </div>

            </div>


            <div class="character-info">

                <span class="character-category">
                    ${escapeHTML(character.category)}
                </span>

                <h3>
                    ${escapeHTML(character.name)}
                </h3>

                <p>
                    ${escapeHTML(character.description)}
                </p>

                <div class="view-details">
                    View Full Details →
                </div>

            </div>

        `;


        /* =================================================
           IMAGE FALLBACK
        ================================================= */

        const image =
            card.querySelector("img");

        const fallback =
            card.querySelector(".image-fallback");


        if (image) {

            image.addEventListener(
                "error",
                () => {

                    image.style.display = "none";

                    if (fallback) {

                        fallback.hidden = false;

                    }

                }
            );

        }


        /* =================================================
           CARD CLICK
        ================================================= */

        card.addEventListener(
            "click",
            () => {

                openCharacterModal(character);

            }
        );


        characterGrid.appendChild(card);

    });

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".character-filter"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            currentCategory =
                button.dataset.category;


            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            renderCharacters();

        }
    );

});


/* =========================================================
   SEARCH
========================================================= */

if (characterSearch) {

    characterSearch.addEventListener(
        "input",
        renderCharacters
    );

}


/* =========================================================
   CHARACTER MODAL
========================================================= */

function openCharacterModal(character) {

    closeCharacterModal();


    const modal =
        document.createElement("div");

    modal.className =
        "character-modal show";


    const movieDetails =
        character.movieTitle
            ? createDetail(
                "🎬 Movie",
                character.movieTitle
            )
            : "";


    modal.innerHTML = `

        <div class="character-modal-box">

            <button
                class="modal-close"
                aria-label="Close">
                ×
            </button>


            <div class="modal-top">

                <div class="modal-image">

                    <img
                        src="${escapeHTML(character.image)}"
                        alt="${escapeHTML(character.name)}"
                    >

                    <div
                        class="modal-image-fallback"
                        hidden>
                        👤
                    </div>

                </div>


                <div class="modal-main-info">

                    <span class="modal-category">
                        ${escapeHTML(character.category)}
                    </span>


                    <h2>
                        ${escapeHTML(character.name)}
                    </h2>


                    <div class="japanese-name">
                        ${escapeHTML(character.japanese)}
                    </div>


                    <p class="modal-description">
                        ${escapeHTML(character.description)}
                    </p>

                </div>

            </div>


            <div class="details-section">

                <h3>
                    Character Details
                </h3>


                <div class="details-grid">

                    ${createDetail(
                        "🎂 Date of Birth",
                        character.dob
                    )}

                    ${createDetail(
                        "🎈 Age",
                        character.age
                    )}

                    ${createDetail(
                        "⚧ Gender",
                        character.gender
                    )}

                    ${createDetail(
                        "📍 Lives In",
                        character.live
                    )}

                    ${createDetail(
                        "🏫 School",
                        character.school
                    )}

                    ${createDetail(
                        "💼 Occupation",
                        character.occupation
                    )}

                    ${createDetail(
                        "👨‍👩‍👧 Family",
                        character.family
                    )}

                    ${createDetail(
                        "👥 Friends",
                        character.friends
                    )}

                    ${createDetail(
                        "💫 Personality",
                        character.personality
                    )}

                    ${createDetail(
                        "📖 First Appearance",
                        character.firstAppearance
                    )}

                    ${movieDetails}

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    /* =====================================================
       MODAL IMAGE FALLBACK
    ===================================================== */

    const modalImage =
        modal.querySelector(
            ".modal-image img"
        );

    const modalFallback =
        modal.querySelector(
            ".modal-image-fallback"
        );


    if (modalImage) {

        modalImage.addEventListener(
            "error",
            () => {

                modalImage.style.display =
                    "none";

                if (modalFallback) {

                    modalFallback.hidden =
                        false;

                }

            }
        );

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    const closeButton =
        modal.querySelector(
            ".modal-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeCharacterModal
        );

    }


    /* =====================================================
       BACKGROUND CLICK
    ===================================================== */

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeCharacterModal();

            }

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        modalEscapeHandler
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   DETAIL ITEM
========================================================= */

function createDetail(label, value) {

    return `

        <div class="detail-item">

            <span class="detail-label">
                ${escapeHTML(label)}
            </span>

            <span class="detail-value">
                ${escapeHTML(
                    value || "Not available"
                )}
            </span>

        </div>

    `;

}


/* =========================================================
   ESCAPE HANDLER
========================================================= */

function modalEscapeHandler(event) {

    if (event.key === "Escape") {

        closeCharacterModal();

    }

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeCharacterModal() {

    const existingModal =
        document.querySelector(
            ".character-modal"
        );


    if (existingModal) {

        existingModal.remove();

    }


    document.removeEventListener(
        "keydown",
        modalEscapeHandler
    );


    document.body.style.overflow = "";

}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const mobileMenuPanel =
    document.getElementById(
        "mobileMenuPanel"
    );


if (
    mobileMenu &&
    mobileMenuPanel
) {

    mobileMenu.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            mobileMenuPanel.classList.toggle(
                "show"
            );

        }
    );


    /* Close menu when link clicked */

    mobileMenuPanel
        .querySelectorAll("a")
        .forEach(link => {

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


/* =========================================================
   MOBILE SEARCH
========================================================= */

const mobileSearch =
    document.getElementById(
        "mobileSearch"
    );


if (mobileSearch) {

    mobileSearch.addEventListener(
        "click",
        () => {

            if (characterSearch) {

                window.scrollTo({

                    top: 100,

                    behavior: "smooth"

                });


                setTimeout(
                    () => {

                        characterSearch.focus();

                    },
                    350
                );

            }

        }
    );

}


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            mobileMenuPanel &&
            mobileMenu &&
            !mobileMenuPanel.contains(event.target) &&
            !mobileMenu.contains(event.target)
        ) {

            mobileMenuPanel.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   INITIAL RENDER
========================================================= */

renderCharacters();


/* =========================================================
   DEBUG / CHECK
   Console me unique character count dikhega.
========================================================= */

console.log(
    `Doraemon World: ${characterDatabase.length} unique characters loaded.`
);