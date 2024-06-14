import React from 'react'
import { handleGithubLogin, login } from '@/api/query/data';
import styles from './login.module.css'

const Loginpage = async () => {

  return (
    <>
      <div>
        <div className={styles.parentContainer}> 
        <div className={styles.container}>

        <h2 className={styles.headingTwo}> Login Page </h2>

            <form action={login}>  
              <input className={styles.inputContainer} type="text" name="username" placeholder="Username..." /> 
              <input className={styles.inputContainer} type="password" name="password" placeholder="Password..." />
              <input className={styles.submitButton} type="submit"/>
            </form>

            <form action={handleGithubLogin}>
              <button className={styles.submitButtonTwo} onclick={handleGithubLogin}> Login with Github </button>
            </form>
            
            <a  href="/register"> Do not have an acount? Click here </a>

        </div>
      </div>
      </div>
    </>
  )
}

export default Loginpage

