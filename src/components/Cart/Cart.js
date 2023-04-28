import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../Store/CartContext';
import styles from './Cart.module.css';



const Cart = (props) => {
    const cartCtx = useContext(CartContext);    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItem = (
        <ul className={styles['cart-items']}>{
            cartCtx.items.map(item => <li>{item.name}</li>)
        }</ul>
    );

    return (
        <Modal>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                { hasItems && <button className={styles.button}>Order</button> }
            </div>
            <div></div>
        </Modal>
    );
};

export default Cart;