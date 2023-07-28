import Link from 'next/link';
import Image from 'next/image';
import CustomeButton from './CustomeButton';


const Navbar = () => {
  return (
    <header className='w-full z-10'>
        <nav className='flex justify-between items-center mx-auto max-w-[1440px] sm:px-16 px-6 py-4'>
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
          <div className='flex justify-center items-center'>

            <Link href="/tour-and-ticket">
            <CustomeButton 
              title="Tour & Ticket" 
              btnType='button' 
              containerStyles='text-blue-800 rounded-full bg-white min-w{130px}' 
            />
             </Link>
            <Link href="/booking">
            <CustomeButton 
              title="Book Now" 
              btnType='button' 
              containerStyles='text-blue-800 rounded-full text-white bg-blue-800 min-w{130px}' 
            />
            </Link>
           
            <Link href="/about">
            <CustomeButton 
              title="About" 
              btnType='button' 
              containerStyles='text-blue-800 rounded-full bg-white min-w{130px}' 
            />
            </Link>
            <Link href="/contact">
            <CustomeButton 
              title="Contact" 
              btnType='button' 
              containerStyles='text-blue-800 rounded-full bg-white min-w{130px}' 
            />
            </Link>
            {/* <Link href="/sign-in">
            <CustomeButton 
              title="Sign in" 
              btnType='button' 
              containerStyles='text-blue-800 rounded-full bg-white min-w{130px}' 
            />
            </Link> */}
          </div>
        </nav>
    </header>
  )
}

export default Navbar