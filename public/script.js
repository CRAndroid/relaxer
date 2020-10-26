var button = document.getElementById('button');
var background = document.getElementById('background');
var repetitionDOM = document.getElementById('repetition');
var ball = document.querySelector('span');
var classes = ['breathe-in', 'hold', 'breathe-out'];
var index = 0;
var repetition = 0;
button.addEventListener('click', function (e) {
    e.target.style.display = 'none';
    background.classList.add(classes[index]);
    repetition++;
    repetitionDOM.textContent = "" + repetition;
    ball.className = 'ball ball-b-in';
});
background.addEventListener('animationend', function (e) {
    var lastIndex = classes.length - 1;
    ball.className = '';
    if (index === lastIndex && repetition === 10)
        return (background.className = '');
    if (index === lastIndex) {
        repetition++;
        repetitionDOM.textContent = "" + repetition;
        ball.className = 'ball ball-b-in';
    }
    else if (index === 1) {
        ball.className = 'ball ball-b-out';
    }
    else {
        ball.className = 'ball ball-hold';
    }
    index === lastIndex ? (index = 0) : index++;
    background.className = "" + classes[index];
});
