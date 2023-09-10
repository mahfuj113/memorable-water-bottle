import PropTypes from "prop-types";
import "./Bottle.css"
const Bottle = ({bottle,handleAddCart}) => {
    const {name,img,price} = bottle
    return (
        <div className="bottle">
            <h2>Name {name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() => handleAddCart(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddCart: PropTypes.func.isRequired,
        
    }
export default Bottle;