// const filter = document.getElementsByClassName('filter')[0];
// const cards = document.querySelector('.menu-cards');

// const dishes = [
//     {"name": "Pepperoni", "price": 10.99, "category": "Pizza", "img": "pizza.jpg"},
//     {"name": "Caponata Siciliana", "price": 19.50, "category": "Aperi.", "img": "caponata_siciliana.jpg"},
//     {"name": "Alla Norma", "price": 19.50, "category": "Pasta", "img": "pasta_alla_norma.jpg"},
//     {"name": "Carpaccio", "price": 12.99, "category": "Carne", "img": "carpaccio.jpg"}
// ]

// function addCards() {
//     let dishesCardsContainer = document.querySelector('.dishes-cards');
//     let cardsHTML = '';
//     for (const dish of dishes) {
//         cardsHTML += `
//             <div class="card">
//                 <div class="card-image">
//                     <img height="" width="" src="../static/images/${dish.img}" alt="DISH IMAGE">
//                 </div>
//                 <div class="card-text">
//                     <p class="dish-name bold">${dish.name}</p>
//                     <div class="dish-information">
//                         <p class="dish-type-price bold">${dish.category} · ${dish.price}€</p>
//                     </div>
//                 </div>
//             </div>
//         `
//     }
//     dishesCardsContainer.innerHTML = cardsHTML;
// }

// document.addEventListener("DOMContentLoaded", () => { addCards(); });
// filter.addEventListener('click', (event) => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (!isButton) { return; }

//     let menuCardsContainer = document.querySelector('.menu-cards');
//     let cardsHTML = '';
//     for (const dish of categories_dishes[event.target.id]) {
//         cardsHTML += `
//             <div class="card" id="test">
//                 <div class="card-text">
//                   <img height="" width="" src="../static/images/${dish.image}" alt="DISH IMAGE">
//                     <p class="dish-name bold">${dish.name}</p>
//                     <div class="dish-information">
//                         <p class="dish-type-price bold">${event.target.id} · ${dish.price}€</p>
//                     </div>
//                 </div>
//                 <div></div>
//             </div>
//         `
//     }
//     menuCardsContainer.innerHTML = cardsHTML;
// })

// cards.addEventListener('click', (event) => {
//     const card = event.target.closest('.card');
//     if (!card) { return; }
//     console.log(card.id)
// })