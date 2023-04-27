let wordCounter = 0;
let pCounter = 0;
let letterDelay = 25;
let paragraphDelay = 250;
let scrollCounter = 0;

// If user scrolls down, type faster
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        letterDelay = 5;
        paragraphDelay = 25;
    }
});

// If user presses arrow down, type faster
window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowDown') {
        letterDelay = 1;
        paragraphDelay = 1;
    }
})

function moveCover() {
    let cover = document.querySelector('#cover');
    cover.style.transform = 'translateX(+100%)';
    cover.style.transition = 'transform 1.75s ease-in-out';
    sleep(1750).then(() => {
        cover.remove();
    });
}

let originalParagraphs = document.querySelectorAll(".originalParagraph");

const highlightedWords = [
    "student",
    "computers",
    "software",
    "web",
    "design",
    "video",
    "games",
    "learn",
    "more",
    "better",
    "myself",
    "Drexel",
    "University",
    "Worlds",
    "data",
    "science",
    "/",
    "game",
    "development"
];

function span(letter) {
    return "<span class='highlighted'>" + letter + "</span>";
};

const homeParagraphs = [
    "I'm a ; with a passion for ;, ;, ; ;, and ; ;. I'm always looking for ways to ; ; and ; ;.",
    "My current goal is to graduate from ; ; and continue my work at ; while I'm doing it. In the distant future, I hope to pursue a career in ; ; ; ; ; as well."
];

const builtParagraphs = [
    "I'm a <span class='highlighted'>student</span> with a passion for <span class='highlighted'>computers</span>, <span class='highlighted'>software</span>, <span class='highlighted'>web design</span>, and <span class='highlighted'>video games</span>. I'm always looking for ways to <span class='highlighted'>learn more</span> and <span class='highlighted'>better myself</span>.",
    "My current goal is to graduate from <span class='highlighted'><a href='https://drexel.com/' class='college drexel' target='_blank'>Drexel University</a></span> and continue my work at <span class='highlighted'><a href='https://www.worlds.org/' class='worlds' target='_blank'>Worlds</a></span> while I'm doing it. In the distant future, I hope to pursue a career in <span class='highlighted'>data science / game development</span> as well."
];

let typedParagraphs = document.querySelectorAll('.typedParagraph');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function replaceParagraphs() {
    for (paragraph of typedParagraphs) {
        paragraph.innerHTML = builtParagraphs[pCounter];
        pCounter++;
    }
};

async function type(typedParagraphs, homeParagraphs) {
    // In case JavaScript is disabled
    for (paragraph of originalParagraphs) {
        paragraph.remove();
    }

    let counter = 0;
    // Print each paragraph
    for (paragraph of homeParagraphs) {
        // Print each letter in selected paragraph
        for (letter of paragraph) {
            // If letter is a semicolon, it indicates a highlighted word
            if (letter == ";") {
                // Print highlighted word
                for (l of highlightedWords[wordCounter]) {
                    typedParagraphs[counter].innerHTML += span(l);
                    await sleep(letterDelay);
                }
                // Add link to Drexel University
                if (highlightedWords[wordCounter] == 'University') {
                    let p = document.querySelector('#secondP');
                    p.innerHTML = "My current goal is to graduate from <span class='highlighted'><a href='https://www.drexel.com/' class='college drexel' target='_blank'>Drexel University</a></span>";
                }
                // Add link to Worlds
                if (highlightedWords[wordCounter] == 'Worlds') {
                    let p = document.querySelector('#secondP');
                    p.innerHTML = "My current goal is to graduate from <span class='highlighted'><a href='https://drexel.com/' class='college drexel' target='_blank'>Drexel University</a></span> and continue my work at <span class='highlighted'><a href='https://www.worlds.org/' class='worlds' target='_blank'>Worlds</a></span>";
                }
                wordCounter++;
            } else {
                // Add current letter
                typedParagraphs[counter].innerHTML += letter;
                await sleep(letterDelay);
            }
        }
        counter++;
        await sleep(paragraphDelay);
    }
    replaceParagraphs();
    sleep(1500);
    moveCover();
};

type(typedParagraphs, homeParagraphs);
