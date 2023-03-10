import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog'
import Choose from '../components/Choose'
import Company from '../components/Company'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MyCarousel from '../components/MyCarousel'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import Testimonials from '../components/Testimonials'
import Users from '../components/Users'

import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div >
      <Head>
        <title>GrowFy Marketing website Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Navbar/> 
<MyCarousel />
<br></br> <br></br>
  <Service/>
  <Choose/>
  <Blog/>
  <hr className='footer_line'></hr>
  <Footer/>

    </div>
  )
}
