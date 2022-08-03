import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu,AiOutlineClose,AiOutlineMail } from "react-icons/ai"
import {FaLinkedinIn,FaGithub } from "react-icons/fa" 
import {BsPersonLinesFill } from "react-icons/bs"

export default function NavBar() {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src={'/assets/navLogo.png'} alt={'Logo'} width='125' height={'50'}/>
        <div>
            <ul className='hidden md:flex'>
                <Link href={'/'}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Tienda</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Registrarse</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Menu</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Carrito</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Ayuda</li>
                    </Link>
            </ul>
            <div className='md:hidden' onClick={handleNav}><AiOutlineMenu size={25}/></div>
        </div>
    </div>
    <div>
        <div className={nav?'fixed left-0 top-0 w-[100%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500':'fixed left-[-100%] top-0 w-[100%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Image src={'/assets/navLogo.png'} alt={'logo'} width='87' height={'35'}/>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4' >
                    <p className='w-[85%] md:w-[90%] py-4'>Tienda de Ropa La Espirituana</p></div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href={'/'}>
                    <li className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='py-4 text-sm'>Suscribirse</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='py-4 text-sm'>Tienda</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='py-4 text-sm'>Carrito</li>
                    </Link>
                    <Link href={'/'}>
                    <li className='py-4 text-sm'>Ayuda</li>
                    </Link>
                </ul>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Contáctanos</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsPersonLinesFill/>
                        </div>
                      
                        
                    </div>

                </div>
            </div>

        </div>
    </div>
    </div>
  )
}
