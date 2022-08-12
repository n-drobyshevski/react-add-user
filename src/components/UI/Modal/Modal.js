import styles from './Modal.module.css';

import Card from '../Card';
import Button from '../Button';
import ModalBackdrop from './ModalBackdrop';

const Modal = (props) => {
    const closeModalHandler = () => {
        props.onCloseModal();
    };
    return (
        <ModalBackdrop onBackdropClick={closeModalHandler}>
            <Card>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={styles.content}>
                        <p>{props.content}</p>
                    </div>
                    <div className={styles.actionBar}>
                        <Button onClick={closeModalHandler}>OK</Button>
                    </div>
                </div>
            </Card>
        </ModalBackdrop>
    );
};

export default Modal;
