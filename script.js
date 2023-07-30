var mn = 0;
function menu() {
    if (mn == 0) {
        document.getElementById("menu").style.display="block";
        mn = 1;
    } else {
        document.getElementById("menu").style.display="none";
        mn = 0;
    }
}

