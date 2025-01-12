let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCartSummary();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartSummary();
    renderCart();
}

function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem && newQuantity > 0) {
        cartItem.quantity = newQuantity;
    }
    updateCartSummary();
    renderCart();
}

function clearCart() {
    cart = [];
    updateCartSummary();
    renderCart();
}

function updateCartSummary() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const subtotal = item.product.price * item.quantity;
        total += subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product.name}</td>
            <td>$${item.product.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.product.id}, this.value)">
            </td>
            <td>$${subtotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.product.id})">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = total.toFixed(2);
}

function viewCart() {
    const cartView = document.getElementById('cart-view');
    cartView.classList.toggle('hidden');
}

function checkout() {
    if (cart.length > 0) {
        alert('Proceeding to checkout...');
        clearCart();
    } else {
        alert('Your cart is empty!');
    }
}
