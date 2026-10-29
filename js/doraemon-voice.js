/* Doraemon World — Gemini Text and Voice Chat */

(() => {
    "use strict";

    // Paste your Cloudflare Worker URL here.
    const API_URL = "https://doraemon-ai.hackerblackpanther2000.workers.dev";

    const scriptRoot = new URL("../", document.currentScript.src);

    function init() {
        const page = location.pathname.split("/").pop();

        if (page && page !== "index.html") return;
        if (document.getElementById("dw-ai-panel")) return;

        const synth = window.speechSynthesis;
        const Recognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        let history = [];
        let busy = false;
        let listening = false;
        let recognition = null;
        let requestController = null;
        let speechVersion = 0;
        let lastReply = "";

        document.getElementById("doraemonVoiceStyles")?.remove();
        document.getElementById("doraemonVoiceStatus")?.remove();

        const previousButton = document.getElementById("doraemonVoiceBtn");
        const button = document.createElement("button");

        button.id = "doraemonVoiceBtn";
        button.type = "button";
        button.setAttribute("aria-label", "Open Doraemon Buddy");
        button.setAttribute("aria-controls", "dw-ai-panel");
        button.setAttribute("aria-expanded", "false");

        const avatar = document.createElement("img");
        avatar.src = new URL(
            "assets/images/characters/doraemon.png",
            scriptRoot
        ).href;
        avatar.alt = "";

        avatar.onerror = () => {
            avatar.remove();
            button.textContent = "🤖";
        };

        button.append(avatar);

        if (previousButton) {
            previousButton.replaceWith(button);
        } else {
            document.body.append(button);
        }

        const style = document.createElement("style");

        style.textContent = `
            #doraemonVoiceBtn {
                position:fixed!important;
                right:18px!important;
                bottom:24px!important;
                width:66px!important;
                height:66px!important;
                padding:5px!important;
                display:grid!important;
                place-items:center;
                border:3px solid #0b9ce8!important;
                border-radius:50%!important;
                background:white!important;
                box-shadow:0 8px 28px #087dcc55;
                cursor:pointer;
                z-index:22000!important;
                font-size:30px;
                animation:dw-ai-float 3s ease-in-out infinite;
            }

            #doraemonVoiceBtn img {
                width:100%;
                height:100%;
                object-fit:contain;
                border-radius:50%;
            }

            #doraemonVoiceBtn[aria-expanded="true"] {
                animation:none;
            }

            @keyframes dw-ai-float {
                0%,100% {transform:translateY(0)}
                50% {transform:translateY(-7px)}
            }

            #dw-ai-panel,
            #dw-ai-panel * {
                box-sizing:border-box;
            }

            #dw-ai-panel[hidden] {
                display:none!important;
            }

            #dw-ai-panel {
                position:fixed;
                right:18px;
                bottom:102px;
                z-index:22001;
                width:min(380px,calc(100vw - 24px));
                height:530px;
                max-height:calc(100dvh - 125px);
                display:flex;
                flex-direction:column;
                overflow:hidden;
                background:#f4faff;
                border:1px solid #b6dfff;
                border-radius:22px;
                box-shadow:0 18px 65px #06486c40;
                color:#123b59;
                font:14px/1.5 Arial,sans-serif;
                text-align:left;
            }

            #dw-ai-panel button,
            #dw-ai-panel input,
            #dw-ai-panel select {
                font:inherit;
            }

            #dw-ai-panel button {
                cursor:pointer;
            }

            #dw-ai-panel button:disabled {
                opacity:.5;
                cursor:not-allowed;
            }

            #dw-ai-panel .dw-ai-header {
                padding:14px;
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:10px;
                background:#087dcc;
                color:white;
            }

            #dw-ai-panel .dw-ai-header strong {
                display:block;
                font-size:17px;
            }

            #dw-ai-panel .dw-ai-header small {
                font-size:11px;
            }

            #dw-ai-panel .dw-ai-header button {
                border:0;
                border-radius:9px;
                padding:7px 10px;
                background:#ffffff25;
                color:white;
            }

            #dw-ai-panel .dw-ai-tools {
                display:flex;
                align-items:center;
                flex-wrap:wrap;
                gap:8px;
                padding:10px;
                border-bottom:1px solid #d5e8f6;
            }

            #dw-ai-panel .dw-ai-tools button,
            #dw-ai-panel select {
                padding:5px 7px;
                border:1px solid #bcdcf3;
                border-radius:8px;
                background:white;
                color:#124f79;
            }

            #dw-ai-panel label {
                display:flex;
                align-items:center;
                gap:4px;
                font-size:12px;
            }

            #dw-ai-panel input[type="checkbox"] {
                width:auto;
                margin:0;
            }

            #dw-ai-log {
                flex:1;
                min-height:0;
                overflow-y:auto;
                padding:14px;
                display:flex;
                flex-direction:column;
                gap:11px;
                overscroll-behavior:contain;
            }

            #dw-ai-log .dw-ai-message {
                max-width:90%;
                padding:10px 12px;
                border-radius:14px;
                background:white;
                border:1px solid #d8eaf7;
                white-space:pre-wrap;
                overflow-wrap:anywhere;
                flex-shrink:0;
            }

            #dw-ai-log .dw-ai-user {
                align-self:flex-end;
                background:#087dcc;
                color:white;
                border-color:#087dcc;
            }

            #dw-ai-status {
                min-height:25px;
                margin:0;
                padding:3px 12px;
                color:#53728a;
                font-size:12px;
            }

            #dw-ai-form {
                display:flex;
                gap:7px;
                padding:10px;
                margin:0;
                background:white;
                border-top:1px solid #d5e8f6;
            }

            #dw-ai-input {
                flex:1;
                min-width:0;
                width:0;
                padding:11px;
                border:1px solid #bcdcf3;
                border-radius:11px;
                background:#f5faff;
                color:#123b59;
            }

            #dw-ai-form button {
                padding:8px 11px;
                border:0;
                border-radius:11px;
                background:#087dcc;
                color:white;
            }

            #dw-ai-mic[aria-pressed="true"] {
                background:#d34242;
            }

            #dw-ai-panel :focus-visible {
                outline:3px solid #ffcb38;
                outline-offset:2px;
            }

            @media(max-width:700px) {
                #doraemonVoiceBtn {
                    right:15px!important;
                    bottom:calc(95px + env(safe-area-inset-bottom))!important;
                    width:58px!important;
                    height:58px!important;
                }

                #dw-ai-panel {
                    right:12px;
                    bottom:calc(164px + env(safe-area-inset-bottom));
                    max-height:calc(100dvh - 180px);
                }
            }

            @media(prefers-reduced-motion:reduce) {
                #doraemonVoiceBtn {animation:none}
            }
        `;

        document.head.append(style);

        const panel = document.createElement("section");
        panel.id = "dw-ai-panel";
        panel.hidden = true;
        panel.setAttribute("aria-label", "Doraemon Buddy chat");

        panel.innerHTML = `
            <div class="dw-ai-header">
                <div>
                    <strong>💙 Doraemon Buddy</strong>
                    <small>Fan AI • Gemini • Browser voice</small>
                </div>
                <button id="dw-ai-close" type="button"
                        aria-label="Close chat">✕</button>
            </div>

            <div class="dw-ai-tools">
                <select id="dw-ai-language" aria-label="Voice language">
                    <option value="hi-IN">Hindi</option>
                    <option value="en-IN">English</option>
                    <option value="gu-IN">Gujarati</option>
                </select>

                <label>
                    <input id="dw-ai-voice" type="checkbox" checked>
                    Voice
                </label>

                <button id="dw-ai-replay" type="button">🔊 Replay</button>
                <button id="dw-ai-stop" type="button">Stop</button>
                <button id="dw-ai-clear" type="button">Clear</button>
            </div>

            <div id="dw-ai-log" role="log"
                 aria-label="Chat messages" aria-live="polite"></div>

            <p id="dw-ai-status" role="status"></p>

            <form id="dw-ai-form">
                <input id="dw-ai-input"
                       type="text"
                       maxlength="1500"
                       placeholder="Kuch bhi poochho..."
                       aria-label="Your message"
                       autocomplete="off">

                <button id="dw-ai-mic" type="button"
                        aria-label="Start microphone"
                        aria-pressed="false">🎤</button>

                <button id="dw-ai-send" type="submit"
                        aria-label="Send message">➤</button>
            </form>
        `;

        document.body.append(panel);

        const get = id => document.getElementById(id);
        const log = get("dw-ai-log");
        const status = get("dw-ai-status");
        const input = get("dw-ai-input");
        const mic = get("dw-ai-mic");
        const send = get("dw-ai-send");
        const language = get("dw-ai-language");
        const voiceEnabled = get("dw-ai-voice");

        function addMessage(text, role = "model") {
            const message = document.createElement("div");
            message.className = "dw-ai-message";

            if (role === "user") {
                message.classList.add("dw-ai-user");
            }

            // Never insert AI replies as HTML.
            message.textContent = text;
            log.append(message);
            log.scrollTop = log.scrollHeight;
        }

        function stopSpeech() {
            speechVersion++;
            if (synth) synth.cancel();
        }

        function stopMic() {
            const current = recognition;
            recognition = null;
            listening = false;
            mic.setAttribute("aria-pressed", "false");

            if (current) {
                try {
                    current.abort();
                } catch {}
            }
        }

        function speak(text) {
            stopSpeech();

            if (!voiceEnabled.checked) return;

            if (!synth || !window.SpeechSynthesisUtterance) {
                status.textContent = "Is browser mein voice playback available nahi.";
                return;
            }

            const version = speechVersion;
            const utterance = new SpeechSynthesisUtterance(text);

            utterance.lang = language.value;
            utterance.rate = 1;
            utterance.pitch = 1.25;
            utterance.volume = 1;

            const prefix = language.value.split("-")[0];
            const voice = synth.getVoices().find(item =>
                item.lang.toLowerCase().startsWith(prefix)
            );

            if (voice) utterance.voice = voice;

            status.textContent = "🔊 Jawab suno...";

            utterance.onend = () => {
                if (version === speechVersion) {
                    status.textContent = "";
                }
            };

            utterance.onerror = () => {
                if (version === speechVersion) {
                    status.textContent = "Voice nahi chali. Replay dabao.";
                }
            };

            synth.speak(utterance);
        }

        function setBusy(value) {
            busy = value;
            send.disabled = value;
            mic.disabled = value || !Recognition;
            get("dw-ai-clear").disabled = value;
        }

        function closeChat() {
            panel.hidden = true;
            button.setAttribute("aria-expanded", "false");
            stopMic();
            stopSpeech();
            requestController?.abort();
            button.focus();
        }

        button.addEventListener("click", () => {
            if (!panel.hidden) {
                closeChat();
                return;
            }

            panel.hidden = false;
            button.setAttribute("aria-expanded", "true");
            status.textContent = "";

            // Avoid forcing the phone keyboard open.
            if (window.matchMedia("(pointer:fine)").matches) {
                input.focus();
            }
        });

        get("dw-ai-close").addEventListener("click", closeChat);

        panel.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                event.stopPropagation();
                closeChat();
            }
        });

        async function submitMessage(event) {
            event.preventDefault();

            const message = input.value.trim();
            if (!message || busy) return;

            if (API_URL.includes("YOUR-WORKER")) {
                status.textContent = "Pehle code mein Worker URL daalo.";
                return;
            }

            stopMic();
            stopSpeech();
            setBusy(true);
            status.textContent = "💭 Jawab aa raha hai...";
            addMessage(message, "user");
            input.value = "";

            const controller = new AbortController();
            requestController = controller;

            let timedOut = false;

            const timer = setTimeout(() => {
                timedOut = true;
                controller.abort();
            }, 30000);

            try {
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    signal: controller.signal,
                    body: JSON.stringify({
                        message,
                        history: history.slice(-10)
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Reply nahi mila.");
                }

                if (typeof data.reply !== "string" || !data.reply.trim()) {
                    throw new Error("Khali reply mila. Dobara try karo.");
                }

                history.push(
                    { role: "user", text: message },
                    { role: "model", text: data.reply }
                );

                history = history.slice(-10);
                lastReply = data.reply;
                addMessage(data.reply);
                status.textContent = "";

                if (!panel.hidden) speak(data.reply);

            } catch (error) {
                const messageText = error.name === "AbortError"
                    ? timedOut
                        ? "Reply mein zyada time laga. Dobara bhejo."
                        : "Request cancel hui."
                    : error.message || "Connection problem. Dobara try karo.";

                addMessage(messageText);
                status.textContent = messageText;

                // Preserve the failed question for retry.
                if (!input.value) input.value = message;

            } finally {
                clearTimeout(timer);
                requestController = null;
                setBusy(false);
            }
        }

        get("dw-ai-form").addEventListener("submit", submitMessage);

        mic.disabled = !Recognition;

        mic.addEventListener("click", () => {
            if (busy || !Recognition) return;

            if (listening) {
                stopMic();
                status.textContent = "";
                return;
            }

            stopSpeech();

            const current = new Recognition();
            recognition = current;

            current.lang = language.value;
            current.continuous = false;
            current.interimResults = false;

            current.onresult = event => {
                if (recognition !== current) return;

                input.value = event.results[0][0].transcript.slice(0, 1500);
                status.textContent = "Text check karke ➤ dabao.";
            };

            current.onerror = event => {
                if (recognition !== current) return;

                status.textContent = event.error === "not-allowed"
                    ? "Browser mein microphone permission Allow karo."
                    : "Awaaz nahi mili. Dobara try karo ya type karo.";
            };

            current.onend = () => {
                if (recognition !== current) return;

                recognition = null;
                listening = false;
                mic.setAttribute("aria-pressed", "false");

                if (status.textContent === "🎤 Sun raha hoon...") {
                    status.textContent = "Dobara mic dabao ya type karo.";
                }
            };

            try {
                listening = true;
                mic.setAttribute("aria-pressed", "true");
                status.textContent = "🎤 Sun raha hoon...";
                current.start();
            } catch {
                stopMic();
                status.textContent = "Mic start nahi hua. Dobara try karo.";
            }
        });

        get("dw-ai-stop").addEventListener("click", () => {
            stopMic();
            stopSpeech();
            requestController?.abort();
            status.textContent = "Stopped.";
        });

        get("dw-ai-replay").addEventListener("click", () => {
            if (lastReply && !busy) speak(lastReply);
        });

        voiceEnabled.addEventListener("change", () => {
            if (!voiceEnabled.checked) {
                stopSpeech();
                status.textContent = "";
            }
        });

        language.addEventListener("change", () => {
            stopMic();
            stopSpeech();
            status.textContent = "";
        });

        get("dw-ai-clear").addEventListener("click", () => {
            if (busy) return;

            stopMic();
            stopSpeech();
            history = [];
            lastReply = "";
            log.replaceChildren();
            input.value = "";
            status.textContent = "";
            welcome();
        });

        function welcome() {
            addMessage(
                "हेलो दोस्त! 💙 मैं Doraemon Buddy हूँ। " +
                "अपना सवाल लिखो या माइक दबाकर बोलो।"
            );
        }

        window.addEventListener("pagehide", () => {
            stopMic();
            stopSpeech();
            requestController?.abort();
        });

        welcome();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();