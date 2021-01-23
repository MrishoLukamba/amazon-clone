import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';


function Header() {
    const [{cart, user}, dispatch ] = useStateValue();

    const handleAuthentication = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
               <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" /> 
            </Link>
            <div  className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon" />

            </div> 
            <div onClick={handleAuthentication}className="header__nav">
                <Link to={!user && "/login"}>
                    <div className="header__option">
    <span className="header__optionLine1">Hi, {user? user.email:'Guest'}</span>
                        <span className="header__optionLine2">{user ?'Sign out':'Sign in'}</span>

                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLine1">returns</span>
                    <span className="header__optionLine2">& orders</span>

                </div>

                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                    
                </div>
                <Link to="/checkout">
                   <div className="header__optionBasket">
                   
                      <ShoppingCartSharpIcon />
                
                      <span className="header__optionLine2 header__basketCount">{cart?.length}</span>
                   </div>
                </Link>

            </div>  
        </div>
           

           
        
    );
};

export default Header
