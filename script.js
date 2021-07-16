const hoverImages  = {
    "projects-img" : "imgs/blkCode.png",
    "about-img" : "imgs/blkAbout.png",
    "resume-img" : "imgs/blkResume.png",
    "contact-img" : "imgs/blkContact.png"
}
const leaveImages  = {
    "projects-img" : "imgs/whtCode.png",
    "about-img" : "imgs/whtAbout.png",
    "resume-img" : "imgs/whtResume.png",
    "contact-img" : "imgs/whtContact.png"
}

const cards = document.querySelectorAll(".card")
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        const image = card.querySelector("img");
        const imageId = image.id;
        const newImage = hoverImages[imageId];
        image.src = newImage;

        const text = card.querySelector(".title");
        text.style.color = "black"; 
    })
    card.addEventListener("mouseleave", () => {
        const image = card.querySelector("img");
        const imageId = image.id;
        const newImage = leaveImages[imageId];
        image.src = newImage;

        const text = card.querySelector(".title");
        text.style.color = "white"; 
    })
})
