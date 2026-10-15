
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("doraemonVoiceBtn");

    if (!button) return;

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    const speaker = window.speechSynthesis;

    if (!SpeechRecognition || !speaker) {
        button.addEventListener("click", () => {
            alert("Voice chat is not supported in this browser. Try Chrome.");
        });
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    let active = false;
    let listening = false;
    let speaking = false;
    let processing = false;
    let restartTimer = null;

    function updateButton(mode = "idle") {
        button.classList.toggle(
            "listening",
            mode === "listening"
        );

        button.classList.toggle(
            "speaking",
            mode === "speaking"
        );

        button.setAttribute("aria-pressed", String(active));

        button.title =
            mode === "listening" ? "Doraemon is listening..." :
            mode === "speaking" ? "Doraemon is speaking..." :
            "Talk to Doraemon";
    }

    function getHindiVoice() {
        const voices = speaker.getVoices();

        return (
            voices.find(v => v.lang.toLowerCase() === "hi-in") ||
            voices.find(v => v.lang.toLowerCase().startsWith("hi")) ||
            voices.find(v => v.lang.toLowerCase() === "en-in") ||
            null
        );
    }

    function startListening() {
        if (!active || listening || speaking || processing) return;

        listening = true;
        updateButton("listening");

        try {
            recognition.start();
        } catch (error) {
            listening = false;
            updateButton();
            console.warn("Microphone:", error);
        }
    }

    function speak(text) {
        if (!active) return;

        speaking = true;
        processing = false;
        listening = false;

        updateButton("speaking");

        const message = new SpeechSynthesisUtterance(text);

        message.lang = "hi-IN";
        message.pitch = 1.5;
        message.rate = 1.08;
        message.volume = 1;

        const voice = getHindiVoice();
        if (voice) message.voice = voice;

        message.onend = () => {
            speaking = false;
            updateButton();

            if (active) {
                restartTimer = setTimeout(startListening, 600);
            }
        };

        message.onerror = () => {
            speaking = false;
            updateButton();

            if (active) {
                restartTimer = setTimeout(startListening, 600);
            }
        };

        speaker.cancel();
        speaker.speak(message);
    }

    function getReply(text) {
        const t = text.toLowerCase();

        if (/कैसे हो|कैसे हैं|kaise|how are/.test(t)) {
            return "मैं एकदम बढ़िया हूँ मेरे दोस्त! तुम कैसे हो?";
        }

        if (/हेलो|hello|नमस्ते|hi\b/.test(t)) {
            return "हेलो मेरे प्यारे दोस्त! मैं डोरेमोन हूँ!";
        }

        if (/नाम|name|कौन हो|who are/.test(t)) {
            return "मेरा नाम डोरेमोन है! मैं भविष्य से आया हूँ!";
        }

        if (/नोबिता|nobita/.test(t)) {
            return "नोबिता मेरा सबसे अच्छा दोस्त है! लेकिन वो बहुत आलसी है!";
        }

        if (/गैजेट|gadget/.test(t)) {
            return "मेरी चार आयामी जेब में बहुत सारे मजेदार गैजेट हैं!";
        }

        if (/मजाक|जोक|joke|चुटकुला/.test(t)) {
            return "हा हा! नोबिता ने कहा, मैं आज से पढ़ाई करूंगा! फिर वो सो गया!";
        }

        if (/डोरेमोन|doraemon/.test(t)) {
            return "हाँ मेरे दोस्त! मैं यहीं हूँ! बोलो!";
        }

        if (/शुक्रिया|धन्यवाद|thank/.test(t)) {
            return "अरे दोस्त! इसमें धन्यवाद की क्या बात है!";
        }

        if (/बाय|bye|अलविदा/.test(t)) {
            return "बाय बाय मेरे दोस्त! जल्दी फिर मिलेंगे!";
        }

        return "वाह! ये तो मजेदार बात है! मुझे थोड़ा और बताओ मेरे दोस्त!";
    }

    function stopConversation() {
        active = false;
        listening = false;
        speaking = false;
        processing = false;

        clearTimeout(restartTimer);

        try {
            recognition.abort();
        } catch (error) {
            console.warn(error);
        }

        speaker.cancel();
        updateButton();
    }

    button.addEventListener("click", () => {
        if (active) {
            stopConversation();
            return;
        }

        active = true;

        speak(
            "नमस्ते दोस्त! मैं डोरेमोन हूँ! बताओ, क्या बात करें?"
        );
    });

    recognition.onresult = (event) => {
        if (!active) return;

        const text = event.results[0][0].transcript;

        console.log("You said:", text);

        processing = true;
        listening = false;

        speak(getReply(text));
    };

    recognition.onend = () => {
        listening = false;

        if (active && !speaking && !processing) {
            clearTimeout(restartTimer);
            restartTimer = setTimeout(startListening, 700);
        }
    };

    recognition.onerror = (event) => {
        listening = false;

        if (
            event.error === "not-allowed" ||
            event.error === "service-not-allowed"
        ) {
            stopConversation();
            alert("Please allow microphone permission.");
        } else if (
            event.error === "audio-capture" ||
            event.error === "network"
        ) {
            stopConversation();
            alert("Microphone or speech recognition failed. Please try again.");
        }
    };
});
