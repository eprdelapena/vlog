import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import { auth } from '@/lib/auth'
  

const Navbar = async () => {
  const currentSession = await auth();
  
  return (
    <>
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/"> Lama </Link>
            </div>
            <div>
                <Links session={currentSession}/>
            </div>
        </div>

    </>
    
  )
}

export default Navbar