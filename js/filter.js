let allShoes = document.getElementsByClassName("shoe");
let filters = document.getElementsByClassName("filter");


setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s

window.scrollTo(0, 0);//zet window naar boven bij refresh

for (let i = 0; i < filters.length; i++) {
    filters[i].checked = true;
}//zet checkboxes op checked bij refresh

let AF1 = document.getElementById("checkbox-AF1");
let Jordan1 = document.getElementById("checkbox-Jordan1");
let Jordan4 = document.getElementById("checkbox-Jordan4");

AF1.onchange = function () {
    if (AF1.checked === true) {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Air Force 1") {
                allShoes[i].style.display = "block";
            }
        }
    }//laat list items zien
    else {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Air Force 1") {
                allShoes[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

Jordan1.onchange = function () {
    if (Jordan1.checked === true) {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Jordan 1") {
                allShoes[i].style.display = "block";
            }
        }
    }//laat list items zien
    else {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Jordan 1") {
                allShoes[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

Jordan4.onchange = function () {
    if (Jordan4.checked === true) {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Jordan 4") {
                allShoes[i].style.display = "block";
            }
        }
    }//laat list items zien
    else {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Jordan 4") {
                allShoes[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

