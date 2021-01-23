import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img  className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/Minerva_Gateway_Hero_Desktop_070820_PremiumPlus_1x._CB410855810_.jpg" />
                <div>
                    <h3>{user?.email}</h3>
                   <h2 className="checkout__title">
                    Your Shopping Cart
                   </h2>
                   {cart.map(item =>(
                       <CheckoutProduct
                       image={item.image}
                       price={item.price}
                       title={item.title}
                       rating={item.rating}
                       />


                   ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
