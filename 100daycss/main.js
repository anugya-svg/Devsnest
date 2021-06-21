const center=document.querySelector(".center");

for(let i=0;i<400;i++)
{
    const item=document.createElement("div");
    item.addEventListener('click',()=>{
        const check=item.style.backgroundColor;
        if(check ==="white")
        item.style.backgroundColor="cadetblue";
        else
        {
            item.style.backgroundColor="white";
        }
    });
    center.appendChild(item);
}