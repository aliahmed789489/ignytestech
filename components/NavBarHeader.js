"use client"
import './module.css'
import Logo from "../public/logo.svg"
import Image from 'next/image';
import Navbar from './Navbar';
import { useState } from 'react';

import Link from 'next/link';

const NavBarHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-container">
          <Link href="/">
            <Image src={Logo}/>
          </Link>
        </div>
        <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <ul className="menu">
            <li className='hover:border-b-yellow-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:border-b-yellow-500'>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/prices">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="" >
        {/* onClick={toggleMenu} */}
          <Navbar/>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBarHeader;



