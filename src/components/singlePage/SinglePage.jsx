import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'


const SinglePage = async ({post, user}) => {
  
   
  return (
    <>
      <div className={styles.container}>
<div className={styles.imgContainer}>
  <Image src={post.img} fill/>
</div>
<div className={styles.txtContainer}>
  <h1> Title: {post.title} </h1>
  <div className={styles.profile}>
    <div className={styles.profilePicture}>
      <Image src={post.img} fill/>
    </div>
      <div>
        <h4> Username: </h4>
        <p> {post.userid}</p>
      </div>
      <div>
        <h4> Slug: </h4>
        <p> {post.slug} </p>
      </div>
  </div>
  <p>{post.desc}</p>
</div>
</div>
    </>
  )
}

export default SinglePage