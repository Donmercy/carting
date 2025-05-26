// Sample product data
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.couponApplied = false;
        this.initializeEventListeners();
        this.updateDisplay();
        this.initializeCloseButton();
    }

    initializeEventListeners() {
        document.getElementById('view-cart').addEventListener('click', () => this.toggleCart());
        document.getElementById('apply-coupon').addEventListener('click', () => this.applyCoupon());
        document.getElementById('checkout-btn').addEventListener('click', () => this.checkout());
    }

    initializeCloseButton() {
        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.toggleCart());
        }
    }

    addItem(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }

        this.saveCart();
        this.updateDisplay();
        this.toggleCart();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateDisplay();
    }

    updateQuantity(productId, newQuantity) {
        if (newQuantity < 1) return;
        
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
            this.updateDisplay();
        }
    }

    applyCoupon() {
        const couponInput = document.getElementById('coupon-input');
        const couponMessage = document.getElementById('coupon-message');
        
        if (couponInput.value === 'WEB3BRIDGECOHORTx') {
            this.couponApplied = true;
            couponMessage.className = 'success';
            couponMessage.textContent = 'Coupon applied successfully!';
        } else {
            couponMessage.className = 'error';
            couponMessage.textContent = 'Invalid coupon code';
        }
        
        this.updateDisplay();
    }

    calculateTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = this.couponApplied ? subtotal * 0.1 : 0;
        const total = subtotal - discount;

        return { subtotal, discount, total };
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateDisplay() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const { subtotal, discount, total } = this.calculateTotals();

        cartCount.textContent = this.items.reduce((sum, item) => sum + item.quantity, 0);
        
        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="50">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x 
                        <input type="number" 
                               value="${item.quantity}" 
                               min="1" 
                               onchange="cart.updateQuantity(${item.id}, this.value)">
                    </p>
                </div>
                <button onclick="cart.removeItem(${item.id})">Remove</button>
            </div>
        `).join('');

        document.getElementById('subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('discount').textContent = discount.toFixed(2);
        document.getElementById('total').textContent = total.toFixed(2);
    }

    toggleCart() {
        const modal = document.getElementById('cart-modal');
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        // Redirect to checkout page or show checkout form
        window.location.href = 'checkout.html';
    }
}

// Initialize cart and products
const cart = new ShoppingCart();
displayProducts();