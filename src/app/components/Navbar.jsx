'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import '../stylesheet/navbar.css';

export default function Navbar() {
    const [isOpened, setIsOpened] = useState(false);
    const pathname = usePathname();
    const toggleMenu = () => {
        setIsOpened((prev) => !prev);
    };
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
                <button
                    className={`menu ${isOpened ? 'opened' : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={isOpened}
                    aria-label="Main Menu"
                >            <svg width="60" height="60" viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpened && (
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
