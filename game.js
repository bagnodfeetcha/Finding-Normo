const QUESTIONS = [
["1","Anwendungsbereich"],
["2","Normative Verweisungen"],
["3","Begriffe"],
["4","Kontext der Organisation"],
["4.1","Verstehen der Organisation und ihres Kontextes"],
["4.2","Verstehen der Erfordernisse und Erwartungen interessierter Parteien"],
["4.3","Festlegen des Anwendungsbereichs des QMS"],
["4.4","Das QMS und seine Prozesse"],
["5","Führung"],
["5.1","Führung und Verpflichtung"],
["5.1.1","Allgemeines (Führung und Verpflichtung)"],
["5.1.2","Kundenorientierung"],
["5.2","Politik"],
["5.2.1","Festlegung der Qualitätspolitik"],
["5.2.2","Bekanntmachung der Qualitätspolitik"],
["5.3","Rollen, Verantwortlichkeiten und Befugnisse in der Organisation"],
["6","Planung"],
["6.1","Maßnahmen zum Umgang mit Chancen und Risiken"],
["6.2","Qualitätsziele und Planung zu ihrer Erreichung"],
["6.3","Planung von Änderungen"],
["7","Unterstützung"],
["7.1","Ressourcen"],
["7.1.1","Allgemeines (Ressourcen)"],
["7.1.2","Personen"],
["7.1.3","Infrastruktur"],
["7.1.4","Prozessumgebung"],
["7.1.5","Ressourcen zur Überwachung und Messung"],
["7.1.5.1","Allgemeines (Ressourcen zur Überwachung und Messung)"],
["7.1.5.2","Messtechnische Rückführbarkeit"],
["7.1.6","Wissen der Organisation"],
["7.2","Kompetenz"],
["7.3","Bewusstsein"],
["7.4","Kommunikation"],
["7.5","Dokumentierte Information"],
["7.5.1","Allgemeines (Dokumentierte Information)"],
["7.5.2","Erstellen und Aktualisieren (dokumentierter Information)"],
["7.5.3","Lenkung dokumentierter Dokumentation"],
["8","Betrieb"],
["8.1","Betriebliche Planung und Steuerung"],
["8.2","Anforderung  an Produkte und Dienstleistungen"],
["8.2.1","Kommunikation mit dem Kunden"],
["8.2.2","Bestimmen von Anforderungen für Produkte und Dienstleistungen"],
["8.2.3","Überprüfung von Anforderungen an Produkte und Dienstleistungen"],
["8.2.4","Änderungen von Anforderungen an Produkte und Dienstleistungen"],
["8.3","Entwicklung von Produkten und Dienstleistungen"],
["8.3.1","Allgemeines (Entwicklung von Produkten und Dienstleistungen)"],
["8.3.2","Entwicklungsplanung"],
["8.3.3","Entwicklungseingaben"],
["8.3.4","Steuerungsmaßnahmen für die Entwicklung"],
["8.3.5","Entwicklungsergebnisse"],
["8.3.6","Entwicklungsänderungen"],
["8.4","Steuerung von extern bereitgestellten Prozessen, Produkten und Dienstleistungen"],
["8.4.1","Allgemeines (Steuerung von extern bereitgestellten Prozessen, Produkten und Dienstleistungen)"],
["8.4.2","Art und Umfang der Steuerung (von extern bereitgestellten Prozessen, Produkten und Dienstleistungen)"],
["8.4.3","Informationen für externe Anbieter"],
["8.5","Produktion und Dienstleistungserbringung"],
["8.5.1","Steuerung der Produktion und Dienstleistungserbringung"],
["8.5.2","Kennzeichnung und Rückverfolgbarkeit"],
["8.5.3","Eigentum der Kunden oder der externen Anbieter"],
["8.5.4","Erhaltung"],
["8.5.5","Tätigkeiten nach der Lieferung"],
["8.5.6","Überwachung von Änderungen"],
["8.6","Freigabe von Produkten und Dienstleistungen"],
["8.7","Steuerung nichtkonformer Ergebnisse"],
["9","Bewertung der Leistung"],
["9.1","Überwachung, Messung, Analyse und Bewertung"],
["9.1.1","Allgemeines (Überwachung, Messung, Analyse und Bewertung)"],
["9.1.2","Kundenzufriedenheit"],
["9.1.3","Bewertung und Analyse"],
["9.2","Internes Audit"],
["9.3","Managementbewertung"],
["9.3.1","Allgemeines (Managementbewertung)"],
["9.3.2","Eingaben für die Managementbewertung"],
["9.3.3","Ergebnisse der Managementbewertung"],
["10","Verbesserung"],
["10.1","Allgemeines (Verbesserung)"],
["10.2","Nichtkonformität und Korrekturmaßnahmen"],
["10.3","Fortlaufende Verbesserung"]
];
const INFO = `Willkommen im Morast der DIN EN ISO 9001.
Ich bin NORMo, der weise Waller.

Du glaubst, du bist der ISO 9001 auf den Grund gekommen? Weit gefehlt. Unter jedem Kapitel der Norm lauert eine weitere schlammige Schicht aus Unterkapiteln und du sinkst immer tiefer in
den Schlick der Norm und ihrer Unter-Unter-Unterabschnitte...
Damit du in der Prüfung nicht versumpfst, gibt es hier dein 9001-Survival Boot Camp:
Ich werfe dir einen Kapitelnamen zu und du sagst mir, wo im Schlamm der Norm das Kapitel begraben liegt.

Je tiefer du dich durch die Ebenen der Norm wühlen musst, desto mehr Punkte gibt’s für jeden korrekt benannten Unterabschnitt.
Zu schwammig ausgedrückt? Ein Beispiel:
„Messtechnische Rückführbarkeit“ = 7.1.5.2
Ebene 1 (7)       = 1 Punkt
Ebene 2 (7.1)     = 2 Punkte
Ebene 3 (7.1.5)   = 3 Punkte
Ebene 4 (7.1.5.2) = 4 Punkte

Mögliche Punkte bei dieser Frage total: 1 + 2 + 3 + 4 = 10
Du kennst nur einen Teil der Antwort? Kein Problem. Wir üben ja noch. Jede richtige Ebene bringt dir ihre Punkte.
Je tiefer du richtig liegst, desto fetter die Beute.

Du kannst wählen, ob du eine kurze Runde (10 Fragen) spielen willst oder open end im „Ewigen Schlamm“. In diesem Fall endet die Runde, wann immer DU sie beendest.

Unter "reaDINg" findest du das komplette Inhaltsverzeichnis der ISO 9001. Also dein Trainingszettel "to go".

Viel Spaß im Normensumpf und viel Erfolg auf deinem Weg zur TÜV-Prüfung.
Du packst das!


*********
Idee und Umsetzung: JAS
Mein räudiger Code wurde an mehreren Stellen korrigiert und brauchbar gemacht mit Hilfe von: ChatGPT
Die Hintergrundbilder wurden optimiert mit: ChatGPT
Quellengabe & credits: Inhalt (Kapitelnummern und -namen) basierend auf "Inhaltsverzeichnis DIN EN ISO 9001-2015" von B.G.

*********
`;

