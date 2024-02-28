let slideNum = 0;
let slideGroup = 2;
displaySlide(slideNum);

function slideBack() {
    slideNum -= 1;
    displaySlide(slideNum);
}

function slideNext() {
    slideNum += 1;
    displaySlide(slideNum);
}

function displaySlide(num) {
    let totalSlides = document.getElementById("p" + slideGroup).getElementsByTagName("img");

    if(totalSlides.length > 1 && totalSlides != null) {
        if(totalSlides.length-1 < num)
            slideNum = 0;
        if(num < 0)
            slideNum = totalSlides.length-1;

        for(let i = 0; i < totalSlides.length; i++) {
            totalSlides[i].style.display = "none";
        }
        totalSlides[slideNum].style.display = "block";
        document.getElementById("p" + slideGroup).querySelector(".slideshow-current").innerHTML = (slideNum + 1).toString() + "/" + totalSlides.length.toString();
    }
}

function setGroup(num) {
    slideGroup = num;
    slideNum = 0;
    displaySlide(slideNum);
}
