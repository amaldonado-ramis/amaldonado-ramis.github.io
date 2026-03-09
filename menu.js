const filter = document.getElementsByClassName('filter')[0];
const cards = document.querySelector('.menu-cards');
const modal = document.querySelector('.modal-container')

const categories_dishes = {
  "pizza": [
    { "id": 1, "name": "Margherita", "price": 8.50, "image": "pizza_margherita.jpg", "description": "Pizza clásica con tomate, mozzarella y albahaca", "allergies": ["lácteos", "gluten"] },
    { "id": 2, "name": "Pepperoni", "price": 9.90, "image": "pizza_pepperoni.jpg", "description": "Pizza con pepperoni y queso mozzarella", "allergies": ["lácteos", "gluten"] },
    { "id": 3, "name": "Cuatro Quesos", "price": 10.50, "image": "pizza_cuatro_quesos.jpg", "description": "Mezcla de cuatro quesos sobre base de tomate", "allergies": ["lácteos", "gluten"] },
    { "id": 4, "name": "Hawaiana", "price": 9.75, "image": "pizza_hawaiana.jpg", "description": "Pizza con jamón y piña", "allergies": ["lácteos", "gluten"] },
    { "id": 5, "name": "Barbacoa", "price": 11.20, "image": "pizza_barbacoa.jpg", "description": "Pizza con salsa barbacoa y carne", "allergies": ["lácteos", "gluten"] },
    { "id": 6, "name": "Prosciutto e Funghi", "price": 10.90, "image": "pizza_prosciutto_funghi.jpg", "description": "Pizza con jamón y champiñones", "allergies": ["lácteos", "gluten"] }
  ],

  "pasta": [
    { "id": 7, "name": "Spaghetti Bolognesa", "price": 9.80, "image": "spaghetti_bolognesa.jpg", "description": "Spaghetti con salsa boloñesa de carne", "allergies": ["gluten"] },
    { "id": 8, "name": "Fettuccine Alfredo", "price": 10.20, "image": "fettuccine_alfredo.jpg", "description": "Fettuccine en salsa cremosa de queso", "allergies": ["lácteos", "gluten"] },
    { "id": 9, "name": "Penne Arrabbiata", "price": 8.90, "image": "penne_arrabbiata.jpg", "description": "Penne con salsa picante de tomate", "allergies": ["gluten"] },
    { "id": 10, "name": "Lasaña de Carne", "price": 11.50, "image": "lasagna_carne.jpg", "description": "Lasaña tradicional con carne y bechamel", "allergies": ["lácteos", "gluten"] },
    { "id": 11, "name": "Ravioli Ricotta y Espinaca", "price": 10.75, "image": "ravioli_ricotta_espinaca.jpg", "description": "Ravioli relleno de ricotta y espinaca", "allergies": ["lácteos", "gluten"] }
  ],

  "carne": [
    { "id": 12, "name": "Entrecot a la Parrilla", "price": 15.90, "image": "entrecot_parrilla.jpg", "description": "Jugoso entrecot cocinado a la parrilla", "allergies": [] },
    { "id": 13, "name": "Costillas BBQ", "price": 14.50, "image": "costillas_bbq.jpg", "description": "Costillas con salsa barbacoa", "allergies": [] },
    { "id": 14, "name": "Pollo Asado", "price": 11.80, "image": "pollo_asado.jpg", "description": "Pollo entero asado al horno", "allergies": [] },
    { "id": 15, "name": "Solomillo de Ternera", "price": 18.20, "image": "solomillo_ternera.jpg", "description": "Solomillo de ternera a la plancha", "allergies": [] },
    { "id": 16, "name": "Milanesa de Ternera", "price": 12.40, "image": "milanesa_ternera.jpg", "description": "Ternera empanada y frita", "allergies": ["gluten"] }
  ],

  "veganos": [
    { "id": 17, "name": "Hamburguesa Vegana", "price": 9.50, "image": "hamburguesa_vegana.jpg", "description": "Hamburguesa elaborada con proteínas vegetales", "allergies": [] },
    { "id": 18, "name": "Pizza Vegana", "price": 10.80, "image": "pizza_vegana.jpg", "description": "Pizza sin productos animales", "allergies": ["gluten"] },
    { "id": 19, "name": "Bowl de Quinoa y Verduras", "price": 8.70, "image": "bowl_quinoa_verduras.jpg", "description": "Bowl saludable con quinoa y verduras frescas", "allergies": [] },
    { "id": 20, "name": "Tacos de Jackfruit", "price": 9.90, "image": "tacos_jackfruit.jpg", "description": "Tacos rellenos de jackfruit estilo pulled pork", "allergies": [] },
    { "id": 21, "name": "Ensalada Mediterránea Vegana", "price": 8.20, "image": "ensalada_mediterranea_vegana.jpg", "description": "Ensalada con verduras, aceitunas y vinagreta", "allergies": [] }
  ]
};

