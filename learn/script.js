var score = 0
var div = 1

function quiz(elm) {
    cls = elm.className

    if (cls == "a") {
        elm.style.backgroundColor="#3aafa9";
        score++;
    } else {
        elm.style.backgroundColor="red";
    }
    if (div != 20) {
        next();
    } else {
        showresult();
    }
}

function next() {
    document.getElementById(String(div)).style.display="none";
    div++;
    document.getElementById(String(div)).style.display="block";
    document.getElementById("quizN").innerHTML=div
}

function showresult() {
    for (var i = 0; i < 20; i++) {
        document.querySelectorAll("#quiz div")[i].style.display="block";
    }
}