const btn=document.querySelector('.btn');
const play=document.querySelector('#playBtn');
const main=document.querySelector('.main');
const ques=["Which of the following is not JavaScript Data Types?","Which company developed JavaScript?","Inside which HTML element do we put the JavaScript?","Why so JavaScript and Java have similar name?","What is the original name of JavaScript?"]
const ans ={
    0:["Undefined","Number"," Boolean","Float"],
    1:["Netscape"," Bell Labs","Sun Microsystems","IBM"],
    2:["<script>","<head>","<meta>","<style>"],
    3:["JavaScript is a stripped-down version of Java","JavaScript's syntax is loosely based on Java's","They both originated on the island of Java","None of the above"],
    4:["LiveScript","EScript","Mocha","JavaScript"]
}
btn.addEventListener('click',()=>{
    console.log('clicked');
    play.style.display='none';
    main.classList.add('container');
    const nxt=document.createElement('div');
    main.append(nxt);
    nxt.innerText=ques[0];
    
})