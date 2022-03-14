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