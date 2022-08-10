import styles from './Card.module.css'

const Card = (props) => {
    // const classes = `${styles.card} ${props.className}`;

    return (
        <div className={styles.card} style={{borderColor: 'red'}}>
            {props.children}
        </div>
    );
};

export default Card;
