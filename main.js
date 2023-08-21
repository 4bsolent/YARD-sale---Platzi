
// 

let productslist = [];

let productos = [
    {
    name: "Producto 1",
    price: 100.00 ,
    img: "https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},

{
    name: "Producto 2",
    price: 200,
    img: "https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},

{
    name: "Producto 3",
    price: 300,
    img: "https://images.pexels.com/photos/17103032/pexels-photo-17103032/free-photo-of-mujer-mano-conexion-tecnologia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},

{
    name: "Producto 4",
    price: 400,
    img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},

{
    name: "Producto 5",
    price: 500,
    img: "https://images.pexels.com/photos/12672185/pexels-photo-12672185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},

{
    name: "Producto 6",
    price: 600,
    img: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}

]

for (const item of productos) {
    productslist.push(item)
}


// Elementos

const desktopMenu = document.querySelector('.desktop-menu');
const downArrowMenu = document.querySelector('.down-arrow-menu'); 
const mobilemenuContainer = document.querySelector('.mobilemenu-container');
const burguerMenu = document.querySelector('.menu-icon');
const shoppingCartIcon = document.querySelector('.shopping-cart-container');
const shoppingCarProducts = document.querySelector('.shopping-cart');
const cardsContainer = document.querySelector('.cards-container')

// Eventos

downArrowMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu)
shoppingCartIcon.addEventListener('click', toggleShoppingCartContainer)

// Funciones

function toggleDesktopMenu() {

    desktopMenu.classList.toggle('inactive')

    if (!shoppingCarProducts.classList.contains('inactive')) {
        shoppingCarProducts.classList.toggle('inactive')
    }

}

function toggleMobileMenu() {
    mobilemenuContainer.classList.toggle('inactive')
    
    if (!shoppingCarProducts.classList.contains('inactive')) {
        shoppingCarProducts.classList.toggle('inactive')
    }
}

function toggleShoppingCartContainer() {
    shoppingCarProducts.classList.toggle('inactive')

    if (!mobilemenuContainer.classList.contains('inactive')) {
        mobilemenuContainer.classList.toggle('inactive')
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive')
    }
}

function renderProducts(arrayProducts) {

    for (const product of arrayProducts) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
        const productImgMainContainer = document.createElement('img');
        productImgMainContainer.classList.add('product-img-maincontainer');
        productImgMainContainer.setAttribute('src', product.img)
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
        const div = document.createElement('div');
        const priceProduct = document.createElement('p');
        const nameProduct = document.createElement('p');
        const figure = document.createElement('figure');
        const addCartIcon = document.createElement('img');
        addCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        cardsContainer.appendChild(productCard);
        productCard.append(productImgMainContainer, productInfo);
        productInfo.append(div,figure);
        div.append(priceProduct, nameProduct);
        priceProduct.innerText = '$'+product.price;
        nameProduct.innerText = product.name;
        figure.append(addCartIcon);
    
    }
}

renderProducts(productslist)





