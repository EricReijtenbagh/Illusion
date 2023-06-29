const button = document.getElementById("button")
    var popup = document.getElementById("added");
button.addEventListener('click', function () {
    popup.classList.toggle("fadeIn");
    setTimeout(function () {
        popup.classList.toggle("fadeOut")
    }, 1000);
}
);