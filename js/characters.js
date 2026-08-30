/* =========================================================
   DORAEMON WORLD
   CHARACTERS SYSTEM
========================================================= */


/* =========================================================
   CHARACTER DATA
========================================================= */

const characters = [

    {
        id: 1,
        name: "Doraemon",
        japanese: "ドラえもん",
        category: "main",
        image: "assets/images/characters/Doremon.ch.png",

        dob: "September 3, 2112",
        age: "Future Robot",
        gender: "Male",
        live: "22nd Century, Japan",
        school: "Robot School",
        occupation: "Helping Nobita",
        family: "Sewashi Nobi is his descendant's family",
        friends: "Nobita, Shizuka, Gian, Suneo",
        personality: "Kind, caring, helpful and sometimes emotional",
        firstAppearance: "December 1969 / January 1970 publications",

        description:
            "Doraemon ek blue robotic cat hai jo 22nd century se Nobita ki help karne ke liye present time mein aata hai."
    },

    {
        id: 2,
        name: "Nobita Nobi",
        japanese: "野比のび太",
        category: "main",
        image: "assets/images/characters/nobita.png",

        dob: "August 7, 1964",
        age: "10 years",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's Elementary School",
        occupation: "Student",
        family: "Tamako Nobi, Nobisuke Nobi",
        friends: "Doraemon, Shizuka, Gian, Suneo",
        personality: "Lazy, kind-hearted, emotional and imaginative",
        firstAppearance: "Doraemon manga",

        description:
            "Nobita Doraemon ka sabse close human friend hai. Woh studies aur sports mein weak hai, lekin bahut kind-hearted hai."
    },

    {
        id: 3,
        name: "Shizuka Minamoto",
        japanese: "源静香",
        category: "friends",
        image: "assets/images/characters/shizuka.png",

        dob: "May 8, 1964",
        age: "10 years",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Nobita's Elementary School",
        occupation: "Student",
        family: "Shizuka's parents",
        friends: "Nobita, Doraemon, Gian, Suneo",
        personality: "Kind, intelligent, polite and caring",
        firstAppearance: "Doraemon manga",

        description:
            "Shizuka Nobita ki close friend hai. Woh intelligent, kind aur studies mein achhi hai."
    },

    {
        id: 4,
        name: "Takeshi Goda",
        japanese: "剛田武",
        category: "friends",
        image: "assets/images/characters/gian.png",

        dob: "June 15, 1964",
        age: "10 years",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's Elementary School",
        occupation: "Student",
        family: "Gian's mother and Jaiko",
        friends: "Nobita, Suneo, Doraemon",
        personality: "Strong, confident, aggressive but caring",
        firstAppearance: "Doraemon manga",

        description:
            "Gian group ka strong boy hai. Woh apni singing ke liye famous hai aur aksar Nobita ko trouble karta hai."
    },

    {
        id: 5,
        name: "Suneo Honekawa",
        japanese: "骨川スネ夫",
        category: "friends",
        image: "assets/images/characters/suneo.png",

        dob: "February 29, 1964",
        age: "10 years",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's Elementary School",
        occupation: "Student",
        family: "Suneo's parents",
        friends: "Gian, Nobita, Doraemon",
        personality: "Smart, boastful, clever and sometimes selfish",
        firstAppearance: "Doraemon manga",

        description:
            "Suneo ek clever aur rich family se aane wala boy hai. Woh apni expensive things ke baare mein boast karta hai."
    },

    {
        id: 6,
        name: "Dorami",
        japanese: "ドラミ",
        category: "robot",
        image: "assets/images/characters/dorami.png",

        dob: "December 2, 2114",
        age: "Future Robot",
        gender: "Female",
        live: "22nd Century, Japan",
        school: "Robot School",
        occupation: "Helping Sewashi",
        family: "Doraemon's sister",
        friends: "Doraemon and Sewashi",
        personality: "Smart, responsible, polite and caring",
        firstAppearance: "Doraemon manga",

        description:
            "Dorami Doraemon ki younger sister hai. Woh Doraemon se zyada responsible aur organized hai."
    },

    {
        id: 7,
        name: "Sewashi Nobi",
        japanese: "セワシ",
        category: "family",
        image: "assets/images/characters/sewashi.png",

        dob: "22nd Century",
        age: "Child",
        gender: "Male",
        live: "Tokyo, 22nd Century",
        school: "Future School",
        occupation: "Student",
        family: "Nobi family descendant",
        friends: "Doraemon, Dorami",
        personality: "Smart and responsible",
        firstAppearance: "Doraemon manga",

        description:
            "Sewashi future generation ka member hai aur Nobita ka descendant hai."
    },

    {
        id: 8,
        name: "Tamako Nobi",
        japanese: "野比玉子",
        category: "family",
        image: "assets/images/characters/tamako.png",

        dob: "Not officially specified",
        age: "Adult",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Not applicable",
        occupation: "Homemaker",
        family: "Nobita's mother",
        friends: "Nobi family",
        personality: "Strict but caring",
        firstAppearance: "Doraemon manga",

        description:
            "Tamako Nobita ki mother hai. Woh Nobita ki studies ko lekar strict rehti hain."
    },

    {
        id: 9,
        name: "Nobisuke Nobi",
        japanese: "野比のび助",
        category: "family",
        image: "assets/images/characters/nobisuke.png",

        dob: "Not officially specified",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Not applicable",
        occupation: "Office Worker",
        family: "Nobita's father",
        friends: "Nobi family",
        personality: "Kind, relaxed and supportive",
        firstAppearance: "Doraemon manga",

        description:
            "Nobisuke Nobita ke father hain aur office mein kaam karte hain."
    },

    {
        id: 10,
        name: "Jaiko Goda",
        japanese: "ジャイ子",
        category: "family",
        image: "assets/images/characters/jaiko.png",

        dob: "Not officially specified",
        age: "Young",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Elementary School",
        occupation: "Student / Manga Artist",
        family: "Gian's younger sister",
        friends: "Gian and neighbourhood friends",
        personality: "Creative, emotional and artistic",
        firstAppearance: "Doraemon manga",

        description:
            "Jaiko Gian ki younger sister hai aur manga drawing mein interested hai."
    },

    {
        id: 11,
        name: "Dekisugi Hidetoshi",
        japanese: "出木杉英才",
        category: "school",
        image: "assets/images/characters/dekisugi.png",

        dob: "Not officially specified",
        age: "10 years",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's Elementary School",
        occupation: "Student",
        family: "Dekisugi family",
        friends: "Shizuka and classmates",
        personality: "Intelligent, polite and hardworking",
        firstAppearance: "Doraemon manga",

        description:
            "Dekisugi class ka highly intelligent student hai. Woh studies aur sports dono mein achha hai."
    },

    {
        id: 12,
        name: "Nobita's Teacher",
        japanese: "先生",
        category: "school",
        image: "assets/images/characters/teacher.png",

        dob: "Not specified",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Nobita's Elementary School",
        occupation: "Teacher",
        family: "Not specified",
        friends: "School staff",
        personality: "Strict but responsible",
        firstAppearance: "Doraemon manga",

        description:
            "Nobita ka teacher class mein discipline aur studies ko maintain karta hai."
    },

    {
        id: 13,
        name: "Mii-chan",
        japanese: "ミイちゃん",
        category: "minor",
        image: "assets/images/characters/miichan.png",

        dob: "Not specified",
        age: "Not specified",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Not applicable",
        occupation: "Pet Cat",
        family: "Not specified",
        friends: "Doraemon",
        personality: "Cute and friendly",
        firstAppearance: "Doraemon manga",

        description:
            "Mii-chan ek cute cat character hai jo Doraemon ke saath kai stories mein nazar aati hai."
    },

    {
        id: 14,
        name: "Nobita's Grandmother",
        japanese: "のび太のおばあちゃん",
        category: "family",
        image: "assets/images/characters/grandmother.png",

        dob: "Not specified",
        age: "Elder",
        gender: "Female",
        live: "Japan",
        school: "Not applicable",
        occupation: "Homemaker",
        family: "Nobita's grandmother",
        friends: "Nobi family",
        personality: "Loving and gentle",
        firstAppearance: "Doraemon stories",

        description:
            "Nobita ki grandmother uske childhood memories ka important part hain."
    },

    {
        id: 15,
        name: "Suneo's Mother",
        japanese: "スネ夫の母",
        category: "family",
        image: "assets/images/characters/suneo-mother.png",

        dob: "Not specified",
        age: "Adult",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Not applicable",
        occupation: "Homemaker",
        family: "Suneo's mother",
        friends: "Neighbourhood families",
        personality: "Caring and fashionable",
        firstAppearance: "Doraemon manga",

        description:
            "Suneo ki mother apne son ko bahut pamper karti hain."
    },

    {
        id: 16,
        name: "Gian's Mother",
        japanese: "ジャイアンの母",
        category: "family",
        image: "assets/images/characters/gian-mother.png",

        dob: "Not specified",
        age: "Adult",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Not applicable",
        occupation: "Shop Owner",
        family: "Gian and Jaiko",
        friends: "Neighbourhood families",
        personality: "Strict and hardworking",
        firstAppearance: "Doraemon manga",

        description:
            "Gian ki mother strong personality wali hain aur Gian ko discipline mein rakhti hain."
    },

    {
        id: 17,
        name: "Nobita's Future Wife",
        japanese: "源静香",
        category: "movie",
        image: "assets/images/characters/shizuka.png",

        dob: "Future",
        age: "Adult in future",
        gender: "Female",
        live: "Tokyo, Japan",
        school: "Future",
        occupation: "Adult",
        family: "Future Nobi family",
        friends: "Nobita and friends",
        personality: "Kind and caring",
        firstAppearance: "Future stories",

        description:
            "Future timeline mein Nobita aur Shizuka ki family life Doraemon story ka important part hai."
    },

    {
        id: 18,
        name: "Mini-Dora",
        japanese: "ミニドラ",
        category: "robot",
        image: "assets/images/characters/minidora.png",

        dob: "22nd Century",
        age: "Future Robot",
        gender: "Not specified",
        live: "22nd Century",
        school: "Robot world",
        occupation: "Robot assistant",
        family: "Related to Doraemon robots",
        friends: "Doraemon",
        personality: "Cute, energetic and helpful",
        firstAppearance: "Doraemon stories",

        description:
            "Mini-Dora chhote robotic characters hain jo Doraemon universe mein nazar aate hain."
    },

    {
        id: 19,
        name: "Hidetoshi's Father",
        japanese: "出木杉の父",
        category: "family",
        image: "assets/images/characters/dekisugi-father.png",

        dob: "Not specified",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Not applicable",
        occupation: "Professional",
        family: "Dekisugi family",
        friends: "Family",
        personality: "Calm and supportive",
        firstAppearance: "Doraemon stories",

        description:
            "Dekisugi ke family members Doraemon stories mein occasionally appear hote hain."
    },

    {
        id: 20,
        name: "Nobita's Teacher's Wife",
        japanese: "先生の妻",
        category: "minor",
        image: "assets/images/characters/teacher-wife.png",

        dob: "Not specified",
        age: "Adult",
        gender: "Female",
        live: "Japan",
        school: "Not applicable",
        occupation: "Not specified",
        family: "Teacher's family",
        friends: "Not specified",
        personality: "Not specified",
        firstAppearance: "Doraemon stories",

        description:
            "Teacher ke family members kuch Doraemon stories mein appear hote hain."
    },

    {
        id: 21,
        name: "Suneo's Father",
        japanese: "スネ夫の父",
        category: "family",
        image: "assets/images/characters/suneo-father.png",

        dob: "Not specified",
        age: "Adult",
        gender: "Male",
        live: "Tokyo, Japan",
        school: "Not applicable",
        occupation: "Businessman",
        family: "Suneo's family",
        friends: "Business associates",
        personality: "Successful and family-oriented",
        firstAppearance: "Doraemon manga",

        description:
            "Suneo ke father ek successful businessman ke roop mein depict kiye jaate hain."
    },

    {
        id: 22,
        name: "Nobisuke's Father",
        japanese: "のび助の父",
        category: "family",
        image: "assets/images/characters/nobisuke-father.png",

        dob: "Not specified",
        age: "Elder",
        gender: "Male",
        live: "Japan",
        school: "Not applicable",
        occupation: "Retired",
        family: "Nobi family",
        friends: "Family",
        personality: "Traditional and caring",
        firstAppearance: "Doraemon stories",

        description:
            "Nobi family ke older generation ke members kuch stories mein dikhai dete hain."
    }

];


