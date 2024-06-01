'use client';

import React from 'react'
import Link from 'next/link'
import styles from './links.module.css'
import Navlink from './navlinks/Navlink.jsx'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Links = () => {
    const[isOpen, setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ]

    const session = true;
    const isAdmin = true;
  return (
    <>
    <div className={styles.container}>
            <div className={styles.links}>
                {links.map((element) => (
                    <Navlink item={element} key={element.title}/>
                ))}
                {
                    session ? (<>{isAdmin && 
                        <Navlink item={{title: "Admin", path: "/admin"}}/>}
                        
                        <button className={styles.logout}>Logout</button>
                    </>) : (<><Navlink item={{title: "Login", path: "/login"}}/></>)
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen(!isOpen)}> <GiHamburgerMenu size={20} /> </button>
            {
                isOpen && <div className={styles.mobileLinks}>
                    {links.map((element) => (
                    <Navlink item={element} key={element.title}/>
                    ))}
                </div>
            }
    </div>
            
    </>
  )
}

export default Links