let btn=document.querySelectorAll('button');
let head=document.querySelector('h3');
let display=document.querySelector('h2');
let val='';
let check;
for(let i of btn)
{
    i.addEventListener('click',()=>{
        check=i.value;
        console.log(check);
        if(check==='=')
        {
            //console.log(eval(val));
            let p=eval(val);
            head.innerText=p;
            display.innerText=eval(val);
            
            val=String(eval(val));
            console.log(val);
        }
        else if(check==="ac")
        {
            val='';
            head.innerText=val;
            display.innerText=val;
            
        }
        else if(check==="back")
        {
            val=val.substr(0,val.length-1);
            head.innerText=val;
        }
        else
        {
            
            val+=check;
            head.innerText=val;
        }
        
    })
}