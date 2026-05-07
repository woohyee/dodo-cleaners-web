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

  // 메뉴 열렸을 때 body 스크롤 잠금
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
    <>
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

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-full text-uber-white bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl backdrop-saturate-200 border border-white/20 ring-1 ring-inset ring-white/10 hover:from-white/25 hover:to-white/5 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.2),0_12px_28px_rgba(0,0,0,0.35)]"
                aria-label="Main menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 모바일 풀스크린 메뉴 — 가장 안정적 패턴 */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden bg-uber-black/95 backdrop-blur-xl flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* 닫기 버튼 — 우상단 고정 */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-uber-white hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* 메뉴 항목 — 중앙 정렬 */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-uber-white tracking-tight hover:text-muted-gray transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 하단 Exit 버튼 */}
          <div className="pb-12 pt-4 px-6">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-pill bg-white/10 text-uber-white text-sm font-medium hover:bg-white/20 transition-colors"
            >
              <X size={18} />
              Exit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
