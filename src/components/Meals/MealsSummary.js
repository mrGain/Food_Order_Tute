
import styles from './MealsSummary.modules.css';

const MealsSummary = (props) => {
    return (
        <section className={styles.summary}>
            <h2>Delecious food Deleverd to you</h2>
            <p>
                Choose your favorate meals from our broad selections of available meals and enjoy a delecious lunch or dinner at honme.
            </p>
            <p>
                All out foods were cooked with high quality ingradients, just-in-time and of course by experienced chefes.
            </p>
        </section>
    );
};

export default MealsSummary;