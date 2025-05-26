const products = [
    {
        id: 1,
        name: "Wireless Earbuds",
        price: 99.99,
        image: "https://picsum.photos/200?1",
        description: "High-quality wireless earbuds with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://picsum.photos/200?2",
        description: "Feature-rich smartwatch with health tracking"
    },
     {
        id: 3,
        name: "Smart Watch",
        price: 199.99,
        image: "https://picsum.photos/200?2",
        description: "Feature-rich smartwatch with health tracking"
    },
     {
        id: 4,
        name: "Smart Watch",
        price: 199.99,
        image: "https://picsum.photos/200?2",
        description: "Feature-rich smartwatch with health tracking"
    }, {
        id: 5,
        name: "Smart Watch",
        price: 199.99,
        image: "https://picsum.photos/200?2",
        description: "Feature-rich smartwatch with health tracking"
    },
     {
        id: 6,
        name: "Smart Watch",
        price: 199.99,
        image: "https://picsum.photos/200?2",
        description: "Feature-rich smartwatch with health tracking"
    },
    {
        id: 7,
        name: "Laptop Backpack",
        price: 49.99,
        image: "https://picsum.photos/200?3",
        description: "Water-resistant laptop backpack with USB charging port"
    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        price: 129.99,
        image: "https://picsum.photos/200?4",
        description: "RGB mechanical gaming keyboard with cherry MX switches"
    },
    {
        id: 9,
        name: "Wireless Mouse",
        price: 39.99,
        image: "https://picsum.photos/200?5",
        description: "Ergonomic wireless mouse with adjustable DPI"
    },
    {
        id: 10,
        name: "Gaming Headset",
        price: 89.99,
        image: "https://picsum.photos/200?6",
        description: "7.1 surround sound gaming headset with noise-canceling mic"
    },
    {
        id: 11,
        name: "Power Bank",
        price: 29.99,
        image: "https://picsum.photos/200?7",
        description: "20000mAh fast-charging power bank with dual USB ports"
    },
    {
        id: 12,
        name: "Webcam HD",
        price: 79.99,
        image: "https://picsum.photos/200?8",
        description: "1080p HD webcam with built-in microphone for streaming"
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 69.99,
        image: "https://picsum.photos/200?9",
        description: "Waterproof portable bluetooth speaker with 20hr battery life"
    },
    {
        id: 14,
        name: "Phone Stand",
        price: 19.99,
        image: "https://picsum.photos/200?10",
        description: "Adjustable aluminum phone stand for desk or bedside"
    }
];
function displayProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="cart.addItem(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}