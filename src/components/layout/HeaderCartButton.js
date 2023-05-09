import React,{ useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnClasses = `${styles.button} ${ btnHighlighted ? styles.bump : ''}`
    
    useEffect(() => {
        if ( items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    },[items]);

    return (
        <button className={ btnClasses } onClick={props.onClick}>
            <span className={ styles.icon }>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={ styles.badge }>{numberOfCartItems}</span>
        </button>
    );
};


export default HeaderCartButton;