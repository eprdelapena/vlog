"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router' 

const hydrationTest = () => {

    const router = useRouter(); 
    const handleClick = () => { 
        console.log("click");
        router.push("/")
    }
  return (
    <>
        <div>
            <Link href="/" prefetch={false}> Click Here </Link> //5. set a link tag
            <button onClick={handleClick}> Click to Redirect </button>
        </div>
    </>
  )
}

export default hydrationTest