const product =[
    {
        id:0,
        image: 'image/bag-scaled.webp',
        title: 'orange bag',
        price: 1000,
    },
    {
        id:1,
        image: 'image/xdbHo4E.png',
        title: 'red bag',
        price: 1500,
    },
    {
        id:2,
        image: 'image/headphones.jpeg',
        title: 'headphones',
        price: 3000,
    },
    {
        id:3,
        image: 'image/camera.jpeg',
        title: 'camera',
        price: 6000,
    },
    {
        id:4,
        image: 'image/shoes.jpeg',
        title: 'shoes',
        price: 15000,
    },
    {
        id:5,
        image: 'image/serum.jpeg',
        title: 'serum',
        price: 5000,
    }
];
document.getElementById('searchBar').addEventListener('input', function () {
    const searchData = this.value.toLowerCase();
    const filteredProducts = product.filter(product => {
        return product.title.toLowerCase().includes(searchData);
    });

    displayProducts(filteredProducts);
});

function displayProducts(products) {
    const productContainer = document.getElementById('root');
    productContainer.innerHTML = '';

    if (products.length === 0) {
        productContainer.innerHTML = '<p>No matching products found.</p>';
    } else {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'box';

            productElement.innerHTML = `
                <div class='img-box'>
                    <img class='images' src='${product.image}' alt='${product.title}'>
                </div>
                <div class='bottom'>
                    <p>${product.title}</p>
                    <h2>$${product.price}.00</h2>
                    <button>Add to cart</button>
                </div>
            `;

            productContainer.appendChild(productElement);
        });
    }
}

// Initial display of all products
displayProducts(product);


