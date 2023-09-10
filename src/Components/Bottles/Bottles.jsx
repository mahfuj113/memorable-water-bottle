import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoreCart, removeFromLS } from "../../Utilities/localStorage/localStorage";
import Cart from "../Cart/Cart";
const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch("bottles.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    // load cart form local storage
    useEffect(() => {
        if(bottles.length){
            const storeCart = getStoreCart()
            const saveCart = [];
            for(const id of storeCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
        }
    },[bottles])
    const handleAddCart = (bottle) => {
        const newCart = [...cart,bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }
    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromLS(id)
    }
    return (
        <div>
            <h2>Bottle Available:</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        handleAddCart={handleAddCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;