import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-uber-black text-uber-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-base font-bold text-uber-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-gray hover:text-uber-white transition-colors"
                >
                  Wet Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-gray hover:text-uber-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-uber-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-gray hover:text-uber-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/event"
                  className="text-sm text-muted-gray hover:text-uber-white transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-uber-white mb-4">
              Visit
            </h3>
            <p className="text-sm text-muted-gray">
              Burlington, ON
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-uber-white mb-4">
              Hours
            </h3>
            <p className="text-sm text-muted-gray">
              Mon–Sat
            </p>
          </div>
        </div>
        <div className="border-t border-body-gray pt-6 text-center">
          <p className="text-xs text-muted-gray">
            &copy; 2026 dodo cleaners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


