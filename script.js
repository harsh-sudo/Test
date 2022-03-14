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

