 //Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("Text");
    captionText.innerHTML = element.alt;
}


//Modal LightBox
function openModal(id) {
    
    modalImage = id;
    
    if (modalImage === "kcPet"){
        document.getElementById('KC').style.display = "block";
    }else if (modalImage === "htmlEmails"){
        document.getElementById('HE').style.display = "block";
    }
    document.getElementById('myModal').style.display = "block";
    
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('KC').style.display = "none";
    document.getElementById('HE').style.display = "none";
}

var slideIndex = 1;
var slideIndex = 1;
showDivs(slideIndex);
showDivs2(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function plusDivs2(n) {
    showDivs2(slideIndex += n);
}

function currentDiv2(n) {
    showDivs2(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}