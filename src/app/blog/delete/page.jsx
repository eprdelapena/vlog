import React from 'react'
import { deleteData } from '@/api/query/data';

const page = () => {
  return (
    <>
        <form action={deleteData}> 
            <input type="text" name="userid" placeholder="insert username ID" />
            <input type="submit"/>
        </form>   
    </>

  )
}

export default page