/* =========================================================
   ELEMENTS
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
   CURRENT FILTER
========================================================= */

let currentCategory = "all";


/* =========================================================
   RENDER CHARACTERS
========================================================= */

function renderCharacters() {

    const searchText =
        characterSearch.value
            .toLowerCase()
            .trim();

    const filteredCharacters =
        characters.filter(character => {

            const matchesCategory =
                currentCategory === "all" ||
                character.category === currentCategory;

            const matchesSearch =
                character.name
                    .toLowerCase()
                    .includes(searchText) ||

                character.description
                    .toLowerCase()
                    .includes(searchText) ||

                character.occupation
                    .toLowerCase()
                    .includes(searchText);

            return matchesCategory && matchesSearch;
        });


    characterGrid.innerHTML = "";


    characterCount.textContent =
        filteredCharacters.length;


    if (currentCategory === "all") {

        charactersHeading.textContent =
            "All Characters";

        charactersDescription.textContent =
            "Doraemon ke saare characters ek hi jagah.";

    } else {

        charactersHeading.textContent =
            currentCategory.charAt(0).toUpperCase() +
            currentCategory.slice(1) +
            " Characters";

        charactersDescription.textContent =
            "Selected category ke characters.";
    }


    if (filteredCharacters.length === 0) {

        noCharacters.hidden = false;

        return;

    } else {

        noCharacters.hidden = true;
    }


    filteredCharacters.forEach(character => {

        const card =
            document.createElement("article");

        card.className = "character-card";


        card.innerHTML = `

            <div class="character-image">

                <img
                    src="${character.image}"
                    alt="${character.name}"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=&quot;font-size:70px&quot;>👤</span>';"
                >

            </div>


            <div class="character-info">

                <span class="character-category">
                    ${character.category}
                </span>

                <h3>
                    ${character.name}
                </h3>

                <p>
                    ${character.description}
                </p>

                <div class="view-details">
                    View Full Details →
                </div>

            </div>
        `;


        card.addEventListener("click", () => {

            openCharacterModal(character);

        });


        characterGrid.appendChild(card);

    });

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

const filterButtons =
    document.querySelectorAll(".character-filter");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        renderCharacters();

    });

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
   CREATE MODAL
