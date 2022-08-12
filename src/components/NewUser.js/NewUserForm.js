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
        const userData = {
            username: userName,
            age: userAge,
            id: Math.random()
        };
        props.onNewUser(userData);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label>Username</label>
                    <input value={userName}
                        onChange={usernameChangeHandler}
                        type='text'></input>
                </div>
                <div className={styles.control}>
                    <label>Age</label>
                    <input
                        value={userAge}
                        onChange={ageChangeHandler}
                        type='number'
                        min={1}
                        max={100}></input>
                </div>
                <Button type='submit' title="Add user" />
            </div>
        </form >
    );
};

export default NewUserForm;