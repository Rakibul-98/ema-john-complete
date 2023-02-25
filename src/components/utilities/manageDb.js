const existingCart=localStorage.getItem("shopping-cart");

const addToDb = value =>{
    let shoppingCart;
    if (existingCart) {
        shoppingCart = JSON.parse(existingCart);
    }
    else{
        shoppingCart={};
    }

    const quantity = shoppingCart[value];
    if (quantity) {
        const newQuantity = quantity+1;
        shoppingCart[value]=newQuantity;
    }
    else{
        shoppingCart[value]=1;
    }
    localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart));
}
const removeFromDb = id =>{
    const shoppingCart = JSON.parse(existingCart);
    if (existingCart) {
        if (id in shoppingCart) {
            delete shoppingCart(id);
            localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart));
        }
    }
}
export {addToDb, removeFromDb};