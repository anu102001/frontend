var toggleButton = document.querySelector(".toggle-btn");
var body = document.querySelector("body");
var thumbnail = document.querySelectorAll("thumbnail");
var bigBox = document.querySelector(".big-box");
var smallBox = document.querySelector(".small-box");

toggleButton.addEventListener("click",() => {
    toggleButton.classList.toggle('active');
    body.classList.toggle('active');
    bigBox.classList.toggle('active');
    smallBox.classList.toggle('active');
});
