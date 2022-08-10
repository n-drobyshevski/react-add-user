// import styles from './NewUser.module.css';

import Card from '../UI/Card';
import NewUserForm from './NewUserForm';

// import {useState} from 'react';

const NewUser = () => {
    return (
        <Card className="new-user">
            <NewUserForm />
        </Card>
    );
};

export default NewUser;