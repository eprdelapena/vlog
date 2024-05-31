import React from 'react'
import Link from 'next/link'

const Links = () => {
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
  return (
    <>
        {links.map((element) => {
            return <Link key={element.title} href={element.path}>{element.title}</Link>
        })}
    </>
  )
}

export default Links