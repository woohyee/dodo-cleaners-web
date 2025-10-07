import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

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
    <div className="space-y-8 mt-2">
      <section className="text-center py-6 md:py-8 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-sm px-4 md:px-8">
        <div className="flex items-center justify-center gap-6">
          <Image
            src="/dodowelcome.jpg"
            alt="Welcome"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-blue-900">
            Welcome to dodo cleaners
          </h1>
        </div>
        <p className="text-lg md:text-xl text-blue-800 max-w-2xl mx-auto">
          Professional wet cleaning services
        </p>
      </section>

      {/* Digital Stamp Service Banner */}
      <section className="mx-4 md:mx-0 -mt-2 mb-4 md:mb-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-xl shadow-lg p-4 md:p-6 border-2 border-orange-300">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src="/TapandStamp.png"
                  alt="Tap & Stamp Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                  NEW! Digital Stamp Service
                </h2>
                <p className="text-sm text-orange-50">
                  Starting October 1st, 2025
                </p>
              </div>
            </div>
            <Link
              href="/event"
              className="px-4 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
        <div className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-blue-900">
            Expert care
          </h2>
          <p className="text-sm md:text-base text-blue-700">
            Our experienced staff treats each garment with utmost care and
            attention to detail.
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-green-900">
            Eco-friendly
          </h2>
          <p className="text-sm md:text-base text-green-700">
            We use environmentally friendly cleaning methods and products to
            protect your clothes and the planet.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-purple-900">
            Quick Service
          </h2>
          <p className="text-sm md:text-base text-purple-700">
            Fast turnaround times without compromising on quality. Same-day
            service available!
          </p>
        </div>
      </section>

      <section className="relative group px-4 md:px-8 lg:px-12 -mt-4 md:-mt-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Eco-friendly wet cleaning service
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-xl max-w-5xl mx-auto">
          <Image
            src="/cleaners.image1.png"
            alt="Eco-friendly wet cleaning service"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-700"></div>
        </div>
      </section>
    </div>
  );
}
