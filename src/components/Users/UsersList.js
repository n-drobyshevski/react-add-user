import styles from './UsersList.module.css';

import UserItem from './UserItem';

const UsersList = (props) => {
    return (
        <ul className={styles.usersList}>
            {
                [props.items.map(user => (
                    <UserItem
                        key={user.id}
                        username={user.username}
                        age={user.age}
                    />
                ))]
            }
        </ul>
    );
};

export default UsersList;