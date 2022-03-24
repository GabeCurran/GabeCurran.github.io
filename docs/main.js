let wordCounter = 0;
let pCounter = 0;

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
    "Thaddeus",
    "Stevens",
    "software",
    "or",
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
    "My current goal is to graduate from <span class='highlighted'>Thaddeus Stevens</span> and look for a job or internship in <span class='highlighted'>software or game development</span> while I'm doing it. In the distant future, I hope to pursue a career in <span class='highlighted'>data science</span> as well."
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
    let counter = 0;

    for (paragraph of homeParagraphs) {
        for (letter of paragraph) {
            if (letter == ";") {
                for (l of highlightedWords[wordCounter]) {
                    typedParagraphs[counter].innerHTML += span(l);
                    await sleep(25);
                }
                wordCounter++;
            } else {
                typedParagraphs[counter].innerHTML += letter;
                await sleep(25);
            }
        }
        counter++;
        await sleep(250);
    }
    replaceParagraphs();
};

type(typedParagraphs, homeParagraphs);
