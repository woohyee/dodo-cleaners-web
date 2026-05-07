import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'View our pricing for wet cleaning services at dodo cleaners.',
  openGraph: {
    title: 'Pricing | dodo cleaners',
    description:
      'View our pricing for wet cleaning services at dodo cleaners.',
  },
};

export default function Pricing() {
  const services = [
    { name: 'Shirt', price: '$4.99' },
    { name: 'Pants', price: '$11.45' },
    { name: 'Suit', price: '$28.50' },
    { name: 'Blouse', price: '$9.95' },
    { name: 'Dress', price: '$18.50' },
    { name: 'Coat', price: '$24.50' },
    { name: 'Comforter', price: '$34.95' },
    { name: 'Pants Hemming', price: '$15.00' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-10 mt-4">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-uber-black">
        Pricing
      </h1>
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-uber-black">
            <th className="py-3 text-left text-sm font-semibold text-uber-black">
              Service
            </th>
            <th className="py-3 text-right text-sm font-semibold text-uber-black">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index} className="border-b border-chip-gray">
              <td className="py-3 text-sm text-uber-black">{service.name}</td>
              <td className="py-3 text-right text-sm text-uber-black tabular-nums">
                {service.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-body-gray leading-relaxed">
        Prices shown are base prices and may vary by fabric, size, and other
        factors. Subject to change.
      </p>
    </div>
  );
}
