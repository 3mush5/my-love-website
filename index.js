const yesBtn = document.querySelector("#yesBtn");
const surprise = document.querySelector("#surprise");
const noBtn = document.querySelector("#noBtn");
const container = document.querySelector(".container");
let numberOfNo = document.querySelector("#numberOfNo");
let countNo =0;
const surpriseBtn = document.querySelector("#surpriseBtn");
const giftMsg = document.querySelector("#giftMsg");

yesBtn.addEventListener("click",function(){
    yesBtn.textContent = "I Knew it! Now go on with your day, baby!"
    noBtn.style.display="none";
    numberOfNo.style.display="none";
    surpriseBtn.style.display="block"
    giftMsg.style.display="block"

})

noBtn.addEventListener("mouseenter", function(){
    noBtn.style.position = "absolute";
    const maxLeft = container.clientWidth - noBtn.offsetWidth;
    const maxTop = container.clientHeight - noBtn.offsetHeight;
    noBtn.style.left = Math.random() * maxLeft + "px";
    noBtn.style.top = Math.random() * maxTop + "px";

    countNo++;
    if(countNo===1){
        numberOfNo.textContent=`Nice try! 😂`
    }
    else if(countNo<5){
        numberOfNo.textContent=`You REALLY don't want to admit it? 😭`
    }
    else if(countNo >= 5){
        numberOfNo.textContent=`JUST ADMIT YOU LOVE ME! ❤️`
    }
    
})

surpriseBtn.addEventListener("click",function(){
    giftMsg.textContent = "Surprise! 💝";
surprise.textContent=`Okay, jokes aside... I'm really lucky to have you. I love you more than you know. ❤️🫶🏻`;
surpriseBtn.style.display="none"

})