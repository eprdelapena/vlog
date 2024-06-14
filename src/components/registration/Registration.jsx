'use client'

import React, {useEffect} from 'react';
import { useFormState } from "react-dom";
import styles from './registration.module.css';
import { useRouter } from "next/navigation";
import { addUser } from '@/api/query/addUser';


const Registration = () => {
    const [state, formAction] = useFormState(addUser, undefined); 
    const router = useRouter();

    useEffect(() => {
      state?.success && router.push("/login");
    }, [state?.success, router]);
    
  return (
    <form action={formAction}> 
        <input className={styles.inputContainer} type="text" name="username" placeholder="Insert Username..." /> 
        <input className={styles.inputContainer} type="text" name="email" placeholder="Insert email..." />
        <input className={styles.inputContainer} type="password" name="password" placeholder="Insert Password..." />
        <input className={styles.inputContainer} type="password" name="confirmPassword" placeholder="Confirm Password..." />
        {state?.error && state.error} 
        <input className={styles.submitButton} type="submit"/>
        <a href="/login"> Already have an account? Sign in </a>
    </form>
  )
}

export default Registration