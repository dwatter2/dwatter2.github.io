let slideNum = 0;
let slideGroup = 1;
const totalSlidesOverall = document.getElementsByClassName("project-card");
//hide slides
for(let i = 0; i < totalSlidesOverall.length; i++) {
    totalSlidesOverall[i].hidden = true;
}

console.log(totalSlidesOverall);

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
    let totalSlidesCurrent = document.getElementById("p" + slideGroup).getElementsByTagName("img");
    totalSlidesOverall[slideGroup-1].hidden = false;
    console.log("group: " + slideGroup);

    if(totalSlidesCurrent.length > 1 && totalSlidesCurrent != null) {
        //overflow
        if(totalSlidesCurrent.length-1 < num)
            slideNum = 0;
        //underflow?
        if(num < 0)
            slideNum = totalSlidesCurrent.length-1;

        //Set all slides back to display: none
        for(let i = 0; i < totalSlidesCurrent.length; i++) {
            totalSlidesCurrent[i].style.display = "none";
        }
        //Set current to visible and set display number
        totalSlidesCurrent[slideNum].style.display = "block";
        document.getElementById("p" + slideGroup).querySelector(".slideshow-current").innerHTML = (slideNum + 1).toString() + "/" + totalSlidesCurrent.length.toString();
    }
}

function setGroup(num) {
    slideGroup = num;
    slideNum = 0;
    displaySlide(slideNum);
}
