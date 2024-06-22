let toggle = 0;

function dropdown() {
    toggle += 1;
    if(toggle % 2 == 1) {
        document.getElementById("dropdown-menu").style.display = "block";
    } else {
        document.getElementById("dropdown-menu").style.display = "none";
    }
}