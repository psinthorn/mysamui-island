import Navbar from '@/components/Navbar'
import NavbarLogoCenter from "./../components/NavbarLogoCenter"
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'My Samui Island Tour',
  description: 'Quick & Easy Speed Boat Ticket.',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='relative'>
        {/* <NavbarLogoCenter /> */}
        <Navbar />

          <main className='overflow-hidden'>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}

