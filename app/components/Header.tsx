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
        isScrolled ? 'shadow-uber-card' : ''
      }`}
    >
      {/* 배경: cleaners 이미지 + 다크 브라운 오버레이 + Ken Burns 애니메이션 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/cleaners.image1.png"
          alt=""
          fill
          className="object-cover animate-header-scroll"
          priority
          sizes="100vw"
        />
        {/* 다크 브라운 톤 오버레이 — Liquid Glass 효과를 살림 */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isScrolled ? 'bg-[#2a1810]/85' : 'bg-[#2a1810]/70'
          }`}
        />
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* 로고 — dodo 호텔보이 */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 md:space-x-3 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
                <Image
                  src="/dodowelcome.jpg"
                  alt="dodo cleaners — bellhop dodo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-uber-white tracking-tight">
                dodo cleaners
              </span>
            </Link>
          </div>

          {/* 데스크톱 메뉴 — iOS Liquid Glass 물방울 */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2.5 rounded-pill text-sm font-medium text-uber-white bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl backdrop-saturate-200 border border-white/20 ring-1 ring-inset ring-white/10 hover:from-white/25 hover:to-white/5 hover:-translate-y-0.5 transition-all duration-300 shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.2),0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[inset_0_3px_6px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.3),0_5px_10px_rgba(0,0,0,0.25),0_18px_38px_rgba(0,0,0,0.45)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 — iOS Liquid Glass 물방울 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-full text-uber-white bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl backdrop-saturate-200 border border-white/20 ring-1 ring-inset ring-white/10 hover:from-white/25 hover:to-white/5 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.2),0_12px_28px_rgba(0,0,0,0.35)]"
              aria-label="Main menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 — Liquid Glass */}
        <div
          className={`absolute right-2 w-40 -mt-1 md:hidden transition-all duration-300 ease-in-out bg-white/60 backdrop-blur-xl backdrop-saturate-150 border border-white/40 rounded-lg shadow-uber-card ${
            isMenuOpen
              ? 'max-h-56 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-2 space-y-0.5">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-uber-black hover:bg-white/40 transition-colors duration-200"
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
