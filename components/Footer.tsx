import Image from "next/image";
import Link from "next/link";
import { footerLinks } from ".";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/mysamui/mysamui-logo-black.png' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-gray-700'>
        My Samui Island Tour 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 <span>My Samui Island Tour. All rights reserved</span></p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
      <div className="footer__copyrights-link">
        <div className="text-gray-500">
          <span className="p-1 text-gray-700">Tech Stack:</span> Nodejs Express React Tailwindcss MongoDB <span className="p-2 text-gray-500 text-xs"><Link href="https://wwws.f2.co.th">by F2</Link></span>
        </div>
        <Link href="/" className="text-gray-500">
          version 0.0.1
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;