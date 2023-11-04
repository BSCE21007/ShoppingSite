const product = [
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
    }
];
const categories = [...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{var{image,title,price}=item;
return(
    `<div class='box'>
    <div class='img-box'>
    <img class='images' src=${image}></img>
    </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2>${price}.00</h2>`+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`
)
}).join('')
var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
// function displaycart(a){
//     let j=0, total=0;
//     document.getElementById("count").innerHTML=cart.length;
//     if(cart.length==0){
//         document.getElementById('cartItem').innerHTML="Your cart is empty";
//         document.getElementById("total").innerHTML="$"+0+".00";
//     }
//     else{
//         document.getElementById("cartItem").innerHTML=cart.map((items) =>
//         {
//             var{image,title,price}=items;
//             total=total+price;
//             document.getElementById("total").innerHTML="$"+total+".00";
//             return(
//                 `<div class='cartItem'>
//                 <div class='row-img'>
//                 <img class='rowimg src=${image}>
//                 </div>
//                 <p style='font-size:12px;'>${title}</p>
//                 <h2 style='fotn-size:15px;'>$ ${price}.00</h2>`+
//                 "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
//             );
//         }).join('');
//     }
// }
function displaycart() {
    let total = 0;
    const cartItemContainer = document.getElementById("cartItem");

    if (cart.length === 0) {
        cartItemContainer.innerHTML = "Your cart is empty";
    } else {
        cartItemContainer.innerHTML = '';

        cart.forEach((item) => {
            const { image, title, price } = item;
            total += price;

            cartItemContainer.innerHTML += `
                <div class='cartItem'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'>
                    </div>
                    <div class='item-details'>
                        <p>${title}</p>
                        <h2>$ ${price}.00</h2>
                    </div>
                    <i class='fa-solid fa-trash' onclick='delElement(${cart.indexOf(item)})'></i>
                </div>
            `;
        });

        document.getElementById("total").innerHTML = `$ ${total}.00`;
    }

    document.getElementById("count").textContent = cart.length;
}
