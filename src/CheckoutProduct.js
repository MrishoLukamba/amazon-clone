import React from 'react'
import './CheckoutProduct.css'
import RemoveShoppingCartSharpIcon from '@material-ui/icons/RemoveShoppingCartSharp';
import { useStateValue } from './StateProvider';

function CheckoutProduct({image,title,price,rating}) {
    const [{cart},dispatch] = useStateValue();

    const removeFromCart =() => {
        dispatch({
            type:"REMOVE_TO_CART",
            title:title
        })
    }


    return (
        <div className="checkoutproduct">
            <img className="image" src={image} />
            <div className="image__info">
                <p className="image__title">{title}</p>
                     <small>$</small>
                     <strong>{price}</strong>
            </div>
            <div className="image__rating">
                {Array(rating).fill().map(() =>(
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromCart}><RemoveShoppingCartSharpIcon /></button>
            
        </div>
    )
}

export default CheckoutProduct
