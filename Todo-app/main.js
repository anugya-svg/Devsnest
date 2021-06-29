const main=document.querySelector('.container');
const btn=document.querySelector('.btn');
const content=document.querySelector('.write');
const newdiv=document.createElement('div');
main.appendChild(newdiv);
newdiv.classList.add('scroll');
const k=0;
btn.addEventListener('click',()=>{
    let text=content.value;
    if(text!=""){
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
    console.log(span);
    }
})