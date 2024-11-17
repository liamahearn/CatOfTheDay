let entries = [
    {
        picture: "cat1.png",
        emoji: "🙀",
        source: "miguelitolopez2002",
        background: "tilingBG1Medium.png",
        backgroundAnimation: "vertical-scroll",
        animationDuration: "5s",
    },
    {
        picture: "cat2.png",
        emoji: "🪟",
        source: "me",
        background: "tilingBG2Medium.png",
        backgroundAnimation: "vertical-scroll",
        animationDuration: "5s",
    },
    {
        picture: "cat3.png",
        emoji: "📦",
        source: "Lynne Davies, Alexandria",
        background: "tilingBG3Square.png",
        backgroundAnimation: "diagonal-scroll",
        animationDuration: "10s",
    }
]

let played  = false;
var intro = new Audio('./assets/audio/introDrumroll.m4a');

window.addEventListener("click", (event) => {
    if(!played){
        intro.play();
        played = true;
    }    
})

var impact = new Audio(`./assets/audio/impact/impact${1 + Math.floor(Math.random() * 6)}.m4a`)

intro.onended = () => {
    impact.play();
}

window.addEventListener("load", (event) => {
    console.log("Page loaded");

    // select day
    let day = Math.floor(Math.random() * entries.length);
    console.log(day);
    let entry = entries[day];
   
    document.querySelector(".picture-frame").src = `./assets/cats/${entry.picture}`;
    document.querySelector(".emoji").innerHTML = entry.emoji;
    document.querySelector(".account-name").innerHTML = entry.source;
    document.body.style.backgroundImage = `url('./assets/backgrounds/${entry.background}')`;
    document.body.style.animationName = entry.backgroundAnimation;
    document.body.style.animationDuration = entry.animationDuration;
    
});