const panel = document.getElementById("panel");
const dlg = document.getElementById("info");
const tocDlg = document.getElementById("toc");

const infoText = document.getElementById("infoText");
const [infoHeading, ...infoBody] = INFO.split("\n");
const infoTitle = document.createElement("h1");
infoTitle.textContent = infoHeading;
infoText.before(infoTitle);
infoText.textContent = infoBody.join("\n");
document.getElementById("closeInfo").onclick = () => dlg.close();
document.getElementById("closeToc").onclick = () => tocDlg.close();

function renderToc() {
    const tocText = document.getElementById("tocText");
    tocText.className = "toc-text";
    tocText.innerHTML = "";

    QUESTIONS.forEach(([number, name]) => {
        const level = number.split(".").length;
        const line = document.createElement("div");
        line.className = `toc-line toc-level-${level}`;
        line.textContent = `${number} ${level === 1 ? name.toUpperCase() : name}`;
        tocText.appendChild(line);
    });
}

renderToc();
let mode = null;
let maxQuestions = null;
let pool = [];
let answered = 0;
let correct = 0;
let score = 0;
let maxScore = 0;
let current = null;
let waiting = false;

function shuffled() {
    return [...QUESTIONS].sort(() => Math.random() - 0.5);
}

function btn(text, action) {
    const b = document.createElement("button");
    b.textContent = text;
    b.onclick = action;
    return b;
}

function startScreen() {
    document.body.classList.remove("abschlussbildschirm");
    current = null;
    waiting = false;
    panel.className = "screen";
    panel.innerHTML =
        '<h1 class="title">Was willst du machen?</h1>' +
        '<div class="buttons" id="buttons"></div>';

    const buttons = document.getElementById("buttons");

    buttons.append(
        btn("10 Fragen", () => start("10")),
        btn("Endloser Schlamm", () => start("infinite")),
        btn("reaDINg", () => tocDlg.showModal()),
        (() => { const b = btn("Info", () => dlg.showModal()); b.className = "info-button"; return b; })()
    );
}
function start(selectedMode) {
    mode = selectedMode;
    maxQuestions =
        selectedMode === "10" ? 10 :
        null;

    pool = shuffled();
    answered = 0;
    correct = 0;
    score = 0;
    maxScore = 0;
    waiting = false;

    next();
}

