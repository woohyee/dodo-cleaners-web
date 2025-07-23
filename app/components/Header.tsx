'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 메뉴 자동 닫힘 효과 추가
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMenuOpen) {
      timeoutId = setTimeout(() => {
        setIsMenuOpen(false);
      }, 4000); // 4초 후 닫힘
    }

    // 컴포넌트 언마운트나 isMenuOpen 변경 시 타이머 정리
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/event', label: 'Event' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/95 backdrop-blur-sm shadow-lg' : 'bg-blue-900'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 md:space-x-4 group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 relative">
                <Image
                  src="/dodologo.jpg"
                  alt="Dodo Cleaners Logo"
                  width={56}
                  height={56}
                  className="rounded-full shadow-md group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-gray-200 transition-colors duration-200">
                dodo cleaners
              </span>
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium 
                         transition-all duration-200 hover:scale-105 transform relative
                         after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                         after:bg-white after:scale-x-0 hover:after:scale-x-100 
                         after:transition-transform after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
              aria-label="Main menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        <div
          className={`absolute right-2 w-36 -mt-1 md:hidden transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg ${
            isMenuOpen
              ? 'max-h-48 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-1 space-y-0.5">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
