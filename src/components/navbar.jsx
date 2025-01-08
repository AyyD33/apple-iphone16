import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
    return (
        <header className='w-full py-8 sm:px-14 px-8 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="Apple" width={20} height={24}/>

                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav) => (
                        <div key={nav} className="px-5 text-lg cursor-pointer text-gray hover:text-white transition-all">
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt='search' width={20} height={20} />
                    <img src={bagImg} alt='search' width={20} height={20} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar