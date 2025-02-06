import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Deals',
  description:
    'View our competitive pricing for wet cleaning services at Dodo Cleaners. Special offers and loyalty program available for our valued customers.',
  openGraph: {
    title: 'Pricing & Deals | Dodo Cleaners',
    description:
      'View our competitive pricing for wet cleaning services at Dodo Cleaners. Special offers and loyalty program available for our valued customers.',
  },
};

export default function Pricing() {
  const services = [
    { name: 'Shirts', price: '$4.35' },
    { name: 'Pants', price: '$10.95' },
    { name: 'Suit (2-piece)', price: '$26.95' },
    { name: 'Blouse', price: '$9.95' },
    { name: 'Dress', price: '$19.50' },
    { name: 'Coat', price: '$24.95' },
    { name: 'Comforter', price: '$34.95' },
  ];

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="space-y-6 py-6">
        <h1 className="text-2xl font-bold text-center text-blue-900">
          Pricing & Deals
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-800">
                <th className="p-3 text-left text-white font-semibold">
                  Service
                </th>
                <th className="p-3 text-left text-white font-semibold">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150
                    ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="p-3">{service.name}</td>
                  <td className="p-3 text-blue-900 font-medium">
                    {service.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-600 italic">
              The prices above are basic prices. Additional costs may apply
              depending on the type of fabric, size, jewelry, and other factors.
            </p>
          </div>
        </div>

        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 p-3 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2 text-yellow-900">
            Special Offers
          </h2>
          <div className="bg-white bg-opacity-50 p-2 rounded-md">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-1 w-1 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-sm">
                  10% off for first-time customers
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2 text-blue-900">
            Loyalty Program
          </h2>
          <div className="bg-white bg-opacity-50 p-2 rounded-md">
            <p className="text-sm">
              Please inquire at the counter for more details about our loyalty
              program.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
