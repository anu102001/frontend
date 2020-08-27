var toggleButton = document.querySelector(".toggle-btn");
var body = document.querySelector("body");
var thumbnail = document.querySelectorAll("thumbnail");
var bigBox = document.querySelector(".big-box");
var smallBox = document.querySelector(".small-box");
var middle = document.querySelector(".middle");
var innerCircle = document.querySelector(".inner-circle");

toggleButton.addEventListener("click",() => {
    toggleButton.classList.toggle('active');
    body.classList.toggle('active');
    bigBox.classList.toggle('active');
    smallBox.classList.toggle('active');
    middle.classList.toggle('active');
    innerCircle.classList.toggle('active');
});
