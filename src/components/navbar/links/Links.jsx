'use client';

import React from 'react'
import styles from './links.module.css'
import Navlink from './navlinks/Navlink.jsx'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { handleLogout } from '@/api/query/handleLogout';





const Links = ({session}) => {
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

    // const session = true;
    // const isAdmin = true;
  return (
    <>
    <div className={styles.container}>
            <div className={styles.links}>
                {links.map((element) => (
                    <Navlink item={element} key={element.title}/>
                ))}
                {session?.user ? (
                <>
                    {session.user?.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
                    <form action={handleLogout}>
                        <button className={styles.logout}>Logout</button>
                    </form>
                </>
                ) : (
                <Navlink item={{ title: "Login", path: "/login" }} />
                )}
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