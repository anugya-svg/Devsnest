const ques=["Which of the following is not JavaScript Data Types?","Which company developed JavaScript?","Inside which HTML element do we put the JavaScript?","Why so JavaScript and Java have similar name?","What is the original name of JavaScript?"]
const ans ={
    0:["Undefined","Number"," Boolean","Float"],
    1:["Netscape"," Bell Labs","Sun Microsystems","IBM"],
    2:["<script>","<head>","<meta>","<style>"],
    3:["JavaScript is a stripped-down version of Java","JavaScript's syntax is loosely based on Java's","They both originated on the island of Java","None of the above"],
    4:["LiveScript","EScript","Mocha","JavaScript"]
}
const correct=[3,0,0,1,2];
const main=document.querySelector('.container');
const question=document.querySelector('.ques');
const answer=document.querySelector('.ans');
let score=0;
let indx=0;
let len=ques.length;
let marks=document.querySelector('.score');
marks.innerText=`SCORE :${score}`;
function newques()
{   console.log("index" +indx);
    console.log("answer" +correct[indx]);
    if(indx===len)
    {
        setTimeout(()=>{
            location.href="end.html";
        },1000)
        
    }
    marks.innerText=`SCORE :${score}`;
    let hascheck=true;
    
    question.innerText=ques[indx];

    for(let i=0;i<4;i++)
    {
        if(indx===0)
        {
            const p=document.createElement('div');
            answer.appendChild(p);
            p.classList.add('mark');
            const r=ans[indx];
            p.setAttribute('data-val',i);
            p.innerText=r[i];
        }
        else
        {
            const idea=document.querySelectorAll('.mark');
            const r=ans[indx];
            let k=0;
            for(let j of idea)
            {   j.classList.remove('right','wrong');
                j.innerText=r[k];
                k++;
            }
        }
        
    }
    const wtf=document.querySelectorAll('.mark');

    for(let i of wtf)
    {
        i.addEventListener('click',()=>{
            if(!hascheck)return ;
           
            hascheck=false;
            const tester=correct[indx];
            indx++;
            const check=parseInt(i.dataset.val);
            if(check===tester)
            {
                score++;
                console.log("correct");
                i.classList.add('right');
                
                setTimeout(()=>{
                    newques();
                },1500)
                
                
            }
            else
            {
                
                i.classList.add('wrong');
                
                setTimeout(()=>{
                    const real=document.querySelectorAll('.mark')[tester];
                    console.log(real);
                    real.classList.add('right');
                    setTimeout(()=>{
                        newques();
                    },1500)
                },600);
            }   
        })
    }
    
}
(function getNewQues()
{
    indx=0;
    newques();
})();