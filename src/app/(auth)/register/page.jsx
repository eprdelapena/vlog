import React from 'react'
import styles from './register.module.css'
import Registration from '@/components/registration/Registration'


const Registerpage = async () => { 
  return (
    <>
      <div className={styles.parentContainer}> 
        <div className={styles.container}>
          <h2 className={styles.headingTwo}> Register Page </h2>
          <Registration />
        </div>
      </div>
    </>
  )
}

export default Registerpage