function next() {
    if (maxQuestions !== null && answered >= maxQuestions) {
        results();
        return;
    }

    if (pool.length === 0) {
        pool = shuffled();
    }
    current = pool.pop();
    waiting = false;
    drawQuestion();
}

function status() {
    if (mode === "infinite") {
        return `Modus: Unendlich   |   Beantwortet: ${answered}   |   Punkte: ${score}/${maxScore}`;
    }

    return `Modus: ${maxQuestions} Fragen   |   Frage: ${Math.min(answered + 1, maxQuestions)}/${maxQuestions}   |   Punkte: ${score}/${maxScore}`;
}

function drawQuestion() {
    panel.className = "screen";
    panel.innerHTML = `
        <div class="status">${status()}</div>
        <div class="prompt">Welches Kapitel gehört zu diesem Kapitelnamen?</div>
        <div class="question">${current[1]}</div>
        <div class="answer-row">
            <input class="answer" id="answer" inputmode="text" enterkeyhint="done" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
            <div id="mobileActionSlot"></div>
        </div>
        <div class="feedback" id="feedback"></div>
        <div class="buttons" id="gameButtons"></div>
    `;
    const input = document.getElementById("answer");
    const mobileAction = btn("OK", () => {
        if (waiting) {
            next();
        } else {
            check(input.value);
        }
    });
    mobileAction.className = "mobile-action";
    mobileAction.id = "mobileAction";

    document.getElementById("mobileActionSlot").append(mobileAction);

    const endButton = btn("Beenden", results);
    endButton.className = "game-end-button";
    document.getElementById("gameButtons").append(endButton);
    input.focus();
    input.addEventListener("keydown", handleEnter);
}

function handleEnter(event) {
    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();

    if (waiting) {
        next();
        return;
    }

    check(event.currentTarget.value);
}

function check(answer) {
    if (!answer.trim()) {
        return;
    }

    const correctAnswer = current[0];
    const correctParts = correctAnswer.split(".").filter(Boolean);
    const answerParts = answer.trim().split(".").filter(Boolean);

    const points = [1, 2, 3, 4];

    const possiblePoints = points
        .slice(0, correctParts.length)
        .reduce((sum, value) => sum + value, 0);

    let earnedPoints = 0;
    correctParts.forEach((part, index) => {
        if (
            index < answerParts.length &&
            answerParts[index] === part
        ) {
            earnedPoints += points[index];
        }
    });

    answered++;
    score += earnedPoints;
    maxScore += possiblePoints;

    if (earnedPoints === possiblePoints) {
        correct++;
    }

    waiting = true;
    const feedback = document.getElementById("feedback");
    const input = document.getElementById("answer");
    const mobileAction = document.getElementById("mobileAction");

    if (earnedPoints === possiblePoints) {
        feedback.textContent =
            `OK   |   ${earnedPoints}/${possiblePoints} Punkte   |   ENTER für die nächste Frage`;
        feedback.className = "feedback ok";
    } else {
        feedback.textContent =
            `${earnedPoints}/${possiblePoints} Punkte   |   Richtige Antwort: ${correctAnswer}\nENTER für die nächste Frage`;

        feedback.className = "feedback wrong";
    }

    document.querySelector(".status").textContent = status();

    if (mobileAction) {
        mobileAction.textContent = "Weiter";
    }

    input.readOnly = true;
    input.focus();
}
function results() {
    waiting = false;
    current = null;

    const text =
        answered === 0
            ? "Noch keine Frage beantwortet."
            : `Fragen richtig: ${correct} von ${answered} (${(correct / answered * 100).toFixed(1)} %)
Punkte: ${score} von ${maxScore} (${maxScore ? (score / maxScore * 100).toFixed(1) : "0.0"} %)`;

    document.body.classList.add("abschlussbildschirm");
    panel.className = "screen result-screen";
    panel.innerHTML = `
        <button class="result-close" id="resultClose" aria-label="Schließen">×</button>
        <div class="result-content">
            <h1 class="title">Auswertung</h1>
            <div class="results">${text}</div>
        </div>
    `;

    document.getElementById("resultClose").onclick = () => {
        document.body.classList.remove("abschlussbildschirm");
        startScreen();
    };
}

startScreen();
