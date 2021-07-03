const grid=document.querySelector('.grid');
const potter=document.createElement('div');
let startPoint=150;
let potterleftspace=50;
let potterbottomspace=150;
let isGameOver=false;
let platformCount=5;
let platforms=[];
let upTimerId;
let downTimerId;
let isJumping=true;
let isGoingLeft=false;
let isGoingRight=false;
let leftTimerId;
let rightTimerId;
let score=0;
function createPotter()
{
    grid.appendChild(potter);
    potter.classList.add('potter');
    potterleftspace=platforms[0].left;
    potter.style.left=potterleftspace+'px';
    potter.style.bottom=potterbottomspace+'px';
}
class Platform{
    constructor(newPlatBottom){
        this.bottom=newPlatBottom;
        this.left=Math.random()*315;
        this.visual=document.createElement('div');
        const visual=this.visual;
        visual.classList.add('platform');
        visual.style.left=this.left+'px';
        visual.style.bottom=this.bottom+'px';
        grid.appendChild(visual);
    }
}
function createPlatforms()
{
    for(let i=0;i<platformCount;i++)
    {
        let platformGap=600/platformCount;
        let newPlatBottom=100+i*platformGap;
        let newPlatform=new Platform(newPlatBottom);
        platforms.push(newPlatform);
        console.log(platforms);
    }
}
function movePlatforms()
{
    if(potterbottomspace>200)
    {
        platforms.forEach(platform =>{
            platform.bottom-=4;
            let visual=platform.visual;
            visual.style.bottom=platform.bottom+'px';
            if(platform.bottom<10)
            {
                let firstPlatform=platforms[0].visual;
                firstPlatform.classList.remove('platform');
                platforms.shift();
                score++;
                let newPlatform=new Platform(600);
                platforms.push(newPlatform);
            }
        })
    }
}
function jump()
{   clearInterval(downTimerId)
    isJumping=true;
    upTimerId=setInterval(function (){
        potterbottomspace+=20;
        potter.style.bottom=potterbottomspace+'px';
        if(potterbottomspace>startPoint+200)
        {
            fall ();
        }
    },30)
}
function fall()
{
    clearInterval(upTimerId);
    isJumping=false;
    downTimerId=setInterval(function(){
        potterbottomspace-=5;
        potter.style.bottom=potterbottomspace+'px';
        if(potterbottomspace<=0)
        {
            gameOver();
        }
        platforms.forEach(platform=>{
            if(
                (potterbottomspace>=platform.bottom) && (potterbottomspace<=platform.bottom+15) &&(potterleftspace+60)>=platform.left &&(potterleftspace<=platform.left+85) && (!isJumping))
                {
                    console.log('landed');
                    startPoint=potterbottomspace;
                    jump();
                }
        })
    },30)
}
function gameOver()
{
    console.log("game over !");
    isGameOver=true;
    while(grid.firstElementChild)
    {
        grid.removeChild(grid.firstChild);
    }
    grid.innerHTML=score;
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
}
function control(e)
{
    if(e.key==="ArrowLeft")
    {
        moveLeft();
    }
    else if(e.key==="ArrowRight")
    {
        //move right
        moveRight();
    }
    else if(e.key==="ArrowUp")
    {
        //moveStraight
        moveStraight();
    }
}
function moveRight()
{
    if(isGoingLeft)
    {
        clearInterval(leftTimerId)
        isGoingLeft=false;
    }
    isGoingRight=true;
    rightTimerId=setInterval(function(){
        if(potterleftspace<=340)
        {
            potterleftspace+=5;
            potter.style.left=potterleftspace+'px';

        }
        else{
            moveLeft();
        }
    },30)
}
function moveLeft()
{
    if(isGoingRight)
    {
        clearInterval(rightTimerId);
        isGoingRight=false;
    }
    isGoingLeft=true;
    leftTimerId=setInterval(function(){
        if(potterleftspace>=0)
        {
            potterleftspace-=5;
            potter.style.left=potterleftspace+'px';
        }
        else{
            moveRight();
        }
        
    },30)
}
function moveStraight()
{
    isGoingLeft=false;
    isGoingRight=false;
    clearInterval(rightTimerId);
    clearInterval(leftTimerId);
}
function start()
{
    if(!isGameOver)
    {
        createPlatforms();
        createPotter();
        setInterval(movePlatforms,30);
        jump();
        document.addEventListener('keyup',control);
    }
}
//in future attach this to button
start();