import Image from 'next/image'
import Navbar from '@/components/navBar'
import { useState } from 'react'
import AuthHandler from '@/context/authHandler';
import UserContext from '@/context/userContext';



export default function Home() {
  const [userLogged, setUserLogged] = useState(true);

  return (
    <div>
<UserContext.Provider value={{
  isLoggedIn : userLogged,
}}>
     <AuthHandler />
</UserContext.Provider>

      <Navbar></Navbar>
      <h1>Home Page</h1>
    </div>
  )
}
