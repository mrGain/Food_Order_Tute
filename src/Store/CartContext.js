import React from'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addIteam : (item) => {},
    removeItem : (id) => {} 
});


export default CartContext;