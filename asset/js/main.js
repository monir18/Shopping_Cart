import { fetchProducts } from './product.js';
import { renderProducts, renderCart, setupEventListeners } from './ui.js';

window.addToCartHandler = (productId) => {
    fetchProducts().then(products => {
        const product = products.find(p => p.id === productId);
        if (product) {
            addToCart(product);
            renderCart();
        }
    });
};

window.removeFromCartHandler = (productId) => {
    removeFromCart(productId);
    renderCart();
};

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts()
        .then(products => renderProducts(products))
        .catch(error => console.error('Error loading products:', error));

    setupEventListeners();
    renderCart();
});
