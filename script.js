let count = 0;
let runAwayMode = false;

const messages = [
    "Are you sure?",
    "Think about it...",
    "Last chance!",
    "Pleaseeee 🥺",
    "I'll be sad :(",
    "Really???",
    "Final answer?"
];

const yesBtn = document.querySelector(".yes-button");
const noBtn = document.querySelector(".no-button");

function handleNoClick(){

    // YES button grows
    let size = window.getComputedStyle(yesBtn).fontSize;
    let newSize = parseFloat(size) * 1.25;
    yesBtn.style.fontSize = newSize + "px";

    // Change NO text
    if(count < messages.length){
        noBtn.textContent = messages[count];
        count++;
    }
    else{
        runAwayMode = true;
        noBtn.textContent = "CATCH ME 😜";
    }
}

// After last message → NO runs away
noBtn.addEventListener("mouseover", function(){

    if(!runAwayMode) return;

    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function handleYesClick(){
    document.body.innerHTML = `
    <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background:linear-gradient(135deg,#ff4e8a,#ff2e78);
        color:white;
        font-size:45px;
        font-family:Arial;
        text-align:center;
        flex-direction:column;
    ">
        <h1>YAY 💕</h1>
        <p>You said YES 😌</p>
    </div>`;
}