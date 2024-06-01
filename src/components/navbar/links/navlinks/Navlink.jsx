'use client';

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import styles from './navlink.module.css'

const Navlink = ({item}) => {
    let pathName = usePathname();
  return (
    <>
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`  }>{item.title} </Link>
    </>
  )
}

export default Navlink