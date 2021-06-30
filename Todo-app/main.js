const main=document.querySelector('.container');
const btn=document.querySelector('.btn');
const content=document.querySelector('.write');
const newdiv=document.createElement('div');
main.appendChild(newdiv);
newdiv.classList.add('scroll');
let k=0;
list=[];
function addElement(text)
{
    k++;
    const task=document.createElement('div');
    task.innerText=text;
    newdiv.appendChild(task);
    task.classList.add('task','outside');
    content.value="";
    span=document.createElement('span');
    dlt=document.createElement('i');
    dlt.classList.add('fas', 'fa-trash-alt');
    span.appendChild(dlt);
    task.appendChild(span);
    span.classList.add('img');
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
    const dltprop=document.querySelectorAll('.fas');
    for(let i of dltprop)
    {
        i.addEventListener('click',()=>{
            const toBEdeleted=i.parentNode.parentNode;
            toBEdeleted.style.display='none';
            console.log(toBEdeleted);
            k--;
            localStorage.removeItem(toBEdeleted.innerText);
        })
    }       
}
for(let i=0;i<localStorage.length;i++)
{
    let raw=localStorage.key(i);
    // let text=localStorage.getItem(raw);
    addElement(raw);

}

btn.addEventListener('click',()=>{
    let text=content.value;
    if(text!=""){
    localStorage.setItem(text,k);
    addElement(text);
    }
})

