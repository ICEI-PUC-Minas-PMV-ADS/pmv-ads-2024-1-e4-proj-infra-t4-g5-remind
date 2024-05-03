'use strict';
import { bagImg, logoImg, searchImg } from '../utils'
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className='w-full py-6 sm:px-10 px-2 bg-zinc flex'>
        <nav className='flex w-full screen-max-width'>
            <img 
                src={logoImg} 
                alt='Remind' 
                width={35} 
                height={35}/> 
                <p className='py-2 font-thin text-2xl text-neutral-100' 
                style={{
                    fontFamily: 'praise', 
                    fontStyle: 'italic',
                    paddingLeft: '8px',
                }} 
                >Remind</p>

            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <a 
                    key={nav.name}
                    href={nav.href}
                        className='px-6 py-1 text-md cursor-pointer text-neutral-200 hover:text-semantic-purple transition-all'
                        >
                            {nav.name}
                    </a>
                ))}
            </div>
            <div className='flex items-baseline gap-7  text-neutral-200 max-sm:justify-end max-sm:flex-1'>
                <img src={ searchImg } alt='search' width={18} height={18}/>
                <img src={ bagImg } alt='bag' width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
