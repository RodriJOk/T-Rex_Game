let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver")

//Declarando variables por score
let interval = null;
let playerScore = 0;

//function for score
let scoreCounter = () =>{
    playerScore++;
    score.innerHTML = `Score <b> ${playerScore}</b>`;
}

//start game
window.addEventListener("keydown", (start)=>{
    if(start.code == "Space"){
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimation 1s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 1s linear infinite";
    
        //score 
        let playerScore = 0;
        score.innerHTML = `Score <b> ${playerScore}</b>`;
        interval = setInterval(scoreCounter, 200);
    }
});

//jump Your Character

window.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowUp"){
        if(dino.classList != "dinoActive"){
            dino.classList.add("dinoActive");
            setTimeout(()=>{
                dino.classList.remove("dinoActive");
            } , 500);
        }
    }
});

let result = setInterval(()=>{
    let dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

    if(dinoTop <= 90 && blockLeft >= 20 && blockLeft <= 145){
        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        score.innerHTML = `Score <b> ${playerScore}</b>`;
        clearInterval(interval);
    }
} , 100);