const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    const product = getProductById(productId);

    if (order.includes(product)) {
        alert('Товар уже был добавлен в корзину.');
        return;
    }

    order = [...order, product];

    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    const product = getProductById(productId);

    order = order.filter(p => p !== product);

    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    const totalPrice = order.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    document.getElementById('total').innerText = totalPrice;
}

function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}

function getProductById(productId) {
    return products.find(a => a.id === productId);
}