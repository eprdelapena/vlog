import {signOut} from "next-auth/react"

export const handleLogout = async () => { 
    await signOut(); 
  }