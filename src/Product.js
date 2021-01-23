import React from 'react'
import './Product.css';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import { useStateValue } from './StateProvider';

function Product({title, image, rating, price}) {
     const [{cart}, dispatch] = useStateValue();
     console.log('this is ,cart')

     const addToCart = () => {
         // dispatch the item into the data layer
        
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                title: title,
                image: image,
                rating: rating,
                price: price,
            },       
        })
    
     };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                
            </div>    

            </div>
            <img src={image} />
            <button onClick={addToCart}><AddShoppingCartRoundedIcon className="cart" /></button>     
        </div>
    )
}

export default Product;
