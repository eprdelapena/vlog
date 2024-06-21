import React from 'react'
import style from './card.module.css'
import Image from 'next/image'

const Card = ({element}) => {

  return (
    <div className={style.container}>
      
        <div className={style.imgContainer}>
            <Image src={element.img} fill/> 
        </div>
        <h4>  {element.title}  </h4>
        <h5> {element.slug} </h5>
        <h6 className={style.readMore}> <a href={`blog/${element.userid}`}> Read More </a></h6>
    </div>
  )
}

export default Card