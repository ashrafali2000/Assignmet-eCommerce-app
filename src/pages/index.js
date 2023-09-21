import Image from 'next/image'
import Navbar from '@/components/navBar'
import {UserContext} from "../context/userContext"
import { useState } from 'react'
import AuthHandler from '@/context/authHandler';



export default function Home() {
  const [userLogged, setUserLogged] = useState(true);

  return (
    <div>
  <UserContext.Provider value ={ {
      isloggedIn : userLogged
    }}>
     <AuthHandler></AuthHandler>
  </UserContext.Provider>
      <Navbar></Navbar>
      <h1>Home Page</h1>
    </div>
  )
}
