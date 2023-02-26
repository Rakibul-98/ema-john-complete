
const addToDb = value =>{
    let shoppingCart={};

    // get the shopping cart
    const storedCart=localStorage.getItem("shopping-cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
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

const getStoredCart = () =>{
    const storedCart=localStorage.getItem("shopping-cart");
    let shoppingCart={};
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const removeFromDb = id =>{
    const existingCart=localStorage.getItem("shopping-cart");
    if (existingCart) {
        const shoppingCart = JSON.parse(existingCart);
        if (id in shoppingCart) {
            delete shoppingCart(id);
            localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart));
        }
    }
}
export {addToDb,getStoredCart, removeFromDb};