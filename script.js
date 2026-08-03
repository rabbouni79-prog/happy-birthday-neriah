const loading = document.getElementById("loading");
const intro = document.getElementById("intro");
const welcome = document.getElementById("welcome");
const countdown = document.getElementById("countdown");
const openBtn = document.getElementById("openBtn");

const passwordScreen = document.getElementById("passwordScreen");
const secretCode = document.getElementById("secretCode");
const unlockBtn = document.getElementById("unlockBtn");
const wrongCode = document.getElementById("wrongCode");

const musicScreen = document.getElementById("musicScreen");
const continueBtn = document.getElementById("continueBtn");

const finalScreen = document.getElementById("finalScreen");
const watchAgain = document.getElementById("watchAgain");

// CHANGE THIS TO THE BIRTHDAY
const birthday = new Date("August 5 2026 00:00:00").getTime();

// Loading → Intro
setTimeout(()=>{
loading.classList.add("hidden");
intro.classList.remove("hidden");
},2500);

// Intro → Welcome
setTimeout(()=>{
intro.classList.add("hidden");
welcome.classList.remove("hidden");
},5000);

// Countdown
setInterval(()=>{

const now = new Date().getTime();

const distance = birthday-now;

if(distance<=0){

countdown.innerHTML="🎉 Today is finally here!";

return;

}

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/60000);
const seconds=Math.floor((distance%(60000))/1000);

countdown.innerHTML=
`${days} Days<br>
${hours} Hours<br>
${minutes} Minutes<br>
${seconds} Seconds`;

},1000);
// Open Surprise Button
openBtn.addEventListener("click",()=>{

const today = new Date().getTime();

if(today < birthday){

alert("💜 Your surprise will unlock on your birthday!");

return;

}

welcome.classList.add("hidden");
passwordScreen.classList.remove("hidden");

});

// Secret Code
unlockBtn.addEventListener("click",()=>{

if(secretCode.value==="10/26"){

passwordScreen.classList.add("hidden");
musicScreen.classList.remove("hidden");

}else{

wrongCode.innerHTML="❌ That's not the right code.";

}

});

// Continue after music
continueBtn.addEventListener("click",()=>{

musicScreen.classList.add("hidden");
finalScreen.classList.remove("hidden");

});

// Watch Again
watchAgain.addEventListener("click",()=>{

location.reload();

});