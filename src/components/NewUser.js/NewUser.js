// import styles from './NewUser.module.css';

import Card from '../UI/Card';
import NewUserForm from './NewUserForm';

// import {useState} from 'react';

const NewUser = (props) => {

    const newUserHandler = (userData) => {
        props.onNewUser(userData)
    }
    return (
        <Card className="new-user">
            <NewUserForm onNewUser={newUserHandler} />
        </Card>
    );
};

export default NewUser;