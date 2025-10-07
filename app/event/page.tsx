import Image from 'next/image'
import Link from 'next/link'

export default function TapStampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto relative mb-6">
            <Image
              src="/TapandStamp.png"
              alt="Tap & Stamp Logo"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Now we start the <span className="text-blue-600">Digital Stampbook</span> Service!
          </h1>
          <p className="text-lg text-orange-600 font-semibold mt-2">
            Launching October 1st, 2025
          </p>
        </div>

        {/* How it works */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
            How It Works
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-bold text-orange-600">1</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pay <span className="font-bold text-orange-600">$10 or more</span> to earn a stamp
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-bold text-orange-600">2</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Just tap your phone — your stamp is added automatically
              </p>
            </div>
          </div>
        </section>

        {/* Rewards */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6">
            Rewards
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                A new reward for every <span className="font-bold text-red-600 text-2xl">5</span> stamps!
              </p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                Collect <span className="font-bold text-red-600 text-2xl">30</span> stamps to become a <span className="font-bold text-purple-600">VIP</span> member
              </p>
              <p className="text-xl text-purple-700 font-semibold text-center mt-3">
                and enjoy 10% off for 3 months
              </p>
            </div>
          </div>
        </section>

        {/* Why Tap & Stamp */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
            Why Tap & Stamp?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-lg text-gray-700">
                No app installation required
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-lg text-gray-700">
                Never lose your stamp card again
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-lg text-gray-700">
                Rewards are managed automatically
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Launching October 1st, 2025
          </h2>
          <p className="text-lg mb-6">
            Be ready to join our digital stamp program and start earning rewards with every visit!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Back to Home
          </Link>
        </section>
      </div>
    </div>
  )
}
