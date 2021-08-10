const hoverImages  = {
    "projects-img" : "imgs/blkCode.png",
    "about-img" : "imgs/blkAbout.png",
    "resume-img" : "imgs/blkResume.png",
    "contact-img" : "imgs/blkContact.png",
    "tictactoe-img" : "imgs/blkTicTacToe.png",
    "slider-img" : "imgs/blkSlider.png",
    "pw-img" : "imgs/blkPW.png",
    "ln-img" : "imgs/blkLinked.png",
    "email-img" : "imgs/blkEmail.png"
}
const leaveImages  = {
    "projects-img" : "imgs/whtCode.png",
    "about-img" : "imgs/whtAbout.png",
    "resume-img" : "imgs/whtResume.png",
    "contact-img" : "imgs/whtContact.png",
    "tictactoe-img" : "imgs/whtTicTacToe.png",
    "slider-img" : "imgs/whtSlider.png",
    "pw-img" : "imgs/whtPW.png",
    "ln-img" : "imgs/whtLinked.png",
    "email-img" : "imgs/whtEmail.png"
}

const cards = document.querySelectorAll(".card")
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        const image = card.querySelector("img");
        const imageId = image.id;
        const newImage = hoverImages[imageId];
        image.src = newImage;

        const text = card.querySelector(".title");
        const subtext = card.querySelector(".subtitle");
        text.style.color = "black";
        subtext.style.color = "black"; 
    })
    card.addEventListener("mouseleave", () => {
        const image = card.querySelector("img");
        const imageId = image.id;
        const newImage = leaveImages[imageId];
        image.src = newImage;

        const text = card.querySelector(".title");
        const subtext = card.querySelector(".subtitle");
        text.style.color = "white"; 
        subtext.style.color = "white"; 
    })
})
