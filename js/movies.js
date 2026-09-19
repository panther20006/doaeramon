/* =========================================================
   DORAEMON WORLD
   MOVIES PAGE JAVASCRIPT
   COMPLETE MOVIE SYSTEM
========================================================= */


/* =========================================================
   TELEGRAM BOT
========================================================= */

const TELEGRAM_BOT = "ProSearchM7Bot";


/* =========================================================
   MOVIE DATA
========================================================= */

const movies = [

    {
        id: 1,
        title: "Nobita's Dinosaur",
        year: 1980,
        rating: "8.2",
        image: "assets/images/movies/movie-01.jpg",
        video: "assets/videos/movies/movie-01.mp4",
        description:
            "Nobita discovers a dinosaur egg and raises a young dinosaur named Pisu.",
        genre: "Adventure, Fantasy, Family"
    },

    {
        id: 2,
        title: "The Records of Nobita",
        year: 1981,
        rating: "8.1",
        image: "assets/images/movies/movie-02.jpg",
        video: "assets/videos/movies/movie-02.mp4",
        description:
            "Nobita and Doraemon travel through time and face another exciting adventure filled with gadgets, friendship and fun.",
        genre: "Adventure, Fantasy, Family"
    },

    {
        id: 3,
        title: "Nobita and the Haunts",
        year: 1982,
        rating: "8.0",
        image: "assets/images/movies/movie-03.jpg",
        video: "assets/videos/movies/movie-03.mp4",
        description:
            "Nobita and his friends discover mysterious events and begin an unforgettable adventure with Doraemon.",
        genre: "Adventure, Fantasy"
    },

    {
        id: 4,
        title: "Nobita's Great Adventure",
        year: 1983,
        rating: "8.3",
        image: "assets/images/movies/movie-04.jpg",
        video: "assets/videos/movies/movie-04.mp4",
        description:
            "A great adventure begins when Nobita and his friends enter a mysterious world full of challenges.",
        genre: "Adventure, Fantasy, Family"
    },

    {
        id: 5,
        title: "Nobita's Little Star Wars",
        year: 1985,
        rating: "8.4",
        image: "assets/images/movies/movie-05.jpg",
        video: "assets/videos/movies/movie-05.mp4",
        description:
            "Nobita and his friends help a tiny alien prince and become involved in an exciting intergalactic battle.",
        genre: "Sci-Fi, Adventure, Fantasy"
    },

    {
        id: 6,
        title: "Nobita and the Steel Troops",
        year: 1986,
        rating: "8.5",
        image: "assets/images/movies/movie-06.jpg",
        video: "assets/videos/movies/movie-06.mp4",
        description:
            "Nobita and his friends encounter mysterious robot parts and become involved in a dangerous battle against an army of robots.",
        genre: "Sci-Fi, Adventure"
    },

    {
        id: 7,
        title: "Nobita and the Knights",
        year: 1987,
        rating: "8.4",
        image: "assets/images/movies/movie-07.jpg",
        video: "assets/videos/movies/movie-07.mp4",
        description:
            "Nobita and his friends enter a fantasy world and become part of an exciting medieval adventure.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 8,
        title: "Nobita and the Parallel Journey",
        year: 1988,
        rating: "8.5",
        image: "assets/images/movies/movie-08.jpg",
        video: "assets/videos/movies/movie-08.mp4",
        description:
            "Doraemon and Nobita discover a parallel world and face a powerful enemy threatening both worlds.",
        genre: "Fantasy, Adventure, Sci-Fi"
    },

    {
        id: 9,
        title: "Nobita's Birth of Japan",
        year: 1989,
        rating: "8.6",
        image: "assets/images/movies/movie-09.jpg",
        video: "assets/videos/movies/movie-09.mp4",
        description:
            "Nobita and his friends travel back to prehistoric Japan and become involved in an incredible adventure.",
        genre: "Adventure, Historical, Fantasy"
    },

    {
        id: 10,
        title: "Nobita and the Animal Planet",
        year: 1990,
        rating: "8.5",
        image: "assets/images/movies/movie-10.jpg",
        video: "assets/videos/movies/movie-10.mp4",
        description:
            "Nobita discovers a world inhabited by intelligent animals and helps them fight against a dangerous threat.",
        genre: "Adventure, Fantasy, Sci-Fi"
    },

    {
        id: 11,
        title: "Nobita's Dorabian Nights",
        year: 1991,
        rating: "8.4",
        image: "assets/images/movies/movie-11.jpg",
        video: "assets/videos/movies/movie-11.mp4",
        description:
            "Nobita travels into the world of Arabian Nights and begins a magical adventure with his friends.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 12,
        title: "Nobita and the Kingdom of Clouds",
        year: 1992,
        rating: "8.5",
        image: "assets/images/movies/movie-12.jpg",
        video: "assets/videos/movies/movie-12.mp4",
        description:
            "Nobita creates a kingdom in the clouds, but soon discovers a mysterious civilization with its own plans.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 13,
        title: "Nobita's Tin Labyrinth",
        year: 1993,
        rating: "8.3",
        image: "assets/images/movies/movie-13.jpg",
        video: "assets/videos/movies/movie-13.mp4",
        description:
            "Nobita and his friends enter a mysterious labyrinth and discover a secret connected to robots.",
        genre: "Adventure, Sci-Fi, Mystery"
    },

    {
        id: 14,
        title: "Nobita's Three Visionary Swordsmen",
        year: 1994,
        rating: "8.4",
        image: "assets/images/movies/movie-14.jpg",
        video: "assets/videos/movies/movie-14.mp4",
        description:
            "Nobita dreams of becoming a swordsman and finds himself involved in a fantasy adventure.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 15,
        title: "Nobita's Diary on the Creation of the World",
        year: 1995,
        rating: "8.5",
        image: "assets/images/movies/movie-15.jpg",
        video: "assets/videos/movies/movie-15.mp4",
        description:
            "Nobita and his friends create a miniature world and watch it develop into something much bigger than expected.",
        genre: "Fantasy, Adventure, Sci-Fi"
    },

    {
        id: 16,
        title: "Nobita and the Galaxy Super-express",
        year: 1996,
        rating: "8.6",
        image: "assets/images/movies/movie-16.jpg",
        video: "assets/videos/movies/movie-16.mp4",
        description:
            "Nobita boards a mysterious galaxy train and begins an exciting journey through space.",
        genre: "Sci-Fi, Adventure"
    },

    {
        id: 17,
        title: "Nobita's Adventure in the South Seas",
        year: 1998,
        rating: "8.4",
        image: "assets/images/movies/movie-17.jpg",
        video: "assets/videos/movies/movie-17.mp4",
        description:
            "Nobita and his friends travel to the South Seas and discover a mysterious island.",
        genre: "Adventure, Fantasy"
    },

    {
        id: 18,
        title: "Nobita Drifts in the Universe",
        year: 1999,
        rating: "8.5",
        image: "assets/images/movies/movie-18.jpg",
        video: "assets/videos/movies/movie-18.mp4",
        description:
            "Nobita and his friends are pulled into a dangerous space adventure and must find their way home.",
        genre: "Sci-Fi, Adventure"
    },

    {
        id: 19,
        title: "Nobita's Legend of the Sun King",
        year: 2000,
        rating: "8.6",
        image: "assets/images/movies/movie-19.jpg",
        video: "assets/videos/movies/movie-19.mp4",
        description:
            "Nobita meets a prince who looks exactly like him and becomes involved in a royal adventure.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 20,
        title: "Nobita and the Winged Braves",
        year: 2001,
        rating: "8.5",
        image: "assets/images/movies/movie-20.jpg",
        video: "assets/videos/movies/movie-20.mp4",
        description:
            "Nobita discovers a mysterious bird civilization and joins them in their fight against an enemy.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 21,
        title: "Nobita and the Robot Kingdom",
        year: 2002,
        rating: "8.4",
        image: "assets/images/movies/movie-21.jpg",
        video: "assets/videos/movies/movie-21.mp4",
        description:
            "Nobita and his friends travel to a robot kingdom and become involved in a conflict between humans and robots.",
        genre: "Sci-Fi, Adventure"
    },

    {
        id: 22,
        title: "Nobita and the Windmasters",
        year: 2003,
        rating: "8.5",
        image: "assets/images/movies/movie-22.jpg",
        video: "assets/videos/movies/movie-22.mp4",
        description:
            "Nobita meets people who can control the wind and helps them protect their world.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 23,
        title: "Nobita's Wan-Nyan Space-Time Odyssey",
        year: 2004,
        rating: "8.6",
        image: "assets/images/movies/movie-23.jpg",
        video: "assets/videos/movies/movie-23.mp4",
        description:
            "Nobita travels through space and time and meets a civilization connected to dogs and cats.",
        genre: "Sci-Fi, Adventure, Fantasy"
    },

    {
        id: 24,
        title: "Nobita's Dinosaur 2006",
        year: 2006,
        rating: "8.7",
        image: "assets/images/movies/movie-24.jpg",
        video: "assets/videos/movies/movie-24.mp4",
        description:
            "Nobita discovers a dinosaur egg and raises a dinosaur named Pisuke in this modern remake.",
        genre: "Adventure, Fantasy, Family"
    },

    {
        id: 25,
        title: "Nobita's New Great Adventure",
        year: 2007,
        rating: "8.4",
        image: "assets/images/movies/movie-25.jpg",
        video: "assets/videos/movies/movie-25.mp4",
        description:
            "Nobita and his friends become involved in a magical adventure in a mysterious fantasy world.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 26,
        title: "Nobita and the Green Giant Legend",
        year: 2008,
        rating: "8.3",
        image: "assets/images/movies/movie-26.jpg",
        video: "assets/videos/movies/movie-26.mp4",
        description:
            "Nobita discovers a mysterious plant and becomes involved in an adventure involving a green civilization.",
        genre: "Fantasy, Adventure, Family"
    },

    {
        id: 27,
        title: "The New Record of Nobita",
        year: 2009,
        rating: "8.4",
        image: "assets/images/movies/movie-27.jpg",
        video: "assets/videos/movies/movie-27.mp4",
        description:
            "Nobita and his friends enter a mysterious underwater world filled with adventure and secrets.",
        genre: "Adventure, Fantasy"
    },

    {
        id: 28,
        title: "Nobita's Great Battle of the Mermaid King",
        year: 2010,
        rating: "8.5",
        image: "assets/images/movies/movie-28.jpg",
        video: "assets/videos/movies/movie-28.mp4",
        description:
            "Nobita and his friends explore an underwater kingdom and help a mermaid princess.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 29,
        title: "Nobita and the New Steel Troops",
        year: 2011,
        rating: "8.6",
        image: "assets/images/movies/movie-29.jpg",
        video: "assets/videos/movies/movie-29.mp4",
        description:
            "Nobita and his friends discover powerful robot soldiers and face a dangerous threat.",
        genre: "Sci-Fi, Adventure"
    },

    {
        id: 30,
        title: "Nobita and the Island of Miracles",
        year: 2012,
        rating: "8.3",
        image: "assets/images/movies/movie-30.jpg",
        video: "assets/videos/movies/movie-30.mp4",
        description:
            "Nobita discovers a mysterious island filled with extinct animals and incredible secrets.",
        genre: "Adventure, Fantasy"
    },

    {
        id: 31,
        title: "Nobita's Secret Gadget Museum",
        year: 2013,
        rating: "8.5",
        image: "assets/images/movies/movie-31.jpg",
        video: "assets/videos/movies/movie-31.mp4",
        description:
            "Doraemon's bell is stolen, leading Nobita and his friends to a mysterious gadget museum.",
        genre: "Mystery, Adventure, Sci-Fi"
    },

    {
        id: 32,
        title: "New Nobita's Great Demon",
        year: 2014,
        rating: "8.4",
        image: "assets/images/movies/movie-32.jpg",
        video: "assets/videos/movies/movie-32.mp4",
        description:
            "Nobita and his friends enter a magical world and become involved in a battle against a powerful demon.",
        genre: "Fantasy, Adventure"
    },

    {
        id: 33,
        title: "Stand by Me Doraemon",
        year: 2014,
        rating: "9.0",
        image: "assets/images/movies/movie-33.jpg",
        video: "assets/videos/movies/movie-33.mp4",
        description:
            "A special story about Nobita and Doraemon's friendship, their memories and their journey together.",
        genre: "Drama, Fantasy, Family"
    },

    {
        id: 34,
        title: "Nobita's Space Heroes",
        year: 2015,
        rating: "8.3",
        image: "assets/images/movies/movie-34.jpg",
        video: "assets/videos/movies/movie-34.mp4",
        description:
            "Nobita and his friends become superheroes and embark on a space adventure.",
        genre: "Sci-Fi, Adventure, Superhero"
    },

    {
        id: 35,
        title: "New Nobita's Birth of Japan",
        year: 2016,
        rating: "8.5",
        image: "assets/images/movies/movie-35.jpg",
        video: "assets/videos/movies/movie-35.mp4",
        description:
            "Nobita and his friends travel back to prehistoric Japan and become involved in a mysterious adventure.",
        genre: "Adventure, Fantasy"
    },

    {
        id: 36,
        title: "Great Adventure in the Antarctic",
        year: 2017,
        rating: "8.4",
        image: "assets/images/movies/movie-36.jpg",
        video: "assets/videos/movies/movie-36.mp4",
        description:
            "Nobita and his friends travel to Antarctica and discover a mysterious ancient civilization beneath the ice.",
        genre: "Adventure, Sci-Fi, Fantasy"
    },

    {
        id: 37,
        title: "Nobita's Treasure Island",
        year: 2018,
        rating: "8.6",
        image: "assets/images/movies/movie-37.jpg",
        video: "assets/videos/movies/movie-37.mp4",
        description:
            "Nobita and his friends search for treasure on a mysterious island while facing pirates and unexpected dangers.",
        genre: "Adventure, Fantasy"
    },

    {
        id: 38,
        title: "Nobita's Chronicle of the Moon Exploration",
        year: 2019,
        rating: "8.5",
        image: "assets/images/movies/movie-38.jpg",
        video: "assets/videos/movies/movie-38.mp4",
        description:
            "Nobita discovers a mysterious world on the Moon and becomes involved in a battle to protect it.",
        genre: "Sci-Fi, Adventure, Fantasy"
    },

    {
        id: 39,
        title: "New Nobita's Dinosaur",
        year: 2020,
        rating: "8.7",
        image: "assets/images/movies/movie-39.jpg",
        video: "assets/videos/movies/movie-39.mp4",
        description:
            "Nobita discovers twin dinosaur brothers and begins an exciting journey to help them return to their original time.",
        genre: "Adventure, Fantasy, Family"
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const moviesGrid = document.getElementById("moviesGrid");
const movieDetail = document.getElementById("movieDetail");
const movieSearch = document.getElementById("movieSearch");
const movieYearFilter = document.getElementById("movieYearFilter");
const movieNoResult = document.getElementById("movieNoResult");


/* =========================================================
   GET MOVIE ID FROM URL
========================================================= */

function getMovieIdFromURL() {

    const params = new URLSearchParams(window.location.search);

    const id = parseInt(params.get("movie"));

    return Number.isInteger(id) ? id : null;
}


/* =========================================================
   UPDATE URL
========================================================= */

function updateMovieURL(id) {

    const url = new URL(window.location.href);

    if (id) {
        url.searchParams.set("movie", id);
    } else {
        url.searchParams.delete("movie");
    }

    window.history.pushState(
        { movieId: id },
        "",
        url
    );
}


/* =========================================================
   SHOW MOVIE LIST
========================================================= */

function showMovieList(updateURL = true) {

    if (updateURL) {
        updateMovieURL(null);
    }

    if (movieDetail) {
        movieDetail.innerHTML = "";
        movieDetail.style.display = "none";
    }

    if (moviesGrid) {
        moviesGrid.style.display = "";
    }

    if (movieNoResult) {
        movieNoResult.style.display = "none";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SHOW MOVIE DETAIL
========================================================= */

function showMovieDetail(id, updateURL = true) {

    const movie = movies.find(item => item.id === Number(id));

    if (!movie || !movieDetail) {
        return;
    }

    if (updateURL) {
        updateMovieURL(movie.id);
    }

    if (moviesGrid) {
        moviesGrid.style.display = "none";
    }

    if (movieNoResult) {
        movieNoResult.style.display = "none";
    }

    movieDetail.style.display = "block";

    movieDetail.innerHTML = `

        <div class="movie-detail-wrapper">

            <button
                class="movie-back-btn"
                type="button"
                onclick="showMovieList()"
            >
                ← Back to Movies
            </button>


            <div class="movie-detail-card">


                <!-- MOVIE COVER -->

                <div class="movie-detail-poster">

                    <img
                        class="movie-detail-image"
                        src="${movie.image}"
                        alt="${movie.title}"
                        loading="eager"
                        onerror="this.src='assets/images/movies/movie-01.jpg'"
                    >

                </div>


                <!-- MOVIE INFORMATION -->

                <div class="movie-detail-content">

                    <div class="movie-detail-number">
                        MOVIE ${String(movie.id).padStart(2, "0")}
                    </div>


                    <h1>
                        ${movie.title}
                    </h1>


                    <div class="movie-detail-meta">

                        <span>
                            📅 ${movie.year}
                        </span>

                        <span>
                            ⭐ ${movie.rating}
                        </span>

                        <span>
                            🎬 ${movie.genre}
                        </span>

                    </div>


                    <p class="movie-detail-description">
                        ${movie.description}
                    </p>


                    <!-- WATCH BUTTON -->

                    <button
                        class="movie-watch-btn"
                        type="button"
                        onclick="watchMovie(${movie.id})"
                    >
                        ▶ Watch Movie
                    </button>


                    <button
                        class="movie-close-btn"
                        type="button"
                        onclick="showMovieList()"
                    >
                        ✕ Close
                    </button>

                </div>

            </div>

        </div>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   WATCH MOVIE
   TELEGRAM DIRECT MOVIE QUERY
========================================================= */

function watchMovie(id) {

    const movie = movies.find(item => item.id === Number(id));

    if (!movie) {
        return;
    }


    /*
       Exact movie title
       Example:
       Nobita's Dinosaur
    */

    const searchQuery = movie.title.trim();


    /*
       Telegram bot deep link

       The movie title is encoded safely
       and passed to the bot through /start.
    */

    const telegramURL =
        `https://t.me/${TELEGRAM_BOT}?start=${encodeURIComponent(searchQuery)}`;


    /*
       Open Telegram in a new tab/window
    */

    window.open(
        telegramURL,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   CREATE MOVIE CARDS
========================================================= */

function setupMovieCards() {

    if (!moviesGrid) {
        return;
    }

    const cards = moviesGrid.querySelectorAll(".movie-card");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            const id = parseInt(
                this.dataset.id
            );

            if (Number.isInteger(id)) {

                showMovieDetail(id);

            }

        });

    });

}


/* =========================================================
   FILTER MOVIES
========================================================= */

function filterMovies() {

    if (!moviesGrid) {
        return;
    }

    const searchValue =
        movieSearch
            ? movieSearch.value.trim().toLowerCase()
            : "";

    const yearValue =
        movieYearFilter
            ? movieYearFilter.value
            : "all";


    const cards =
        moviesGrid.querySelectorAll(".movie-card");


    let visibleCount = 0;


    cards.forEach(card => {

        const title =
            (card.dataset.title || card.textContent)
                .toLowerCase();

        const year =
            card.dataset.year || "";


        const matchesSearch =
            title.includes(searchValue);


        const matchesYear =
            yearValue === "all" ||
            year === yearValue;


        if (
            matchesSearch &&
            matchesYear
        ) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    if (movieNoResult) {

        movieNoResult.style.display =
            visibleCount === 0
                ? "block"
                : "none";

    }

}


/* =========================================================
   SEARCH EVENT
========================================================= */

if (movieSearch) {

    movieSearch.addEventListener(
        "input",
        filterMovies
    );

}


/* =========================================================
   YEAR FILTER EVENT
========================================================= */

if (movieYearFilter) {

    movieYearFilter.addEventListener(
        "change",
        filterMovies
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenuPanel =
        document.getElementById("mobileMenuPanel");


    if (
        !mobileMenuBtn ||
        !mobileMenuPanel
    ) {
        return;
    }


    mobileMenuBtn.addEventListener(
        "click",
        function () {

            mobileMenuPanel.classList.toggle("active");

        }
    );


    /*
       Close menu after clicking a link
    */

    const menuLinks =
        mobileMenuPanel.querySelectorAll("a");


    menuLinks.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                mobileMenuPanel.classList.remove("active");

            }
        );

    });

}


/* =========================================================
   MOBILE SEARCH
========================================================= */

function setupMobileSearch() {

    const mobileSearchBtn =
        document.getElementById("mobileSearchBtn");


    if (!mobileSearchBtn) {
        return;
    }


    mobileSearchBtn.addEventListener(
        "click",
        function () {

            if (!movieSearch) {
                return;
            }


            movieSearch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            setTimeout(
                function () {

                    movieSearch.focus();

                },
                500
            );

        }
    );

}


/* =========================================================
   BROWSER BACK / FORWARD
========================================================= */

window.addEventListener(
    "popstate",
    function () {

        const movieId =
            getMovieIdFromURL();


        if (movieId) {

            showMovieDetail(
                movieId,
                false
            );

        } else {

            showMovieList(
                false
            );

        }

    }
);


/* =========================================================
   PAGE INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
           Setup movie cards
        */

        setupMovieCards();


        /*
           Mobile menu
        */

        setupMobileMenu();


        /*
           Mobile search
        */

        setupMobileSearch();


        /*
           Check URL for movie
        */

        const movieId =
            getMovieIdFromURL();


        if (movieId) {

            const movie =
                movies.find(
                    item => item.id === movieId
                );


            if (movie) {

                showMovieDetail(
                    movieId,
                    false
                );

            } else {

                showMovieList(
                    false
                );

            }

        } else {

            showMovieList(
                false
            );

        }

    }
);


/* =========================================================
   GLOBAL FUNCTIONS
   Required for HTML onclick=""
========================================================= */

window.watchMovie =
    watchMovie;

window.showMovieDetail =
    showMovieDetail;

window.showMovieList =
    showMovieList;