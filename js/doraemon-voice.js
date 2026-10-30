(() => {
    "use strict";

    const root = new URL("../", document.currentScript.src);

    function init() {
        const page = location.pathname.split("/").pop();
        if (page && page !== "index.html") return;

        const oldButton = document.getElementById("doraemonVoiceBtn");
        const button = document.createElement("button");

        button.id = "doraemonVoiceBtn";
        button.type = "button";
        button.setAttribute("aria-label", "Talk to Doraemon");

        const image = document.createElement("img");
        image.src = new URL(
            "assets/images/characters/doraemon.png",
            root
        ).href;
        image.alt = "Doraemon";

        image.onerror = () => {
            image.remove();
            button.textContent = "💙";
        };

        button.append(image);

        button.addEventListener("click", () => {
            location.href = new URL("doraemon-ai.html", root).href;
        });

        if (oldButton) oldButton.replaceWith(button);
        else document.body.append(button);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();