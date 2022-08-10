import styles from './UserItem.module.css';

import Card from '../UI/Card';

const UserItem = (props) => {
    console.log(props)
    return (
        <Card>
            <div className={styles.container}>
                <p>{`${props.username} (${props.age} years old)`}</p>
            </div>
        </Card>

    );
};

export default UserItem;