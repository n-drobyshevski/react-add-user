import styles from './NewUserForm.module.css';

import Button from '../UI/Button';
// import {useState} from 'react';

const NewUserForm = () => {
    return (
        <form>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label>Username</label>
                    <input type='text'></input>
                </div>
                <div className={styles.control}>
                    <label>Age</label>
                    <input type='number'></input>
                </div>
                <Button type='submit'>Add user</Button>
            </div>
        </form >
    );
};

export default NewUserForm;