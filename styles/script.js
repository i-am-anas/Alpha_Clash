function continueGame() {
    const previousAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    removeBackgroundColorById(previousAlphabet);

    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    console.log(alphabet);
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('homeScreen');
    showElementById('play-ground');
    continueGame();
}

function startAgain() {
    hideElementById('scorePage');
    showElementById('homeScreen');
    
    ans = 0;
    life = 5;

    document.getElementById('score').innerText = ans;
    document.getElementById('life').innerText = life;

    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    removeBackgroundColorById(currentAlphabet.toLowerCase());
}


let ans = 0;
let life = 5;
document.addEventListener('keyup', function (key) {
    const playerPressed = key.key.toLowerCase();

    const currentAlphabet = document.getElementById('current-alphabet');

    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();

    console.log(playerPressed, expectedAlphabet);



    if (playerPressed === expectedAlphabet) {
        ans++;
        const scores = document.getElementById('score');
        scores.innerText = ans;

        removeBackgroundColorById(expectedAlphabet.toLowerCase());

        continueGame();

    }
    else {
        life--;
        const lifes = document.getElementById('life');
        lifes.innerText = life;

        if (life === 0) {
            hideElementById('play-ground');
            showElementById('scorePage');

            const finalScore = document.getElementById('finalScore');
            finalScore.innerText = ans;
        }
    }
});
