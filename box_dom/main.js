const box=document.querySelector(".container");
const lone=document.querySelector('.left');
const av=document.querySelector('.total');
let total=100;
let clicked=0;
for(let i=0;i<100;i++)
{
    const item=document.createElement('div');
    box.appendChild(item);
    item.classList.add('anu');
    item.addEventListener('click',()=>{
        console.log(item.classList.contains('clicked'));
        if(item.classList.contains('clicked'))
        {
            item.classList.remove('clicked');
            
            clicked--;
            total++;
            lone.value=clicked;
            av.value=total;
        }
        else{
            item.classList.add('clicked');
            clicked++;
            total--;
            lone.value=clicked;
            av.value=total;
        }
    });
}