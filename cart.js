// cart.js

let cart = [];

function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear previous items
    cartItemsElement.innerHTML = '';

    // Populate the cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    // Calculate and display the total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = total.toFixed(2);
}

function clearCart() {
    cart = [];
    updateCart();
}
