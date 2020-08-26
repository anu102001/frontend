var toggleButton = document.querySelector(".toggle-btn");
var body = document.querySelector("body");
var thumbnail = document.querySelectorAll("thumbnail");

toggleButton.addEventListener("click",() => {
    toggleButton.classList.toggle('active');
    body.classList.toggle('active');
    for(var i=0; i<thumbnail.length; i++){
        thumbnail[i].classList.toggle('active');
    }
});
