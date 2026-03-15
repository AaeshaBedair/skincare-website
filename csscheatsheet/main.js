var filter = document.getElementById("filter");
var searchBtn = document.querySelector(".landing-page-search .btn");

searchBtn.addEventListener("click", filterProducts);

function filterProducts() {
    var text = filter.value.toLowerCase();
    var cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        var productName = card.querySelector("h3").textContent.toLowerCase();
        if (productName.indexOf(text) !== -1) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

         var viewAllBtn = document.getElementById("viewAllBtn");
    var hiddenCards = document.querySelectorAll(".card.hidden");

    viewAllBtn.addEventListener("click", function() {
    hiddenCards.forEach(function(card) {
        card.style.display = "block";
    });
});