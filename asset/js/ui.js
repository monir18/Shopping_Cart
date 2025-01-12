import { addToCart, removeFromCart, clearCart, getCartItems } from './cart.js';

export function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price.toFixed(2)}</strong></p>
            <button onclick="addToCartHandler(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

export function renderCart() {
    const cartItems = getCartItems();
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = cartItems.map(item => `
        <div>
            <span>${item.name} (x${item.quantity})</span>
            <button onclick="removeFromCartHandler(${item.id})">Remove</button>
        </div>
    `).join('');
}

export function setupEventListeners() {
    document.getElementById('clear-cart').addEventListener('click', () => {
        clearCart();
        renderCart();
    });
}
