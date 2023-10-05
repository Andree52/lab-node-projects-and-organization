const words = require("./words.json");



function allWords() {
    console.log(words)
}
allWords()

function firstTenWords() {
    const wordHolder = [];
    for (let H = 0; H < 10; H++) {
        wordHolder.push(words[H])
    }
    console.log(wordHolder);
}
firstTenWords()

function nextTenWords() {
    const twoHolder = [];
    for (let H = 10; H < 20; H++) {
        twoHolder.push(words[H]);
    }
    console.log(twoHolder);
}
nextTenWords()

function firstXWords(x) {

    console.log(words.slice(0, x));
}
firstXWords(30)

function subsetofwords(x, y) {
    console.log(words.slice(x, y));
}
subsetofwords(40, 50)

function sortWords() {
    console.log(words.sort());
}
sortWords()

function wordsWithQ() {
    let Qmoney = []
    for (const word of words) {
        if (word.includes("q")) {
            Qmoney.push(word)
        }
    }
    console.log(Qmoney);
}
wordsWithQ()

console.log(process.argv);
const Letter = process.argv[2]
const halfwords = words.slice(0,5)
function findWordsWithLetter(){
    let Qmoney = []
    for (const word of halfwords) {
        if (word.includes(Letter)) {
            Qmoney.push(word)
        }
    }
    console.log(Qmoney);
}
findWordsWithLetter()