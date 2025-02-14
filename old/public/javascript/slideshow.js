let slideNum = 0;
let slideGroup = 1;
const totalSlidesOverall = document.getElementsByClassName("project-card");
//hide slides
for(let i = 0; i < totalSlidesOverall.length; i++) {
    totalSlidesOverall[i].hidden = true;
}

//testing
//console.log(totalSlidesOverall);

//Start By Displaying
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
    //Get number of pics in current slideshow by accessing p(1/2/etc) and getting imgs
    let totalSlidesCurrent = document.getElementById("p" + slideGroup).getElementsByTagName("img");
    //unhide selected slide
    totalSlidesOverall[slideGroup-1].hidden = false;

    //Get all notes in current slideshow
    let totalNotesCurrent = document.getElementById("p" + slideGroup).getElementsByClassName("note");
    //annotation if-block //Check current slide
    for(let i = 0; i < totalSlidesCurrent.length; i++) {
        totalNotesCurrent[i].style.display = "none";
    }

    //display if-block //Check if slideshow is valid
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
        totalNotesCurrent[slideNum].style.display = "block";
    }
}

function setGroup(num) {
    slideGroup = num;
    slideNum = 0;
    displaySlide(slideNum);
}
