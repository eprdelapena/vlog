import React from 'react';
import { addData } from '@/api/query/data';


const page = async () => {
  return (
    <>
        <form action={addData}> 
            <input type="text" name="usertitle" placeholder="Insert Title..." />
            <input type="text" name="userdescription" placeholder="Insert Description..." />
            <input type="text" name="userimg" placeholder="Insert Image Link..." />
            <input type="text" name="userid" placeholder="Insert username..." />
            <input type="text" name="userslug" placeholder="Insert Slug..." />
            <input type="submit"/>
        </form>   
    </>

  )
}

export default page