let wordCounter = 0;

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

function span() {
    let word = highlightedWords[wordCounter];
    wordCounter++;
    return "<span class='highlighted'>" + word + "</span>";
}

const homeParagraphs = [
    "I'm a ; with a passion for ;, ; ;, and ; ;. I'm always looking for ways to ; ; and ; ;.",
    "My current goal is to graduate from ; ; and look for a job or internship in ; ; ; ; while I'm doing it. In the distant future, I hope to pursue a career in ; ; as well."
];

let typedParagraphs = document.querySelectorAll('.typedParagraph');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type(typedParagraphs, homeParagraphs) {
    let counter = 0;

    for (paragraph of homeParagraphs) {
        for (letter of paragraph) {
            if (letter == ";") {
                await sleep(10)
                typedParagraphs[counter].innerHTML += span(typedParagraphs[counter]);
            } else {
                typedParagraphs[counter].innerHTML += letter;
            }
            await sleep(12);
        }
        counter++;
        await sleep(250);
    }
}

type(typedParagraphs, homeParagraphs);
