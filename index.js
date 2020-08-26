var toggleButton = document.querySelector(".toggle-btn");
var body = document.querySelector("body");
var thumbanail = document.querySelectorAll("thumbnail");

var clicked = false;

toggleButton.addEventListener("click",() => {
    body.classList.toggle('active');
    for(var i=0; i<thumbnail.length; i++){
        thumbnail[i].classList.toggle('active')
    }
});
