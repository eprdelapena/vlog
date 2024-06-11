import React from 'react'
import style from './blog.module.css'
import Card from '@/components/card/Card'
import { getPosts } from '@/api/query/data'


const Blogpage = async () => {
  const users = await getPosts();
  
  return (
    <>
      <div className={style.container}>
        {users.map((item) => (
          <Card element={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Blogpage