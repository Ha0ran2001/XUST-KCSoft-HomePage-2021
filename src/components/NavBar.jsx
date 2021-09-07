
import React, { useEffect, useRef } from 'react'
import xust_logo from '../assets/logo.png';
import '../styles/NavBar.css'

export default function NavBar() {

  const navRef = useRef();

  useEffect(() => {
    const nav = navRef.current;

    const navFun = () => {
      if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active')
      }
    }
    window.addEventListener('scroll', navFun, true);
    return () => {
      window.removeEventListener('scroll', navFun, true);
    }
  }, [])

  return (
    <div className='z-40 fixed top-0 w-full' ref={navRef} >
      <div className='grid grid-cols-12 py-2'>
        <div className='col-span-6 flex items-center'>
          <img src={xust_logo} className='h-[48px] w-[48px] ml-6' />
          <span className='ml-2 text-2xl text-white font-Allison'>KC-SOFT</span>
        </div>


        <div className='col-span-10 '>

        </div>
      </div>
    </div>
  )
}
