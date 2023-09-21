import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home Page</h1>
    </div>
  )
}
