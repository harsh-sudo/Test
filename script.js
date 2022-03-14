var ball = document.querySelector('#ball');
// variables for counting X and Y axis
var countx = 0;
var county = 0;

//variables for switching direction 
var countFlagy = 0;
var countFlagx = 0;

//code for bounce effect using setInterval
var bounce = setInterval(() => {
    //Moving into X axis according to countx(counting X axis) variable
    ball.style.transform = `translateX(${countx}px)`
    if(countFlagx === 0){
        countx++;
    }else{
        countx--;
    }
    //Switching direction after collision to opposite sides
    if(countx === -1){
        countFlagx = 0;
    }
    if(countx === 1385){
        countFlagx = 1;
    }

    //Moving into Y axis according to county(counting Y axis) variable
    ball.style.transform += `translateY(${county}px)`
    if(countFlagy === 0){
        county++;
    }else{
        county--;
    }
    //Switching direction after collision to opposite sides
    if(county === -1){
        countFlagy = 0;
    }
    if(county === 125){
        countFlagy = 1;
    }
}, 1);

const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.querySelector('.game-container')
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
let seconds = 0;
let score = 0;

let selected_insect = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = { src, alt };
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000);
        startGame();
    })
})
function startGame() {
    setInterval(increaseTime, 1000);
}
function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.innerHTML = `<img src = "${selected_insect.src}" alt = "${selected_insect.alt}" style="transform:rotate(${Math.random() * 360}deg)">`
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;

    insect.addEventListener("click", catchInsect)
    game_container.appendChild(insect);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return { x, y };
}
function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000)
    addInsect();
}

function addInsect(){
    setTimeout(createInsect,900);
    setTimeout(createInsect,1700);
}

function increaseTime() {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec
    timeEl.innerHTML = `Time: ${min}:${sec}`;
    seconds++;
}
function increaseScore() {
    score++;
    if (score > 19) {
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score:${score}`
}