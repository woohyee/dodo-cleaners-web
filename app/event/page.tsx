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
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            Tap & Stamp
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Digital stamp service for Dodo Cleaners
          </p>
          <p className="text-lg text-orange-600 font-semibold mt-2">
            Coming October 1st, 2025
          </p>
        </div>

        {/* What is Tap & Stamp */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            What is Tap & Stamp?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tap & Stamp is our new digital loyalty program that replaces traditional paper stamp cards.
            Every time you visit Dodo Cleaners, simply tap your phone to collect digital stamps and earn rewards.
          </p>
        </section>

        {/* How it works */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Dodo Cleaners</h3>
              <p className="text-gray-600">
                Bring your clothes to our store for professional wet cleaning service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tap Your Phone</h3>
              <p className="text-gray-600">
                Use your smartphone to tap and collect a digital stamp
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Earn Rewards</h3>
              <p className="text-gray-600">
                Collect stamps and redeem them for exclusive rewards and discounts
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Benefits
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">No More Paper Cards</h3>
                <p className="text-gray-600">
                  Everything is digital. Never lose your stamp card again.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Track Your Progress</h3>
                <p className="text-gray-600">
                  See your stamp collection and rewards status anytime on your phone.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Exclusive Rewards</h3>
                <p className="text-gray-600">
                  Earn special discounts and VIP benefits as a loyal customer.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Digital stamps mean less paper waste, better for the environment.
                </p>
              </div>
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
