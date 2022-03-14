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

var arr =[
    {image:"https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",name: "akarsh", intro :"i am a nice guy and i am here to prove my self",disc: "fww ge hr tb ar tn an rwba df erg e ethrqhrq f da ba rgnw ryj "},
    {image:"https://images.unsplash.com/photo-1647083237594-958754cb1cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",name: "sarthak", intro :"i am sarthak sharma of sheriyians and i will also proove my worth",disc: "dwefw g hrthyjtu ji utik 67rk ej THEFBDF V A"},
    {image:"https://images.unsplash.com/photo-1647199300497-2608b934a4f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",name: "vibhu", intro :"i am vibhu and i am gonna do all i can to be goo",disc: "adffvvet bfgntkyri7k hshdafeafge aeffgr "},
    {image:"https://images.unsplash.com/photo-1647168585205-e56ebb24a669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",name: "harsh", intro :"i am harsh and all i see is only and hardwork ",disc: "th trh rh tye5y jtey ety  "}
]
var clutter = "";

arr.forEach(function(val){
    clutter += `    
    <div id="cards">
        <div id="card">
            <div id="img">
                <img src="${val.image}" alt="">
            </div>
            <h1 id="name">${val.name}</h1>
            <h3 id="intro">${val.intro}</h3>
            <h5 id="disc">${val.disc}</h5>
            
        </div>
    </div>
`
})

document.querySelector("#cards").innerHTML = clutter

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

