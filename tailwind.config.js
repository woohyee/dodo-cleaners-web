/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Uber 디자인 시스템 컬러 토큰
        'uber-black': '#000000',
        'uber-white': '#ffffff',
        'body-gray': '#4b4b4b',
        'muted-gray': '#afafaf',
        'chip-gray': '#efefef',
        'hover-gray': '#e2e2e2',
        'hover-light': '#f3f3f3',
      },
      boxShadow: {
        // Uber whisper-soft 그림자
        'uber-card': 'rgba(0, 0, 0, 0.12) 0px 4px 16px 0px',
        'uber-elevated': 'rgba(0, 0, 0, 0.16) 0px 4px 16px 0px',
        'uber-floating': 'rgba(0, 0, 0, 0.16) 0px 2px 8px 0px',
        'uber-pressed': 'rgba(0, 0, 0, 0.08) 0px 0px 0px 999px inset',
      },
      borderRadius: {
        // Uber pill (실제로는 Tailwind의 rounded-full로도 가능하지만 명시적 토큰)
        'pill': '999px',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        shine: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        // 헤더 배경 — 이미지 전체를 천천히 보여주는 스크롤
        'header-scroll': {
          '0%': { 'object-position': 'center 0%' },
          '100%': { 'object-position': 'center 100%' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        shine: 'shine 3s ease-in-out infinite',
        wave: 'wave 2.5s ease-in-out infinite',
        'header-scroll': 'header-scroll 45s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
