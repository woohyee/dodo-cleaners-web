import Image from 'next/image'

export default function TapStampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-4 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto relative mb-3">
            <Image
              src="/TapandStamp.png"
              alt="Tap & Stamp Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Now we start the <span className="text-blue-600">Digital Stampbook</span> Service!
          </h1>
          <p className="text-base md:text-lg text-orange-600 font-semibold">
            Launching October 1st, 2025
          </p>
        </div>

        {/* What */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">What?</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Record the number of visits with a digital stamp and receive rewards.
          </p>
        </section>

        {/* Rewards */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-purple-200">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">How?</h2>

          {/* Video Section */}
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-black">
            <video
              controls
              className="w-full h-auto"
              playsInline
            >
              <source src="/how-it-works.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-purple-600 flex-shrink-0 shadow-md"></span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Tap your phone on the NFC stamp tag to save your visit instantly.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 shadow-md"></span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                On your first visit, register your name and mobile number once.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-purple-400 flex-shrink-0 shadow-md"></span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Rewards are issued automatically whenever you hit the goal.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-purple-300 flex-shrink-0 shadow-md"></span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Redeem rewards whenever it works for you—no surprises.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-purple-200 flex-shrink-0 shadow-md"></span>
              <p className="rounded-xl bg-purple-50 border border-purple-200 px-4 py-3 text-base md:text-lg text-gray-700 leading-relaxed">
                ※ Pay <span className="font-semibold text-purple-700">$10 or more</span> to start collecting stamps right away.
              </p>
            </li>
          </ul>
        </section>

        {/* Rewards */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-green-100">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">Rewards</h2>
          <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
            <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 shadow-sm">
              Every <span className="font-semibold text-green-700">5 stamps</span> unlocks a reward worth{' '}
              <span className="font-semibold text-purple-600">5%–10%</span> off your cleaning.
            </p>
            <p className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 shadow-sm">
              Collect <span className="font-semibold text-blue-600">30 stamps</span> to become a VIP member - and enjoy{' '}
              <span className="font-semibold text-amber-600">10% off</span> for three months.
            </p>
          </div>
        </section>

        {/* Why Tap & Stamp */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-amber-100">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">Is it safe?</h2>
          <ul className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-orange-500 flex-shrink-0"></span>
              No app download required.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-orange-400 flex-shrink-0"></span>
              Nothing to lose or damage like paper stamp books.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-amber-300 flex-shrink-0"></span>
              We only keep your name and phone number to confirm rewards.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-amber-400 flex-shrink-0"></span>
              No marketing blasts or spam messages—ever.
            </li>
          </ul>
        </section>

        {/* Coming Soon */}
        <section className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg p-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Launching October 1st, 2025
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Be ready to join our digital stamp program and start earning rewards with every visit!
          </p>
        </section>
      </div>
    </div>
  )
}
