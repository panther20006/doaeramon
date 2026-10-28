
// DORAEMON VOICE ASSISTANT — CLEAN VERSION
window.addEventListener("DOMContentLoaded", () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const synth = window.speechSynthesis;
  const isMusicPage = location.pathname.endsWith("/music.html");
  const pendingKey = "doraemonMusicPending";

  let btn = document.getElementById("doraemonVoiceBtn");

  // Create button on other pages automatically
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "doraemonVoiceBtn";
    btn.type = "button";
    btn.setAttribute("aria-label", "Talk to Doraemon");
    btn.innerHTML = `
      <img src="assets/images/characters/voice.png"
           alt="Doraemon">
    `;
    document.body.appendChild(btn);
  }

  btn.classList.add("doraemon-voice-control");

  const avatar = btn.querySelector("img");
 if (avatar) {
    avatar.addEventListener("error", () => {
        if (!avatar.src.endsWith("/doraemon.png")) {
            avatar.src = "assets/images/characters/doraemon.png";
        } else {
            avatar.hidden = true;
            btn.textContent = "🎙️";
        }
    });
}

  // BUTTON DESIGN AND 3 BORDER COLORS
  const style = document.createElement("style");
  style.id = "doraemonVoiceStyles";

  style.textContent = `
    #doraemonVoiceBtn.doraemon-voice-control {
      position: fixed;
      right: 16px;
      bottom: 96px;
      width: 72px;
      height: 72px;
      padding: 3px;
      display: grid;
      place-items: center;
      border: 4px solid #168bff;
      border-radius: 50%;
      background: white;
      cursor: pointer;
      z-index: 12000;
      box-sizing: border-box;
      box-shadow: 0 0 15px #168bff66;
      transition: border-color .2s, box-shadow .2s;
    }

    #doraemonVoiceBtn.doraemon-voice-control img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
      display: block;
    }

    /* YELLOW — LISTENING */
    #doraemonVoiceBtn.doraemon-voice-control.listening {
      border-color: #ffd400;
      box-shadow: 0 0 12px #ffd400,
                  0 0 25px #ffd40080;
    }

    /* GREEN — SPEAKING */
    #doraemonVoiceBtn.doraemon-voice-control.speaking {
      border-color: #22c55e;
      box-shadow: 0 0 12px #22c55e,
                  0 0 25px #22c55e80;
    }

    #doraemonVoiceStatus {
      position: fixed;
      right: 12px;
      bottom: 176px;
      z-index: 12001;
      max-width: 240px;
      padding: 9px 13px;
      border-radius: 12px;
      background: white;
      color: #07568e;
      font: 13px Arial, sans-serif;
      box-shadow: 0 5px 20px #0002;
      display: none;
    }

    @media (min-width: 701px) {
      #doraemonVoiceBtn.doraemon-voice-control {
        bottom: 20px;
      }
      #doraemonVoiceStatus {
        bottom: 100px;
      }
    }

    body:has(.music-player)
    #doraemonVoiceBtn.doraemon-voice-control {
      bottom: 115px;
    }

    body:has(.music-player) #doraemonVoiceStatus {
      bottom: 195px;
    }

    @media (max-width: 700px) {
      body:has(.music-player)
      #doraemonVoiceBtn.doraemon-voice-control {
        bottom: 205px;
      }

      body:has(.music-player) #doraemonVoiceStatus {
        bottom: 285px;
      }
    }
  `;

  document.head.appendChild(style);

  // STATUS MESSAGE
  const status = document.createElement("div");
  status.id = "doraemonVoiceStatus";
  status.setAttribute("role", "status");
  document.body.appendChild(status);

  const show = text => {
    status.textContent = text;
    status.style.display = text ? "block" : "none";
  };

  // Hindi and English text matching
  const normalize = value =>
    String(value).toLowerCase().normalize("NFKC")
      .replace(/[^\p{L}\p{M}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

  const has = (text, words) =>
    words.some(word => text.includes(normalize(word)));

  // WEBSITE PAGES
  const routes = [
    ["episodes.html",
      ["episode", "episodes", "एपिसोड", "कार्टून"]],

    ["movies.html",
      ["movie", "movies", "मूवी", "फिल्म"]],

    ["wallpapers.html",
      ["wallpaper", "wallpapers", "वॉलपेपर"]],

    ["gallery.html",
      ["gallery", "गैलरी", "फोटो"]],

    ["gadgets.html",
      ["gadget", "gadgets", "गैजेट"]],

    ["test.html",
      ["test", "quiz", "टेस्ट", "क्विज"]],

    ["characters.html",
      ["character", "characters", "कैरेक्टर", "किरदार"]],

    ["motivation.html",
      ["motivation", "मोटिवेशन"]],

    ["music.html",
      ["music", "म्यूजिक", "संगीत", "गाने"]],

    ["index.html",
      ["home", "होम"]]
  ];

  // SONGS FROM YOUR MUSIC.HTML
  const songNames = [
    ["Zindagi Sawar Du",
      ["zindagi", "sawar", "जिंदगी", "ज़िंदगी", "सवार"]],

    ["Aapne Dil Mein Dekho",
      ["apne dil", "aapne dil", "अपने दिल", "आपने दिल"]],

    ["Jeene Ka Sahi Dhang",
      ["jeene", "sahi dhang", "जीने", "सही ढंग"]],

    ["Sabse Pehle Hai Pyaar",
      ["sabse pehle", "pyaar", "सबसे पहले", "प्यार"]],

    ["Doraemon Instrumental",
      ["instrumental", "इंस्ट्रूमेंटल"]],

    ["Doraemon Japanese Song",
      ["japanese", "जापानी"]],

    ["Paani Ki Boond",
      ["paani", "pani", "पानी", "बूंद"]],

    ["har kisi me hai",
      ["har kisi", "हर किसी"]]
  ];

  // EXISTING MUSIC PLAYER CONNECTION
  function musicControl(action) {
    const player = window.doraemonMusicControl;

    if (!player) {
      show("Music player bridge missing. music.html check karo.");
      return;
    }

    if (action.type === "title") {
      player.playTitle(action.title);
    } else if (action.type === "first") {
      player.first();
    } else if (action.type === "pause") {
      player.pause();
    } else if (action.type === "resume") {
      player.resume();
    } else if (action.type === "next") {
      player.next();
    } else if (action.type === "previous") {
      player.previous();
    } else if (action.type === "up") {
      player.volume(0.2);
    } else if (action.type === "down") {
      player.volume(-0.2);
    }
  }

  // Complete song command after opening music.html
  if (isMusicPage) {
    const raw = sessionStorage.getItem(pendingKey);

    if (raw) {
      sessionStorage.removeItem(pendingKey);

      try {
        musicControl(JSON.parse(raw));
      } catch (error) {
        console.warn("Music command error:", error);
      }
    }
  }

  // VOICE STATE
  let mode = "idle";
  let heardResult = false;
  let recognizer = null;
  let speechToken = 0;

  function setMode(next, message = "") {
    mode = next;

    btn.classList.toggle(
      "listening", next === "listening"
    );

    btn.classList.toggle(
      "speaking", next === "speaking"
    );

    btn.setAttribute(
      "aria-pressed", String(next !== "idle")
    );

    show(message);
  }

  // STOP EVERYTHING — BLUE BORDER
  function stopAll(message = "") {
    speechToken++;

    if (recognizer) {
      try {
        recognizer.abort();
      } catch (error) {}
    }

    if (synth) synth.cancel();

    setMode("idle", message);
  }

  // SPEAK — GREEN BORDER
  function speak(text, after = null) {
    const currentToken = ++speechToken;

    if (!synth || !window.SpeechSynthesisUtterance) {
      setMode("idle", "Voice playback supported nahi hai.");
      if (after) after();
      return;
    }

    setMode("speaking", "🟢 Doraemon bol raha hai...");
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "hi-IN";
    utterance.pitch = 1.5;
    utterance.rate = 1.05;
    utterance.volume = 1;

    const voice = synth.getVoices().find(
      v => v.lang.toLowerCase().startsWith("hi")
    );

    if (voice) utterance.voice = voice;

    let completed = false;

    const finish = () => {
      if (completed || currentToken !== speechToken) return;

      completed = true;
      clearTimeout(fallback);

      

      if (after) after();
    };

    // Safety timeout if browser does not fire onend
    const fallback = setTimeout(finish, 12000);

    utterance.onend = finish;
    utterance.onerror = finish;

    synth.speak(utterance);
  }

  // OPEN WEBSITE PAGE
  function openPage(file, message, action = null) {
    const currentFile =
      location.pathname.split("/").pop() || "index.html";

    if (currentFile === file) {
      if (action) {
        speak(message, () => musicControl(action));
      } else {
        speak("यह पेज पहले से खुला है मेरे दोस्त!");
      }
      return;
    }

    speak(message, () => {
      if (action) {
        sessionStorage.setItem(
          pendingKey,
          JSON.stringify(action)
        );
      }

      location.href = file;
    });
  }

  function playAction(action, message = "ठीक है दोस्त!") {
    openPage("music.html", message, action);
  }

  // UNDERSTAND VOICE COMMANDS
  function understand(spoken) {
    const text = normalize(spoken);

    console.log("Doraemon heard:", spoken);

    const foundSong = songNames.find(
      item => has(text, item[1])
    );

    // PLAY SONG BY NAME
    if (foundSong) {
      playAction(
        { type: "title", title: foundSong[0] },
        "यह गाना चलाते हैं!"
      );
      return;
    }

    const musicWords = [
      "music", "म्यूजिक", "song", "सॉन्ग",
      "गाना", "गाने", "gaana", "gana",
      "संगीत", "volume", "वॉल्यूम", "आवाज"
    ];

    const musicContext =
      isMusicPage || has(text, musicWords);

    // MUSIC CONTROLS
    if (musicContext && has(text, ["next", "अगला", "अगली"])) {
      playAction({ type: "next" }, "अगला गाना!");
      return;
    }

    if (musicContext && has(text, ["previous", "पिछला", "पिछली"])) {
      playAction({ type: "previous" }, "पिछला गाना!");
      return;
    }

    if (musicContext && has(text,
      ["pause", "पॉज", "बंद", "रोक", "stop"])) {
      playAction({ type: "pause" }, "गाना रोक रहा हूँ!");
      return;
    }

    if (
      musicContext &&
      has(text, ["volume", "वॉल्यूम", "आवाज"]) &&
      has(text, ["बढ़ाओ", "तेज", "तेज़", "up", "increase"])
    ) {
      playAction({ type: "up" }, "आवाज बढ़ा रहा हूँ!");
      return;
    }

    if (
      musicContext &&
      has(text, ["volume", "वॉल्यूम", "आवाज"]) &&
      has(text, ["कम", "down", "धीमा"])
    ) {
      playAction({ type: "down" }, "आवाज कम कर रहा हूँ!");
      return;
    }

    if (
      musicContext &&
      has(text, ["resume", "चालू", "continue", "फिर से", "play"])
    ) {
      playAction({ type: "resume" }, "गाना चालू करते हैं!");
      return;
    }

    // GENERAL SONG REQUEST
    if (has(text, musicWords)) {
      if (has(text, ["खोल", "open", "दिखाओ"])) {
        openPage("music.html", "म्यूजिक पेज खोल रहा हूँ!");
      } else if (has(text,
        ["ये गाना", "ye song", "ये सॉन्ग", "ye gana"])) {
        speak(
          "कौन सा गाना सुनना है? अगली बार उसका नाम बोलना!"
        );
      } else {
        playAction(
          { type: "first" },
          "डोरेमोन का गाना बजाते हैं!"
        );
      }
      return;
    }

    // PAGE NAVIGATION
    const route = routes.find(
      item => has(text, item[1])
    );

    if (route) {
      openPage(route[0], "पेज खोल रहा हूँ ");
      return;
    }

    // SIMPLE CONVERSATION
    if (has(text, ["कैसे हो", "kaise ho", "how are you"])) {
      speak("मैं बढ़िया हूँ मेरे दोस्त! तुम कैसे हो?");
      return;
    }

    if (has(text, ["hello", "hi", "हेलो", "नमस्ते"])) {
      speak("हेलो मेरे दोस्त! क्या करना है?");
      return;
    }

    if (has(text, ["scroll down", "नीचे जाओ"])) {
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: "smooth"
      });
      speak("नीचे चलो!");
      return;
    }

    if (has(text, ["scroll up", "ऊपर जाओ"])) {
      window.scrollBy({
        top: -window.innerHeight * 0.8,
        behavior: "smooth"
      });
      speak("ऊपर चलो!");
      return;
    }

    speak(
      "माफ करना दोस्त! समझ नहीं आया, एक बार फिर बोलना!"
    );
  }

  // CHECK MICROPHONE SUPPORT
  if (!SpeechRecognition) {
    btn.addEventListener("click", () => {
      show(
        "Voice recognition available nahi. Chrome ya Edge use karo."
      );
    });
    return;
  }

  recognizer = new SpeechRecognition();

  recognizer.lang = "hi-IN";
  recognizer.continuous = false;
  recognizer.interimResults = false;

  // CLICK — YELLOW BORDER + LISTENING
  btn.addEventListener("click", () => {
    if (mode !== "idle") {
      stopAll("💙 Voice assistant band hai.");
      return;
    }

    heardResult = false;

    setMode("listening", "Sun raha hoon, bolo...");

    try {
      recognizer.start();
    } catch (error) {
      console.warn(error);
      setMode("idle", "Mic start nahi hua. Dobara try karo.");
    }
  });

  // PROCESS SPEECH
  recognizer.onresult = event => {
    if (mode !== "listening") return;

    heardResult = true;

    const spoken = event.results[0][0].transcript;

    try {
      recognizer.stop();
    } catch (error) {}

    understand(spoken);
  };

  // NO AUTOMATIC LISTENING LOOP
  recognizer.onend = () => {
    if (mode === "listening" && !heardResult) {
      setMode(
        "idle",
        
      );
    }
  };

  recognizer.onerror = event => {
    if (mode !== "listening") return;

    const message = event.error === "not-allowed"
      ? "Browser mein microphone Allow karo."
      : `Mic error: ${event.error}. Dobara try karo.`;

    setMode("idle", message);
  };
});
