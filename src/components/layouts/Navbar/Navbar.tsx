'use client';

import { usePathname } from 'next/navigation';

import Logo from '@/components/partials/Logo/Logo';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '@/constant/Navlink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white border-b-2 z-20">
      <div className="container p-4">
        {/* Desktop view */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between">
            <Link href={'/'}>
              <Logo />
            </Link>

            <div className="flex items-center gap-20">
              <ul className="flex items-center gap-20">
                {navLinks.map((nav) => (
                  <li key={`nav:${nav.name}`} className={`hover-border-bottom font-medium text-black/70 hover:text-orange-400 ${pathname == nav.path ? 'border-b-2 border-orange-400' : ''}`}>
                    <Link href={nav.path} className={`${pathname == nav.path ? 'text-orange-400' : ''}`}>
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button id="book-call-1" className='bg-orange-400' size="lg" as={Link} target="_blank" href="#" radius="full">
                Chat With Us
              </Button>
            </div>
          </div>
        </div>
        {/*End of desktop view */}

        {/* mobiel view */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between z-50">
            <Link href={'/'}>
              <Logo className="w-28 z-50" />
            </Link>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
              {isMenuOpen ? <AiOutlineClose className="w-8 h-8 text-white" /> : <BiMenuAltRight className="w-8 h-8 text-primary" />}
            </div>
          </div>
          <div className={`fixed z-40 left-0 top-0 bg-secondary p-4 h-screen w-full transition duration-300  active:duration-500 flex items-center justify-center text-center ${isMenuOpen ? '-translate-x-0' : '-translate-x-full'}`}>
            <ul className="space-y-6 w-full">
              {navLinks.map((nav) => (
                <li key={`nav-${nav.name}`} className={`w-max mx-auto text-white ${pathname == nav.path ? 'text-white font-semibold border-b-2 border-white' : ''}`}>
                  <Link href={nav.path} className="text-lg w-full" onClick={() => setIsMenuOpen(false)}>
                    {nav.name}
                  </Link>
                </li>
              ))}{' '}
              <Button id="book-call-2" className='bg-orange-400' size="lg" as={Link} target="_blank" href="#">
                Chat With Us
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
