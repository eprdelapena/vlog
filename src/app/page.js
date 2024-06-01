import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const Homepage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> Creative Thoughts Agency </h1>
          <p>  
            Finding Creative Methods for Your Project.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}> Learn More </button>
            <button className={styles.button}> Contact </button>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" fill className={styles.brandImg} />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src="/hero.gif" fill/>
        </div>
      </div>
    </>
  )
}

export default Homepage