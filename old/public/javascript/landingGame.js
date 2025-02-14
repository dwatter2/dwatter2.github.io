const totalKeys = 30;
const timer = document.getElementById("timer");
let letterboard = document.getElementById("game-letterboard");
let time = 30;
let totalWords = 0;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let newWord = [];
let usedWords = [];
let wordsList = document.getElementById("words-list");
let score = 0;
let highScore = 0;
const totalScore = document.getElementById("score");
const buttonStartGame = document.getElementById("buttonStartGame");
const buttonSubmitWord = document.getElementById("buttonSubmitWord");
const buttonShuffle = document.getElementById("buttonShuffle");
const scoreDisplay = document.getElementById("score-display");
const bestScore = document.getElementById("best-score");
const gameScreen = document.getElementById("landing-game");
const buttonBlur = document.getElementById("game-interested");

//call and start and when shuffling
function setKeys() {
    letterboard.innerHTML = "";
    newWord = [];

    let wordSubmit = document.getElementById("word" + totalWords);
    wordSubmit.innerHTML = "";

    for(let i = 0; i < totalKeys; i++) {
        let key = document.createElement("button");
        key.innerHTML = letters.charAt(Math.floor(Math.random() * 26));
        key.className = "game-letter";
        key.setAttribute("id", "key" + i);
        key.setAttribute("onclick", "addLetter(" + key.id + ")");
        letterboard.appendChild(key);
    }
}

//only used by start timer
function countdown() {
    if(time >= 0) {
        timer.innerHTML = time;
        time -= 1;
    } else {
        endGame();
    }
}

//call on start
function startGame() {
    let cover = document.getElementById("landing-game");
    cover.className = "";
    buttonSubmitWord.hidden = false;
    buttonShuffle.hidden = false;
    buttonStartGame.hidden = true;
    buttonStartGame.setAttribute("onclick", "endGame()");

    scoreDisplay.hidden = true;

    time = 29;
    timerInterval = setInterval(countdown, 1000);
    usedWords = [];

    totalWords = 0;
    createWordSpace();
    setKeys();
}

function endGame() {
    //reset timer
    clearInterval(timerInterval);
    time = 30;
    timer.innerHTML = time;

    //reset buttons
    buttonSubmitWord.hidden = true;
    buttonShuffle.hidden = true;
    buttonStartGame.hidden = false;
    buttonStartGame.setAttribute("onclick", "startGame()");

    //Add newgame to word list
    let wordBreak = document.createElement("p");
    wordBreak.setAttribute("class", "list-word");
    wordBreak.innerHTML = "new game";
    wordsList.prepend(wordBreak);
    
    //create and update best score value
    if(score > highScore) {
        highScore = score;
        bestScore.innerHTML = ("Best: " + highScore);
    }
    //TODO display old score
    if(score == 0) {
        scoreDisplay.innerHTML = ("Uh oh! You scored: " + score + " points<p>...or the server is down :(</p>");
    } else if(score < 1000) {
        scoreDisplay.innerHTML = ("Nice effort! You scored: " + score + " points");
    } else {
        scoreDisplay.innerHTML = ("Great Work! You scored: " + score + " points");
    }
    scoreDisplay.hidden = false;

    //reset old score
    score = 0;
    totalScore.innerHTML = "Score: 0";

    //remove keys
    letterboard.innerHTML = "";
}

function addLetter(value) {
    let thisKey = document.getElementById(value.id);
    if(thisKey.className == "game-letter")
    {
        newWord.push(thisKey.innerHTML);
        thisKey.className = "game-letter-selected";
        let wordSubmit = document.getElementById("word" + totalWords);
        wordSubmit.innerHTML = newWord.join("");
    } else {
        let toRemove = false;
        for(let i = newWord.length; i>=0; i--){
            if(!toRemove) {
                if(newWord[i] == thisKey.innerHTML) {
                    newWord.splice(i, 1);
                    toRemove = true;
                }
            }
        }
        thisKey.className = "game-letter";
        let wordSubmit = document.getElementById("word" + totalWords);
        wordSubmit.innerHTML = newWord.join("");
    }
}

//when user presses submit
function submitWord() {
    if(newWord.length > 0) {
        let wordSubmit = document.getElementById("word" + totalWords);

        //get word
        let word = newWord.join("");

        if(!usedWords.includes(word))
        {
            usedWords.push(word);
            
            for(let i = 0; i < totalKeys; i++) {
                let tempKey = document.getElementById("key" + i);
                if(tempKey.className != "game-letter")
                    tempKey.className = "game-letter";
            }
            newWord = [];

            //2 Test word and update score: ((n^2 + n)/2)*10
            //n = word length

            testWord(word, wordSubmit);

            createWordSpace();
        }
    }
}

//called in start game / submit word
function createWordSpace() {
    totalWords += 1;
    let wordSubmit = document.createElement("p");
    wordSubmit.setAttribute("class", "list-word");
    wordSubmit.setAttribute("id", "word" + totalWords);

    wordsList.prepend(wordSubmit);
}

async function testWord(word, entry) {
    const response = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
    const definition = await (await response).json();

    if (definition.length > 0) {
        entry.className = "list-word correct";
        score += ((((word.length * word.length) + word.length) / 2) * 10);
        totalScore.innerHTML = "Score: " + score;
    } else {
        entry.className = "list-word incorrect";
    }
}

function removeBlur() {
    gameScreen.className = "";
    buttonBlur.hidden = true;
    buttonStartGame.disabled = false;
}