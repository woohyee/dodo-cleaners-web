import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const playfairH1Style = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 600,
  letterSpacing: '-0.5px',
} as const;

const playfairSubtitleStyle = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontStyle: 'italic',
  fontWeight: 400,
} as const;

export const metadata: Metadata = {
  description:
    'Welcome to Dodo Cleaners. Professional wet cleaning services in Burlington. Eco-friendly cleaning with expert care and quick service.',
  openGraph: {
    title: 'Dodo Cleaners | Professional Wet Cleaning Services',
    description:
      'Welcome to Dodo Cleaners. Professional wet cleaning services in Burlington. Eco-friendly cleaning with expert care and quick service.',
  },
};

export default function Home() {
  return (
    <div className="space-y-6 mt-2">
      {/* Hero */}
      <section className="text-center py-2 md:py-3 px-4 md:px-8">
        <h1
          className="text-2xl md:text-3xl lg:text-4xl text-uber-black mb-2 md:mb-3"
          style={playfairH1Style}
        >
          Welcome to dodo cleaners
        </h1>
        <p
          className="text-sm md:text-base text-body-gray max-w-2xl mx-auto"
          style={playfairSubtitleStyle}
        >
          Professional wet cleaning services
        </p>
      </section>

      {/* Digital Stamp Service Banner — 따뜻한 다크 그라데이션 + 웜 글로우 */}
      <section className="mx-4 md:mx-0">
        <div
          className="max-w-4xl mx-auto rounded-xl p-5 md:p-6 relative overflow-hidden before:content-[''] before:absolute before:top-[-100px] before:left-[8%] before:w-[280px] before:h-[280px] before:bg-[#8A6A40] before:blur-[70px] before:opacity-30 before:pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, #1A1614 0%, #2A2522 50%, #181513 100%)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex flex-col items-center w-14 md:w-16">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src="/TapandStamp.png"
                    alt="OhStamp logo"
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-[10px] md:text-xs font-bold text-uber-white mt-0.5 tracking-tight">
                  ohmystamp
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base md:text-lg font-bold text-uber-white tracking-tight">
                  NEW! Digital Stamp Service
                </h2>
                <p className="text-xs md:text-sm text-muted-gray">
                  Starting October 1st, 2025
                </p>
              </div>
            </div>
            <Link
              href="/event"
              className="self-stretch md:self-auto text-center px-5 py-2 bg-uber-white text-uber-black rounded-pill text-sm font-medium hover:bg-hover-gray transition-colors whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
        <div className="bg-uber-white p-6 rounded-lg shadow-uber-card">
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-uber-black tracking-tight">
            Expert care
          </h2>
          <p className="text-sm md:text-base text-body-gray leading-relaxed">
            Our experienced staff treats each garment with utmost care and
            attention to detail.
          </p>
        </div>
        <div className="bg-uber-white p-6 rounded-lg shadow-uber-card">
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-uber-black tracking-tight">
            Eco-friendly
          </h2>
          <p className="text-sm md:text-base text-body-gray leading-relaxed">
            We use environmentally friendly cleaning methods and products to
            protect your clothes and the planet.
          </p>
        </div>
        <div className="bg-uber-white p-6 rounded-lg shadow-uber-card md:col-span-2 lg:col-span-1">
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-uber-black tracking-tight">
            Quick Service
          </h2>
          <p className="text-sm md:text-base text-body-gray leading-relaxed">
            Fast turnaround times without compromising on quality. Same-day
            service available!
          </p>
        </div>
      </section>

      {/* Eco-friendly hero image */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="text-center mb-6">
          <h2 className={`text-2xl md:text-3xl font-bold text-uber-black tracking-tight ${inter.className}`}>
            Eco-friendly wet cleaning service
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-xl max-w-5xl mx-auto aspect-[21/9]">
          <Image
            src="/cleaners.image1.png"
            alt="Eco-friendly wet cleaning service"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </section>
    </div>
  );
}
