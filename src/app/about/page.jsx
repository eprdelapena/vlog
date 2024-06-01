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
          <h3 className={styles.headingThree}> About Agency </h3>
          <h1> 
            We Create digital ideas
            that are bigger, bolder, 
            braver, and better
          </h1>
          <p>
            We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas flexibility and Precision. We`re world`s. Our Special
            Team best consulting & fiannce solution provider. Wide range of web 
            and software development services.
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