import React from 'react'
import styles from './box.module.css'

const Box = ({item}) => {
  return (
    <>
        <div className={styles.container}>
            <h4 className={styles.headingFour}>{item.data}</h4>
            <p className={styles.paragraph}> {item.description}</p>
        </div>
    </>
  )
}

export default Box