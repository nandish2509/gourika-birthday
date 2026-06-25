const targetDate = new Date("July 1, 2026 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
`${days}d ${hours}h ${minutes}m ${seconds}s`;

},1000);

function startParty(){

document.getElementById("birthdayMusic").play();

confetti({
particleCount:250,
spread:180,
origin:{y:0.6}
});

setTimeout(()=>{
document.getElementById("surprise").style.display="block";
},2000);

}

function closeSurprise(){
document.getElementById("surprise").style.display="none";
}

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-20px";
heart.style.fontSize=Math.random()*20+20+"px";

heart.style.animation="rise 5s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},600);

const style=document.createElement("style");

style.innerHTML=`
@keyframes rise{
from{
transform:translateY(0);
opacity:1;
}
to{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(style);