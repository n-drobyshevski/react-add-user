import styles from './ModalBackdrop.module.css';

const ModalBackdrop = (props) => {

    const clickHandler = () => {
        props.onBackdropClick();
    };

    return (
        <div className={styles.backdrop} onClick={clickHandler}>
            {props.children}
        </div>
    );
};

export default ModalBackdrop;