const allergyIcons = {
    "gluten": { "class": "fa-solid fa-bread-slice", "color": "rgba(210, 105, 30, 0.5)" },       // marrón claro
    "lácteos": { "class": "fa-solid fa-cheese", "color": "rgba(255, 223, 0, 0.5)" },           // amarillo
    "mariscos": { "class": "fa-solid fa-crab", "color": "rgba(220, 20, 60, 0.5)" },            // rojo carmín
    "huevos": { "class": "fa-solid fa-egg", "color": "rgba(255, 255, 102, 0.5)" },             // amarillo pálido
    "frutos secos": { "class": "fa-solid fa-peanut", "color": "rgba(205, 133, 63, 0.5)" },     // marrón medio
    "pescado": { "class": "fa-solid fa-fish", "color": "rgba(30, 144, 255, 0.5)" },            // azul
    "soja": { "class": "fa-solid fa-seedling", "color": "rgba(34, 139, 34, 0.5)" },            // verde
    "sésamo": { "class": "fa-solid fa-certificate", "color": "rgba(255, 160, 122, 0.5)" }      // salmón
};

function showModal(card_id) {
    const dish = getDishById(card_id);
    if (!dish) return;

    // Genera el HTML de alergias de forma limpia
    const generateAllergiesHTML = (allergies) => {
        return allergies.map(name => {
            const info = allergyIcons[name];
            return `<div class="box" style="background-color:${info.color};">
                        <i class="${info.class}"></i>
                    </div>`;
        }).join('');
    };

    const allergiesHTML = generateAllergiesHTML(dish.allergies);
    const cardsHTML = `
        <div class="details">
          <div class="detail-card">
            <div class="card-image">
              <img src="../static/images/${dish.image}" alt="${dish.name}" />
            </div>
            <div class="card-detail">
              <h3>${dish.name}</h3>
              <p>${dish.description}</p>
              ${dish.allergies.length > 0 ? `
              <div class="card-allergies">
                <div class="allergy">
                    ${allergiesHTML}
                </div>
              </div>` : ''}
            </div>
          </div>
        </div>
    `;

    modal.innerHTML = cardsHTML;
    modal.classList.add('show');
    modal.classList.remove('hide');
}

function getDishById(id) {
    for (const category in categories_dishes) {
        const dish = categories_dishes[category].find(d => d.id === parseInt(id));
        if (dish) return dish;
    }
    return null;
}

filter.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) { return; }

    let menuCardsContainer = document.querySelector('.menu-cards');
    let cardsHTML = '';
    for (const dish of categories_dishes[event.target.id]) {
        cardsHTML += `
            <div class="card" id="${dish.id}">
                <div class="card-text">
                  <img height="" width="" src="../static/images/${dish.image}" alt="DISH IMAGE">
                    <p class="dish-name bold">${dish.name}</p>
                    <div class="dish-information">
                        <p class="dish-type-price bold">${event.target.id} · ${dish.price}€</p>
                    </div>
                </div>
                <div></div>
            </div>
        `
    }
    menuCardsContainer.innerHTML = cardsHTML;
})

cards.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (!card) { return; }

    showModal(card.id)
})