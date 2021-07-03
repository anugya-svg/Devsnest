const form=document.querySelector("#form");
const input=document.querySelector('#text');
const imageCont=document.querySelector('.imageCont');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.log(text.value);
    let val=text.value;
    let config={params:{q:val}};
    let result=await axios.get(`http://api.tvmaze.com/search/shows/`,config);
    imageCont.textContent='';
    console.log(result.data);
    showImages(result.data);
    text.value="";
    
})
function showImages(res)
{
    for(let i=0;i<res.length;i++)
    {
        if(res[i].show.image){
        const fig=document.createElement('figure');
        fig.classList.add('figure');
        const pic=document.createElement('img');
        console.log(res[i].show.image.medium);
        pic.src=res[i].show.image.medium;
        fig.appendChild(pic);
        imageCont.appendChild(fig);
        }
    }
}