const clicked=document.querySelectorAll('.memory-card');
const text=document.querySelector('h1');
let hasflip=true;
let firstcard,secondcard;
let score=30;
let lockBoard=false;
text.innerText=`Turns Left:${score}`;
function restart()
{
for (let i of clicked)
{   
    i.addEventListener('click',()=>{
        if(lockBoard===false)
        {   
            console.log(i);
            score--;
            text.innerText=`Turns Left:${score}`;
            if(score===-1)
            {
                if(confirm('GameOver ! You have used 30 moves :(')){
                    window.location.reload();  
                }
                
            }
            console.log("fast");
            i.classList.add('flip');
        
            if(hasflip===true)
            {
                firstcard=i;
                hasflip=false;
                
            }
            else if(hasflip===false)
            {
                secondcard=i;
                hasflip=true;
                if(firstcard.dataset.val===secondcard.dataset.val)
                {
                console.log('yes');
                i.removeEventListener('click',()=>{
                    console.log("removed");
                });
                
                }
                else
                {
                    lockBoard=true;
                setTimeout(() => {
                    firstcard.classList.remove('flip');
                    secondcard.classList.remove('flip');
                }, 1000);
                lockBoard=false;
                    console.log('no');
                }
            }
        }
    });

}
}
(function shuffle() {
    clicked.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();
  restart();