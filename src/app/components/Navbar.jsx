'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import '../stylesheet/navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); 

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/">
                    <span className="logo">LOGO</span>
                </Link>
                <div className="nav-links">
                    <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>HOME</Link>
                    <Link href="/about" className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
                    <Link href="/services" className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>SERVICES</Link>
                    <Link href="/contact" className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link href="/" className={`mobile-nav-item ${pathname === '/' ? 'active' : ''}`}>HOME</Link>
                    <Link href="/about" className={`mobile-nav-item ${pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
                    <Link href="/services" className={`mobile-nav-item ${pathname === '/services' ? 'active' : ''}`}>SERVICES</Link>
                    <Link href="/contact" className={`mobile-nav-item ${pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                </div>
            )}
        </nav>
    );
}
