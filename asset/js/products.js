const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for product 1.',
        price: 19.99,
        image: 'product1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description for product 2.',
        price: 29.99,
        image: 'product2.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description for product 3.',
        price: 39.99,
        image: 'product3.jpg'
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description for product 4.',
        price: 49.99,
        image: 'product4.jpg'
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
