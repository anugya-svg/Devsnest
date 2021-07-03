const form=document.querySelector("#form");
const input=document.querySelector('#text');
const imageCont=document.querySelector('.imageCont');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.log(text.value);
    let val=text.value;
    let config={params:{q:val}};
    let result=await axios.get(`https://api.tvmaze.com/search/shows/`,config);
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
        const figCap=document.createElement('figcaption');
        if(res[i].show.name)
        {
            const name=res[i].show.name;
            const p=document.createElement('p');
            p.innerText=`Name: ${name}`;
            figCap.appendChild(p);
        }
        else{
            const p=document.createElement('p');
            p.innerText=`Name: N/A`;
            figCap.appendChild(p);
        }
        if(res[i].show.genres)
        {
            const genres=res[i].show.genres;
            const p=document.createElement('p');
            p.innerText=`Genres: ${genres[0]}`;
            figCap.appendChild(p);
        }
        else{
            const p=document.createElement('p');
            p.innerText=`Genres: N/A`;
            figCap.appendChild(p);
        }
        if(res[i].show.rating.average)
        {
            const rating=res[i].show.rating.average;
            // console.log(rating);
            const p=document.createElement('p');
            p.innerText=`Rating: ${rating}`;
            figCap.appendChild(p);
        }
        else{
            const p=document.createElement('p');
            p.innerText=`Rating: N/A`;
            figCap.appendChild(p);
        }
        if(res[i].show.officialSite)
        {
            const link=res[i].show.officialSite;
            console.log(link);
            const p=document.createElement('p');
            const a=document.createElement('a');
            var l = document.createTextNode("Watch");
            a.appendChild(l); 
            // a.title='click !'
            a.href=`${link}`;
            p.appendChild(a);
            figCap.appendChild(p);
        }
        else{
            const p=document.createElement('p');
            p.innerText=`link-404`;
            figCap.appendChild(p);
        }
        // console.log(res[i].show.image.medium);
        pic.src=res[i].show.image.medium;
        fig.appendChild(pic);
        fig.appendChild(figCap);
        imageCont.appendChild(fig);
        }
    }
}