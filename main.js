const dishes = [
    {"name": "Pepperoni", "price": 10.99, "category": "Pizza", "img": "pizza.jpg"},
    {"name": "Caponata Siciliana", "price": 19.50, "category": "Aperitivo", "img": "caponata_siciliana.jpg"},
    {"name": "Pasta alla Norma", "price": 19.50, "category": "Pasta", "img": "pasta_alla_norma.jpg"},
    {"name": "Carpaccio", "price": 12.99, "category": "Carne", "img": "pizza.jpg"}
]

const body = document.body;
// const switchBtn = document.querySelector(".switch");
// const icon = switchBtn.querySelector("i");

// switchBtn.addEventListener("click", () => {
//     const isDark = body.classList.toggle("dark");
//     body.classList.toggle("light", !isDark);
//     icon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun-bright";
// });

function addCards() {
    let dishesCardsContainer = document.querySelector('.dishes-cards');
    let cardsHTML = '';
    for (const dish of dishes) {
        cardsHTML += `
            <div class="card">
                <div class="card-image">
                    <img height="" width="" src="./static/images/${dish.img}" alt="DISH IMAGE">
                </div>
                <div class="card-text">
                    <p class="dish-name bold">${dish.name}</p>
                    <div class="dish-information">
                        <p class="dish-type-price bold">${dish.category} · ${dish.price}€</p>
                    </div>
                </div>
            </div>
        `
    }
    dishesCardsContainer.innerHTML = cardsHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    addCards();
});