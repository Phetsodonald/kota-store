let cart = [];

function generate(products) {
    let html = '';
    products.forEach((product)=>{
       html += `<div class="product">
           <div>
               <img src="${product.image}" alt="picture" class="product-image">
           </div>
           <div class="product-details">
               <div>
                   <h2>${product.name}</h2>
               </div>
               <div>
                   <h2>r${(product.price/100).toFixed(2)}</h2>
               </div>
               
               <div>
                   <input type="number" value="1" min="1">
               </div>
               
               <div>
                   <button class="cart-btn" data-product-name="${product.name}" data-product-price="${product.price/100}">add to cart</button>
               </div>
           </div>
         </div>
         ` 
    })
    
    if(products === kotas){
           document.querySelector(".kota-container").innerHTML += html;
       }else if(products === tacos){
           document.querySelector(".taco-container").innerHTML += html;  
       }else if(products === burgers){
           document.querySelector(".burger-container").innerHTML += html;
       }else if(products === hotdogs){
           document.querySelector(".hotdogs-container").innerHTML += html;
       }else if(products === chips){
           document.querySelector(".chips-container").innerHTML += html;
       }else if(products === drinks){
           document.querySelector(".drinks-container").innerHTML += html;
       }
      
      document.querySelectorAll(".cart-btn").forEach((button)=>{
          button.addEventListener("click",()=>{
             const productName = button.dataset.productName;
             
             let matchingItem;
             
             cart.forEach((item)=>{
                 if(productName === item.productName){
                     matchingItem = item;
                 }
             });
             
             
             if(matchingItem === true){
                 matchingItem.quantity += 1;
             }else{
                 cart.push({
                    productName:productName,
                    quantity:1
                });
             };
             
             let totalQuantity = 0;
             
             
             cart.forEach((item)=>{
                 totalQuantity += item.quantity;
             });
             document.querySelector(".count").innerHTML = totalQuantity;
             
             
             
          })
      })
      
   return html;
} 
