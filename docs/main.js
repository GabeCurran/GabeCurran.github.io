
const homeParagraphs = [
    "I'm a student with a passion for computers, web design, and video games. I'm always looking for ways to learn more and better myself.",
    "My current goal is to graduate from Thaddeus Stevens and look for a job or internship in software or game development while I'm doing it. In the distant future, I hope to pursue a career in data science as well."
];

const paragraphHTML = [
    "I'm a <span class='highlighted'>student</span> with a passion for <span class='highlighted'>computers</span>, <span class='highlighted'>web design</span>, and <span class='highlighted'>video games</span>. I'm always looking for ways to <span class='highlighted'>learn more</span> and <span class='highlighted'>better myself</span>.","My current goal is to graduate from <span class='highlighted'>Thaddeus Stevens</span> and look for a job or internship in <span class='highlighted'>software or game development</span> while I'm doing it. In the distant future, I hope to pursue a career in <span class='highlighted'>data science</span> as well."
]

let typedParagraphs = document.querySelectorAll('.typedParagraph');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type(typedParagraphs, homeParagraphs) {
    let counter = 0;

    for (paragraph of homeParagraphs) {
        for (letter of paragraph) {
            typedParagraphs[counter].innerHTML += letter;
            await sleep(15);
        }
        counter++;
    }

    replaceParagraphs(typedParagraphs, homeParagraphs);
}

function replaceParagraphs() {
    for (let paragraph = 0; paragraph < paragraphHTML.length; paragraph++) {
        typedParagraphs[paragraph].innerHTML = paragraphHTML[paragraph];
    }
};

type(typedParagraphs, homeParagraphs);
