import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Contactpage = () => {
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" width={350} height={350}/>
        </div>
        <div className={styles.formsContainer}>
          <form action="">
            <input type="text" placeholder='Name and Surname'/>
            <input type="text" placeholder='Email Address'/>
            <input type="text" placeholder='Phone Number'/>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder='Please enter a message...'
            >
            </textarea>
            <button> Send </button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Contactpage