import React from 'react'
import { getSinglePosts, getUser } from '@/api/query/data';
import SinglePage from '@/components/singlePage/SinglePage';

const PageTwo = async ({params}) => {
  const {slug} = params;
  const singlePost = await getSinglePosts(slug);
  const singleUser = await getUser(slug);
  return (
    <>
      <SinglePage post={singlePost} user={singleUser}/>
    </>
    
  )
}

export default PageTwo