========================================================= */

const modal =
    document.createElement("div");

modal.className =
    "character-modal";


modal.innerHTML = `

    <div class="character-modal-box">

        <button
            class="modal-close"
            id="modalClose">
            ×
        </button>


        <div class="modal-top">

            <div class="modal-image">

                <img
                    id="modalCharacterImage"
                    src=""
                    alt="Character">

            </div>


            <div class="modal-main-info">

                <span
                    class="modal-category"
                    id="modalCategory">
                </span>


                <h2
                    id="modalCharacterName">
                </h2>


                <div
                    class="japanese-name"
                    id="modalJapaneseName">
                </div>


                <p
                    class="modal-description"
                    id="modalDescription">
                </p>

            </div>

        </div>


        <div class="details-section">

            <h3>
                📋 Character Information
            </h3>


            <div
                class="details-grid"
                id="detailsGrid">
            </div>

        </div>

    </div>

`;


document.body.appendChild(modal);


/* =========================================================
   MODAL ELEMENTS
========================================================= */

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalCharacterImage");

const modalName =
    document.getElementById("modalCharacterName");

const modalJapanese =
    document.getElementById("modalJapaneseName");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const detailsGrid =
    document.getElementById("detailsGrid");


/* =========================================================
   OPEN MODAL
========================================================= */

