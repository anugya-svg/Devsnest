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
    const dltprop=document.querySelectorAll('.fas');
    
    for(let i of dltprop)
    {
        i.addEventListener('click',()=>{
            const toBEdeleted=i.parentNode.parentNode;
            toBEdeleted.style.display='none';
            console.log(toBEdeleted);
            k--;
            if(k<5)
            {
                newdiv.style.height="";
                newdiv.style.overflowY="";
            }
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
    let checked=document.querySelectorAll('.far');
    for(let i of checked)
    {   console.log('yo');
        i.addEventListener('click',()=>{
            const tick=i.parentNode.parentNode;
            if(i.classList.contains('fa-square'))
            {
                i.classList.remove('fa-square');
                i.classList.add('fa-check-square');
            }
            else{
                i.classList.add('fa-square');
                i.classList.remove('fa-check-square');
            }
            
        })
    }  
    }
})
let checker=document.querySelectorAll('.far');
for(let i of checker)
    {   console.log('out');
        i.addEventListener('click',()=>{
            const tick=i.parentNode.parentNode;
            if(i.classList.contains('fa-square'))
            {
                i.classList.remove('fa-square');
                i.classList.add('fa-check-square');
            }
            else{
                i.classList.add('fa-square');
                i.classList.remove('fa-check-square');
            }
            
        })
    }  
