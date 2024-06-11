import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const Homepage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}> 
          <h1 className={styles.headingOne}> Creative Thoughts Agency </h1>
          <h4> Finding Creative Methods for your Projects </h4>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.learnMore}`}> Learn More </button>
            <button className={styles.button}> Contact </button>
          </div>
          <div className={styles.brandImg}>
            <Image src="/brands.png" fill className={styles.brandImg} />
          </div>
          
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.fillContainer}>
            <Image src="/hero.gif" fill/>
          </div>
          
        </div>
      </div>
      
    </>
  )
}

export default Homepage