function openCharacterModal(character) {

    modalImage.src =
        character.image;

    modalImage.alt =
        character.name;


    modalName.textContent =
        character.name;


    modalJapanese.textContent =
        character.japanese;


    modalCategory.textContent =
        character.category;


    modalDescription.textContent =
        character.description;


    detailsGrid.innerHTML = `

        <div class="detail-item">
            <span class="detail-label">🎂 Date of Birth</span>
            <span class="detail-value">
                ${character.dob}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">🎈 Age</span>
            <span class="detail-value">
                ${character.age}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">👤 Gender</span>
            <span class="detail-value">
                ${character.gender}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">🏠 Lives In</span>
            <span class="detail-value">
                ${character.live}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">🏫 School</span>
            <span class="detail-value">
                ${character.school}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">💼 Occupation</span>
            <span class="detail-value">
                ${character.occupation}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">👨‍👩‍👧 Family</span>
            <span class="detail-value">
                ${character.family}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">👥 Friends</span>
            <span class="detail-value">
                ${character.friends}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">⭐ Personality</span>
            <span class="detail-value">
                ${character.personality}
            </span>
        </div>


        <div class="detail-item">
            <span class="detail-label">📺 First Appearance</span>
            <span class="detail-value">
                ${character.firstAppearance}
            </span>
        </div>

    `;


    modal.classList.add("show");


    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeCharacterModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeCharacterModal
);


/* =========================================================
   CLOSE BY BACKGROUND CLICK
========================================================= */

modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeCharacterModal();

    }

});


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeCharacterModal();

        }

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuPanel =
    document.getElementById("mobileMenuPanel");


if (mobileMenu && mobileMenuPanel) {

    mobileMenu.addEventListener(
        "click",
        () => {

            mobileMenuPanel.classList.toggle(
                "show"
            );

        }
    );

}


/* =========================================================
   MOBILE SEARCH
========================================================= */

const mobileSearch =
    document.getElementById("mobileSearch");


if (mobileSearch) {

    mobileSearch.addEventListener(
        "click",
        () => {

            characterSearch.focus();

            window.scrollTo({
                top: 120,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   START
========================================================= */

renderCharacters();