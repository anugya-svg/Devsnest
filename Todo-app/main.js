const main=document.querySelector('.container');
const btn=document.querySelector('.btn');
const content=document.querySelector('.write');
const newdiv=document.createElement('div');

main.appendChild(newdiv);
newdiv.classList.add('scroll');
let k=0;
function addElement(text)
{
    k++;
    const task=document.createElement('div');
    task.innerText=text;
    newdiv.appendChild(task);
    task.classList.add('task','outside');
    content.value="";
    span=document.createElement('span');
    check=document.createElement('span');
    dlt=document.createElement('i');
    box=document.createElement('i');
    box.classList.add('far', 'fa-square');
    dlt.classList.add('fas', 'fa-trash-alt');
    check.appendChild(box);
    span.appendChild(dlt);
    task.appendChild(span);
    task.appendChild(check);
    if(k<5)
    {
        newdiv.style.height="";
        newdiv.style.overflowY="";
    }
    if(k>=5)
    {
        newdiv.style.height="300px";
        newdiv.style.overflowY="scroll";
        
    }
    let dltprop=document.querySelectorAll('.fas');
    
    for(let i of dltprop)
    {
        i.addEventListener('click',()=>{
            const toBEdeleted=i.parentNode.parentNode;
            toBEdeleted.style.display='none';
            k--;
            if(k<5)
            {
                newdiv.style.height="";
                newdiv.style.overflowY="";
            }
            localStorage.removeItem(toBEdeleted.innerText);
        })
    } 
    let checker=document.querySelectorAll('.far');
    
    for(let j of checker)
    {   
        j.addEventListener('click',()=>{
            console.log(j.classList.contains('fa-check-square'));
                console.log(j.parentNode.parentNode.innerText);
                j.classList.toggle('fa-check-square');
                j.classList.toggle('fa-square');
                // if(j.classList.contains('color'))
                // {
                //     j.classList.remove('color');
                // }
                // else 
                // {
                //    j.classList.add('color');
                // }
        }) 
    }  
    
    
}
function searchKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode === 13)
    {
        let text=content.value;
        if(text!=""){
        localStorage.setItem(text,k);
        addElement(text);
        }
      
    }
    
}
for(let i=0;i<localStorage.length;i++)
{
    let raw=localStorage.key(i);
    addElement(raw);

}

btn.addEventListener('click',()=>{
    let text=content.value;
    if(text!=""){
    localStorage.setItem(text,k);
    addElement(text);
    }
})
