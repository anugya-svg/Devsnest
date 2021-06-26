const clicked=document.querySelectorAll('.memory-card');
let hasflip=true;
let firstcard,secondcard;
let score=0;
function flipcard()
{

}
for (let i of clicked)
{
    i.addEventListener('click',()=>{
        console.log(i);
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
            i.removeEventListener('click',flipcard);
            score++;
            }
            else
            {
               setTimeout(() => {
                   firstcard.classList.remove('flip');
                   secondcard.classList.remove('flip');
               }, 700);
                console.log('no');
            }
        }
        
    });

}