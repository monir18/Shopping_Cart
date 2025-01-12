const products = [
    {
        id: 1,
        name: "Laptop",
        description: "A laptop is a portable computer that's small enough to be used on your lap.",
        price: 99.99,
        image: "asset/img/laptop.jpg"
    },
    {
        id: 2,
        name: "Mobile",
        description: "A wireless handheld device",
        price: 50.99,
        image: "asset/img/mobile.jpg"
    },
    {
        id: 3,
        name: "Bike",
        description: "A bike is a pedal-powered two-wheeled vehicle.",
        price: 239.99,
        image: "asset/img/bike.jpg"
    },
    {
        id: 4,
        name: "Car",
        description: "Toyota Bangladesh",
        price: 649.99,
        image: "asset/img/car.jpg"
    }
];

function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

window.onload = renderProducts;
