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
    dlt.dataset.val=1;
    box=document.createElement('i');
    box.dataset.val=2;
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
document.querySelector('.scroll').addEventListener('click',(e)=>{
    console.log(e.target.dataset.val);
    let wtf=e.target.dataset.val;
    if(wtf==="2"){
    e.target.classList.toggle('fa-check-square');
    e.target.classList.toggle('fa-square');
    }
    if(wtf==="1")
    {
        k--;
        if(k<5)
        {
            newdiv.style.height="";
            newdiv.style.overflowY="";
        }
        console.log(e.target.parentNode.parentNode.remove);
        localStorage.removeItem(e.target.parentNode.parentNode.innerText);
        e.target.parentNode.parentNode.remove();
    }

})