import React, { Fragment } from 'react';

import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React meals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="a table full of delicious food" />
            </div>
        </Fragment>
    );
};

export default Header;