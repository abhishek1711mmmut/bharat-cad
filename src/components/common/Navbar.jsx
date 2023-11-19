import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { NavbarLinks, subLinks } from '../../data/navbar-links'
import {BsChevronDown} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex h-16 justify-center items-center border-b-[1px] border-b-slate-300'>
        <div className='flex w-11/12 max-w-screen-xl items-center justify-between'>
            {/* logo */}
            <Link to='/'>
                <img src={logo} alt="" width={170} height={32} loading='lazy' />
            </Link>

            {/* nav link */}
            <nav className=''>
                <ul className='flex flex-wrap justify-end items-center gap-2 sm:gap-x-10 text-black'>
                {
                    NavbarLinks.map((link, index)=>(
                        <li key={index}>
                        {
                            link.title==='Services'?(
                                <div className={'group relative flex cursor-pointer items-center gap-1'}>
                                    <p>{link.title}</p>
                                    <BsChevronDown className='pt-1'/>
                                    <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex flex-col w-[200px] translate-x-[-50%] translate-y-[3em] rounded-lg p-4 bg-slate-100 text-black opacity-0 delay-150 duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[250px]'>
                                        <div className='absolute left-[50%] top-0 translate-x-[80%] translate-y-[-40%] -z-10 h-6 w-6 rotate-45 select-none rounded bg-slate-100'>{/*upper-half-triangle*/}</div>
                                        {
                                            subLinks.map((subLink, i)=>(
                                                <Link to={`/services/${subLink.name.split(" ").join("-").toLowerCase()}`} className='rounded-lg bg-transparent py-4 pl-4 hover:bg-slate-300' key={i}>
                                                    <p>{subLink.name}</p>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            ):(
                                <Link to={link?.path}>
                                    <p className=''>
                                        {link.title}
                                    </p>
                                </Link>
                            )
                        }
                        </li>
                    ))
                }
                </ul>
            </nav>

            {/* Get a quote */}
            <div className='hidden items-center gap-x-4 md:flex'>
                <Link to='#'>
                    <button className='border border-orange-700 bg-orange-600 px-[12px] py-[8px] text-white rounded-md my-auto hover:opacity-90'>
                        Get a Quote
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar