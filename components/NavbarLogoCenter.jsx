import Link from 'next/link';
import Image from 'next/image';
import CustomeButton from './CustomeButton';
import { navLinks } from '@/constants';

const NavbarLogoCenter = () => {
  return (
    <header className='w-full z-10'>
        <nav className='flex justify-between items-center mx-auto border-b border-gray-100 sm:px-16 px-6 py-4'>
{/* Main navbar Menu          */}
          <div className='md:flex justify-center items-center hidden'>
          {/* { navLinks.map((nav) => (
            <Link href={`${nav.links}`}>
            <CustomeButton 
              title={`${nav.title}`}
              btnType='button' 
              containerStyles=' rounded-full bg-white min-w{130px}' 
            />
             </Link>
          ))} */}
          <div>
            {/* <Link
              href="/booking"
              className='rounded-full bg-blue-700 text-white p-3 pl-6 pr-6 hover:bg-green-400'
            >
              Book Now
            </Link> */}
          </div>
          </div>

{/* Logo on center of page */}
          <div>
            <Link href="/" className='flex justify-center items-center'>
              <Image 
                src="/mysamui/mysamui-logo.png"
                alt="My Samui Island Tour"
                width={118}
                height={18}
                className='object-contain'
              />
            </Link>
          </div>

{/* User Profile          */}
          <div>
            <Link 
              href="/profile"
              className='w-full h-full  rounded-full border border-gray-300 text-gray-300 p-3'
            >
            </Link>
          </div>
        </nav>
    </header>
  )
}

export default NavbarLogoCenter