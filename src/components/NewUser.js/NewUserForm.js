import styles from './NewUserForm.module.css';

import Button from '../UI/Button';
import { useState } from 'react';
// import {useState} from 'react';

const NewUserForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('form submit')
        const userData = {
            username: userName,
            age: userAge,
            id: Math.random()
        };
        console.log(userData);
        props.onNewUser(userData);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label>Username</label>
                    <input value={userName} onChange={usernameChangeHandler} type='text'></input>
                </div>
                <div className={styles.control}>
                    <label>Age</label>
                    <input value={userAge} onChange={ageChangeHandler} type='number'></input>
                </div>
                <Button type='submit'>Add user</Button>
            </div>
        </form >
    );
};

export default NewUserForm;