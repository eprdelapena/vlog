import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const Homepage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}> 
          <h1 className={styles.headingOne}> Free Art Posting Website We appreciate art </h1>
          <h4> Express yourself and let others see </h4>
          <div className={styles.buttons}>
            <a href="/about"> <button className={`${styles.button} ${styles.learnMore}`}> Learn More </button> </a>
            <a href="/blog" > <button className={`${styles.button} ${styles.learnMore}`}> View art gallery </button> </a>
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