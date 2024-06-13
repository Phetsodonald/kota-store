
const cartElement = document.querySelector(".cart");
const  close = document.querySelector(".close-cart");
const  open = document.querySelector(".cart-icon");


const closeCart = () => {
    cartElement.style.display = "none";
}


const openCart = () => {
    cartElement.style.display = "flex";
}


open.addEventListener("click",openCart);
close.addEventListener("click",closeCart);