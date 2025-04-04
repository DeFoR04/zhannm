document.getElementById('showLetter').addEventListener('click', function() {
    const letter = document.getElementById('letter');
    letter.style.opacity = 1;
    this.style.display = 'none';
});

function generateHearts() {
    const heartContainer = document.querySelector('.falling-hearts');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartContainer.appendChild(heart);
    }
}

function checkAnswer() {
    const answer = document.getElementById('quizAnswer').value.trim().toLowerCase();
    const result = document.getElementById('quizResult');

    if (answer === "24 января") {
        result.textContent = "Правильно! Это был день, когда всё началось!";
        result.style.color = "green";
    } else {
        result.textContent = "Попробуй ещё раз!";
        result.style.color = "red";
    }
}

function showSurprise() {
    document.getElementById('surpriseText').style.display = 'block';
}

window.onload = generateHearts;