const dishes = [
    {"name": "Pepperoni", "price": 10.99, "category": "Pizza", "img": "pizza.jpg"},
    {"name": "Caponata Siciliana", "price": 19.50, "category": "Aperi.", "img": "caponata_siciliana.jpg"},
    {"name": "Alla Norma", "price": 19.50, "category": "Pasta", "img": "pasta_alla_norma.jpg"},
    {"name": "Carpaccio", "price": 12.99, "category": "Carne", "img": "carpaccio.jpg"}
]


function addCards() {
    let dishesCardsContainer = document.querySelector('.dishes-cards');
    let cardsHTML = '';
    for (const dish of dishes) {
        cardsHTML += `
            <div class="card">
                <div class="card-image">
                    <img height="" width="" src="../static/images/${dish.img}" alt="DISH IMAGE">
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

function setSelected() {
    const url = window.location.pathname;
    var path = url.substring(url.lastIndexOf('/') + 1).replace('.html', '');
    if (!path) { path = 'home'; }

    const elements = document.getElementById(path).children;
    for (let i = 0; i < elements.length; i++) { elements[i].classList.add('selected'); }
}

document.addEventListener("DOMContentLoaded", () => { setSelected(); addCards(); });
document.addEventListener("click", (event) => {
    const path = event.target.offsetParent.id;
    if (!path) { return }

    if (path != 'home') { window.location.href = '/pages/' + path + '.html'; }
    else { window.location.href = '/'; }

})