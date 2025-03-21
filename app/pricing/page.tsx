import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Pricing',
  description:
    'View our competitive pricing for wet cleaning services at Dodo Cleaners. Special offers and loyalty program available for our valued customers.',
  openGraph: {
    title: 'Our Pricing | Dodo Cleaners',
    description:
      'View our competitive pricing for wet cleaning services at Dodo Cleaners. Special offers and loyalty program available for our valued customers.',
  },
};

export default function Pricing() {
  const services = [
    { name: 'Shirts', price: '$4.35', image: '/shirt.jpg' },
    { name: 'Pants', price: '$10.95', image: '/pants.jpg' },
    { name: 'Suit (2-piece)', price: '$26.95', image: '/suitjacket.jpg' },
    { name: 'Blouse', price: '$9.95', image: '/blouse.jpg' },
    { name: 'Dress', price: '$17.50', image: '/dress.jpg' },
    { name: 'Coat', price: '$22.95', image: '/coat.jpg' },
    { name: 'Comforter', price: '$33.95', image: '/comforterduvet.jpg' },
    { name: 'Pants Hemming', price: '$13.00', image: '/hemmingpants.jpg' },
  ];

  return (
    <div className="space-y-8 mt-4">
      <div className="flex items-center justify-center gap-6 mb-12">
        <Image
          src="/dodopricing.jpg"
          alt="Pricing"
          width={80}
          height={80}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Our Pricing
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 text-left text-lg font-bold">Service</th>
              <th className="p-2 text-left text-lg font-bold">Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 pl-8 pr-5">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span>{service.name}</span>
                  </div>
                </td>
                <td className="py-2 pl-8 pr-5 md:pl-2">{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-gray-600 italic">
          The displayed prices are base prices and may vary depending on fabric
          type, size, embellishments, and other factors. Additionally, prices
          are subject to change.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <section className="bg-orange-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Special Offers</h2>
          <p>10% off for new customers, seniors (65+), and veterans</p>
        </section>

        <section className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Loyalty Program</h2>
          <p>
            Ask our staff at the counter for information about our loyalty
            program and current promotions.
          </p>
        </section>
      </div>
    </div>
  );
}
