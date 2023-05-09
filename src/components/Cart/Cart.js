import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../Store/CartContext';
import CartItem from './CartItem';
import styles from './Cart.module.css';



const Cart = (props) => {
    const cartCtx = useContext(CartContext);    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    };

    const cartItem = (
        <ul className={styles['cart-items']}>{
            cartCtx.items.map(item => 
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />)
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