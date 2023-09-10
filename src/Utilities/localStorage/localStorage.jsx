const getStoreCart = () => {
    const storeCartStrign = localStorage.getItem("cart")
    if(storeCartStrign){
        return JSON.parse(storeCartStrign);
    }
    return [];
}
const saveCartToLS = (cart) => {
    const cartStrigified = JSON.stringify(cart)
    localStorage.setItem("cart",cartStrigified)
}
const addToLS = (id) => {
    const cart = getStoreCart()
    cart.push(id)
    saveCartToLS(cart)
}
const removeFromLS = id => {
    const cart = getStoreCart();
    // removing every id
    const remaining = cart.filter(idx =>idx !== id);
    saveCartToLS(remaining)
}
export {addToLS,getStoreCart,removeFromLS}