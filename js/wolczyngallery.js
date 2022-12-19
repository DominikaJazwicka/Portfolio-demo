const GALLERY__ELEMENT = document.querySelectorAll(".gallery__element img");
const POPUP = document.querySelector(".popup");
const POPUP__CLOSE = document.querySelector(".popup__close");
const POPUP__IMG = document.querySelector(".popup__img");
const ARROW__LEFT  = document.querySelector(".popup__arrow--left");
const ARROW__RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
    if (currentImgIndex === GALLERY__ELEMENT.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUP__IMG.src = GALLERY__ELEMENT[currentImgIndex].src;
};

const showPreviousImg = () => {
    if (currentImgIndex === GALLERY__ELEMENT.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUP__IMG.src = GALLERY__ELEMENT[currentImgIndex].src;
};

const closePopup =  () => {
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
    }, 300);
    
};


GALLERY__ELEMENT.forEach((gallery__element, index) => {
    gallery__element.addEventListener("click", (e) => {
    POPUP.classList.remove("hidden");
    POPUP__IMG.src = e.target.src;
    currentImgIndex = index
});
});

POPUP__CLOSE.addEventListener("click", closePopup);


ARROW__RIGHT.addEventListener("click", showNextImg); 


ARROW__LEFT.addEventListener("click", showPreviousImg);



document.addEventListener("keydown", (e) => { 

    if(!POPUP.classList.contains("hidden")) {

    if(e.key === "ArrowRight" || e.keyCode === 39) {
        showNextImg();
    }

    if (e.key === "ArrowLeft" || e.keyCode === 37) {
        showPreviousImg();
    }

    if (e.key === "Escape" || e.keyCode === 27) {
        closePopup();
    }
}
});

POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP) {
        closePopup();
    }
});





