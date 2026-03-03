// Next arrow
document.getElementById("arrow-next").onclick = (e) => {
    e.preventDefault();
    const currentImage = getCurrentSlide();
    let nextImage = currentImage.nextElementSibling;

   
    if (!nextImage || nextImage.tagName !== "IMG") {
        nextImage = document.querySelector("#slides img:first-child");
    }
    
    changeSlide(currentImage, nextImage);
};

// Prev arrow
document.getElementById("arrow-prev").onclick = (e) => {
    e.preventDefault();
    const currentImage = getCurrentSlide();
    let prevImage = currentImage.previousElementSibling;

    
    if (!prevImage || prevImage.tagName !== "IMG") {
        const allImages = document.querySelectorAll("#slides img");
        prevImage = allImages[allImages.length - 1];
    }
    
    changeSlide(currentImage, prevImage);
};


const getCurrentSlide = () => {
    return document.querySelector("#slides img.active");
};


const changeSlide = (current, next) => {
    current.classList.remove("active");
    next.classList.add("active");
};
