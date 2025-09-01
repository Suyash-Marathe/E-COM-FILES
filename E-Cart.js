let cart = [];

function addToCart(name, price){
    cart.push({name, price});
}

function toggleCart(){
    const popup = document.getElementById('cart-popup');
    const items = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    if(popup.style.display === "none" || popup.style.display === ""){
        popup.style.display = "block";
        items.innerHTML = "";
        let total = 0;
        cart.forEach((item,i) => {
            items.innerHTML += (i+1) + ". " + item.name + " - ₹" + item.price + "<br>";
            total += item.price;
        });
        totalSpan.innerText = total;
    } else {
        popup.style.display = "none";
    }
}

function buyNow(){
    if(cart.length===0){
        alert("Cart is empty!");
        return;
    }
    alert("Thank you! Total: ₹" + cart.reduce((sum,i)=>sum+i.price,0));
    cart = [];
    toggleCart();
}
