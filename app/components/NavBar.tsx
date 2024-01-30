import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <main className='bg-white fixed top-0 w-full ps-10 pe-10 pt-3 xl:ps-28 xl:pe-28 '>
      <nav className="flex items-center">
       
        <div className='flex-1'>
        <Link href={'/'} className="font-extrabold text-black text-2xl">Muse & Meander</Link>
        <p className='text-sm font-bold'>Exploring Life&apos;s Twists and Turns</p>
        </div>
       
        <div className='text-sm md:text-base'>
            <ul className="flex font-semibold space-x-3">
                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}>Blogs</Link>
            </ul>
        </div>
      </nav>
    
    </main>
  );
}

export default Navbar;