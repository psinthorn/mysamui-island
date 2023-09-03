import Link from 'next/link';
import Image from 'next/image';
import CustomeButton from './CustomeButton';
import { navLinks } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircleUser } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <header className='w-full z-10'>
        <nav className='flex justify-between items-center mx-auto border-b border-gray-100 sm:px-16 px-6 py-4'>
          <div>
            <Link href="/" className='flex justify-center items-center'>
              <Image 
                src="/mysamui/mysamui-logo-blue-notext.png"
                alt="My Samui Island Tour"
                width={118}
                height={18}
                className='object-contain'
              />
            </Link>
          </div>
          <div className='md:flex justify-center items-center hidden'>
          { navLinks.map((nav) => (
            <Link href={`${nav.links}`}>
            <CustomeButton 
              title={`${nav.title}`}
              btnType='button' 
              containerStyles=' rounded-full bg-white min-w{130px}' 
            />
             </Link>
          ))}
          <div>
            <Link
              href="/booking"
              className='rounded-full bg-blue-700 text-white p-3 pl-6 pr-6 hover:bg-green-400'
            >
              Book Now
            </Link>
          </div>
          </div>

          {/* Sign In/ Sign Out  */}
          {/* <div>
            <FontAwesomeIcon icon={faCircleUser} className="w-10 h-10 " />
            <Link 
              href="/profile"
              className=' '
            >
            </Link>
          </div> */}
        </nav>
    </header>
  )
}

export default Navbar