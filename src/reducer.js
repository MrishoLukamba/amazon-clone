export const initialState = {
    cart: [],
};
//selector
export const getCartTotal =(cart) =>cart?.reduce((amount, item)=> item.price + amount,0);

const reducer = (state, action)=> {
    console.log(action)
    switch (action.type){
        case 'ADD_TO_CART':
            return { ...state,
            cart: [...state.cart, action.item], 
            };
        case "REMOVE_TO_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.title === action.title
            );
            let newCart = [...state.cart];
            if (index >= 0){
                 newCart.splice(index, 1)
            }else {
                console.warn(
                `Cant remove product title: ${action.title} not in the cart`
                )
            }
            return {
                ...state,
                cart: newCart
            }
            
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }    
        default:
            return state;
    }
};

export default reducer;