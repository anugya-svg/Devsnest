const btn=document.querySelectorAll('button');
const m=document.querySelector('.memory_game');
for(let i of btn)
{
    i.addEventListener('click',(e)=>{
        const val=e.target.value;
        console.log(val);
        document.querySelector('.btn').style.visibility='hidden';
        for(let i=0;i<val;i++)
        {
            const child=document.createElement('div');
            child.innerText=i;
            m.appendChild(child);
        }
    })
}