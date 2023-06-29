let allShoes = document.getElementsByClassName("shoe");
let filters = document.getElementsByClassName("filter");
let AF1 = document.getElementById("prijs--all");
let Jordan1 = document.getElementById("prijs--mid");
let Jordan4 = document.getElementById("prijs--hoog");
const Prijsfilter = document.getElementById("price-filter");

setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s
window.scrollTo(0, 0);//zet window naar boven bij refresh


Prijsfilter.addEventListener('change', function () {
    if (Prijsfilter.value === Jordan1.value) {
        for (let i = 0; i < allShoes.length; i++) {
            let price = allShoes[i].getAttribute("data-category-price");
            if (price >= 1000 && price <= 2000) {
                allShoes[i].style.display = "flex";
            }
            else {
                allShoes[i].style.display = "none";
            }
        }
    }
    else if (Prijsfilter.value === Jordan4.value) {
        for (let i = 0; i < allShoes.length; i++) {
            let price = allShoes[i].getAttribute("data-category-price");
            if (price >= 2000) {
                allShoes[i].style.display = "flex";
            }
            else {
                allShoes[i].style.display = "none";
            }
        }
    }
    else if (Prijsfilter.value === AF1.value) {
        for (let i = 0; i < allShoes.length; i++) {
                allShoes[i].style.display = "flex";

            }
        }
    }
)