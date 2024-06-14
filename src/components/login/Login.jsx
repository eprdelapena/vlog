'use client'

import React from 'react'
import { login } from '@/api/query/login';
import styles from './login.module.css'
import { useFormState } from "react-dom";

const Loginpagetwo = async () => {
    const [state, formAction] = useFormState(login, undefined);

  return (
    <>
        <form action={formAction}>  
            <input className={styles.inputContainer} type="text" name="username" placeholder="Username..." /> 
            <input className={styles.inputContainer} type="password" name="password" placeholder="Password..." />
            <input className={styles.submitButton} type="submit"/>
        </form>
        {state?.error}
    </>
  )
}

export default Loginpagetwo

