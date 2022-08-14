let wordCounter = 0;
let pCounter = 0;
let letterDelay = 25;
let paragraphDelay = 250;
let scrollCounter = 0;

// If user scrolls down, type faster
window.addEventListener('scroll', (scrollEvent) => {
    if (window.scrollY > 200) {
        letterDelay = 3;
        paragraphDelay = 25;
    }
});

let originalParagraphs = document.querySelectorAll(".originalParagraph");

const highlightedWords = [
    "student",
    "computers",
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
    "software",
    " / ",
    "game",
    "development",
    "data",
    "science"
];

function span(letter) {
    return "<span class='highlighted'>" + letter + "</span>";
};

const homeParagraphs = [
    "I'm a ; with a passion for ;, ; ;, and ; ;. I'm always looking for ways to ; ; and ; ;.",
    "My current goal is to graduate from ; ; and look for a job or internship in ; ; ; ; while I'm doing it. In the distant future, I hope to pursue a career in ; ; as well."
];

const builtParagraphs = [
    "I'm a <span class='highlighted'>student</span> with a passion for <span class='highlighted'>computers</span>, <span class='highlighted'>web design</span>, and <span class='highlighted'>video games</span>. I'm always looking for ways to <span class='highlighted'>learn more</span> and <span class='highlighted'>better myself</span>.",
    "My current goal is to graduate from <span class='highlighted'><a href='https://drexel.com/' class='college' target='_blank'>Drexel University</a></span> and look for a job or internship in <span class='highlighted'>software / game development</span> while I'm doing it. In the distant future, I hope to pursue a career in <span class='highlighted'>data science</span> as well."
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
                    p.innerHTML = "My current goal is to graduate from <span class='highlighted'><a href='https://drexel.com/' class='college' target='_blank'>Drexel University</a></span>";
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
};

type(typedParagraphs, homeParagraphs);
