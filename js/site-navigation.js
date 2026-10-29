/* Doraemon World — Shared Navigation */

(() => {
    "use strict";

    const siteRoot = new URL("../", document.currentScript.src);
    const siteURL = path => new URL(path, siteRoot).href;

    const pages = [
        ["index.html", "Home", "🏠"],
        ["movies.html", "Movies", "🎬"],
        ["episodes.html", "Episodes", "📺"],
        ["characters.html", "Characters", "👥"],
        ["wallpapers.html", "Wallpapers", "🖼️"],
        ["music.html", "Music", "🎵"],
        ["gallery.html", "Gallery", "📸"],
        ["gadgets.html", "Gadgets", "🪄"],
        ["test.html", "Test", "📝"],
        ["motivation.html", "Motivation", "💙"],
        ["secret-login.html", "Secret Message", "💌"]
    ];

    function init() {
        if (document.getElementById("dw-site-header")) return;

        document.querySelectorAll(
            "header.topbar, header.mobile-header, " +
            "header.gallery-header, .mobile-menu-panel, " +
            ".mobile-bottom-nav, #dw-search"
        ).forEach(element => element.remove());

        const current =
            window.location.pathname.split("/").pop() || "index.html";

        const active = /^episode-\d+\.html$/.test(current)
            ? "episodes.html"
            : current;

        function link([url, title, icon], bottom = false) {
            const selected =
                url === active ? ' aria-current="page"' : "";

            const content = bottom
                ? `<span>${icon}</span><small>${title}</small>`
                : `${icon} ${title}`;

            return `<a href="${siteURL(url)}"${selected}>${content}</a>`;
        }

        // Header
        const header = document.createElement("header");
        header.id = "dw-site-header";
        header.className = "dw-ui";

        header.innerHTML = `
            <button
                type="button"
                id="dw-menu-button"
                aria-label="Open menu"
                aria-controls="dw-site-menu"
                aria-expanded="false">
                ☰
            </button>

            <a class="dw-brand" href="${siteURL("index.html")}">
                DORAEMON <span>🌐</span>
            </a>

            <nav class="dw-desktop-links" aria-label="Main navigation">
                ${pages.slice(0, 9).map(page => link(page)).join("")}
            </nav>

            <button
                type="button"
                id="dw-search-button"
                aria-label="Search Doraemon World"
                aria-controls="dw-site-search"
                aria-expanded="false">
                🔍
            </button>
        `;

        document.body.prepend(header);

        // Mobile menu
        const menu = document.createElement("nav");
        menu.id = "dw-site-menu";
        menu.className = "dw-ui";
        menu.hidden = true;
        menu.setAttribute("aria-label", "All sections");
        menu.innerHTML = pages.map(page => link(page)).join("");

        // Bottom navigation
        const bottomPages = [
            "index.html",
            "movies.html",
            "episodes.html",
            "characters.html",
            "music.html"
        ];

        const bottom = document.createElement("nav");
        bottom.id = "dw-site-bottom";
        bottom.className = "dw-ui";
        bottom.setAttribute("aria-label", "Mobile navigation");

        bottom.innerHTML = pages
            .filter(page => bottomPages.includes(page[0]))
            .map(page => link(page, true))
            .join("");

        // Search panel
        const search = document.createElement("section");
        search.id = "dw-site-search";
        search.className = "dw-ui";
        search.hidden = true;
        search.setAttribute("aria-label", "Site search");

        search.innerHTML = `
            <form role="search">
                <input
                    type="search"
                    aria-label="Search Doraemon World"
                    placeholder="Search Doraemon World..."
                    autocomplete="off">

                <button type="button" aria-label="Close search">
                    ✕
                </button>
            </form>

            <div class="dw-results"></div>
            <p role="status"></p>
        `;

        document.body.append(menu, bottom, search);
        document.body.classList.add("dw-navigation-ready");

        const menuButton = header.querySelector("#dw-menu-button");
        const searchButton = header.querySelector("#dw-search-button");
        const input = search.querySelector("input");
        const results = search.querySelector(".dw-results");
        const status = search.querySelector("p");
        const closeButton = search.querySelector("button");
        const form = search.querySelector("form");

        function closeMenu() {
            menu.hidden = true;
            menuButton.setAttribute("aria-expanded", "false");
        }

        function closeSearch() {
            search.hidden = true;
            searchButton.setAttribute("aria-expanded", "false");
        }

        menuButton.addEventListener("click", () => {
            const open = menu.hidden;

            closeSearch();
            menu.hidden = !open;
            menuButton.setAttribute("aria-expanded", String(open));
        });

        // Search data
        const items = pages.map(([url, title, icon]) => ({
            url,
            title,
            icon
        }));

        let indexed = false;
        let indexLoading = false;
        let indexFailed = false;

        const normalize = value => value.toLowerCase().trim();

        function render() {
            const words = normalize(input.value)
                .split(/\s+/)
                .filter(Boolean);

            const matches = items.filter(item =>
                words.every(word =>
                    normalize(item.title).includes(word)
                )
            );

            // Keep aliases searchable but show each destination once.
            const seenURLs = new Set();

            const uniqueMatches = matches.filter(item => {
                const url = siteURL(item.url);

                if (seenURLs.has(url)) return false;

                seenURLs.add(url);
                return true;
            });

            const displayed = uniqueMatches.slice(0, 15);

            results.replaceChildren();

            for (const item of displayed) {
                const anchor = document.createElement("a");
                anchor.href = siteURL(item.url);
                anchor.textContent = `${item.icon} ${item.title}`;
                results.append(anchor);
            }

            if (uniqueMatches.length > displayed.length) {
                status.textContent =
                    `Showing ${displayed.length} of ` +
                    `${uniqueMatches.length} results. Refine your search.`;
            } else if (displayed.length) {
                status.textContent =
                    `${displayed.length} result` +
                    (displayed.length === 1 ? "" : "s");
            } else {
                status.textContent = "No result found.";
            }

            if (indexLoading) {
                status.textContent += " Loading full search...";
            } else if (indexFailed) {
                status.textContent +=
                    " Full search load nahi hui. Retry ke liye search dobara kholo.";
            }
        }

        async function loadSearchIndex() {
            if (indexed || indexLoading) return;

            indexLoading = true;
            indexFailed = false;
            render();

            try {
                const response = await fetch(
                    siteURL("js/site-search-index.json")
                );

                if (!response.ok) {
                    throw new Error("Search index could not load");
                }

                const extra = await response.json();

                if (!Array.isArray(extra)) {
                    throw new Error("Invalid search index");
                }

                const seen = new Set(
                    items.map(item =>
                        siteURL(item.url) + "|" + normalize(item.title)
                    )
                );

                const additions = [];

                for (const item of extra) {
                    if (
                        !item ||
                        typeof item.title !== "string" ||
                        typeof item.url !== "string" ||
                        !item.title.trim() ||
                        !item.url.trim()
                    ) {
                        continue;
                    }

                    let url;

                    try {
                        url = new URL(item.url, siteRoot);
                    } catch {
                        continue;
                    }

                    // Search results must stay within this website.
                    if (
                        url.origin !== siteRoot.origin ||
                        !url.pathname.startsWith(siteRoot.pathname)
                    ) {
                        continue;
                    }

                    const key =
                        url.href + "|" + normalize(item.title);

                    if (seen.has(key)) continue;

                    seen.add(key);

                    additions.push({
                        title: item.title.trim(),
                        url: url.href,
                        icon: typeof item.icon === "string"
                            ? item.icon
                            : "🔎"
                    });
                }

                items.push(...additions);
                indexed = true;

            } catch {
                indexed = false;
                indexFailed = true;

            } finally {
                indexLoading = false;
                render();
            }
        }

        searchButton.addEventListener("click", () => {
            const open = search.hidden;

            closeMenu();
            search.hidden = !open;
            searchButton.setAttribute("aria-expanded", String(open));

            if (open) {
                render();
                input.focus();
                loadSearchIndex();
            }
        });

        closeButton.addEventListener("click", () => {
            closeSearch();
            searchButton.focus();
        });

        input.addEventListener("input", render);

        form.addEventListener("submit", event => {
            event.preventDefault();

            if (!input.value.trim()) return;

            const first = results.querySelector("a");

            if (first) {
                window.location.href = first.href;
            }
        });

        menu.addEventListener("click", event => {
            if (
                event.target instanceof Element &&
                event.target.closest("a")
            ) {
                closeMenu();
            }
        });

        // Close panels when clicking outside.
        document.addEventListener("click", event => {
            if (
                !menu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }

            if (
                !search.contains(event.target) &&
                !searchButton.contains(event.target)
            ) {
                closeSearch();
            }
        });

        // Escape closes the active panel.
        document.addEventListener("keydown", event => {
            if (event.key !== "Escape") return;

            if (!menu.hidden) {
                closeMenu();
                menuButton.focus();
            }

            if (!search.hidden) {
                closeSearch();
                searchButton.focus();
            }
        });

        // Mobile keyboard changes height, so only react to width.
        let lastWidth = window.innerWidth;

        window.addEventListener("resize", () => {
            const currentWidth = window.innerWidth;

            if (currentWidth !== lastWidth) {
                closeMenu();
                closeSearch();
                lastWidth = currentWidth;
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, {
            once: true
        });
    } else {
        init();
    }
})();