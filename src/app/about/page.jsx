import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
import Box from '@/components/box/Box.jsx'


const Aboutpage = () => {
  const data = [
      {
          data: "10 K+",
          description: "Year of Experience"
      },
      {
          data: "234 K+",
          description: "People Reacted",
      },
      {
          data: "5 K+",
          description: "Services and plugins"
      }
  ]
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.textContainer}`}> 
          <h3 className={styles.headingThree}> About this site </h3>
          <h1> 
            We let you express yourselves by allowing you to upload art, 
            and nesting a story within it behind an anonymous username
          </h1>
          <p>
            Create ideas that are bigger, bolder, braver and better. We
            believe in the stigma of expressing oneself. We hope to build a world where freedom of expression is respected
          </p>
          <div className={styles.dataContainer}>
            {data.map((element) => (
              <Box item={element} key={element.data}/>
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" fill/>
        </div>
      </div>
    </>
    
  )
}

export default Aboutpage